from pydantic import BaseModel, Field
from typing import List, Optional
from datetime import datetime

class OrderItemBase(BaseModel):
    product_id: int
    quantity: int
    price: float

class OrderItemCreate(OrderItemBase):
    pass

class OrderItem(OrderItemBase):
    id: int
    order_id: int

    class Config:
        orm_mode = True

class OrderBase(BaseModel):
    user_id: int
    total_amount: float
    status: str = Field(default="pending")

class OrderCreate(OrderBase):
    items: List[OrderItemCreate]

class Order(OrderBase):
    id: int
    created_at: datetime
    items: List[OrderItem] = []

    class Config:
        orm_mode = True

class PaymentBase(BaseModel):
    order_id: int
    amount: float
    phone_number: str
    status: str = Field(default="pending")

class PaymentCreate(BaseModel):
    user_id: int
    amount: float 
    phone:str 

    class Config:
        extra ="allow"

class Payment(PaymentBase):
    id: int
    transaction_code: Optional[str] = None
    transaction_description: Optional[str] = None
    merchant_request_id: Optional[str] = None
    checkout_request_id: Optional[str] = None
    created_at: datetime

    class Config:
        orm_mode = True

class CheckoutRequest(BaseModel):
    user_id: int
    cart_items: List[OrderItemCreate]
    phone_number: str

class CheckoutResponse(BaseModel):
    success: bool
    message: str
    order_id: int