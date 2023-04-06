import React from 'react'

const Card = ({props}) => {
  return (
    
    <div className='relative'  >
    <img src={`./assets/homePage/industries/${props.img}`} className=' grayscale max-h-[300px] min-h-full hover:scale-105 transition duration-500 cursor-pointer w-full'>
        
    </img>
     <a href={props.link} className='hover:bg-white centered child uppercase items-stretch justify-items-stretch  p-2 max-w-max  hover:text-black text-lg cursor-pointer text-white bg-black'>
            {props.name}
        </a>
    </div>
    
  )
}
// translate-x-[-50%] translate-y-[-50%] md:bottom-[45%] md:left-[45%]
// top-[50%] md:top-[45%] left-[50%] md:left-[35%]
export default Card ;