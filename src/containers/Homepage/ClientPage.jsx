import React from 'react'
import { motion } from 'framer-motion';
const griditems = ["grid1","grid2","grid8","grid4","grid3","grid6","grid7","grid5"];


const ClientPage = () => {
  return (
    <motion.div className='flex flex-col md:grid md:grid-cols-3 gap-x-3 mx-8 py-9'
    initial="hidden"
        whileInView="visible"
        viewport={{once:true,amount:0.5}}
        transition = {{duration:0.6}}
        variants={{
          hidden:{opacity:0,y:-50},
          visible:{opacity:1,y:0}
          }}
    >
    <motion.div className='flex flex-col justify-center md:text-left text-center'
    
    
    >
    <div className=' text-2xl ss:text-3xl md:text-5xl mb-7 uppercase  ' ><h2>WHY Genesiz mep
    </h2></div>
    

    <div ><a href='/requestaproposal'><button className=' bg-black text-white px-5 text-lg ss:text-xl md:text-2xl  py-2 rounded-lg mb-5'>Get you quote</button></a></div>
    </motion.div>
    

        <div className='flex flex-col '>
            <div className='bg-black flex-1 py-5 text-white flex flex-col justify-center items-center '><h2 className='text-xl ss:text-3xl md:text-4xl'>300+</h2>
            <p className='text-sm ss:text-lg'>Projects completed</p>
            </div>
            <div className='bg-white flex-1 py-5 text-black flex flex-col justify-center items-center'><h2 className='text-xl ss:text-3xl md:text-4xl'>80%</h2>
            <p>faster Turnaround</p>
            </div>
            <div className='bg-black flex-1 py-5 text-white flex flex-col justify-center items-center'><h2 className='text-xl ss:text-3xl md:text-4xl'>90%</h2>
            <p>First Time Approval</p>
            </div>
        </div>

        <div className=' grid grid-cols-3 grid-rows-3 justify-center items-center gap-x-3 gap-y-6 '>
       
        {
          griditems.map((i)=>
          (i==="grid7")?(<img className=' col-start-1 col-end-3' src={`./assets/homePage/grid/${i}.png`}></img>):(<img className='' src={`./assets/homePage/grid/${i}.png`}></img>)
          )
        }
        
        </div>

    </motion.div>
  )
}

export default ClientPage