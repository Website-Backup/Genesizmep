import React from 'react'
import Card from '../../components/OtherPages/Card'

const FifthPage = () => {
  const data = [
  {num:"29",title:"States",content:"We work all over India"},
  {num:"20+",title:"Years",content:"We are most experienced"},
  {num:"300+",title:"Projects",content:"We have completed so far!"},
  {num:"100+",title:"Brands",content:"We worked with the biggest names"},
  {num:"0",title:"Errors",content:"Assess the load of the equipment accurately"},
  {num:"5",title:"Days",content:"Enjoy our lightening fast turnaround"},

]
  
  
    return (
    <div className=' bg-bgOrange px-10 py-20 '>

<h3 className=' text-5xl font-semibold font-jost mb-10 text-center text-white'>We can give you 1000 reasons to work with us,
let's start with 6</h3>
    
    <div className=' bg-bgOrange flex flex-col gap-4 md:grid md:grid-cols-3 md:grid-rows-2 md:gap-x-3 md:gap-y-3 '>
        
      
        {
            data.map((item)=><Card props={item} ></Card>)
        }
    </div>
    </div>
  )
}

export default FifthPage