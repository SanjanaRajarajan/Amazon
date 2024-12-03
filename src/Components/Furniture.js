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
import n241 from '../Images1/n241.png'
import n242 from '../Images1/n242.png'
import n243 from '../Images1/n243.png'
import n244 from '../Images1/n244.png'
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
import n211 from '../Images1/n211.png'
import n212 from '../Images1/n212.png'
import n213 from '../Images1/n213.png'
import n214 from '../Images1/n214.png'
import n221 from '../Images1/n221.png'
import n222 from '../Images1/n222.png'
import n223 from '../Images1/n223.png'
import n224 from '../Images1/n224.png'
import n231 from '../Images1/n231.png'
import n232 from '../Images1/n232.png'
import n233 from '../Images1/n233.png'
import n234 from '../Images1/n234.png'
import { useNavigate } from 'react-router-dom';

function Furniture() {

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
        <h2 className='explore_topic'>Customers' Most Loved - Furniture</h2>
        <div className='explore_cont'>
        <div className='exp1'>
            <div className='img_container'><figure>
            <img src={n211} alt='bedsheet' loading='lazy'></img>
            <figcaption>MERISHOPP® |Sofa Deep...<br></br><strong>₹1,66,990 </strong><br></br>M.R.P:<span>₹2,22,799 </span>(65% off)</figcaption>
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
            <img src={n212} alt='bedsheet' loading='lazy'></img>
            <figcaption>Happer Plastic Premium Wall ...<br></br><strong>₹998 </strong><br></br>M.R.P:<span>₹1,299 </span>(35% off)</figcaption>
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
            <img src={n213} alt='bedsheet' loading='lazy'></img>
            <figcaption>Deion Home Decor Items...<br></br><strong>₹858 </strong><br></br>M.R.P:<span>₹999 </span>(26% off)</figcaption>
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
            <img src={n214} alt='bedsheet' loading='lazy'></img>
            <figcaption>BLUEWUD Skiddo Engineered TV ...<br></br><strong>₹5,398 </strong><br></br>M.R.P:<span>₹8,439 </span>(50% off)</figcaption>
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
            <img src={n221} alt='bedsheet' loading='lazy'></img>
            <figcaption>Sleepyhead RX5 - Single Seater ...<br></br><strong>₹16,199 </strong><br></br>M.R.P:<span>₹24,239 </span>(15% off)</figcaption>
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
            <img src={n222} alt='bedsheet' loading='lazy'></img>
            <figcaption>ALMAND Fabric Living Foldable ...<br></br><strong>₹690 </strong><br></br>M.R.P:<span>₹999 </span>(25% off)</figcaption>
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
            <img src={n223} alt='bedsheet' loading='lazy'></img>
            <figcaption>Cherry Wood Wooden Intersecting ...<br></br><strong>₹769 </strong><br></br>M.R.P:<span>₹1,209 </span>(64% off)</figcaption>
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
            <img src={n224} alt='bedsheet' loading='lazy'></img>
            <figcaption>ErgoSmart Pro Ergonomic Chair ...<br></br><strong>₹15,299 </strong><br></br>M.R.P:<span>₹35,430 </span>(58% off)</figcaption>
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
            <img src={n231} alt='bedsheet' loading='lazy'></img>
            <figcaption>Rellon Wall Mounted Shelf ...<br></br><strong>₹425 </strong><br></br>M.R.P:<span>₹599 </span>(25% off)</figcaption>
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
            <img src={n232} alt='bedsheet' loading='lazy'></img>
            <figcaption>Rellon Industries Wall Mounted...<br></br><strong>₹448 </strong><br></br>M.R.P:<span>₹522 </span>(12% off)</figcaption>
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
            <img src={n233} alt='bedsheet' loading='lazy'></img>
            <figcaption>KARINA FURNITURE Wooden Wardrobe...<br></br><strong>₹46,998 </strong><br></br>M.R.P:<span>₹59,499 </span>(60% off)</figcaption>
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
            <img src={n234} alt='bedsheet' loading='lazy'></img>
            <figcaption>JUMBO CRAFTS Ottoman Stoo...<br></br><strong>₹2,398 </strong><br></br>M.R.P:<span>₹4,419 </span>(39% off)</figcaption>
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
            <img src={n241} alt='bedsheet' loading='lazy'></img>
            <figcaption>Wooden Hexagonal Shape Wall ...<br></br><strong>₹1,099 </strong><br></br>M.R.P:<span>₹ 4,099 </span>(85% off)</figcaption>
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
            <img src={n242} alt='bedsheet' loading='lazy'></img>
            <figcaption>Wakefit Sofa Cum Bed  ...<br></br><strong>₹8,398 </strong><br></br>M.R.P:<span>₹10,299 </span>(40% off)</figcaption>
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
            <img src={n243} alt='bedsheet' loading='lazy'></img>
            <figcaption>WiproWood Sheesham Center Coffee  ...<br></br><strong>₹9,099 </strong><br></br>M.R.P:<span>₹12,799 </span>(75% off)</figcaption>
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
            <img src={n244} alt='bedsheet' loading='lazy'></img>
            <figcaption>BRISHI Patio Seating Chair ...<br></br><strong>₹12,098 </strong><br></br>M.R.P:<span>₹14,499 </span>(35% off)</figcaption>
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

export default Furniture
