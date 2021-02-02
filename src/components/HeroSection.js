import React from 'react';
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';

function HeroSection() {
  return (
    <div className='hero-container'>

      <h1 className="heroStyleh1">WORLD CLASS LEADER</h1>
      <p className="homestyle">Delivering Customized IT Solutions</p>
      <p className="homestyle1">........we help you to take the LEAP</p>
      <div className='hero-btns'>
        <Button
          className='btns'
          buttonStyle='hero-btn-outline'
          buttonSize='btn--large'
        >
          LEARN MORE
        </Button>
      </div>
    </div>
  );
}

export default HeroSection;