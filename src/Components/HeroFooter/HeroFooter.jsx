import { brandImage, logo1, manager, moneyGrowth, support1 } from '../../assets'
import React from 'react'
import './HeroFooter.scss'

const HeroFooter = () => {

    const footer = [
        {
          text:"Brand-oriented marketing",
          icon: brandImage,
        },
    
        {
          text: 'We make money when you do',
          icon: moneyGrowth,
        },
    
        {
          text:'Assigned personal manager',
          icon: manager,
        },
    
        {
          text:'24/7 customer support' ,
          icon: support1
        }
      ]

  return (
    <div className='hero_footer'>
        <hr/>
        <div className='ul_div'>
            <ul>
                {footer.map(item =>(
                    <li key={item.icon}>
                        <div><img src={item.icon} alt={item.icon} width={25}/></div>
                        <p>{item.text}</p>
                    </li>
                ))}
            </ul>
        </div>
    </div>
  )
}

export default HeroFooter