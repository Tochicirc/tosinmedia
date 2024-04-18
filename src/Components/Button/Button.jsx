import React from 'react'
import './Button.scss'

const Button = ({ text, icon, link, variant}) => {
  return (
    <div className='btn norm' style={{background:`${'#'+variant}`}}>
        <a href={link} target="_blank">{text}</a>
        {icon && <img src={icon} alt='icon'/>}
    </div >
  )
}

export default Button