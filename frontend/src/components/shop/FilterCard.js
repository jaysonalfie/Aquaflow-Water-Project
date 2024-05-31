import React from 'react'
import '../about/style2.css'

const FilterCard = () => {
  return (
    <div className='filtercardwrapper'>
        <div >
        <h2 className='header' style={{textDecoration:'underline'}}>Price filters</h2>
      </div>
      <div>
        <p>ksh 20</p>
        <canvas className='rectangle'></canvas>
      </div>
      <div>
        <form>
          <label>
            Max 
            <input type="text" />
          </label>
          
        </form>
        <form>
        <label>
            Min 
            <input type="text" />
          </label>
        </form>
      </div>
    </div>
  )
}

export default FilterCard;