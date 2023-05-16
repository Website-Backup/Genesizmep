import React from 'react'
import { Parallax } from 'react-parallax'
import LandingCard from '../../components/Aboutus/LandingCard'
import background from "../../../public/assets/Aboutus/aboutus.jpg"

const myStyle={
  backgroundImage: `url(${background})` ,
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',
  
};

const Landing = () => {
  return (
    <div className='bg-fixed flex items-end  px-5 md:px-10 bg-stone-600 min-h-[40vw]' style={myStyle} >
       
    <div className=' flex flex-col-reverse md:flex-row gap-10  mt-auto'>
      <LandingCard></LandingCard>
      <h1 className=' font-jost text-6xl font-bold text-white text-center uppercase min-w-max '>about us</h1>
    </div>
    </div>
  )
}

export default Landing