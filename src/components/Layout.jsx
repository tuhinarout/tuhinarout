import React from 'react'
import Navbar from './Navbar'
import { MeteorDemo } from './MeteorDemo'
import ParticlesDemo from './ParticlesDemo'
import { GradualSpacingDemo } from './GradualSpacingDemo'
import Projects from './projects/Projects'
import { GlobeDemo } from './GlobeDemo'
import ParticlesDemo1 from './ParticleDemo1'
import Contact from './Contact'
import { IconCloudDemo } from './IconCloudDemo'
import Footer from './Footer'
import StarsCanvas from './Stars'

const Layout = () => {
  return (
    <div className='w-full flex flex-col gap-8 p-4 sm:p-6 md:p-8 lg:p-10 xl:p-12'>
      
      <Navbar/>
      <ParticlesDemo/>
      <MeteorDemo/>
      {/* <GradualSpacingDemo/> */}
      <ParticlesDemo1/>
      <div className="relative z-0">
<Contact></Contact>
</div>
      <Footer/>
    </div>
  )
}

export default Layout
