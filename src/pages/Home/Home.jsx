import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import Hero from '../../components/Hero/Hero'
import Categories from '../../components/Categories/Categories'
import Collection from '../../components/Collection/Collection'
import Footer from '../../components/Footer/Footer'
const Home = () => {
  return (
    <div className='home'>
        <Navbar />
        <Hero />
        <Categories />
        <Categories />
        <Collection />
        <Footer />
    </div>
  )
}

export default Home