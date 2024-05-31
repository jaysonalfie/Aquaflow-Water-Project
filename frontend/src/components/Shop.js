import React from 'react'
import './about/style2.css'
import Card from './shop/Card'
import Person1 from "../images/person 7.GIF";
import waterb3 from "../images/waterb3.jpg";
import Person2 from "../images/perso n2.GIF"
import Person3 from "../images/perso n3.GIF"
import Person4 from "../images/shop2.GIF"
import Person5 from "../images/perso n4.GIF"
import Product5 from "../images/product-5-copyright-500x500.jpg"
import Product4 from "../images/shop-4.jpg"
import Product3 from "../images/shop3.GIF"
import Product2 from "../images/bottle4.GIF";
import Sidebar from './shop/Sidebar';
import Menu from './shop/Menu';
import FilterCard from './shop/FilterCard';
import TagFilter from './shop/TagFilter';


const Shop = (props) => {
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
        <div className='Cards'>
          <div className='cardsColumn'>
             <Card
              shopsImage={Person1}
              productImage={waterb3}
              productInfo="20 litre bottle"
             />
             <Card
              shopsImage={Person2}
              productImage={waterb3}
              productInfo="20 litre bottle"
             />
             <Card
              shopsImage={Person3}
              productImage={Product5}
              productInfo="20 litre bottle"
             />

          </div>
          <div className='cardsColumn'>
          <Card
              shopsImage={Person4}
              productImage={Product2}
              productInfo="10 litre bottle"
             />
             <Card
              shopsImage={Person3}
              productImage={waterb3}
              productInfo="20 litre bottle"
             />
             <Card
              shopsImage={Person1}
              productImage={Product4}
              productInfo="20 litre bottle"
             />
          </div>
          <div className='cardsColumn'>
          <Card
              shopsImage={Person1}
              productImage={Product3}
              productInfo="20 litre bottle"
             />
             <Card
              shopsImage={Person1}
              productImage={Product2}
              productInfo="10 litre bottle"
             />
             <Card
              shopsImage={Person5}
              productImage={waterb3}
              productInfo="20 litre bottle"
             />
          </div>
          <div className='cardsColumn'>
          <Card
              shopsImage={Person1}
              productImage={Product3}
              productInfo="20 litre bottle"
             />
             <Card
              shopsImage={Person1}
              productImage={waterb3}
              productInfo="20 litre bottle"
             />
             <Card
              shopsImage={Person4}
              productImage={Product3}
              productInfo="20 litre bottle"
             />
          </div>
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
       
     
    
    </div>
  )
}

export default Shop