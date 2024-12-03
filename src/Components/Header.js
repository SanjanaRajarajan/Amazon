import React from 'react'
import logo from '../Assets/amazonlogo.png'
import cart from '../Assets/cart.png'
import searchicon from '../Assets/searchicon.png'
import '../App.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { useNavigate } from 'react-router-dom';


function Header() {

  const navigate1 = useNavigate();
  const handleClick1 = () => {
    navigate1('/fruits');
  };

  const navigate2 = useNavigate();
  const handleClick2 = () => {
    navigate2('/fashion');
  };

  const navigate3 = useNavigate();
  const handleClick3 = () => {
    navigate3('/mobile'); 
  };

  const navigate4 = useNavigate();
  const handleClick4 = () => {
    navigate4('/toys');
  };

  const navigate5 = useNavigate();
  const handleClick5 = () => {
    navigate5('/kitchen');
  };

  const navigate6 = useNavigate();
  const handleClick6 = () => {
    navigate6('/appliances');
  };

  const navigate7 = useNavigate();
  const handleClick7 = () => {
    navigate7('/headphone');
  };

  const navigate8 = useNavigate();
  const handleClick8 = () => {
    navigate8('/Beauty');
  };

  const navigate9 = useNavigate();
  const handleClick9 = () => {
    navigate9('/furniture');
  };

  const navigate10 = useNavigate();
  const handleClick10 = () => {
    navigate10('/fancy');
  };

  const navigate11 = useNavigate();
  const handleClick11 = () => {
    navigate11('/babyfits');
  };

  const navigate12 = useNavigate();
  const handleClick12 = () => {
    navigate12('/tools');
  };

  const navigate13 = useNavigate();
  const handleClick13 = () => {
    navigate13('/bike');
  };

  const navigate14 = useNavigate();
  const handleClick14 = () => {
    navigate14('/loved');
  };

  const navigate15 = useNavigate();
  const handleClick15 = () => {
    navigate15('/');
  };

  return (
    <>
      <header>
        <div id='header_wrapper'>
            <img onClick={handleClick15} id='logo' src={logo} alt='amazon' loading='lazy'></img>
            <input type='search' placeholder='Search Amazon.in' id='searchbox'></input>
            <img id='searchicon' src={searchicon} alt='amazon' loading='lazy'></img>
            <i id='personicon' class="bi bi-person" ></i>
            <img id='cart' src={cart} alt='amazon' loading='lazy'></img>
        </div>
        <div id='items'>
           <button onClick={handleClick15}><i style={{color:'white' , fontSize:'19px'}} class="bi bi-house-door-fill"></i></button>
           <button onClick={handleClick1}>Fresh</button>
           <button onClick={handleClick2}>Fashion</button>
           <button onClick={handleClick3}>Mobiles</button>
           <button onClick={handleClick4}>Toys</button>
           <button onClick={handleClick5}>Kitchen</button>
           <button onClick={handleClick6}>Headphones</button>
           <button onClick={handleClick7}>Home</button>
           <button onClick={handleClick8}>Beauty</button>
           <button onClick={handleClick9}>Furniture</button>
           <button onClick={handleClick10}>Decors</button>
           <button onClick={handleClick11}>Baby Fits</button>
           <button onClick={handleClick12}>Tools</button>
           <button onClick={handleClick13}>Motorbike</button>
           <button onClick={handleClick14}>More</button>
        </div>
      </header>
    </>
  )
}

export default Header
