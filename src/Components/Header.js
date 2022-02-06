import React, { useState } from 'react';
import video from "../img/video1.mp4";

export default function Header() {
  let videos = document.querySelector("video")
  let [stop,Setstop] = useState(false)
  return (
    <header>
        <h1 id='header-h1'>Adventure Awaits</h1>
        <h3>What are you waiting for?</h3>
        <div className='btn'>
            <button>Get Started</button>
            <button id='btn'  onClick={() => {
              Setstop(!stop)
              videos.classList.add('vid')
              videos.play()
            }} >Watch Trailer <i class="far fa-play-circle" style={{fontSize:18}}></i></button>
            <i class="fas fa-times" id='close' onClick={() => {
              videos.classList.remove('vid')
            }} style={{
              fontSize:30,
              marginTop:5,
              marginLeft:15
            }}></i>
        </div>
        <video id='vid' autoPlay loop >
          <source src={video} type='video/mp4' />
        </video>
    </header>
  )
}