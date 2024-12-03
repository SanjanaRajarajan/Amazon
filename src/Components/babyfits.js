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
import n441 from '../Images1/n441.png'
import n442 from '../Images1/n442.png'
import n443 from '../Images1/n443.png'
import n444 from '../Images1/n444.png'
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
import n411 from '../Images1/n411.png'
import n412 from '../Images1/n412.png'
import n413 from '../Images1/n413.png'
import n414 from '../Images1/n414.png'
import n421 from '../Images1/n421.png'
import n422 from '../Images1/n422.png'
import n423 from '../Images1/n423.png'
import n424 from '../Images1/n424.png'
import n431 from '../Images1/n431.png'
import n432 from '../Images1/n432.png'
import n433 from '../Images1/n433.png'
import n434 from '../Images1/n434.png'
import { useNavigate} from 'react-router-dom';

function Babyfits() {

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
        <h2 className='explore_topic'>Baby Clothes 0 - 3 months</h2>
        <div className='explore_cont'>
        <div className='exp1'>
            <div className='img_container'><figure>
            <img src={n411} alt='bedsheet' loading='lazy'></img>
            <figcaption>Knitroot Monthly Birthday Teddy...<br></br><strong>₹490 </strong><br></br>M.R.P:<span>₹799 </span>(55% off)</figcaption>
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
            <img src={n412} alt='bedsheet' loading='lazy'></img>
            <figcaption>Unisex Baby Flannel Jumpsuit ...<br></br><strong>₹498 </strong><br></br>M.R.P:<span>₹999 </span>(75% off)</figcaption>
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
            <img src={n413} alt='bedsheet' loading='lazy'></img>
            <figcaption>100% Cotton Rompers Sleepsuits ...<br></br><strong>₹258 </strong><br></br>M.R.P:<span>₹499 </span>(16% off)</figcaption>
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
            <img src={n414} alt='bedsheet' loading='lazy'></img>
            <figcaption>New Born Baby Multi-Color...<br></br><strong>₹398 </strong><br></br>M.R.P:<span>₹439 </span>(10% off)</figcaption>
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
            <img src={n421} alt='bedsheet' loading='lazy'></img>
            <figcaption>New Born Baby Clothes Set...<br></br><strong>₹399 </strong><br></br>M.R.P:<span>₹539 </span>(55% off)</figcaption>
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
            <img src={n422} alt='bedsheet' loading='lazy'></img>
            <figcaption>Unisex Cotton Dungaree Set...<br></br><strong>₹290 </strong><br></br>M.R.P:<span>₹599 </span>(55% off)</figcaption>
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
            <img src={n423} alt='bedsheet' loading='lazy'></img>
            <figcaption>Baby Girls Kerala Onam Tissue...<br></br><strong>₹469 </strong><br></br>M.R.P:<span>₹909 </span>(14% off)</figcaption>
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
            <img src={n424} alt='bedsheet' loading='lazy'></img>
            <figcaption>Baby Clothing 0 to 6 Months ...<br></br><strong>₹499 </strong><br></br>M.R.P:<span>₹530 </span>(28% off)</figcaption>
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
            <img src={n431} alt='bedsheet' loading='lazy'></img>
            <figcaption>Women's Knee Length A-Line Dress...<br></br><strong>₹445 </strong><br></br>M.R.P:<span>₹299 </span>(25% off)</figcaption>
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
            <img src={n432} alt='bedsheet' loading='lazy'></img>
            <figcaption>Women's Knee Length A-Line Dress...<br></br><strong>₹418 </strong><br></br>M.R.P:<span>₹519 </span>(12% off)</figcaption>
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
            <img src={n433} alt='bedsheet' loading='lazy'></img>
            <figcaption>Girls Text Print Bodysuit...<br></br><strong>₹998 </strong><br></br>M.R.P:<span>₹1,499 </span>(20% off)</figcaption>
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
            <img src={n434} alt='bedsheet' loading='lazy'></img>
            <figcaption>BabyGo Half Sleeves Baby Romper...<br></br><strong>₹398 </strong><br></br>M.R.P:<span>₹419 </span>(9% off)</figcaption>
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
            <img src={n441} alt='bedsheet' loading='lazy'></img>
            <figcaption>Full Sleeve Dresses for Baby ...<br></br><strong>₹299 </strong><br></br>M.R.P:<span>₹ 499 </span>(35% off)</figcaption>
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
            <img src={n442} alt='bedsheet' loading='lazy'></img>
            <figcaption>Baby Unisex Printed 100% ...<br></br><strong>₹398 </strong><br></br>M.R.P:<span>₹599 </span>(40% off)</figcaption>
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
            <img src={n443} alt='bedsheet' loading='lazy'></img>
            <figcaption>Baby Girl's A-Line Mini Frock...<br></br><strong>₹399 </strong><br></br>M.R.P:<span>₹799 </span>(46% off)</figcaption>
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
            <img src={n444} alt='bedsheet' loading='lazy'></img>
            <figcaption>Net Flaired Sleeve Less Baby...<br></br><strong>₹498 </strong><br></br>M.R.P:<span>₹999 </span>(75% off)</figcaption>
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

export default Babyfits
