import React from 'react';
import '../../App.css';
import whyUsImg from '../../images/3.jpg';
import card1 from '../../images/card1.jpg';
import card2 from '../../images/card2.jpg';
import card3 from '../../images/card3.jpg';
import card4 from '../../images/card4.jpg';


import Footer from '../Footer';


 function whyUs() {
  return (
  <>
    <div className='whyusbannerWrapper'>
      <h5>Why Choose Us</h5>
    </div>
    <div class="whyUswrapper">
      <img src={whyUsImg} alt="WhyUs" class="whyUsImg1"/> 
      <p className='whyUsP'>
        At ProgressiveCliff, we prioritize individuals before processes and clients before profits. This principle is the driving force in everything that we do.
        ProgressiveCliff is a US based startup consulting firm.
        <br/>
        We represent a very vibrant, growing team of professionals who lend their years of experience and expertise to deliver sound knowledge management solutions to an audience that comprises of our customers across different cultures.
        <br/>
        What sets us apart is our passion for our customers. We understand that it’s our customers who drive the world. Processes, Profits or Technology, while being important, cannot be the only fulcrum of any industry. This is why our policies as an organization are people-centric and our services as a business, client centric.
        <br/>
        Our values commit to every client success through innovation and excellence in quality and trust. Our aim is to give you the best in building your career by connecting the right person to the right company.
        <br/>
        ProgressiveCliff  is Client centric and aspires to become a market leader by consistently outperforming and exceeding our Clients expectations by capitalizing on the efficiency of Information Technology Industry.
        <br/>
      </p>
    </div>
    <div className='cards_container1'>
    <p class="home_cards_title">Why Choose Us</p>
        <div class='cards_items3'>
          <p class="cardsImgP"><img src={card1} alt="card1" class="cardsImg1"/></p>
          <p class="cardstyleBold">Build your Career</p>
          <p class="cardstyle">We make your job search easy with targeted career placement and access to exclusive job openings</p>
        
        </div> 
        <div class='cards_items3'>
        <p class="cardsImgP"><img src={card2} alt="card2" class="cardsImg1"/></p>
              <p class="cardstyleBold">Make the right connections</p>
              <p class="cardstyle">We work with the best professionals and connect the right person with the right company</p>
        </div>
     
        
        

        <div class='cards_items3'>
        <p class="cardsImgP"><img src={card3} alt="card3" class="cardsImg1"/></p>
              <p class="cardstyleBold">Value relationships</p>
              <p class="cardstyle">We treasure the relations between us and you, and you and your IT consultant</p>
        
        </div> 
        <div class='cards_items3'>
        <p class="cardsImgP"><img src={card4} alt="card4" class="cardsImg1"/></p>
              <p class="cardstyleBold">World Class Service</p>
              <p class="cardstyle">We continuosly strive in providing a best in class service to our clients</p>
        </div>
     
        
        
      </div>
    <Footer />
  </>
  );

}


export default whyUs;
