import React from 'react'
import { AppleCardsCarouselDemo } from '../components/ui/AppleCardsCarouselDemo'
import { WobbleCardDemo } from '../components/ui/WobbleCardDemo'
import Footer from '../components/Footer'
import SecDoc from '../components/SecDoc'

const About = () => {
  return (
    <div>
      <AppleCardsCarouselDemo/>
      <WobbleCardDemo/>

      <SecDoc/>
      <Footer/>
    </div>
  )
}

export default About
