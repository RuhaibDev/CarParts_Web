import React from 'react'
import Header from './Header'
import './HeroPage.css'
import HeroPageSection from './HeroPageSection'
const Heropage = ({ onProductSelect }) => {
  return (
    <div className='heropage'>
        <Header></Header>
        <HeroPageSection onProductSelect={onProductSelect}></HeroPageSection>
    </div>
  )
}

export default Heropage