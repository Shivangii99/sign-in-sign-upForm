import React from 'react'
import './Header.css'
import WDlogo from './WDlogo.jpeg'

export const Header = ()=> {
    return(
        <div className='hero'>
            <div className='hero-2'>
            <img className='image' src={WDlogo} alt='Logo'></img>
            <h2 className='heading'>Welome to WebDuality Technology</h2>
            <p className='para'>GET solution to all technical assisstance <br></br>in just one click !!!</p>
            <b className='bold'>Register Now</b>
            </div>
            
        </div>
    )
}