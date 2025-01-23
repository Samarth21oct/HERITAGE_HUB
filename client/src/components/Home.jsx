import React, { useState, useEffect } from 'react'
import { Link as RouterLink } from 'react-router-dom'
import { Link, Element } from 'react-scroll'
import Events from './Events'
import Find from './Find'
import BookingProcess from './BookingProcess'
import Reviews from './Reviews'
import Faq from './faqs/Faq'
import Contacts from './Contacts'
import Footer from './Footer'
import FeaturedEvents from './FeaturedEvents'
import Categories from './Categories'
import Dropdown from './Dropdown'

const Home = () => {
  const [resData, setResData] = useState(null)
  // console.log(resData)
  const getData = async () => {
    const data = await fetch('http://localhost:3000/user',
      {
        method: "GET",
        credentials: 'include',
      }
    )
    const res = await data.json()
    setResData(res)
    // console.log(res)

  }
  useEffect(() => {
    getData()
  }, [])
  return (
    <>
      <header id="header" className="fixed top-0 left-0 w-full bg-white shadow-md z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex justify-between items-center h-16">
            {/* <!-- Logo --> */}
            <div className="flex-shrink-0 flex items-center flex-col">
              <h1 className="text-2xl font-bold text-indigo-600">HeritageHub</h1>
            </div>

            {/* <!-- Desktop Navigation --> */}
            <nav className="hidden md:flex space-x-8">
              <Link to="events" smooth={true} duration={500} className="text-gray-700 hover:text-indigo-600 px-3 py-2 text-sm font-medium transition-colors duration-300 cursor-pointer">Events</Link>
              <Link to="featured" smooth={true} duration={500} className="text-gray-700 hover:text-indigo-600 px-3 py-2 text-sm font-medium transition-colors duration-300 cursor-pointer">Featured</Link>
              <Link to="categories" smooth={true} duration={500} className="text-gray-700 hover:text-indigo-600 px-3 py-2 text-sm font-medium transition-colors duration-300 cursor-pointer">Categories</Link>
              <Link to="find" smooth={true} duration={500} className="text-gray-700 hover:text-indigo-600 px-3 py-2 text-sm font-medium transition-colors duration-300 cursor-pointer">Find</Link>
              <Link to="faq" smooth={true} duration={500} className="text-gray-700 hover:text-indigo-600 px-3 py-2 text-sm font-medium transition-colors duration-300 cursor-pointer">FAQs</Link>
            </nav>

            {/* <!-- Right Side Icons --> */}
            <div className="flex items-center space-x-4">
              {resData && resData.email ?

                // <RouterLink to='/dashboard'>
                //   <img src="https://avatar.iran.liara.run/public" alt="User Avatar" className="rounded-full border bg-gray-600 object-cover w-10 h-10" />
                // </RouterLink> :
                <Dropdown resData={resData} /> :
                <div className='flex gap-4'>
                  <RouterLink to='/register'>
                    <button type="submit" className="w-full py-2 px-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
                      Register
                    </button>
                  </RouterLink>
                  <RouterLink to='/login'>
                    <button type="submit" className="w-full py-2 px-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
                      Login
                    </button>
                  </RouterLink>
                </div>
              }

            </div>
          </div>

          {/* <!-- Mobile Navigation Menu --> */}
          <div className="md:hidden hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <Link to="events" smooth={true} className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-indigo-600 hover:bg-gray-50 transition-colors duration-300 cursor-pointer">Events</Link>
              <Link to="featured" className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-indigo-600 hover:bg-gray-50 transition-colors duration-300 cursor-pointer">Featured</Link>
              <Link to="categories" className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-indigo-600 hover:bg-gray-50 transition-colors duration-300 cursor-pointer">Categories</Link>
              <Link to="find" className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-indigo-600 hover:bg-gray-50 transition-colors duration-300 cursor-pointer">Find</Link>
              <Link to="faq" className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-indigo-600 hover:bg-gray-50 transition-colors duration-300 cursor-pointer">FAQs</Link>
            </div>
          </div>
        </div>
      </header>
      <Element name='events'>
        <Events />
      </Element>
      <Element name='featured'>
        <FeaturedEvents />
      </Element>
      <Element name='categories'>
        <Categories />
      </Element>
      <Element name='find'>
        <Find />
      </Element>
      <BookingProcess />
      <Reviews />
      <Element name='faq'>
        <Faq />
      </Element>
      <Contacts />
      <Footer />
    </>
  )
}

export default Home
