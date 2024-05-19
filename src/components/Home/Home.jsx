import React from 'react'
import Hero from '../Hero/Hero'
import BestBooks from '../BestBooks/BestBooks'
import Banner from '../Banner/Banner';
import AppStoreBanner from '../AppStoreBanner/AppStoreBanner';
import AllBooks from '../AllBooks/AllBooks';
import Testimonial from '../Testimonial/Testimonial';
import Footer from '../Footer/Footer';

function Home({handleOrderPopup}) {
  return (
    <>
        <div className='bg-white dark:bg-gray-900 dark:text-white duration-200'>
            <Hero handleOrderPopup={handleOrderPopup}/>
            <BestBooks handleOrderPopup={handleOrderPopup}/>
            <Banner/>
            <AppStoreBanner/>
            <AllBooks/>
            <Testimonial/>
            <Footer/>
         </div>
    </>
  )
}

export default Home
