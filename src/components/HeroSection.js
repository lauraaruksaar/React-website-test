import React from 'react'
import '../App.css';
import { Button } from './Button'
import './HeroSection.css';

function HeroSection() {
  return (
    <div className='hero-container'>
        <h1>TUDENGIPORTFOOLIO</h1>
        <div className='hero-btns'>
            <Button
            className='btns' 
            buttonStyle='btn--outline'
            buttonSize='btn--large'>
            Registreeri
            </Button>
            <Button
            className='btns' 
            buttonStyle='btn--primary'
            buttonSize='btn--large'>
            Logi sisse
            </Button>
        </div>
    </div>
  );
}

export default HeroSection;