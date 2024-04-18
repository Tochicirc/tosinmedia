import React from 'react'
import './Hero.scss'
import { brandImage, logo1, manager, moneyGrowth, support1 } from '../../assets'
import { arrowRight } from '../../assets'
import Button from '../../Components/Button/Button'
import HeroFooter from '../../Components/HeroFooter/HeroFooter'

const Hero = () => {


  return (

    <section className='hero_sect container'>
      <div className='hero_img'>
        <img src={logo1} style={{with :'380px', height:'380px'}}/>
      </div>

      <div className='hero_header'>
        <div className='header-text'>
          <h1 className='header'>
            Upgrade the way 
            you sell
          </h1>
        </div>
       

        <div className='hero_para'>
          <p className='norm'>
            Partner with the world’s leading innovators in marketing and benefit 
            from a steady stream of cases
          </p>
        </div>
      </div>

      <div className='buttons'>
          <Button text={'Your Demo'} link={'https://calendly.com/tosinmedia-address/demo-call?month=2024-04'} 
          icon={arrowRight} variant='FFDE02'/>
          <Button text={'Our Proccess'}  variant='E3EEEF'/>      
      </div>

      
        <HeroFooter/>
    </section>
  )
}

export default Hero