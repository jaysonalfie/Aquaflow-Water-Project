from fastapi import FastAPI, Depends, HTTPException,status, Form , File , UploadFile
from sqlalchemy.orm import Session
from fastapi.security import OAuth2PasswordBearer, OAuth2PasswordRequestForm
from jose import JWTError, jwt
from datetime import datetime, timedelta, timezone
from passlib.context import CryptContext
from models import Product, User
from database import SessionLocal, engine
from pydantic import BaseModel
from fastapi.middleware.cors import CORSMiddleware
import shutil

app = FastAPI()

#The JWT secret and algorithm
SECRET_KEY = "691e3a14e6a0bb3228b233b5bb2b5743efff3faa82cd64b8eb17f345aabe8c3a"
ALGORITHM = "HS256"
ACCESS_TOKEN_EXPIRE_MINUTES= 30

#setting up OAuth2 for password-based authentication
oauth2_scheme = OAuth2PasswordBearer(tokenUrl="token")

#list of origins or websites that can talk to your backend
origins = [

    "http://localhost:3000",

]

#Adding Cross-Origin Resource Sharing to the application (CORS)
app.add_middleware(
    CORSMiddleware,
    allow_origins = origins,#allow only these origins
    allow_credentials= True,#allow cookies to be sent
    allow_methods=["*"],#allow all the HTTP methods
    allow_headers=["*"], #allow all headers
)

#creating depedancy for the db to get the database session
def get_db():
    db= SessionLocal()
    try:
        yield db
    finally:
        db.close()

#creating instance of CryptoContext that handles password hashing
pwd_context = CryptContext(schemes=["bcrypt"], deprecated="auto")

#creating pydantic models
#used for data validation
class UserCreate(BaseModel):
    email:str
    username:str
    password:str

#data validation for products
class ProductCreate(BaseModel):
    name:str
    price:float
    image_path: str


#function to create_products
def create_product(db:Session, product:ProductCreate):
    #converting  the ProductCreate instance to a dict and unpakin it as a keyword argument
    db_product = Product(**product.dict())
    #adding new product instance to the db
    db.add(db_product)
    #commiting the transaction to save the new product
    db.commit()
    db.refresh(db_product)
    #returning newly created product instance
    return db_product

#retrieval of products from database
#creating query for the product model and putting restrictions on the amount of records to skip and also to show
def get_products(db: Session, skip: int =0, limit:int = 100):
    return db.query(Product).offset(skip).limit(limit).all()

#function to get user by username
def get_user_by_username(db:Session, username:str):
    return db.query(User).filter(User.username ==username).first()

#function to create new user in the database
def create_user(db:Session, user: UserCreate):
    #hashes the password
    hashed_password = pwd_context.hash(user.password)
    #creates the new user
    db_user= User(email= user.email, username=user.username, hashed_password = hashed_password)
    #adds user to the db and commits changes
    db.add(db_user)
    db.commit()
    return "User created"


#endpoint to create products in the db
@app.post("/products", response_model=ProductCreate)
def create_product_endpoint(
    name: str = Form(...),
    price: float = Form(...),
    image: UploadFile = File(...),
    db: Session = Depends(get_db)
):
    
    #saving the uploaded file
    file_location = f"uploads/{image.filename}"
    with open(file_location, "wb+") as file_object:
        shutil.copyfileobj(image.file, file_object)

    product = ProductCreate(name=name, price= price, image_path= file_location)
    return create_product(db=db, product=product)

#endpoint to get products from db
@app.get("/products")
def read_products(skip:int = 0, limit:int = 100, db: Session = Depends(get_db)):
    products = get_products(db, skip=skip, limit=limit)
    return products

#endpoint to register a new user
@app.post("/register")
def register_user(user : UserCreate, db: Session = Depends(get_db)):
    db_user = get_user_by_username(db, username=user.username)
    if db_user:
        raise HTTPException(status_code=400, detail="Username already registered")
    return create_user(db =db, user=user)

#authenticationg the user
def authenticate_user(username:str, password:str, db:Session):
    #queries db to retrieve user
    user = db.query(User).filter(User.username == username).first()
    #if password user is not correct
    if not user:
        return False
    #if password is incorrect
    if not pwd_context.verify(password, user.hashed_password):
        return False
    return user

#creating the access token
def create_access_token(data:dict, expires_delta:timedelta | None = None):
    #dictionary containing data to be encoded
    to_encode = data.copy()
    #token expiration time
    #calculates the expiration time either when provided or sets it to 15 min from the current time
    if expires_delta:
        expire = datetime.now(timezone.utc) + expires_delta
    else:
        expire = datetime.now(timezone.utc) + timedelta(minutes=15)
    to_encode.update({"exp":expire})
    encoded_jwt = jwt.encode(to_encode, SECRET_KEY, algorithm=ALGORITHM)
    return encoded_jwt

#endpoint to the token
#will be used to handle login requests and issue tokens
@app.post("/token")
def login_for_access_token(form_data: OAuth2PasswordRequestForm= Depends(), db:Session = Depends(get_db)):
    #authenticating user using username and password
    user = authenticate_user(form_data.username, form_data.password,db)
    if not user:
        raise HTTPException (
             status_code=status.HTTP_401_UNAUTHORIZED,
            detail="Incorrect username or password",
            headers={"WWW-Authenticate": "Bearer"}
        )
    #sets expiration time for the access token
    access_token_expires = timedelta(minutes= ACCESS_TOKEN_EXPIRE_MINUTES)
    #creates a jwt token for the authenticated user
    access_token = create_access_token(
        data={"sub":user.username}, expires_delta=access_token_expires
    )
    return {"access_token":access_token, "token_type": "bearer"}

#function to verify the token
def verify_token(token:str = Depends(oauth2_scheme)):
    try:
        #Decoding the JWT token
        payload = jwt.decode(token, SECRET_KEY, algorithms=[ALGORITHM])
        #extracting username from the token's payload
        username:str = payload.get("sub")
        #check if username exists in the token's payload
        if username is None:
            raise HTTPException(status_code=403, detail="Token is invalid or expired")
        return payload
    except JWTError:
        raise HTTPException(status_code=403,detail = "Token is invalid of expired")
    

#endpoint to verify the token
@app.get("/verify-token/{token}")
async def verify_user_token(token:str):
    verify_token(token=token)
    return {"message": "Token is valid"}





