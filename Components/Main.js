import React from 'react'
import { useState } from 'react'
import Main1 from './Main1'
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

function Main() {
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
            <div className='inner_grid'><figure>
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
        <h5>Explore all</h5>
        </div>
        <div className='grid1'>
        <h4>Appliances for your home | Up to 55% off</h4>
            <div className='inner_grid'><figure>
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
            <h5>See all offers</h5>
        </div>
        <div className='grid1'>
        <h4>Starting 149 | Headphones</h4>
            <div  className='inner_grid'><figure>
                <img src={g31} alt='boat' loading='lazy'></img>
                <figcaption>Starting 249 | boAt</figcaption>
            </figure>
            <figure>
                <img src={g32} alt='boult' loading='lazy'></img>
                <figcaption>Starting 349 | boult</figcaption>
            </figure>
            <figure>
                <img src={g33} alt='noise' loading='lazy'></img>
                <figcaption>Starting 639 | Noise</figcaption>
            </figure>
            <figure>
                <img src={g34} alt='zebronics' loading='lazy'></img>
                <figcaption>Starting 137 | Zebronics</figcaption>
            </figure>
        </div>
        <h5>Explore all</h5>
        </div>
        <div className='grid1'>
        <h4>Automotive essentials | Up to 65% off</h4>
            <div className='inner_grid'>
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
        <h5>See all offers</h5>
        </div>
        <div className='grid1'>
        <h4>Starting 199 | Amazon Brands & more</h4>
            <div className='inner_grid'>
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
        <h5>See all offers</h5>
        </div>
        <div className='grid1'>
        <h4>Up to 50% off | Styles for women</h4>
            <div className='inner_grid'>
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
        <h5>See more</h5>
        </div>
        <div className='grid1'>
        <h4>Min. 40% off | Fun toys & games | Amazon brands</h4>
            <div className='inner_grid'><figure>
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
        <h5>See more</h5>
        </div>
        <div className='grid1'>
        <h4>Up to 60% off | Professional tools </h4>
            <div className='inner_grid'><figure>
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
        <h5>See all offers</h5>
      </div>
      </div>
      <Main1/>
    </>
  )
}
   
export default Main
