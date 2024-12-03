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
import n141 from '../Images1/n141.png'
import n142 from '../Images1/n142.png'
import n143 from '../Images1/n143.png'
import n144 from '../Images1/n144.png'
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
import n111 from '../Images1/n111.png'
import n112 from '../Images1/n112.png'
import n113 from '../Images1/n113.png'
import n114 from '../Images1/n114.png'
import n121 from '../Images1/n121.png'
import n122 from '../Images1/n122.png'
import n123 from '../Images1/n123.png'
import n124 from '../Images1/n124.png'
import n131 from '../Images1/n131.png'
import n132 from '../Images1/n132.png'
import n133 from '../Images1/n133.png'
import n134 from '../Images1/n134.png'
import { useNavigate } from 'react-router-dom';

function Mobile() {

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
        <h2 className='explore_topic'>Customers' Most - Mobiles, Laptops & Tablets</h2>
        <div className='explore_cont'>
        <div className='exp1'>
            <div className='img_container'><figure>
            <img src={n111} alt='bedsheet' loading='lazy'></img>
            <figcaption>Samsung Galaxy S23 Ultra 5G...<br></br><strong>₹74,990 </strong><br></br>M.R.P:<span>₹1,49,799 </span>(50% off)</figcaption>
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
            <img src={n112} alt='bedsheet' loading='lazy'></img>
            <figcaption>Redmi A4 5G (Sparkle ...<br></br><strong>₹8,498 </strong><br></br>M.R.P:<span>₹11,299 </span>(55% off)</figcaption>
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
            <img src={n113} alt='bedsheet' loading='lazy'></img>
            <figcaption>Samsung Galaxy M05  ...<br></br><strong>₹6,499 </strong><br></br>M.R.P:<span>₹9,999 </span>(26% off)</figcaption>
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
            <img src={n114} alt='bedsheet' loading='lazy'></img>
            <figcaption>Redmi 13C 5G (Starlight...<br></br><strong>₹9,998 </strong><br></br>M.R.P:<span>₹13,439 </span>(40% off)</figcaption>
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
            <img src={n121} alt='bedsheet' loading='lazy'></img>
            <figcaption>POCO M6 5G, Orion Blue ...<br></br><strong>₹7,999 </strong><br></br>M.R.P:<span>₹9,999 </span>(15% off)</figcaption>
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
            <img src={n122} alt='bedsheet' loading='lazy'></img>
            <figcaption>iQOO Z9 Lite 5G (Mocha...<br></br><strong>₹11,990 </strong><br></br>M.R.P:<span>₹13,299 </span>(25% off)</figcaption>
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
            <img src={n123} alt='bedsheet' loading='lazy'></img>
            <figcaption>iPhone 16 128 GB...<br></br><strong>₹77,400 </strong><br></br>M.R.P:<span>₹79,109 </span>(54% off)</figcaption>
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
            <img src={n124} alt='bedsheet' loading='lazy'></img>
            <figcaption>Lenovo IdeaPad Slim 1 ...<br></br><strong>₹41,499 </strong><br></br>M.R.P:<span>₹58,430 </span>(28% off)</figcaption>
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
            <img src={n131} alt='bedsheet' loading='lazy'></img>
            <figcaption>Acer Aspire Lite 13th Gen ...<br></br><strong>₹33,999 </strong><br></br>M.R.P:<span>₹53,299 </span>(42% off)</figcaption>
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
            <img src={n132} alt='bedsheet' loading='lazy'></img>
            <figcaption>Apple MacBook Air Laptop...<br></br><strong>₹56,990 </strong><br></br>M.R.P:<span>₹89,499 </span>(32% off)</figcaption>
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
            <img src={n133} alt='bedsheet' loading='lazy'></img>
            <figcaption>HP 15s Core i3 12th Gen  ...<br></br><strong>₹35,998 </strong><br></br>M.R.P:<span>₹44,499 </span>(40% off)</figcaption>
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
            <img src={n134} alt='bedsheet' loading='lazy'></img>
            <figcaption>Dell Inspiron 3535, AMD...<br></br><strong>₹29,398 </strong><br></br>M.R.P:<span>₹38,419 </span>(29% off)</figcaption>
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
            <img src={n141} alt='bedsheet' loading='lazy'></img>
            <figcaption>Samsung Galaxy Tab S9 FE ...<br></br><strong>₹34,099 </strong><br></br>M.R.P:<span>₹44,099 </span>(22% off)</figcaption>
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
            <img src={n142} alt='bedsheet' loading='lazy'></img>
            <figcaption>Redmi Pad SE|All Day Battery...<br></br><strong>₹13,398 </strong><br></br>M.R.P:<span>₹15,299 </span>(40% off)</figcaption>
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
            <img src={n143} alt='bedsheet' loading='lazy'></img>
            <figcaption>Xiaomi Pad 6| Qualcomm ...<br></br><strong>₹25,999 </strong><br></br>M.R.P:<span>₹32,799 </span>(39% off)</figcaption>
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
            <img src={n144} alt='bedsheet' loading='lazy'></img>
            <figcaption>Honor Pad X8 25.65 cm ...<br></br><strong>₹8,898 </strong><br></br>M.R.P:<span>₹20,499 </span>(65% off)</figcaption>
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

export default Mobile
