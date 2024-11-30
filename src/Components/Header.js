import React from 'react'
import logo from '../Assets/amazonlogo.png'
import cart from '../Assets/cart.png'
import searchicon from '../Assets/searchicon.png'
import '../App.css';
import 'bootstrap-icons/font/bootstrap-icons.css';


function Header() {
  return (
    <>
      <header>
        <div id='header_wrapper'>
            <img id='logo' src={logo} alt='amazon' loading='lazy'></img>
            <input type='search' placeholder='Search Amazon.in' id='searchbox'></input>
            <img id='searchicon' src={searchicon} alt='amazon' loading='lazy'></img>
            <i id='personicon' class="bi bi-person" ></i>
            <img id='cart' src={cart} alt='amazon' loading='lazy'></img>
        </div>
        <div id='items'>
           <button>Groceries</button>
           <button>Fashion</button>
           <button>Mobiles</button>
           <button>Pharmacy</button>
           <button>Kitchen</button>
           <button>Electronics</button>
           <button>Home</button>
           <button>Beauty</button>
           <button>Furniture</button>
           <button>Deals</button>
           <button>Furniture</button>
           <button>New Releases</button>
           <button>Car & Motorbike</button>
           <button>More</button>
        </div>
      </header>
    </>
  )
}

export default Header
