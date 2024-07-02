import React, { useState , useEffect} from 'react'
import './about/style2.css'
import Card from './shop/Card'
import Person1 from "../images/person 7.GIF";
// import waterb3 from "../images/waterb3.jpg";
// import Person2 from "../images/perso n2.GIF"
// import Person3 from "../images/perso n3.GIF"
// import Person4 from "../images/shop2.GIF"
// import Person5 from "../images/perso n4.GIF"
// import Product5 from "../images/product-5-copyright-500x500.jpg"
// import Product4 from "../images/shop-4.jpg"
// import Product3 from "../images/shop3.GIF"
// import Product2 from "../images/bottle4.GIF";
import Sidebar from './shop/Sidebar';
import Menu from './shop/Menu';
import FilterCard from './shop/FilterCard';
import TagFilter from './shop/TagFilter';

const shopImages = [Person1]


const Shop = (props) => {
     
  //state hooks for products, loading status abd error
   const [products, setProducts] = useState([])
   const [isLoading, setIsLoading]=useState(true)
   const [error, setError] = useState(null)

  //Hook to fetch products when the component mounts
   useEffect(()=>{
      fetchProducts();
   },[])

   // a function that fetches products from the API
   const fetchProducts = async () => {
      setIsLoading(true);
      try{
        //fetch products from the API
         const response = await fetch('http://localhost:8000/products/');
         if (!response.ok){
            throw new Error(`HTTP Error! status: ${response.status}`)
         }
         //parse the JSON response
         const data = await response.json();
         console.log('Fetched products:' , data);
         //setting products state with the fetched data
         setProducts(data);
         setError(null)
      } catch (error){
         console.error('Error fetching products:', error);
         //setting error state with the error message
         setError(`Failed to load products. ${error.message}`);
      } finally {
         setIsLoading(false);
      }
   }

    //function to chunk the products array into groups of 3
    const chunkArray = (arr, size) => {
      return Array.from({length: Math.ceil(arr.length / size)}, (v, i) =>
      arr.slice(i * size, i *size + size )
     )
    }
    //chunking product arrays into columns
     const productColumns = chunkArray(products, 3);
   //all the components that are in the shopsPage
   return (
      <div className='shop_wrapper container'>
        <div>
          Shops
        </div>
        <div className='menu_products'>
          <div className='shopfilters'>
            <Sidebar/>
            <FilterCard/>
            <TagFilter/>
          </div>
          <div className='right-bar'>
            <div className='shopMenu'>
              <Menu/>
            </div>
            {/*Conditionally renedering content based on loading and error states */}
            {isLoading ? (
              <div>Loading products...</div>
            ) : error ? (
              <div>{error}</div>
            ) : (
              <div className='Cards'>
              {/*Mapping over product columns */}
                {productColumns.map((column, columnIndex) => (
                  <div key={columnIndex} className='cardsColumn'>
                    {column.map((product, index) => (
                      <Card
                        key={product.id}
                        shopsImage={shopImages[index % shopImages.length]}
                        productImage={product.image_url ? `http://localhost:8000${product.image_url}`: "/path/to/default/product/image.jpg" }
                        productInfo={product.name || "unknown Product"}
                        price={product.price || 0}
                        shopName={product.shop_name || "RubySafe"}
                      />
                    ))}
                  </div>
                ))}
              </div>
            )}
            <div className='squares'>
              <div>
                <canvas className='square1'></canvas>
              </div>
              <div>
                <canvas className='square1'></canvas>
              </div>
              <div>
                <canvas className='square1'></canvas>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
}

export default Shop