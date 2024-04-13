import React from 'react'
import './MarketComp.scss'
const MarketComp = ({btn, text, article}) => {
  return (
    <div className='btn_div'>
        <div className='markComp-btn small_text '>
            <p>
                {btn}
            </p>
        </div>
        
        <div className='markComp-text mediumText'>
            <p>
                {text}
            </p>
        </div>

        <article className='markComp-art'>
            <p className='text'>
                {article}
            </p>
        </article>
    </div>
  )
}

export default MarketComp