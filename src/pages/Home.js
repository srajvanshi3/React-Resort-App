import React from 'react'
import Hero from '../Components/Hero'
import Banner from "../Components/Banner"
import {Link} from "react-router-dom"
import Services from '../Components/Services'
import FeaturedRooms from '../Components/FeaturedRooms'

function Home() {
    return (
        <>
        <Hero>
          <Banner title="luxurious rooms" subtitle='deluxe room starting at Rs.20000'>
              <Link to='/rooms' className="btn-primary">
                  Our rooms
              </Link>
              </Banner>

        </Hero>
        <Services/>
        <FeaturedRooms/>
        </>
    )
}

export default Home
