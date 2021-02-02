import React from 'react';
import './Cards.css';
import CardItem from './CardItem';
import card1 from '../images/card1.jpg';
import card2 from '../images/card2.jpg';
import card3 from '../images/card3.jpg';
import card4 from '../images/card4.jpg';
import devHome from '../images/devHome2.jpg';
import consultingHome from '../images/consultingHome.jpg';
import { Button } from './Button';
import './HeroSection.css';




function Cards() {
  return (
    <>
    <div className='cards_container'>
    <p class="home_cards_title">Our Services</p>
    <div class='cards_div'>
        <div class='cards_items'>
          <p class="cardsImgP"><img src={consultingHome} alt="consultingHome" class="cardsImg"/></p>
          <p class="cardstyleBold">Recruitment Soutions</p>
          <p class="cardstyle">We offer a full spectrum of IT staffing services to help you meet the needs of your organization with the right people, skills and competencies. 
            <br/>Our hardworking, talented and experienced talent acquisition team thoroughly assesses your workforce needs, develops a customized staffing strategy and delivers you qualified human resource that accelerates your business growth and helps you build a sustainable competitive advantage.
            <br/>We strive to fill the strategically important positions in your organization with the right people at the right time, without compromising on quality.
            The result of which is a productive and agile IT workforce that drives your business forward and helps your organization reach new heights of success.</p>
            <div className='hero-btns'>
        <Button
          className='buttonStyle'
          buttonStyle='hero-btn-outline'
          buttonSize='btn--large'
          linkName='/Consulting'
        >
          LEARN MORE
        </Button>
      </div>
        <br/>
        </div> 
        <div class='cards_items1'>
          <p class="cardsImgP"><img src={devHome} alt="devHome" class="cardsImg"/></p>
          <p class="cardstyleBold">Application Development</p>
          <p class="cardstyle">We bring together specific teams and resources to each project  and give you our promise that we will deliver exactly what we say we will.
              <br/>Our project and development teams go beyond managing scope, schedule and budgets.
              <br/> Fueled by ideas, expertise and passion, we deliver projects that inspire.
              <br/>Each client is unique and we understand that it’s our customers who drive the world which is why we focus on understanding and aligning with your culture, objectives and goals.
              <br/> This allows us to leverage our scalable platform of specialists to best fulfill your needs.</p>
              <div className='hero-btns'>
        <Button
          className='buttonStyle'
          buttonStyle='hero-btn-outline'
          buttonSize='btn--large'
          linkName='/Development'
        >
          LEARN MORE
        </Button>
      </div>
        </div>      
      </div>
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
     
    </>
  );
}

export default Cards;
