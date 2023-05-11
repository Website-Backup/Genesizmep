import React from 'react'
import WorkingCard from '../../components/WorkingCard'

const Working = () => {
  const working = [{name:"Step 1",details:"You send us project requirements and floor plan.",orange:true},{name:"Step 2",details:"Our experts will work as per the design.",orange:false},{name:"Step 3",details:"We deliver the MEP design permit set to you.",orange:true},]
    return (
    <div className="py-20">
        <div className='flex flex-col justify-center items-center mb-10'>
            <p className=' text-textGrey mb-10 text-2xl uppercase '>genesiz mep CONSULTANT</p>
            <h2 className='text-2xl ss:text-3xl md:text-5xl mb-3'>How It Works?</h2>
            <div className=' bg-textOrange h-[10px] w-20 rounded-3xl'></div>
        </div>
        <div className=' flex flex-col  justify-center justify-items-center items-stretch gap-9 md:grid md:grid-cols-3 mx-7 '>
            {
                working.map((item)=><WorkingCard name={item.name} details={item.details} orange={item.orange}></WorkingCard>)
            }
        </div>
    </div>
  )
}

export default Working