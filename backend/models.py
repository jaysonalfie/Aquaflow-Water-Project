from sqlalchemy import Boolean, Column, Integer, String
from database import engine
from database import Base

#defining model for the tables in the db

class User(Base):
    __tablename__ = 'users'

    id= Column(Integer, primary_key=True, index=True)
    email = Column(String(50), unique=True ,nullable=True)
    username = Column(String(50), unique=True,index=True)
    hashed_password = Column(String(80))

User.metadata.create_all(bind=engine)