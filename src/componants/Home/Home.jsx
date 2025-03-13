import React from 'react'
import Navber from '../Navber/Navber'
import Banner from '../Banner/Banner'
import Banner02 from '../Banner/Banner02'

function Home() {
  return (
    <div className='max-w-6xl mx-auto'>

        <Navber></Navber>
        <Banner></Banner>
        <Banner02></Banner02>

    </div>
  )
}

export default Home