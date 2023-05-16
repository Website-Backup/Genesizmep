import React from 'react'
import {motion} from "framer-motion";
const AboutUs = () => {
  return (
    <motion.div className=' text-center  flex gap-4 flex-col py-20 mb-4'
    
    >
    <div className='mx-10'>
    <div className=' text-2xl ss:text-3xl md:text-5xl mb-7 text-center'><h2>About us</h2></div>
    <div className='ss:text-xl flex flex-col gap-10 text-ellipsis mb-7 text-textGrey'>
      <p>We are one of the fastest growing MEP design firms in the construction industry. We have worked with more than 100+ leading brands & completed over 300+ projects across multiple sectors. We pride ourselves on having a fast turnaround while providing cost effective solutions. We work all over India and are your one stop shop for all MEP design needs.</p>
      <p>GENESIZ is an MEP & Systems Controls Engineering, Design and 
Consultation firm, established in 2007 for diverse range of segments 
include Commercial buildings, Residential building, Educational 
institutions, Offices, Agricultural buildings, Hospitals, Industrial, 
Transport buildings, Infrastructure, Government build-ings and more.
</p>
      <p>
      GENESIZ specializes in crafting the lives of structures and buildings 
by providing Mechanical, Electrical and plumbing (MEP) services to 
various segments of the construction industry. GENESIZ offer 
engineering designs to it the ever changing needs of our clients. We 
combine the technical expertise and experience necessary to 
produce quality and sustainable solutions by a team of engineers who 
have more than 20 years of experience and passionate about creating 
designs that are on the cutting- edge of technology utilizing the 
industry standard tools and software.
      </p>
      </div>
    </div>
  
   
     </motion.div> 
  )
}

export default AboutUs