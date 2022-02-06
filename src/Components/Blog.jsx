import React from 'react'
import img1 from "../img/blog-img1.jpg";
import img2 from "../img/blog-img2.jpg";
import img3 from "../img/blog-img3.jpg";
import img4 from "../img/blog-img4.jpg";
import img5 from "../img/blog-img5.jpg";

export default function Blog() {
  return (
      <>
    <main className='main1'  id='products'>
        <h3 id='title'>Check out these EPIC Destianons!</h3>
    <div className='blog-divs'>
        <div>
            <img src={img1} className='img1'/>
            <button>Adventure</button>
            <h5>Explore the hidden waterfull deep inside the Amazon Jungle</h5>
        </div>
        <div>
            <img src={img2} className='img1'/>
            <button id='btn1'>Lanuary</button>
            <h5>Travel through the islands Bali in a Private Cruise</h5>
        </div>
    </div>
    </main>
    <main className='main2'>
    <div className='blog-divs2'>
        <div>
            <img src={img3} className='img2' />
            <button id="btn2">Mystery</button>
            <h5>Set Sall In The Attlantic Ocean <br />visiting Uncharted Waters</h5>
        </div>
        <div>
            <img src={img4} className='img2' />
            <button>Adventure</button>
            <h5>Experience Football on Top of the <br />Himilayan Mountains</h5>
        </div>
        <div>
            <img src={img5} className='img2' />
            <button>Adventure</button>
            <h5>Ride throught the Sahara Desert on a <br />guided camel tour</h5>
        </div>
    </div>
    </main>
    </>
  )
}
