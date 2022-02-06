import React from 'react'

export default function Footer() {
  return (
    <footer>
        <div className='footer-div'>
            <h3>Join the Adventure newsletter to receive our best veaction deals</h3>
            <h3>You can unsubscribe et any time</h3>
            <div>
                <input type="text" placeholder='Your Email' />
                <button>Subscribe</button>
            </div>
        </div>
        <div className='uls'>
        <div>
            <div>About Us</div>
            <ul>
                <li><a>How it works</a></li>
                <li><a>Testimonials</a></li>
                <li><a>Careers</a></li>
                <li><a>Investors</a></li>
                <li><a>Terms of Service</a></li>
            </ul>
        </div>
        <div>
            <div>Contact Us</div>
            <ul>
                <li><a>Contact</a></li>
                <li><a>Support</a></li>
                <li><a>Destinanons</a></li>
                <li><a>Sponsorships</a></li>
            </ul>
        </div>
        <div>
            <div>Videos</div>
            <ul>
                <li><a>Submit Video</a></li>
                <li><a>Ambassadors</a></li>
                <li><a>Agency</a></li>
                <li><a>Influencar</a></li>
            </ul>
        </div>
        <div>
            <div>Social Media</div>
            <ul>
                <li><a>Instagram</a></li>
                <li><a>Facebook</a></li>
                <li><a>Youtube</a></li>
                <li><a>Twitter</a></li>
            </ul>
        </div>
        </div>
        <div className='footer-last-div'>
            <div>
                <h3>TRVL</h3>
            </div>
            <div className='c'>TRVL C 2022</div>
            <div className='icons'>
                <i class="fab fa-instagram"></i>
                <i class="fab fa-facebook-f"></i>
                <i class="fab fa-youtube"></i>
                <i class="fab fa-twitter"></i>
            </div>
        </div>
    </footer>
  )
}
