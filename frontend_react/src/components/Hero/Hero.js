import React from 'react'
import { images } from '../../constants'


const Hero = (props) => {
  return (
    <>
    <div className={props.cName}>
      <img src={props.heroImg} alt="Bg_image" />

      <div className='hero-text'>
        <h1>{props.title}</h1>
        <p>{props.text}</p>
        <a href={props.url} className={props.btnClass}>
          {props.buttonText}
        </a>
      </div>
    </div>
    </>
    
  )
}

export default Hero