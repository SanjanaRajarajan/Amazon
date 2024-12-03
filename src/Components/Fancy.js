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
import im741 from '../Images/im741.png'
import im742 from '../Images/im742.png'
import im743 from '../Images/im743.png'
import im744 from '../Images/im744.png'
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
import im711 from '../Images/im711.png'
import im712 from '../Images/im712.png'
import im713 from '../Images/im713.png'
import im714 from '../Images/im714.png'
import im721 from '../Images/im721.png'
import im722 from '../Images/im722.png'
import im723 from '../Images/im723.png'
import im724 from '../Images/im724.png'
import im731 from '../Images/im731.png'
import im732 from '../Images/im732.png'
import im733 from '../Images/im733.png'
import im734 from '../Images/im734.png'
import { useNavigate } from 'react-router-dom';

function Fancy() {

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
        <h2 className='explore_topic'>Customers' Most - Loved Products</h2>
        <div className='explore_cont'>
        <div className='exp1'>
            <div className='img_container'><figure>
            <img src={im711} alt='bedsheet' loading='lazy'></img>
            <figcaption>GJ Kuber Murti Kuber Statue...<br></br><strong>₹990 </strong><br></br>M.R.P:<span>₹1,799 </span>(25% off)</figcaption>
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
            <img src={im712} alt='bedsheet' loading='lazy'></img>
            <figcaption>Artvibes Decorative Art Wooden ...<br></br><strong>₹198 </strong><br></br>M.R.P:<span>₹299 </span>(35% off)</figcaption>
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
            <img src={im713} alt='bedsheet' loading='lazy'></img>
            <figcaption>The Earth Store Cup ...<br></br><strong>₹258 </strong><br></br>M.R.P:<span>₹499 </span>(16% off)</figcaption>
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
            <img src={im714} alt='bedsheet' loading='lazy'></img>
            <figcaption>Framed Painting for Wall...<br></br><strong>₹398 </strong><br></br>M.R.P:<span>₹439 </span>(10% off)</figcaption>
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
            <img src={im721} alt='bedsheet' loading='lazy'></img>
            <figcaption>The Earth Store Cup ...<br></br><strong>₹199 </strong><br></br>M.R.P:<span>₹239 </span>(15% off)</figcaption>
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
            <img src={im722} alt='bedsheet' loading='lazy'></img>
            <figcaption>Wood Watch Box Organizer...<br></br><strong>₹990 </strong><br></br>M.R.P:<span>₹1,299 </span>(25% off)</figcaption>
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
            <img src={im723} alt='bedsheet' loading='lazy'></img>
            <figcaption>Wood Watch Box Organizer...<br></br><strong>₹1,069 </strong><br></br>M.R.P:<span>₹2,109 </span>(14% off)</figcaption>
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
            <img src={im724} alt='bedsheet' loading='lazy'></img>
            <figcaption>Framed Painting for Wall ...<br></br><strong>₹299 </strong><br></br>M.R.P:<span>₹430 </span>(28% off)</figcaption>
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
            <img src={im731} alt='bedsheet' loading='lazy'></img>
            <figcaption>Framed Painting for Wall ...<br></br><strong>₹115 </strong><br></br>M.R.P:<span>₹299 </span>(25% off)</figcaption>
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
            <img src={im732} alt='bedsheet' loading='lazy'></img>
            <figcaption>CINAGRO Flower Vase Planter Pot...<br></br><strong>₹218 </strong><br></br>M.R.P:<span>₹499 </span>(12% off)</figcaption>
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
            <img src={im733} alt='bedsheet' loading='lazy'></img>
            <figcaption>Puzzle Berry Engineered ...<br></br><strong>₹998 </strong><br></br>M.R.P:<span>₹1,499 </span>(20% off)</figcaption>
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
            <img src={im734} alt='bedsheet' loading='lazy'></img>
            <figcaption>CINAGRO Metal Flower Vase Planter Pot...<br></br><strong>₹398 </strong><br></br>M.R.P:<span>₹419 </span>(9% off)</figcaption>
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
            <img src={im741} alt='bedsheet' loading='lazy'></img>
            <figcaption>Leather World Engineered Wood  ...<br></br><strong>₹2,099 </strong><br></br>M.R.P:<span>₹ 4,099 </span>(35% off)</figcaption>
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
            <img src={im742} alt='bedsheet' loading='lazy'></img>
            <figcaption>Leather World Engineered Wood  ...<br></br><strong>₹3,398 </strong><br></br>M.R.P:<span>₹5,299 </span>(40% off)</figcaption>
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
            <img src={im743} alt='bedsheet' loading='lazy'></img>
            <figcaption>Enamel On Steel Tea Kettle ...<br></br><strong>₹1,099 </strong><br></br>M.R.P:<span>₹2,799 </span>(25% off)</figcaption>
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
            <img src={im744} alt='bedsheet' loading='lazy'></img>
            <figcaption>The Earth Store Cup ...<br></br><strong>₹398 </strong><br></br>M.R.P:<span>₹499 </span>(35% off)</figcaption>
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

export default Fancy
