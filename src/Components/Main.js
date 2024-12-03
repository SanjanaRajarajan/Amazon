import React from 'react'
import { useState } from 'react'
import './Main1.css'
import img1 from '../Assets/img1.png'
import img2 from '../Assets/img2.png'
import img3 from '../Assets/img3.png'
import img4 from '../Assets/img4.png'
import img5 from '../Assets/img5.png'
import img6 from '../Assets/img6.png'
import img7 from '../Assets/img7.png'
import g11 from '../Assets/g11.png'
import g12 from '../Assets/g12.png'
import g13 from '../Assets/g13.png'
import g14 from '../Assets/g14.png'
import g21 from '../Assets/g21.png'
import g22 from '../Assets/g22.png'
import g23 from '../Assets/g23.png'
import g24 from '../Assets/g24.png'
import g31 from '../Assets/g31.png'
import g32 from '../Assets/g32.png'
import g33 from '../Assets/g33.png'
import g34 from '../Assets/g34.png'
import g41 from '../Assets/g41.png'
import g42 from '../Assets/g42.png'
import g43 from '../Assets/g43.png'
import g44 from '../Assets/g44.png'
import g51 from '../Assets/g51.png'
import g52 from '../Assets/g52.png'
import g53 from '../Assets/g53.png'
import g54 from '../Assets/g54.png'
import g61 from '../Assets/g61.png'
import g62 from '../Assets/g62.png'
import g63 from '../Assets/g63.png'
import g64 from '../Assets/g64.png'
import g71 from '../Assets/g71.png'
import g72 from '../Assets/g72.png'
import g73 from '../Assets/g73.png'
import g74 from '../Assets/g74.png'
import g81 from '../Assets/g81.png'
import g82 from '../Assets/g82.png'
import g83 from '../Assets/g83.png'
import g84 from '../Assets/g84.png'
import f1 from '../Assets/f1.png'
import f2 from '../Assets/f2.png'
import f3 from '../Assets/f3.png'
import 'bootstrap-icons/font/bootstrap-icons.css';
import '../App.css'
import m11 from '../Assets/m11.png'
import m12 from '../Assets/m12.png'
import m13 from '../Assets/m13.png'
import m14 from '../Assets/m14.png'
import m21 from '../Assets/m21.png'
import m22 from '../Assets/m22.png'
import m23 from '../Assets/m23.png'
import m24 from '../Assets/m24.png'
import m31 from '../Assets/m31.png'
import m32 from '../Assets/m32.png'
import m33 from '../Assets/m33.png'
import m34 from '../Assets/m34.png'
import m41 from '../Assets/m41.png'
import m42 from '../Assets/m42.png'
import m43 from '../Assets/m43.png'
import m44 from '../Assets/m44.png'
import m5 from '../Assets/m5.png'
import m61 from '../Assets/m61.png'
import m62 from '../Assets/m62.png'
import m63 from '../Assets/m63.png'
import m64 from '../Assets/m64.png'
import m71 from '../Assets/m71.png'
import m72 from '../Assets/m72.png'
import m73 from '../Assets/m73.png'
import m74 from '../Assets/m74.png'
import m81 from '../Assets/m81.png'
import m82 from '../Assets/m82.png'
import m83 from '../Assets/m83.png'
import m84 from '../Assets/m84.png'
import f21 from '../Assets/f21.png'
import f22 from '../Assets/f22.png'
import f23 from '../Assets/f23.png'
import f24 from '../Assets/f24.png'
import f25 from '../Assets/f25.png'
import f26 from '../Assets/f26.png'
import f31 from '../Assets/f31.png'
import f32 from '../Assets/f32.png'
import f33 from '../Assets/f33.png'
import f34 from '../Assets/f34.png'
import f35 from '../Assets/f35.png'
import f41 from '../Assets/f41.png'
import f42 from '../Assets/f42.png'
import f43 from '../Assets/f43.png'
import f44 from '../Assets/f44.png'
import footerlogo from '../Assets/footerlogo.png'
import web from '../Assets/web.png'
import india from '../Assets/india.png'
import { useNavigate } from 'react-router-dom';
   

