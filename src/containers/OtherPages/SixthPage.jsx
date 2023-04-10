import React from 'react'
import RequestedServices from '../../components/OtherPages/RequestedServices'
import Service from '../../components/OtherPages/Service';

const SixthPage = () => {
  const requestedServices = ["Mall MEP design","Commercial MEP design","Apartment MEP design","Gym MEP design"
  ,"Industrial MEP design","Hotel MEP design","Residential MEP design","Healthcare MEP design","Office MEP design"]
    return (
    <div className=' bg-black  text-white text-center py-20 md:px-40 px-20  '>
        <h2 className='md:text-5xl text-xl uppercase'>NEED A SPECIFIC SERVICE SOLUTION FROM US?</h2>
        
        <h4 className=' font-jost mb-5'>Some of our most requested services</h4>
        
        <div>
            <h3 className=' md:text-2xl text-lg font-bold uppercase text-left'>most requested services</h3>
            <div className=' w-5 h-[1px] bg-bgOrange2 text-left'></div>
            <div className='flex flex-col gap-2 md:grid md:grid-cols-3 md:grid-flow-row'>
            {
                requestedServices.map((i)=><RequestedServices name={i} ></RequestedServices>)
            }
            </div>
        </div>

    </div>
  )
}

export default SixthPage