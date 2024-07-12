from sqlalchemy import Boolean, Column, Integer, String, Float, DateTime, ForeignKey # type: ignore
from database import engine
from database import Base
from sqlalchemy.sql import func # type: ignore
from sqlalchemy.orm import relationship

# Defining model for the tables in the db defining the structures

class User(Base):
    __tablename__ = 'users'

    id = Column(Integer, primary_key=True, index=True)
    email = Column(String(50), unique=True, nullable=True)
    username = Column(String(50), unique=True, index=True)
    hashed_password = Column(String(80))
    # a user can have multiple orders
    orders = relationship("Order", back_populates="user")

class Product(Base):
    __tablename__ = 'products'

    id = Column(Integer, primary_key=True, index=True)
    name = Column(String(50), nullable=False)
    price = Column(Float, nullable=False)
    image_path = Column(String(255))
    #a product can be part of multiple order items so order_items attribute is a list of orderitem object   
    order_items = relationship("OrderItem", back_populates="product")

class Order(Base):
    __tablename__ = "orders"

    id = Column(Integer, primary_key=True, index=True)
    user_id = Column(Integer, ForeignKey("users.id"))
    total_amount = Column(Float)
    status = Column(String, default="pending")
    created_at = Column(DateTime(timezone=True), server_default=func.now())
     
    #An order belongs to one user
    #An order can have multiple order items
    #An order has one payment
    user = relationship("User", back_populates="orders")
    items = relationship("OrderItem", back_populates="order")
    payment = relationship("Payment", back_populates="order", uselist=False)

class OrderItem(Base):
    __tablename__ = "order_items"

    id = Column(Integer, primary_key=True, index=True)
    order_id = Column(Integer, ForeignKey("orders.id"))
    product_id = Column(Integer, ForeignKey("products.id"))
    quantity = Column(Integer)
    price = Column(Float)
    
    #an order item belongs to one order
    #an order item belongs to one product
    order = relationship("Order", back_populates="items")
    product = relationship("Product", back_populates="order_items")

class Payment(Base):
    __tablename__ = "payments"

    id = Column(Integer, primary_key=True, index=True)
    order_id = Column(Integer, ForeignKey("orders.id"), unique=True)
    amount = Column(Float)
    phone_number = Column(String)
    transaction_code = Column(String, nullable=True)
    transaction_description = Column(String, nullable=True)
    merchant_request_id = Column(String, nullable=True)
    checkout_request_id = Column(String, nullable=True)
    status = Column(String, default="pending")
    created_at = Column(DateTime(timezone=True), server_default=func.now())
    
    #a payment belongs to one order
    order = relationship("Order", back_populates="payment")

# Create tables in the database
Base.metadata.create_all(bind=engine)
