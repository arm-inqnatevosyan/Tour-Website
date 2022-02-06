import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {

  const header = document.querySelector("header");
  const title = document.querySelector("#title");
  const headerh1 = document.querySelector("#header-h1")

  function home(){
    return (
    header.classList.remove("prods"),
    title.classList.remove("serv"),
    headerh1.innerHTML = "Adventure Awaits"
    )
  }
  function service(){
    const title = document.querySelector("#title")
    return(
    title.classList.add("serv"),
    window.scrollTo(0,700)
    )
  }
  function sign(){
    const sign = document.querySelector(".footer-div");
    return(
      sign.classList.add('signin'),
      window.scrollTo(0,1900)
    )
  }
  const [st,Setst] = useState(false)
  return (
    <>
    <nav>
        <div className='logo'>TRVL</div>
        <ul>
            <li><Link to="/" onClick={home}>Home</Link></li>
            <li><Link to="/services" id='service' onClick={service}>Services</Link></li>
            <li><Link to="/products" id='prods' onClick={() => {
              const header = document.querySelector("header")
              return(
                Setst(true),
                header.classList.add("prods"),
                headerh1.innerHTML = "Products"
              )
            }}>Products</Link></li>
            <li><Link to="/sign-up" onClick={sign}>SIGN UP</Link></li>
        </ul>
    </nav>
    </>
  )
}
