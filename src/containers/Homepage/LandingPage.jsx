import React,{useState} from 'react'
import ReactSwipe from 'react-swipe';
import { ChevronRight,ChevronLeft } from '@styled-icons/material';


const LandingPage = () => {
  let reactSwipeEl;
  
  setTimeout(()=>{

  },2000)
  
  return (
    <div className=' relative md:h-screen '>
    <ReactSwipe
    className="carousel"
        swipeOptions={{ continuous: true }}
        ref={el => (reactSwipeEl = el)}
        
    >
    
    <div className= '  box-border text-center md:min-h-screen h-full flex justify-center items-center mb-6 mainlanding flex-col py-12 gap-3  pt-30  md:mt-10'>
        <div className='text-2xl relative ss:text-4xl md:text-6xl my-7'><h1>THE MEP EXPERTS</h1></div>
        <div className='text-xl relative ss:text-2xl md:text-4xl text-textOrange mb-3'><h3>YOUR ONE-STOP FOR ALL MEP DESIGN NEEDS</h3></div>
     
        <div className=' px-4 relative py-2 rounded-2xl bg-black text-white '><button><a href='/contact'>Contact us</a></button></div>
        
    </div>

    <div className=' box-border text-center md:min-h-screen h-full flex justify-center items-center mb-6 mainlanding1 flex-col py-12 gap-3  pt-30 md:mt-10'>
        <div className='text-2xl relative ss:text-4xl md:text-6xl my-7 uppercase'><h1>office design specialists</h1></div>
        <div className='text-xl relative ss:text-2xl md:text-4xl text-textOrange mb-3 uppercase'><h3>YOUR ONE-STOP FOR ALL MEP DESIGN NEEDS</h3></div>

        <div className=' px-4 relative py-2 rounded-2xl bg-black text-white '><button><a href='/contact'>Contact us</a></button></div>
        
    </div>
    
    <div className=' text-center md:min-h-screen h-full flex justify-center items-center mb-6 mainlanding2 flex-col py-12 gap-3  pt-30 md:mt-10'>
        <div className='text-2xl relative ss:text-4xl md:text-6xl my-7 uppercase'><h1>masters of hotels and malls projects</h1></div>
        <div className='text-xl relative ss:text-2xl md:text-4xl text-textOrange mb-3'><h3>YOUR ONE-STOP FOR ALL MEP DESIGN NEEDS</h3></div>
        <div className=' px-4 relative py-2 rounded-2xl bg-black text-white '><button><a href='/contact'>Contact us</a></button></div>
        
    </div>

    </ReactSwipe>
  <button className='  absolute top-[40%] ss:h-20 ss:w-20 h-10 w-10 ' onClick={() => reactSwipeEl.next()}><ChevronLeft ></ChevronLeft></button>
  <button className='  absolute ss:h-20 ss:w-20 h-10 w-10 right-0 top-[40%]'  onClick={() => reactSwipeEl.prev()}><ChevronRight ></ChevronRight></button>

    </div>
    
  )
}

export default LandingPage

