import React from 'react'
import {motion} from "framer-motion";
const AboutUs = () => {
  return (
    <motion.div className=' text-center  flex gap-4 flex-col py-20 mb-4'
    
    >
    <div className='mx-10'>
    <div className=' text-2xl ss:text-3xl md:text-5xl mb-7 text-center'><h2>About us</h2></div>
    <div className='text-lg ss:text-xl  mb-7 text-textGrey'><p>We are one of the fastest growing MEP design firms in the construction industry. We have worked with more than 100+ leading brands & completed over 300+ projects across multiple sectors. We pride ourselves on having a fast turnaround while providing cost effective solutions. We work all over India and are your one stop shop for all MEP design needs.</p></div>
    </div>
  
   
     </motion.div> 
  )
}

export default AboutUs