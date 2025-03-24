import React from 'react'
import Hero from '../Components/Home/Hero'
import DigitalGaming from '../Components/Home/DigitalGaming';
import RatedProducts from '../Components/Home/RatedProducts';
import HomeSlider from '../Components/Home/HomeSlider';
import HomeBlog from '../Components/Home/HomeBlog';

const Home = () => {
  return (
    <div> 
        <Hero />
        <DigitalGaming />
        <RatedProducts/>
        <HomeBlog/>
        <HomeSlider/>
    </div>
  )
}

export default Home;