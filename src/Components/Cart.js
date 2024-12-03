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
            <option value="2"><a href='#'>2</a></option>
            <option value="tamil"><a href='#'>3</a></option>
            <option value="telugu"><a href='#'>4</a></option>
            <option value="kannada"><a href='#'>5</a></option>
            <option value="malayalam"><a href='#'>6</a></option>
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
