import React, { useState , useCallback } from "react";
import './MainContainer.css'
import { BsFillArchiveFill, BsCashStack, BsWallet2 } from "react-icons/bs";


const MainContainer = () => {

 //initialize state to handle form inputs and selected image
    const [inputValue, setInputValue] = useState('')
    const [selectedImage, setSelectedImage]= useState('')
    const [inputName, setInputName] = useState('')

    //function to handle input name change
    const handleNameChange = (event) =>{
      setInputName(event.target.value)

    }

    
    //function to handle input value change
    const handleChange = (event) =>{
      setInputValue(event.target.value);
    }

     //function to handle the image file selection
    const handleImageChange = (event) =>{
      const file = event.target.files[0]
      if (file) {
        setSelectedImage(file)  //Update the state with the selected image
      } else {
        setSelectedImage(null)
      }

    }

    //function to handle submission
    const handleSubmit = useCallback(async (event)=> {
      event.preventDefault();
      console.log('Form Submitted');

    //creatin FormData object to send form data including image
      const formData = new FormData();
      formData.append('name', inputName)
      formData.append('price', inputValue);
      if(selectedImage){
        formData.append('image', selectedImage);
      }


      try {

        //sending POST request to add product to server
        const response = await fetch ('http://localhost:8000/products/', {
          method: 'POST',
          body: formData,
        });

        if(!response.ok){
          throw new Error('Network response was not ok');
        }
         
        //Parsing the response as JSON
        const result = await response.json();
        console.log('Product added', result);

        //resetting the form inputs
        setInputValue('');
        setSelectedImage(null);
        setInputName('');

        //clearing the file input element
        document.getElementById('imageUpload').value = ''
      } catch (error) {
        console.log('Error', error);
      }
    }, [inputName, inputValue, selectedImage])

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
                 className="product-form-input"
                type="file"
                accept="image/"
                id="imageUpload"
                onChange={handleImageChange}
                />
                <input
                className="product-form-input"
                type="text"
                placeholder="Product Name"
                value={inputName}
                onChange={handleNameChange}
                />
                <input
                className="product-form-input"
                type="text"
                placeholder="Product Price"
                value={inputValue}
                onChange={handleChange}
                />
                <div>
                  <button className="product-form-btn"type="submit">Submit</button>
                </div>
              </div>
            </form>
          </div>
      </div>
    </div>
  );
};

export default MainContainer;
