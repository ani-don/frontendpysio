import React from 'react'
import Header from '../components/Header'
import SpecialityMenu from '../components/SpecialityMenu'
import TopDoctors from '../components/TopDoctors'
import Banner from '../components/Banner'
import Feed from '../components/Feed'

import Banner1 from '../components/Banner1'

import { HeroParallaxDemo } from '../components/ui/HeroParallaxDemo'
import Faq from '../components/Faq'
import Footer from '../components/Footer'




const Home = () => {
  return (
    <div >
    
   <Header/>
   <SpecialityMenu/>
   <TopDoctors/>
   <Feed/>
   <Banner/>

<HeroParallaxDemo/>

<Banner1/>
<Faq/>
<Footer/>


   
    </div>
  )
}

export default Home
