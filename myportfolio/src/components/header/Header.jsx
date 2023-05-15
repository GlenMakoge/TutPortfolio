import React from 'react'
import './header.css'
import CTA from './CTA'
import headerSocial from './headerSocial'
export default function Header() {
  return (
    <div>
      <h5>Hello I'm</h5>
      <h1>Glen Makoge</h1>
      <h5 className='text-light'>Software Engineer </h5>
      <CTA />
      <headerSocial />
      <div className='my_image'>
       
      </div>
      <a href='#contact' className='scroll__down'>Scroll down</a>
    </div>
  )
}
