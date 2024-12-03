import React from 'react'
import logo from '../Assets/amazonlogo.png'
import cart from '../Assets/cart.png'
import searchicon from '../Assets/searchicon.png'
import '../App.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './Main1.css'
import footerlogo from '../Assets/footerlogo.png'
import web from '../Assets/web.png'
import india from '../Assets/india.png'
import f241 from '../Images1/f241.png'
import f242 from '../Images1/f242.png'
import f243 from '../Images1/f243.png'
import f244 from '../Images1/f244.png'
import './Rewamp.css'
import star1 from '../Images/star1.png'
import star2 from '../Images/star2.png'
import star3 from '../Images/star3.png'
import star4 from '../Images/star4.png'
import star5 from '../Images/star5.png'
import star6 from '../Images/star6.png'
import star7 from '../Images/star7.png'
import star8 from '../Images/star8.png'
import star9 from '../Images/star9.png'
import f211 from '../Images1/f211.png'
import f212 from '../Images1/f212.png'
import f213 from '../Images1/f213.png'
import f214 from '../Images1/f214.png'
import f221 from '../Images1/f221.png'
import f222 from '../Images1/f222.png'
import f223 from '../Images1/f223.png'
import f224 from '../Images1/f224.png'
import f231 from '../Images1/f231.png'
import f232 from '../Images1/f232.png'
import f233 from '../Images1/f233.png'
import f234 from '../Images1/f234.png'
import { useNavigate } from 'react-router-dom';

