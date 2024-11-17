import React from 'react'
import Slider from '../../components/slider/Slider'
import FeaturedProduct from '../../components/featuredProduct/FeaturedProduct'
import Categories from "../../components/categories/Categories"
import Contact from '../../components/contact/Contact'

const Home = () => {
  return (
    <div className='home'>
      <Slider/>
      <FeaturedProduct type = "featured"/>
      <Categories/>
      <FeaturedProduct type = "trending"/>
      <Contact/>
    </div>
  )
}

export default Home