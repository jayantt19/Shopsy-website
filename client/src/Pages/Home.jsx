import React, { useEffect, useState } from 'react';
import HeroBanner from '../Components/HeroBanner'
import ProductSection from '../Components/ProductSection';
import WhyChoose from '../Components/WhyChoose';
import Footer from '../Components/Footer';
const Home = () => {
  return (
    <div>
      <HeroBanner/>
      < ProductSection/>
      <WhyChoose/>
      <Footer/> 
    </div>
  );
}

export default Home;
