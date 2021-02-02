import React from 'react';
import '../../App.css';
import whyUsImg from '../../images/3.jpg';
import consultingImg from '../../images/consultingImg.jpg';

import '../Dropdown.css';


import devImg from '../../images/dev.jpg';

import webdev from '../../images/webapps1.jpg';
import mobdev from '../../images/mobileapp1.jpg';
import dbdev from '../../images/dbapp.jpg';
import clouddev from '../../images/cloudapp.jpg';





import Footer from '../Footer';


 function Development() {
  return (
  <>
    <div className='devbanner'>

      <h5>Development Services</h5>
      </div>
   
      <p className='dev_p'>
      Strong foundations are built on strong relationships.
We bring together specific teams and resources to each project, we respect people as people, and give you our promise that we will deliver exactly what we say we will.

We bring your work culture to life, no matter where you do business. <br/>Our project and development teams go beyond managing scope, schedule and budgets. Fueled by ideas, expertise and passion, we deliver projects that inspire.
Each client is unique and has distinct opportunities or challenges, which is why we focus on understanding and aligning with your culture, objectives and goals. This allows us to leverage our full, scalable platform of specialists to best fulfill your needs.

        <br/>
      </p>
    <div className='dev-container'>
      <p class="cardTitle">Our Technical Expertise</p>
      
      <div class='dev_div'>
        <div class='dev_items'>
          <p class="cardsImgP"><img src={webdev} alt="webdev" class="devCardImg"/></p>
          <p class="cardstyleBold">Web Applications</p>
          <p class="cardstyle">We provide complete software implementation process, starting with software design and development, 
              software quality assurance testing, software deployment to further software upgrades and enhancements.
              We make use of the most efficient frameworks that are not only versatile, but also highly advance, cost effective and simple to understand.</p>
        
        </div> 
        <div class='dev_items1'>
          <p class="cardsImgP"><img src={mobdev} alt="mobdev" class="devCardImg"/></p>
          <p class="cardstyleBold">Mobile Applications</p>
          <p class="cardstyle">Our mobile application designers are capable of creating highly customizable apps that offer 
              the finest user experience to your mobile-customers.
              We offer native mobile app and cross-platform app development services to widen your reach and add flexibility to your business strategy.</p>
        </div>
     
        
        
      </div>

      <div class='dev_div'>
        <div class='dev_items'>
          <p class="cardsImgP"><img src={dbdev} alt="dbdev" class="devCardImg"/></p>
          <p class="cardstyleBold">Database Management</p>
          <p class="cardstyle">We help our clients by managing the client databases with high availability time and with high database performance.
               We also ensure that we maintain database high availability, reclaim wasted space and accelerate database backup and recovery while reducing storage costs.</p>
        
        </div> 
        <div class='dev_items1'>
          <p class="cardsImgP"><img src={clouddev} alt="clouddev" class="devCardImg"/></p>
          <p class="cardstyleBold">Cloud Services</p>
          <p class="cardstyle">Our tech-experts continually scale the cloud environment to ensure that your business is able to 
              advance with technology and meet increasing industry demands.
              We make use of hybrid cloud architecture for improved operational efficiency and cost-effectiveness. </p>
        </div>
     
        
        
      </div>
     
    </div>

    <Footer />
  </>
  );

}


export default Development;
