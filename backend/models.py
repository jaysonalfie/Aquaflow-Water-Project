from sqlalchemy import Boolean, Column, Integer, String, Float
from database import engine
from database import Base

#defining model for the tables in the db

class User(Base):
    __tablename__ = 'users'

    id= Column(Integer, primary_key=True, index=True)
    email = Column(String(50), unique=True ,nullable=True)
    username = Column(String(50), unique=True,index=True)
    hashed_password = Column(String(80))


#products table
class Product(Base):
    __tablename__ = 'products'

    id= Column(Integer, primary_key=True, index=True)
    name= Column(String(50), nullable=False)
    price =Column(Float, nullable=False)
    image_path = Column(String(255))


User.metadata.create_all(bind=engine)