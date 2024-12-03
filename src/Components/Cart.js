import React from 'react'

function Cart(im,cap,price,mrp,off) {
  return (
    <>
      <div className='explore_cont'>
        <div className='exp1'>
            <div className='img_container'><figure>
            <img src={im} alt='bedsheet' loading='lazy'></img>
            <figcaption>{cap}<br></br><strong>₹{price} </strong><br></br>M.R.P:<span>₹{mrp} </span>({off}% off)</figcaption>
            </figure>
            <label>Quantity: </label>
            <select id='quantity'>
            <option>1</option>
            <option value="2">2</option>
            <option value="tamil">3</option>
            <option value="telugu">4</option>
            <option value="kannada">5</option>
            <option value="malayalam">6</option>
        </select><br></br>
        <img src={star1} alt='rating' className='rating'></img>
        <button id='add_to_cart'>Add to Cart</button><br></br>
            </div>
        </div>
        </div>
    </>
  )
}

export default Cart
