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
import im841 from '../Images/im841.png'
import im842 from '../Images/im842.png'
import im843 from '../Images/im843.png'
import im844 from '../Images/im844.png'
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
import im811 from '../Images/im811.png'
import im812 from '../Images/im812.png'
import im813 from '../Images/im813.png'
import im814 from '../Images/im814.png'
import im821 from '../Images/im821.png'
import im822 from '../Images/im822.png'
import im823 from '../Images/im823.png'
import im824 from '../Images/im824.png'
import im831 from '../Images/im831.png'
import im832 from '../Images/im832.png'
import im833 from '../Images/im833.png'
import im834 from '../Images/im834.png'
import { useNavigate } from 'react-router-dom';

function Fitness() {

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
            <i id='personicon' class="bi bi-person" ></i>
            <img id='cart' src={cart} alt='amazon' loading='lazy'></img>
        </div>
        <h2 className='explore_topic'>Start Your Fitness Journey with Top Brands</h2>
        <div className='explore_cont'>
        <div className='exp1'>
            <div className='img_container'><figure>
            <img src={im811} alt='bedsheet' loading='lazy'></img>
            <figcaption>Claiez Microfiber...<br></br><strong>₹390 </strong><br></br>M.R.P:<span>₹599 </span>(25% off)</figcaption>
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

        <div className='exp1'>
            <div className='img_container'><figure>
            <img src={im812} alt='bedsheet' loading='lazy'></img>
            <figcaption>Bodyband Abs Roller for Men...<br></br><strong>₹1,098 </strong><br></br>M.R.P:<span>₹2,799 </span>(45% off)</figcaption>
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
        <img src={star4} alt='rating' className='rating'></img><br></br>
        <button id='add_to_cart'>Add to Cart</button>
            </div>
        </div>
        <div className='exp1'>
            <div className='img_container'><figure>
            <img src={im813} alt='bedsheet' loading='lazy'></img>
            <figcaption>Yonex Mavis Shuttle Cock<br></br><strong>₹258 </strong><br></br>M.R.P:<span>₹499 </span>(16% off)</figcaption>
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
        <img src={star2} alt='rating' className='rating'></img><br></br>
        <button id='add_to_cart'>Add to Cart</button>
            </div>
        </div>
        <div className='exp1'>
            <div className='img_container'><figure>
            <img src={im814} alt='bedsheet' loading='lazy'></img>
            <figcaption>Boldfit Gym Shaker Bottle ...<br></br><strong>₹198 </strong><br></br>M.R.P:<span>₹219 </span>(10% off)</figcaption>
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
        <img src={star6} alt='rating' className='rating'></img>
        <button id='add_to_cart'>Add to Cart</button>
            </div>
        </div>
        <div className='exp1'>
            <div className='img_container'><figure>
            <img src={im821} alt='bedsheet' loading='lazy'></img>
            <figcaption>Skipping Rope for Men and...<br></br><strong>₹199 </strong><br></br>M.R.P:<span>₹299 </span>(15% off)</figcaption>
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
        <img src={star3} alt='rating' className='rating'></img><br></br>
        <button id='add_to_cart'>Add to Cart</button>
            </div>
        </div>
        <div className='exp1'>
            <div className='img_container'><figure>
            <img src={im822} alt='bedsheet' loading='lazy'></img>
            <figcaption>Lifelong Fixed Dumbbells...<br></br><strong>₹190 </strong><br></br>M.R.P:<span>₹299 </span>(25% off)</figcaption>
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
        <button id='add_to_cart'>Add to Cart</button>
            </div>
        </div>
        <div className='exp1'>
            <div className='img_container'><figure>
            <img src={im823} alt='bedsheet' loading='lazy'></img>
            <figcaption>Nivia Storm Football...<br></br><strong>₹369 </strong><br></br>M.R.P:<span>₹429 </span>(14% off)</figcaption>
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
        <img src={star5} alt='rating' className='rating'></img><br></br>
        <button id='add_to_cart'>Add to Cart</button>
            </div>
        </div>
        <div className='exp1'>
            <div className='img_container'><figure>
            <img src={im824} alt='bedsheet' loading='lazy'></img>
            <figcaption>VICTOR Tk-15Light-U-5U  ...<br></br><strong>₹299 </strong><br></br>M.R.P:<span>₹430 </span>(28% off)</figcaption>
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
        <img src={star7} alt='rating' className='rating'></img><br></br>
        <button id='add_to_cart'>Add to Cart</button>
            </div>
        </div>

        <div className='exp1'>
            <div className='img_container'><figure>
            <img src={im831} alt='bedsheet' loading='lazy'></img>
            <figcaption>Steelbird SBH-34 Shree Ram Reflective ...<br></br><strong>₹1,015 </strong><br></br>M.R.P:<span>₹2,599 </span>(25% off)</figcaption>
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
        <img src={star2} alt='rating' className='rating'></img><br></br>
        <button id='add_to_cart'>Add to Cart</button>
            </div>
        </div>
        <div className='exp1'>
            <div className='img_container'><figure>
            <img src={im832} alt='bedsheet' loading='lazy'></img>
            <figcaption>WiseLife TRU Alignment Yoga Mat<br></br><strong>₹1,218 </strong><br></br>M.R.P:<span>₹1,499 </span>(7% off)</figcaption>
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
        <img src={star8} alt='rating' className='rating'></img><br></br>
        <button id='add_to_cart'>Add to Cart</button>
            </div>
        </div>
        <div className='exp1'>
            <div className='img_container'><figure>
            <img src={im833} alt='bedsheet' loading='lazy'></img>
            <figcaption>Rozti Head Black Gym Unisex with ...<br></br><strong>₹198 </strong><br></br>M.R.P:<span>₹239 </span>(20% off)</figcaption>
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
        <img src={star9} alt='rating' className='rating'></img><br></br>
        <button id='add_to_cart'>Add to Cart</button>
            </div>
        </div>
        <div className='exp1'>
            <div className='img_container'><figure>
            <img src={im834} alt='bedsheet' loading='lazy'></img>
            <figcaption>Boldfit Wrist Supporter ...<br></br><strong>₹198 </strong><br></br>M.R.P:<span>₹219 </span>(9% off)</figcaption>
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
        <img src={star3} alt='rating' className='rating'></img><br></br>
        <button id='add_to_cart'>Add to Cart</button>
            </div>
        </div>
        <div className='exp1'>
            <div className='img_container'><figure>
            <img src={im841} alt='bedsheet' loading='lazy'></img>
            <figcaption>Boldfit Adjustable Hand Grip ...<br></br><strong>₹299 </strong><br></br>M.R.P:<span>₹ 499 </span>(35% off)</figcaption>
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
        <img src={star5} alt='rating' className='rating'></img><br></br>
        <button id='add_to_cart'>Add to Cart</button>
            </div>
        </div>
        <div className='exp1'>
            <div className='img_container'><figure>
            <img src={im842} alt='bedsheet' loading='lazy'></img>
            <figcaption>Sports Ankle Cotton Socks ...<br></br><strong>₹198 </strong><br></br>M.R.P:<span>₹299 </span>(40% off)</figcaption>
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
        <img src={star1} alt='rating' className='rating'></img><br></br>
        <button id='add_to_cart'>Add to Cart</button>
            </div>
        </div>
        <div className='exp1'>
            <div className='img_container'><figure>
            <img src={im843} alt='bedsheet' loading='lazy'></img>
            <figcaption>WiseLife TRU Alignment Yoga Mat<br></br><strong>₹1,099 </strong><br></br>M.R.P:<span>₹2,799 </span>(25% off)</figcaption>
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
        <img src={star5} alt='rating' className='rating'></img><br></br>
        <button id='add_to_cart'>Add to Cart</button>
            </div>
        </div>
        <div className='exp1'>
            <div className='img_container'><figure>
            <img src={im844} alt='bedsheet' loading='lazy'></img>
            <figcaption>Boldfit Gym Gloves for Men ...<br></br><strong>₹2,398 </strong><br></br>M.R.P:<span>₹4,499 </span>(35% off)</figcaption>
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
            <option value="hindi"><a href='#'>हिंदी - HI</a></option>
            <option value="tamil"><a href='#'>தமிழ் - TA</a></option>
            <option value="telugu"><a href='#'>తెలుగు - TE</a></option>
            <option value="kannada"><a href='#'>ಕನ್ನಡ - KN</a></option>
            <option value="malayalam"><a href='#'>മലയാളം - ML</a></option>
            <option value="bengali"><a href='#'>বাংলা - BN</a></option>
            <option value="marati"><a href='#'>मराठी - MR</a></option>
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

export default Fitness
