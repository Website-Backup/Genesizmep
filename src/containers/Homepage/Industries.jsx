import React from 'react'
import Card from "../../components/IndustriesCard"

const details = [{name:"hotel",img:"hotel.jpg", link:"/hotel"},{name:"HEALTHCARE",img:"Hospital.jpg",link:"/healthcare"},{name:"airport",img:"airport.jpg",link:"/airport"},{name:"malls and stadium",img:"mall.jpg",link:"/mall-stadium"},{name:"office",img:"office.jpg",link:"/office"},{name:"education",img:"education.jpg",link:"/education"}]

const Industries = () => {
  return (
    <div className='mb-16' id='#industries'>

  <div className='flex flex-col justify-center items-center '>
    <h2 className=' text-2xl ss:text-3xl md:text-5xl mb-7 py-8 uppercase text-textOrange'>Genesiz mep consultant</h2>
    <p className='text-lg ss:text-xl  mb-6 text-textGrey uppercase'>  HEALTHCARE-hotel-education-airport-malls and Stadium-office   </p>
  </div>
    
    <div className='flex flex-col md:grid md:grid-cols-3 md:grid-rows-2 mx-10 gap-5 gap-x-4 gap-y-4 items-stretch justify-items-stretch'>

      {
        details.map((item)=><Card props={item}></Card>)
      }
    </div>
    </div>
  )
}

export default Industries