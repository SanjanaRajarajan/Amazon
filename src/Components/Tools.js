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
import im441 from '../Images/im441.png'
import im442 from '../Images/im442.png'
import im443 from '../Images/im443.png'
import im444 from '../Images/im444.png'
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
import im411 from '../Images/im411.png'
import im412 from '../Images/im412.png'
import im413 from '../Images/im413.png'
import im414 from '../Images/im414.png'
import im421 from '../Images/im421.png'
import im422 from '../Images/im422.png'
import im423 from '../Images/im423.png'
import im424 from '../Images/im424.png'
import im431 from '../Images/im431.png'
import im432 from '../Images/im432.png'
import im433 from '../Images/im433.png'
import im434 from '../Images/im434.png'
import { useNavigate } from 'react-router-dom';

function Tools() {

    const navigate1 = useNavigate();
    const click = () => {
        navigate1('/main');
    }

  return (
    <>
      <div id='header_'>
            <img onClick={click} id='logo' src={logo} alt='amazon' loading='lazy'></img>
            <input type='search' placeholder='Search Amazon.in' id='searchbox'></input>
            <img id='searchicon' src={searchicon} alt='amazon' loading='lazy'></img>
            <i id='personicon' class="bi bi-person" ></i>
            <img id='cart' src={cart} alt='amazon' loading='lazy'></img>
        </div>
        <h2 className='explore_topic'>Professional Tools - Amazon Top Brands</h2>
        <div className='explore_cont'>
        <div className='exp1'>
            <div className='img_container'><figure>
            <img src={im411} alt='bedsheet' loading='lazy'></img>
            <figcaption>STANLEY 13mm Corded Hammer Drill...<br></br><strong>₹3,390 </strong><br></br>M.R.P:<span>₹5,799 </span>(25% off)</figcaption>
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
            <img src={im412} alt='bedsheet' loading='lazy'></img>
            <figcaption>XTOOLS Cordless Screw Driver/Drill...<br></br><strong>₹124 </strong><br></br>M.R.P:<span>₹249 </span>(55% off)</figcaption>
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
            <img src={im413} alt='bedsheet' loading='lazy'></img>
            <figcaption>Sadaiv Nipun Steel 80T Blade ...<br></br><strong>₹2,498 </strong><br></br>M.R.P:<span>₹2,999 </span>(16% off)</figcaption>
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
            <img src={im414} alt='bedsheet' loading='lazy'></img>
            <figcaption>INICIO Precision Screwdriver Set...<br></br><strong>₹1,298 </strong><br></br>M.R.P:<span>₹2,799 </span>(80% off)</figcaption>
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
            <img src={im421} alt='bedsheet' loading='lazy'></img>
            <figcaption>Real Instruments MD7822 Digital ...<br></br><strong>₹1,399 </strong><br></br>M.R.P:<span>₹2,999 </span>(65% off)</figcaption>
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
            <img src={im422} alt='bedsheet' loading='lazy'></img>
            <figcaption>SKADIOO Digital Caliper Measuring...<br></br><strong>₹1,290 </strong><br></br>M.R.P:<span>₹3,499 </span>(45% off)</figcaption>
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
            <img src={im423} alt='bedsheet' loading='lazy'></img>
            <figcaption>YUZUKI 5 Meter Tape Measure ...<br></br><strong>₹369 </strong><br></br>M.R.P:<span>₹609 </span>(14% off)</figcaption>
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
            <img src={im424} alt='bedsheet' loading='lazy'></img>
            <figcaption>Inditrust 1pc Multi-function ...<br></br><strong>₹999 </strong><br></br>M.R.P:<span>₹2,430 </span>(81% off)</figcaption>
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
            <img src={im431} alt='bedsheet' loading='lazy'></img>
            <figcaption>Pidilite Roff Cera Clean All ...<br></br><strong>₹185 </strong><br></br>M.R.P:<span>₹279 </span>(25% off)</figcaption>
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
            <img src={im432} alt='bedsheet' loading='lazy'></img>
            <figcaption>Surface Cleaning Wipes 240 ...<br></br><strong>₹318 </strong><br></br>M.R.P:<span>₹599 </span>(32% off)</figcaption>
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
            <img src={im433} alt='bedsheet' loading='lazy'></img>
            <figcaption>PERISAFE Multipurpose Disinfectant ...<br></br><strong>₹598 </strong><br></br>M.R.P:<span>₹799 </span>(20% off)</figcaption>
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
            <img src={im434} alt='bedsheet' loading='lazy'></img>
            <figcaption> Liquid Cleanser 1.5 L,...<br></br><strong>₹198 </strong><br></br>M.R.P:<span>₹219 </span>(9% off)</figcaption>
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
            <img src={im441} alt='bedsheet' loading='lazy'></img>
            <figcaption>Littmann Monitoring Stethoscope ...<br></br><strong>₹9,099 </strong><br></br>M.R.P:<span>₹ 10,099 </span>(25% off)</figcaption>
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
            <img src={im442} alt='bedsheet' loading='lazy'></img>
            <figcaption>AmbiTech Respiratory Lung ...<br></br><strong>₹3,398 </strong><br></br>M.R.P:<span>₹5,299 </span>(40% off)</figcaption>
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
            <img src={im443} alt='bedsheet' loading='lazy'></img>
            <figcaption>3M Facepiece Reusable Respirator ...<br></br><strong>₹1,099 </strong><br></br>M.R.P:<span>₹2,799 </span>(25% off)</figcaption>
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
            <img src={im444} alt='bedsheet' loading='lazy'></img>
            <figcaption>FELTHOUSE Suture practice kit  ...<br></br><strong>₹1,398 </strong><br></br>M.R.P:<span>₹2,499 </span>(35% off)</figcaption>
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

export default Tools
