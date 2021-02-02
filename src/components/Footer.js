import React from 'react';
import './Footer.css';
import { Button } from './Button';
import { Link } from 'react-router-dom';
import logo from "../images/Logo1.jpg";

function Footer() {
  return (
    <div className='footer-container'>
      
      <div class='footer-links'>
        <div class='footer-link-items'>
          <p ><img src={logo} className="footerLogoStyle"/></p>
          <p className="pstyle">At Progressive Cliff, we continuosly strive to be the world leaders by delivering customer-centric personalised IT Solutions.</p>
          <p className="pstyle">With the help of the finest professional team, we guide the consultants to find their dream job and provide 
            the clients with the best suited consultants for their requirements in a timely manner.</p>
        
        </div> 
        <div class='footer-link-items1'>
           <p class="connectStyle"> Quick Links </p>
           <Link  to='/' class="contactStyle">Home</Link>
           <Link  to='/services' class="contactStyle">Services</Link>
           <Link  to='/whyUs' class="contactStyle">Why Us</Link>
           <Link  to='/contactUs' class="contactStyle">Contact Us</Link>
        </div>
        <div class='footer-link-items2'>
           <p class="connectStyle">  Stay Connected </p>
           <p class="fa fa-map-marker contactStyle">&nbsp;  Mountain View, CA 94040</p>
           <p class="fa fa-envelope contactStyle">&nbsp;  hr@progressivecliff.com</p>
           <p class="fa fa-phone contactStyle">&nbsp;  650-943-0620</p>
        </div>
        
        
      </div>
      <div class='website-rights'>
         <p class='website-rights'>Copyright © 2021  Progressive Cliff, All Rights Reserved</p>
   
      </div>
    </div>
  );
}

export default Footer;
