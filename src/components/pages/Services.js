import React from 'react';
import '../Cards.css';
import devHome from '../../images/devHome2.jpg';
import consultingHome from '../../images/consultingHome.jpg';
import { Button } from '../Button';
import '../HeroSection.css';

import Footer from '../Footer';

export default function Services() {
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
    <Footer />
    </>
  );
}