function Main() {

    const navigate1 = useNavigate();
    const navigate2 = useNavigate();
    const navigate3 = useNavigate();
    const navigate4 = useNavigate();
    const navigate5 = useNavigate();
    const navigate6 = useNavigate();
    const navigate7 = useNavigate();
    const navigate8 = useNavigate();
    const navigate9 = useNavigate();
    const navigate10 = useNavigate();
    const navigate11 = useNavigate();
    const navigate12 = useNavigate();
    const navigate13 = useNavigate();
    const navigate14 = useNavigate();
    const navigate15 = useNavigate();
    const navigate16 = useNavigate();
    const navigate17 = useNavigate();

    const handleExploreClick1 = () => {
      navigate1('/rewamp');
    };
  
    const handleExploreClick2 = () => {
      navigate2('/appliances');
    };

    const handleExploreClick3 = () => {
        navigate3('/headphone');
      };

    const handleExploreClick4 = () => {
        navigate4('/automotive');
    };

    const handleExploreClick5 = () => {
        navigate5('/brand');
    };

    const handleExploreClick6 = () => {
        navigate6('/womenstyle');
    };

    const handleExploreClick7 = () => {
        navigate7('/toys');
    };

    const handleExploreClick8 = () => {
        navigate8('/tools');
    };

    const handleExploreClick9 = () => {
        navigate9('/curated');
    };

    const handleExploreClick10 = () => {
        navigate10('/bike');
    };

    const handleExploreClick11 = () => {
        navigate11('/all');
    };

    const handleExploreClick12 = () => {
        navigate12('/kitchen');
    };

    const handleExploreClick13 = () => {
        navigate13('/fashion');
    };

    const handleExploreClick14 = () => {
        navigate14('/loved');
    };

    const handleExploreClick15 = () => {
        navigate15('/fruits');
    };

    const handleExploreClick16 = () => {
        navigate16('/fancy');
    };

    const handleExploreClick17 = () => {
        navigate17('/fitness');
    };

    const [imgs1,setImgs1]=useState(0);
    const imgarr1=[
        f1,f2,f3
    ]
    function nextimg1(){
        setImgs1((index)=>((index+1)%imgarr1.length));
    }
    function previmg1(){
        setImgs1((index)=>((index-1+imgarr1.length)%imgarr1.length));
    }

    const [imgs2,setImgs2]=useState(0);
    const imgarr2=[
        f26,f21,f22,f23,f24,f25
    ]
    function nextimg2(){
        setImgs2((index)=>((index+1)%imgarr2.length));
    }
    function previmg2(){
        setImgs2((index)=>((index-1+imgarr2.length)%imgarr2.length));
    }

    const [imgs3,setImgs3]=useState(0);
    const imgarr3=[
        f34,f32,f33,f31,f35
    ]
    function nextimg3(){
        setImgs3((index)=>((index+1)%imgarr3.length));
    }
    function previmg3(){
        setImgs3((index)=>((index-1+imgarr3.length)%imgarr3.length));
    }

    const [imgs4,setImgs4]=useState(0);
    const imgarr4=[
        f41,f42,f43,f44
    ]
    function nextimg4(){
        setImgs4((index)=>((index+1)%imgarr4.length));
    }
    function previmg4(){
        setImgs4((index)=>((index-1+imgarr4.length)%imgarr4.length));
    }

    const caparr=[
    {
        image:m61,
        fc:"Chipkali® Magical Universal Premium…",
        idx:0,
        price:"₹1,799.00" ,
        MRP:"₹2,499.00"
    },
    {
        image:m62,
        fc:"Nuha Rugs Modern Soft Shaggy Rug…",
        idx:1,
        price:"₹3,499.00",
        MRP:"₹6,999.00"
    },
    {
        image:m63,
        fc:"JAYSHA CARPET Export Quality Soft…",
        idx:2,
        price:"₹2,800.00",
        MRP:"₹8,999.00"
    },
    {
        image:m64,
        fc:"Carpets for Living Room Handwoven…",
        idx:3,
        price:"₹2,239.00",
        MRP:"₹5,466.00"
    }]

    const [caption,setCaption]=useState(caparr[0])

    const handleImageClick = (item) => {
        setCaption(item);
      };

      const caparr1=[
        {
            image:m71,
            fc:"GREAT OUTFITS Ikkat Print Kurta…",
            idx:0,
            price:"₹999.00" ,
            MRP:"₹1,499.00"
        },
        {
            image:m72,
            fc:"GANPATI Straight Kurta V-Neck…",
            idx:1,
            price:"₹1,499.00",
            MRP:"₹1,999.00"
        },
        {
            image:m73,
            fc:"Lourdes Light Embroidered Kurta…",
            idx:2,
            price:"₹1,200.00",
            MRP:"₹1,499.00"
        },
        {
            image:m74,
            fc:"ZEYO Night Suit for Women...…",
            idx:3,
            price:"₹639.00",
            MRP:"₹1,066.00"
        }]
    
    const [caption1,setCaption1]=useState(caparr1[0])

    const handleImageClick1 = (item) => {
        setCaption1(item);
        };
    const caparr2=[
    {
        image:m81,
        fc:"INOVERA (LABEL) Pool Space…",
        idx:0,
        price:"₹1,299.00" ,
        MRP:"₹1,499.00"
    },
    {
        image:m82,
        fc:"Essentials Multipurpose Modular…",
        idx:1,
        price:"₹999.00",
        MRP:"₹1,199.00"
    },
    {
        image:m83,
        fc:"Hago Storage Container for Kitchen…",
        idx:2,
        price:"₹300.00",
        MRP:"₹599.00"
    },
    {
        image:m84,
        fc:"ViVed Expandable Slider Storage...",
        idx:3,
        price:"₹339.00",
        MRP:"₹566.00"
    }]

    const [caption2,setCaption2]=useState(caparr2[0])

    const handleImageClick2 = (item) => {
        setCaption2(item);
      };

    const images=[
        img1,img2,img3,img4,img5,img6,img7
    ]
    const [curentIndex,SetCurrentIndex]=useState(0);
    function next(){
        SetCurrentIndex((ind)=>(ind+1)%images.length);
    }

    function prev(){
        SetCurrentIndex((ind)=>(ind-1+images.length)%images.length);
    }

  return (
    <>
      <div id='img_container'>
      <i onClick={prev} class="bi bi-chevron-compact-left"></i>
        <img
            src={images[curentIndex]} alt={`Slide ${curentIndex+1}`}
        ></img>
        <i onClick={next} class="bi bi-chevron-compact-right"></i>
      </div>
      <div id='grid_wrapper'>
        <div className='grid1'>
        <h4>Revamp your home in style</h4>
            <div onClick={handleExploreClick1} className='inner_grid'><figure>
                <img src={g11} alt='bedsheet' loading='lazy'></img>
                <figcaption>Cushion covers</figcaption>
            </figure>
            <figure>
                <img src={g12} alt='vase' loading='lazy'></img>
                <figcaption>Figurines & vases </figcaption>
            </figure>
            <figure>
                <img src={g13} alt='home storage' loading='lazy'></img>
                <figcaption>Home storage</figcaption>
            </figure>
            <figure>
                <img src={g14} alt='lamp' loading='lazy'></img>
                <figcaption>Lighting solutions</figcaption>
            </figure>
        </div>
        <h5 onClick={handleExploreClick1}>Explore all</h5>
        </div>
        <div className='grid1'>
        <h4>Appliances for your home | Up to 55% off</h4>
            <div onClick={handleExploreClick3} className='inner_grid'><figure>
                <img id='ac' src={g21} alt='air-conditioner' loading='lazy'></img>
                <figcaption>Air conditioners</figcaption>
            </figure>
            <figure>
                <img id='refg' src={g22} alt='refrigerator' loading='lazy'></img>
                <figcaption>Refrigerators</figcaption>
            </figure>
            <figure>
                <img id='oven' src={g23} alt='washing machine' loading='lazy'></img>
                <figcaption>Washing machine</figcaption>
            </figure>
            <figure>
                <img id='wash' src={g24} alt='microwave oven' loading='lazy'></img>
                <figcaption>Microwave oven</figcaption>
            </figure>
            </div>
            <h5 onClick={handleExploreClick3}>See all offers</h5>
        </div>
        <div className='grid1'>
        <h4>Starting  <i class="bi bi-currency-rupee"></i>149 | Headphones</h4>
            <div onClick={handleExploreClick2} className='inner_grid'><figure>
                <img src={g31} alt='boat' loading='lazy'></img>
                <figcaption>Starting  <i class="bi bi-currency-rupee"></i>249 | boAt</figcaption>
            </figure>
            <figure>
                <img src={g32} alt='boult' loading='lazy'></img>
                <figcaption>Starting  <i class="bi bi-currency-rupee"></i>349 | boult</figcaption>
            </figure>
            <figure>
                <img src={g33} alt='noise' loading='lazy'></img>
                <figcaption>Starting  <i class="bi bi-currency-rupee"></i>639 | Noise</figcaption>
            </figure>
            <figure>
                <img src={g34} alt='zebronics' loading='lazy'></img>
                <figcaption>Starting  <i class="bi bi-currency-rupee"></i>137 | Zebronics</figcaption>
            </figure>
        </div>
        <h5 onClick={handleExploreClick2}>Explore all</h5>
        </div>
        <div className='grid1'>
        <h4>Automotive essentials | Up to 65% off</h4>
            <div onClick={handleExploreClick4} className='inner_grid'>
            <figure>
                <img id='clean' src={g41} alt='cleaning accessories' loading='lazy'></img>
                <figcaption>Cleaning accessories</figcaption>
            </figure>
            <figure>
                <img id='helmet' src={g42} alt='helmet' loading='lazy'></img>
                <figcaption>Helmets</figcaption>
            </figure>
            <figure>
                <img src={g43} alt='vacuum cleaner' loading='lazy'></img>
                <figcaption>Vacuum cleaner</figcaption>
            </figure>
            <figure>
                <img src={g44} alt='tyre & rim case' loading='lazy'></img>
                <figcaption>Tyre & rim care</figcaption>
            </figure>
        </div>
        <h5 onClick={handleExploreClick4}>See all offers</h5>
        </div>
        <div className='grid1'>
        <h4>Starting  <i class="bi bi-currency-rupee"></i>199 | Amazon Brands & more</h4>
            <div onClick={handleExploreClick5} className='inner_grid'>
            <figure>
                <img src={g51} alt='cushion' loading='lazy'></img>
                <figcaption>Bedsheets</figcaption>
            </figure>
            <figure>
                <img src={g52} alt='curtains' loading='lazy'></img>
                <figcaption>Starting 199 | Curtains</figcaption>
            </figure>
            <figure>
                <img src={g53} alt='decors' loading='lazy'></img>
                <figcaption>Up to 40% off | Decors</figcaption>
            </figure>
            <figure>
                <img src={g54} alt='ironing board' loading='lazy'></img>
                <figcaption>Ironing board</figcaption>
            </figure>
        </div>
        <h5 onClick={handleExploreClick5}>See all offers</h5>
        </div>
        <div className='grid1'>
        <h4>Up to 50% off | Styles for women</h4>
            <div onClick={handleExploreClick6} className='inner_grid'>
            <figure>
                <img src={g61} alt='fashion' loading='lazy'></img>
                <figcaption>Women Clothing</figcaption>
            </figure>
            <figure>
                <img src={g62} alt='bags' loading='lazy'></img>
                <figcaption>Footwear+Handbags</figcaption>
            </figure>
            <figure>
                <img src={g63} alt='jewellery' loading='lazy'></img>
                <figcaption>Fashion jewellery</figcaption>
            </figure>
            <figure>
                <img src={g64} alt='watch' loading='lazy'></img>
                <figcaption>Watches</figcaption>
            </figure>
        </div>
        <h5 onClick={handleExploreClick6}>See more</h5>
        </div>
        <div className='grid1'>
        <h4>Min. 40% off | Fun toys & games | Amazon brands</h4>
            <div onClick={handleExploreClick7} className='inner_grid'><figure>
                <img src={g71} alt='toys' loading='lazy'></img>
                <figcaption>Min. 30% off | soft toys</figcaption>
            </figure>
            <figure>
                <img src={g72} alt='ride-ons' loading='lazy'></img>
                <figcaption>Indoor & outdoor games</figcaption>
            </figure>
            <figure>
                <img src={g73} alt='outdoor games' loading='lazy'></img>
                <figcaption>Min. 30% off | Ride-ons</figcaption>
            </figure>
            <figure>
                <img src={g74} alt='indoor-games' loading='lazy'></img>
                <figcaption>outdoor games</figcaption>
            </figure>
        </div>
        <h5 onClick={handleExploreClick7}>See more</h5>
        </div>
        <div className='grid1'>
        <h4>Up to 60% off | Professional tools </h4>
            <div onClick={handleExploreClick8} className='inner_grid'><figure>
                <img src={g81} alt='professional tools' loading='lazy'></img>
                <figcaption>Professional tools</figcaption>
            </figure>
            <figure>
                <img src={g82} alt='medical supplies' loading='lazy'></img>
                <figcaption>Medical supplies</figcaption>
            </figure>
            <figure>
                <img src={g83} alt='measuring quantities' loading='lazy'></img>
                <figcaption>Measuring instruments</figcaption>
            </figure>
            <figure>
                <img src={g84} alt='cleaning supplies' loading='lazy'></img>
                <figcaption>Cleaning supplies</figcaption>
            </figure>
        </div>
        <h5 onClick={handleExploreClick8}>See all offers</h5>
      </div>
      </div>

      <div onClick={handleExploreClick9} id='flex_wrapper'>
        <h3 onClick={handleExploreClick9}>Best deals curated from stores nearby<span>See all offers</span></h3>
        
        <i id='left' onClick={previmg1} class="bi bi-chevron-compact-left"></i>
            <img src={imgarr1[imgs1]} alt='fashion' loading='lazy'></img>
        <i id='right' onClick={nextimg1} class="bi bi-chevron-compact-right"></i>
      </div>
      <div id='grid_wrapper'>
        <div  className='grid1'>
        <h4>Under <i class="bi bi-currency-rupee"></i>499 | Pocket-friendly fashion</h4>
            <div onClick={handleExploreClick13} className='inner_grid'><figure>
                <img src={m11} alt='clothing' loading='lazy'></img>
                <figcaption>Clothing</figcaption>
            </figure>
            <figure>
                <img src={m12} alt='backacks' loading='lazy'></img>
                <figcaption>Backpacks </figcaption>
            </figure>
            <figure>
                <img src={m13} alt='footwear' loading='lazy'></img>
                <figcaption>Footwear</figcaption>
            </figure>
            <figure>
                <img src={m14} alt='view all' loading='lazy'></img>
                <figcaption>View all</figcaption>
            </figure>
        </div>
        <h5 onClick={handleExploreClick13}>Explore all</h5>
        </div>
        <div className='grid1'>
        <h4>Customers' Most-Loved Fashion for you</h4>
            <div onClick={handleExploreClick14}  className='inner_grid'><figure>
                <img id='blackshoe' src={m31} alt='black shoe' loading='lazy'></img>
            </figure>
            <figure>
                <img id='tshirt' src={m32} alt='tshirts' loading='lazy'></img>
            </figure>
            <figure>
                <img id='whitesneaker' src={m33} alt='white sneakers' loading='lazy'></img>
            </figure>
            <figure>
                <img id='menfashion' src={m34} alt='mens fashion' loading='lazy'></img>
            </figure>
        </div>
        <h5 onClick={handleExploreClick14}>Explore all</h5>
        </div>
        <div className='grid1'>
        <h4>Amazon Fresh | Great Prices | Fruits & Vegetables</h4>
            <div onClick={handleExploreClick15} className='inner_grid'><figure>
                <img id='fruits' src={m21} alt='fruits' loading='lazy'></img>
                <figcaption>Fruits</figcaption>
            </figure>
            <figure>
                <img id='premium' src={m22} alt='premium' loading='lazy'></img>
                <figcaption>Premium & exotic</figcaption>
            </figure>
            <figure>
                <img src={m23} alt='Season' loading='lazy'></img>
                <figcaption>Season's special</figcaption>
            </figure>
            <figure>
                <img  src={m24} alt='vegetables' loading='lazy'></img>
                <figcaption>Vegetables</figcaption>
            </figure>
            </div>
            <h5 onClick={handleExploreClick15}>See all offers</h5>
        </div>
        <div className='grid1'>
        <h4>Customers' Most-Loved products</h4>
            <div onClick={handleExploreClick16} className='inner_grid'>
            <figure>
                <img id='fav1' src={m41} alt='fav1' loading='lazy'></img>
            </figure>
            <figure>
                <img id='fav2' src={m42} alt='fav2' loading='lazy'></img>
            </figure>
            <figure>
                <img id='fav3' src={m43} alt='fav3' loading='lazy'></img>
            </figure>
            <figure>
                <img id='fav4' src={m44} alt='fav4' loading='lazy'></img>
            </figure>
        </div>
        <h5 onClick={handleExploreClick16}>See all offers</h5>
        </div>
      </div>
      <div id='flex_wrapper'>
        <h3 onClick={handleExploreClick10}>Best deals curated from stores nearby<span>See all offers</span></h3>
        <i id='left' onClick={previmg2} class="bi bi-chevron-compact-left"></i>
            <img onClick={handleExploreClick10} src={imgarr2[imgs2]} alt='fashion' loading='lazy'></img>
        <i id='right' onClick={nextimg2} class="bi bi-chevron-compact-right"></i>
      </div>
      <div id='grid_wrapper'>
      <div className='grid1'>
        <h4>Starting <i class="bi bi-currency-rupee"></i>99 | Start your fitness journey</h4>
            <div onClick={handleExploreClick17} className='inner_grid'>
            <figure>
                <img onClick={handleExploreClick17} id='fitness' src={m5} alt='fitness' loading='lazy'></img>
            </figure>
        </div>
        <h5 onClick={handleExploreClick17}>See all offers</h5>
        </div>
        <div className='grid1'>
        <h4>Up to 80% off | Top deals in home furnishings from...</h4>
            <div id='maincont'>
            <figure>
                <img  src={caption.image} alt='product1' loading='lazy'></img>
                <figcaption style={{ textAlign:'center' }}>{caption.fc}<br></br><strong>{caption.price}</strong><br></br>M.R.P :<span>{caption.MRP}</span></figcaption>
            </figure>
            </div>
            <div id="inner_flex" style={{ display: 'flex' }}>
        {caparr.map((item, index) => (
          <figure key={index} onClick={() => handleImageClick(item)} style={{ cursor: 'pointer' }}>
            <img key={index} id={`flex${index + 1}`} src={item.image} alt={`product-${index}`} loading="lazy" />
          </figure>
        ))}
      </div>
        </div>
        <div className='grid1'>
        <h4>No cost EMI up to 24 months | Starting <i class="bi bi-currency-rupee"></i>2,233</h4>
        <div id='maincont'>
            <figure>
                <img  src={caption1.image} alt='product1' loading='lazy'></img>
                <figcaption style={{ textAlign:'center' }}>{caption1.fc}<br></br><strong>{caption1.price}</strong><br></br>M.R.P :<span>{caption1.MRP}</span></figcaption>
            </figure>
            </div>
            <div id="inner_flex" style={{ display: 'flex' }}>
        {caparr1.map((item, index) => (
          <figure key={index} onClick={() => handleImageClick1(item)} style={{ cursor: 'pointer' }}>
            <img key={index} id={`flex${index + 1}`} src={item.image} alt={`product-${index}`} loading="lazy" />
          </figure>
        ))}
      </div>
        </div>
        <div className='grid1'>
        <h4>Up to 60% off | Kitchen essentials sourced from...</h4>
        <div id='maincont'>
            <figure>
                <img  src={caption2.image} alt='product1' loading='lazy'></img>
                <figcaption style={{ textAlign:'center' }}>{caption2.fc}<br></br><strong>{caption2.price}</strong><br></br>M.R.P :<span>{caption2.MRP}</span></figcaption>
            </figure>
            </div>
            <div id="inner_flex" style={{ display: 'flex' }}>
        {caparr2.map((item, index) => (
          <figure key={index} onClick={() => handleImageClick2(item)} style={{ cursor: 'pointer' }}>
            <img key={index} id={`flex${index + 1}`} src={item.image} alt={`product-${index}`} loading="lazy" />
          </figure>
        ))}
      </div>
      </div>
      </div>
      <div id='flex_wrapper'>
        <h3 onClick={handleExploreClick11}>Best deals curated from stores nearby<span>See all offers</span></h3>
        
        <i id='left' onClick={previmg3} class="bi bi-chevron-compact-left"></i>
            <img onClick={handleExploreClick11} src={imgarr3[imgs3]} alt='fashion' loading='lazy'></img>
        <i id='right' onClick={nextimg3} class="bi bi-chevron-compact-right"></i>
      </div>
      <div id='flex_wrapper'>
        <h3 onClick={handleExploreClick12}>Best deals curated from stores nearby<span>See all offers</span></h3>
        <i id='left' onClick={previmg4} class="bi bi-chevron-compact-left"></i>
            <img onClick={handleExploreClick12} src={imgarr4[imgs4]} alt='fashion' loading='lazy'></img>
        <i id='right' onClick={nextimg4} class="bi bi-chevron-compact-right"></i>
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
   
export default Main;
