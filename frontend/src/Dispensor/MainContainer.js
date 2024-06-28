import React, { useState } from "react";
import './MainContainer.css'
import { BsFillArchiveFill, BsCashStack, BsWallet2 } from "react-icons/bs";


const MainContainer = () => {

 //initialize state to handle form inputs
    const [inputValue, setInputValue] = useState('')
    const [selectedImage, setSelectedImage]= useState('')
    const [inputName, setInputName] = useState('')

    const handleNameChange = (event) =>{
      setInputName(event.target.value)

    }

    const handleChange = (event) =>{
      setInputValue(event.target.value);
    }

    const handleImageChange = (event) =>{
      const file = event.target.files[0]
      if (file) {
        setSelectedImage(file)  //Update the state with the selected image
      } else {
        setSelectedImage(null)
      }

    }
    //function to handle submission
    const handleSubmit =(event) =>{
      event.preventDefault();
      console.log('Form Submitted')

      //Resetting the form inputs
      setInputValue('');
      setSelectedImage(null)
      setInputName('')

      //clearing the file input element by accessing the DOM element directly
      document.getElementById('imageUpload').value='';
    }

  return (
    <div className="mainContainer">
      <div className="mainContainerTop">
        <div className="main-card">
          <div className="card-inner">
            <h3>ORDERS</h3>
            <BsFillArchiveFill className="card_icon" />
          </div>
          <h1>20</h1>
        </div>
        <div className="main-card">
          <div className="card-inner">
            <h3>REVENUE</h3>
            <BsCashStack className="card_icon" />
          </div>
          <h1>20</h1>
        </div>
        <div className="main-card">
          <div className="card-inner">
            <h3>TOTAL</h3>
            <BsWallet2 className="card_icon" />
          </div>
          <h1>20</h1>
        </div>
      </div>
      <div className="mainContainerBottom">
          <div>
            <form className="product-form" onSubmit={handleSubmit}>  
              <div>
              <label>Input product details</label>
                <input 
                type="file"
                accept="image/"
                id="imageUpload"
                onChange={handleImageChange}
                />
                <input
                type="text"
                placeholder="Product Name"
                value={inputName}
                onChange={handleNameChange}
                />
                <input
                type="text"
                placeholder="Product Price"
                value={inputValue}
                onChange={handleChange}
                />
                <div>
                  <button type="submit">Submit</button>
                </div>
              </div>
            </form>
          </div>
      </div>
    </div>
  );
};

export default MainContainer;