function Bike() {

    const navigate1 = useNavigate();
    const click = () => {
        navigate1('/main');
    }

  return (
    <>
      <div id='header_wrapper'>
            <img onClick={click} id='logo' src={logo} alt='amazon' loading='lazy'></img>
            <input type='search' placeholder='Search Amazon.in' id='searchbox'></input>
            <img id='searchicon' src={searchicon} alt='amazon' loading='lazy'></img>
            <i id='personicon' className="bi bi-person" ></i>
            <img id='cart' src={cart} alt='amazon' loading='lazy'></img>
        </div>
        <h2 className='explore_topic'>Best Deals Curated from Stores Nearby</h2>
        <div className='explore_cont'>
        <div className='exp1'>
            <div className='img_container'><figure>
            <img src={f211} alt='bedsheet' loading='lazy'></img>
            <figcaption>Hero PLEASURE+ VX Scooter Cast ...<br></br><strong>₹69,000 </strong><br></br>M.R.P:<span>₹71,799 </span>(25% off)</figcaption>
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

        <div className='exp1'>
            <div className='img_container'><figure>
            <img src={f212} alt='bedsheet' loading='lazy'></img>
            <figcaption>XTREME 125R Bike(ABS) ...<br></br><strong>₹1,04,098 </strong><br></br>M.R.P:<span>₹1,24,799 </span>(5% off)</figcaption>
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
        <img src={star4} alt='rating' className='rating'></img><br></br>
        <button id='add_to_cart'>Add to Cart</button>
            </div>
        </div>
        <div className='exp1'>
            <div className='img_container'><figure>
            <img src={f213} alt='bedsheet' loading='lazy'></img>
            <figcaption>HF Deluxe Bike Black...<br></br><strong>₹70,000 </strong><br></br>M.R.P:<span>₹84,499 </span>(16% off)</figcaption>
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
        <img src={star2} alt='rating' className='rating'></img><br></br>
        <button id='add_to_cart'>Add to Cart</button>
            </div>
        </div>
        <div className='exp1'>
            <div className='img_container'><figure>
            <img src={f214} alt='bedsheet' loading='lazy'></img>
            <figcaption>Single Disc Matt Axis Black..<br></br><strong>₹1,10,998 </strong><br></br>M.R.P:<span>₹1,12,799 </span>(2% off)</figcaption>
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
        <img src={star6} alt='rating' className='rating'></img>
        <button id='add_to_cart'>Add to Cart</button>
            </div>
        </div>
        <div className='exp1'>
            <div className='img_container'><figure>
            <img src={f221} alt='bedsheet' loading='lazy'></img>
            <figcaption>XTREME 125R Bike(ABS) <br></br><strong>₹1,24,324 </strong><br></br>M.R.P:<span>₹1,60,230 </span>(15% off)</figcaption>
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
        <img src={star3} alt='rating' className='rating'></img><br></br>
        <button id='add_to_cart'>Add to Cart</button>
            </div>
        </div>
        <div className='exp1'>
            <div className='img_container'><figure>
            <img src={f222} alt='bedsheet' loading='lazy'></img>
            <figcaption> HF Deluxe (Kick Start) Bike...<br></br><strong>₹62,390 </strong><br></br>M.R.P:<span>₹69,989 </span>(25% off)</figcaption>
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
        <button id='add_to_cart'>Add to Cart</button>
            </div>
        </div>
        <div className='exp1'>
            <div className='img_container'><figure>
            <img src={f223} alt='bedsheet' loading='lazy'></img>
            <figcaption>Scooter Connected Bluish Teal...<br></br><strong>₹80,948 </strong><br></br>M.R.P:<span>₹82,000 </span>(14% off)</figcaption>
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
        <img src={star5} alt='rating' className='rating'></img><br></br>
        <button id='add_to_cart'>Add to Cart</button>
            </div>
        </div>
        <div className='exp1'>
            <div className='img_container'><figure>
            <img src={f224} alt='bedsheet' loading='lazy'></img>
            <figcaption>MAVRICK 440 Bike Phantom ...<br></br><strong>₹2,35,699 </strong><br></br>M.R.P:<span>₹2,74,430 </span>(28% off)</figcaption>
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
        <img src={star7} alt='rating' className='rating'></img><br></br>
        <button id='add_to_cart'>Add to Cart</button>
            </div>
        </div>

        <div className='exp1'>
            <div className='img_container'><figure>
            <img src={f231} alt='bedsheet' loading='lazy'></img>
            <figcaption>i3S with Self Start Bike Black ...<br></br><strong>₹71,015 </strong><br></br>M.R.P:<span>₹79,599 </span>(25% off)</figcaption>
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
        <img src={star2} alt='rating' className='rating'></img><br></br>
        <button id='add_to_cart'>Add to Cart</button>
            </div>
        </div>
        <div className='exp1'>
            <div className='img_container'><figure>
            <img src={f232} alt='bedsheet' loading='lazy'></img>
            <figcaption>Single Disc Matt Axis Black...<br></br><strong>₹1,57,718 </strong><br></br>M.R.P:<span>₹1,56,499 </span>(12% off)</figcaption>
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
        <img src={star8} alt='rating' className='rating'></img><br></br>
        <button id='add_to_cart'>Add to Cart</button>
            </div>
        </div>
        <div className='exp1'>
            <div className='img_container'><figure>
            <img src={f233} alt='bedsheet' loading='lazy'></img>
            <figcaption>Single Disc Matt Axis Red Black...<br></br><strong>₹1,23,998 </strong><br></br>M.R.P:<span>₹1,53,499 </span>(20% off)</figcaption>
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
        <img src={star9} alt='rating' className='rating'></img><br></br>
        <button id='add_to_cart'>Add to Cart</button>
            </div>
        </div>
        <div className='exp1'>
            <div className='img_container'><figure>
            <img src={f234} alt='bedsheet' loading='lazy'></img>
            <figcaption>Hero PLEASURE+ VX Scooter Cast ...<br></br><strong>₹57,998 </strong><br></br>M.R.P:<span>₹65,000 </span>(39% off)</figcaption>
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
        <img src={star3} alt='rating' className='rating'></img><br></br>
        <button id='add_to_cart'>Add to Cart</button>
            </div>
        </div>
        <div className='exp1'>
            <div className='img_container'><figure>
            <img src={f241} alt='bedsheet' loading='lazy'></img>
            <figcaption>XTREME 125R Bike(ABS) <br></br><strong>₹1,12,099 </strong><br></br>M.R.P:<span>₹ 1,64,099 </span>(35% off)</figcaption>
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
        <img src={star5} alt='rating' className='rating'></img><br></br>
        <button id='add_to_cart'>Add to Cart</button>
            </div>
        </div>
        <div className='exp1'>
            <div className='img_container'><figure>
            <img src={f242} alt='bedsheet' loading='lazy'></img>
            <figcaption>XTREME 125R Bike(ABS) <br></br><strong>₹1,27,398 </strong><br></br>M.R.P:<span>₹1,76,299 </span>(40% off)</figcaption>
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
        <img src={star1} alt='rating' className='rating'></img><br></br>
        <button id='add_to_cart'>Add to Cart</button>
            </div>
        </div>
        <div className='exp1'>
            <div className='img_container'><figure>
            <img src={f243} alt='bedsheet' loading='lazy'></img>
            <figcaption> HF Deluxe (Drum) (Kick Start) Bike<br></br><strong>₹51,099 </strong><br></br>M.R.P:<span>₹54,799 </span>(25% off)</figcaption>
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
        <img src={star5} alt='rating' className='rating'></img><br></br>
        <button id='add_to_cart'>Add to Cart</button>
            </div>
        </div>
        <div className='exp1'>
            <div className='img_container'><figure>
            <img src={f244} alt='bedsheet' loading='lazy'></img>
            <figcaption> 125R Bike Stallion Black Booking...<br></br><strong>₹1,82,398 </strong><br></br>M.R.P:<span>₹1,99,499 </span>(5% off)</figcaption>
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
        <img src={star6} alt='rating' className='rating'></img><br></br>
        <button id='add_to_cart'>Add to Cart</button>
            </div>
        </div>
        </div>
        <div id='top'>
        <a id='topgo' href='#'>Back to top</a>
      </div>
      <div id='footer'>
      <div id='footer1'>
        <div id='foot1' className='innerfooter'>
            <p>Get to Know Us</p>
            <a href="#">About Amazon</a><br></br>
            <a href="#">Careers</a><br></br>
            <a href="#">Press Releases</a><br></br>
            <a href="#">Amazon Science</a><br></br>
        </div>
        <div id='foot2' className='innerfooter'>
            <p>Connect with Us</p>
            <a href="#">Facebook</a><br></br>
            <a href="#">Twitter</a><br></br>
            <a href="#">Instagram</a><br></br>
        </div>
        <div id='foot3' className='innerfooter'>
            <p>Make Money with Us</p><br></br>
            <a href="#">Sell on Amazon</a><br></br>
            <a href="#">Sell under Amazon Accelerator</a><br></br>
            <a href="#">Protect and Build Your Brand</a><br></br>
            <a href="#">Amazon Global Selling</a><br></br>
            <a href="#">Supply to Amazon</a><br></br>
            <a href="#">Become an Affiliate</a><br></br>
            <a href="#">Fulfilment by Amazon</a><br></br>
            <a href="#">Advertise Your Products</a><br></br>
            <a href="#">Amazon Pay on Merchants</a><br></br>
        </div>
        <div id='foot4' className='innerfooter'>
            <p>Let Us Help You</p>
            <a href="#">Your Account</a><br></br>
            <a href="#">Returns Centre</a><br></br>
            <a href="#">Recalls and Product Safety Alerts</a><br></br>
            <a href="#">100% Purchase Protection</a><br></br>
            <a href="#">Amazon App Download</a><br></br>
            <a href="#">Help</a><br></br>
        </div>
      </div>
      <hr style={{backgroundColor: 'rgb(218, 214, 214,0.6)', height: '1px', border: 'none'}}></hr>
      <div id='last'>
        <img id='footerlogo' src={footerlogo} alt='amazon' loading='lazy'></img>
        <div className='lang'>
            <img id='web' src={web} alt='web' loading='lazy'></img>
        <select>
        
        <option>English-EN</option>
            <option value="hindi">हिंदी - HI</option>
            <option value="tamil">தமிழ் - TA</option>
            <option value="telugu">తెలుగు - TE</option>
            <option value="kannada">ಕನ್ನಡ - KN</option>
            <option value="malayalam">മലയാളം - ML</option>
            <option value="bengali">বাংলা - BN</option>
            <option value="marati">मराठी - MR</option>
        </select>
        </div>
       <div className='india'><img id='india' src={india} alt='india' loading='lazy'></img>
        <p>India</p>
      </div>
      </div>
      </div>
      <div id='atlast'><div className='footer2'>
        <a href="#" id='a11'>
            <strong>AbeBooks</strong><br></br>
            Books, art<br></br>
            & collectibles
        </a><br></br>
        <a href="#" id='a22'>
            <strong>Amazon Web Services</strong><br></br>
            Scalable Cloud<br></br>
            Computing Services
        </a><br></br>
        <a href="#" id='a33'>
            <strong>Audible</strong><br></br>
            Download<br></br>
            Audio Books
        </a><br></br>
        <a href="#" id='a44'>
            <strong>IMDb</strong><br></br>
            Movies, TV<br></br>
            & Celebrities
        </a><br></br>
      </div>
      <div className='footer2'>
      <a href="#" id='a1'>
            <strong>Shopbop</strong><br></br>
            Designer<br></br>
            Fashion Brands
        </a><br></br>
        <a href="#" id='a2'>
            <strong>Amazon Business</strong><br></br>
            Everything For<br></br>
            Your Business
        </a><br></br>
        <a href="#" id='a3'>
            <strong>Prime Now</strong><br></br>
            2-Hour Delivery<br></br>
            on Everyday Items
        </a><br></br>
        <a href="#" id='a4'>
            <strong>Amazon Prime Music</strong><br></br>
            100 million songs, ad-free <br></br>
            Over 15 million podcast episodes
        </a><br></br>
      </div>
      <div id='final'>
        <a href='#' >Conditions of Use & Sale</a>&nbsp;&nbsp;
        <a href='#' >Privacy Notice</a>&nbsp;&nbsp;
        <a href='#'>Interest-Based Ads</a><br></br>
        <p>&copy; 1996-2024, Amazon.com, Inc. or its affiliates</p>
      </div>
      </div>
        
    </>
  )
}

export default Bike
