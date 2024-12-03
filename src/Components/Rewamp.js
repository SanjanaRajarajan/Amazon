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
import i111 from '../Images/i111.png'
import i112 from '../Images/i112.png'
import i113 from '../Images/i113.png'
import i114 from '../Images/i114.png'
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
import i121 from '../Images/i121.png'
import i122 from '../Images/i122.png'
import i123 from '../Images/i123.png'
import i124 from '../Images/i124.png'
import i131 from '../Images/i131.png'
import i132 from '../Images/i132.png'
import i133 from '../Images/i133.png'
import i134 from '../Images/i134.png'
import i141 from '../Images/i141.png'
import i142 from '../Images/i142.png'
import i143 from '../Images/i143.png'
import i144 from '../Images/i144.png'
import { useNavigate } from 'react-router-dom';

function Rewamp() {

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
        <h2 className='explore_topic'>All your Home Requirements</h2>
        <div className='explore_cont'>
        <div className='exp1'>
            <div className='img_container'><figure>
            <img src={i111} alt='bedsheet' loading='lazy'></img>
            <figcaption>BSB HOME Floral Bedsheet...<br></br><strong>₹198 </strong><br></br>M.R.P:<span>₹799 </span>(15% off)</figcaption>
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
            <img src={i112} alt='bedsheet' loading='lazy'></img>
            <figcaption>Premium Modern Style Glace Cotton...<br></br><strong>₹158 </strong><br></br>M.R.P:<span>₹399 </span>(20% off)</figcaption>
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
            <img src={i113} alt='bedsheet' loading='lazy'></img>
            <figcaption>Himeya King Size Set - 120 Thread ...<br></br><strong>₹398 </strong><br></br>M.R.P:<span>₹599 </span>(10% off)</figcaption>
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
            <img src={i114} alt='bedsheet' loading='lazy'></img>
            <figcaption>100% Cotton Bedsheet for Double Bed...<br></br><strong>₹248 </strong><br></br>M.R.P:<span>₹459 </span>(15% off)</figcaption>
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
            <img src={i121} alt='bedsheet' loading='lazy'></img>
            <figcaption>FURN ASPIRE...<br></br><strong>₹1,299 </strong><br></br>M.R.P:<span>₹1,799 </span>(35% off)</figcaption>
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
            <img src={i122} alt='bedsheet' loading='lazy'></img>
            <figcaption>Cortina...<br></br><strong>₹1,200 </strong><br></br>M.R.P:<span>₹2,399 </span>(15% off)</figcaption>
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
            <img src={i123} alt='bedsheet' loading='lazy'></img>
            <figcaption>Amazon Brand - SOLIMO...<br></br><strong>₹499 </strong><br></br>M.R.P:<span>₹809 </span>(44% off)</figcaption>
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
            <img src={i124} alt='bedsheet' loading='lazy'></img>
            <figcaption>Amazon Brand - SEIKO...<br></br><strong>₹1,299 </strong><br></br>M.R.P:<span>₹2,230 </span>(44% off)</figcaption>
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
            <img src={i131} alt='bedsheet' loading='lazy'></img>
            <figcaption>Hooked Multipurpose 10" Modern Grid...<br></br><strong>₹515 </strong><br></br>M.R.P:<span>₹999 </span>(45% off)</figcaption>
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
            <img src={i132} alt='bedsheet' loading='lazy'></img>
            <figcaption>PHILOSHOP Digital Rack Organiser...<br></br><strong>₹718 </strong><br></br>M.R.P:<span>₹1,499 </span>(52% off)</figcaption>
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
            <img src={i133} alt='bedsheet' loading='lazy'></img>
            <figcaption>Go Hooked 16" Storage Basket...<br></br><strong>₹338 </strong><br></br>M.R.P:<span>₹899 </span>(25% off)</figcaption>
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
            <img src={i134} alt='bedsheet' loading='lazy'></img>
            <figcaption>Laheriya Rectangular Fabric...<br></br><strong>₹798 </strong><br></br>M.R.P:<span>₹1,599 </span>(51% off)</figcaption>
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
            <img src={i141} alt='bedsheet' loading='lazy'></img>
            <figcaption>Smartway 32 Watt Modern Upbeat Led...<br></br><strong>₹3,499 </strong><br></br>M.R.P:<span>₹4,799 </span>(35% off)</figcaption>
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
            <img src={i142} alt='bedsheet' loading='lazy'></img>
            <figcaption>Smartway - 38 watt LED Ceiling lamp ...<br></br><strong>₹3,598 </strong><br></br>M.R.P:<span>₹5,799 </span>(40% off)</figcaption>
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
            <img src={i143} alt='bedsheet' loading='lazy'></img>
            <figcaption>Cut Hanging Pendant Lamp...<br></br><strong>₹2,099 </strong><br></br>M.R.P:<span>₹2,799 </span>(25% off)</figcaption>
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
            <img src={i144} alt='bedsheet' loading='lazy'></img>
            <figcaption>SPARC LIGHTS 12W Round ...<br></br><strong>₹698 </strong><br></br>M.R.P:<span>₹1,799 </span>(75% off)</figcaption>
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

export default Rewamp
