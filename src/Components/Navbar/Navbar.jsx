import React from 'react'
import Button from '../Button/Button'
import { arrowRight } from '../../assets'
import './Navbar.scss'

const Navbar = () => {
  return (
    <header className='container navbarHead'>
        <nav className='navbar norm'>
            <div className='right_div'>
                <p>
                    <span className='bold'>TOSIN</span>Media
                </p>
            </div>

            <div className='mid_div'>
                <a href='#'>MIA Software</a>

                <a href='#'>Our Proccess</a>
            </div>

            <div className='left_div'>
                <Button text={'Your Demo'} link={'https://calendly.com/tosinmedia-address/demo-call?month=2024-04'}
                 icon={arrowRight} variant='FFDE02'/>
            </div>
        </nav>
    </header>
  )
}

export default Navbar