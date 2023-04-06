import React from 'react'

const OnDemandEng = () => {
  return (
    <div className=' py-28 px-5 md:px-20'>
        <div><h2 className=' text-xl ss:text-2xl text-center md:text-5xl mb-7'>ON DEMAND ENGINEERING SERVICES</h2></div>
        <div className='flex md:flex-row flex-col justify-center gap-6'>
            <div className=' text-sm ss:text-xl'>
                <p className='mb-4 text-textGrey'>Not every MEP design challenge necessitates an entire engineering team, lengthy proposals, and lengthy discussion hours. 
                Perhaps your team requires additional assistance, authorities require letters, or the architect requires drawings to be reviewed by experts. In such cases, Genesiz can be your partner.</p>
            <p className='mb-4'><strong>Get engineering help within one week, in 3 easy steps with our On Demand Engineering Services.</strong></p>
               <a href='/requestaproposal' className=' flex justify-center items-center'> <button className=' rounded-xl text-center px-4 py-3 bg-black text-white hover:bg-textOrange hover:scale-110 transition-all duration-300'>Get your design done in record time</button></a>
            </div>
            <div>
                <img className=' mx-auto md:min-w-[300px]' src='./assets/homepage/VES.webp'></img>
            </div>
        </div>
    </div>
  )
}

export default OnDemandEng