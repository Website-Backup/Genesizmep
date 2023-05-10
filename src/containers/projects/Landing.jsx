import React from 'react'
import ProjectCard from '../../components/Projects/ProjectCard'


const Landing = ({data}) => {


    
  
    return (


    <div className=' md:mt-30 ' >
        <div className=' relative projectLanding min-h-screen justify-center flex items-center'>
        <h1 className=' text-5xl uppercase font-bold'>{data.title}</h1>
        </div>

        <div className=' py-20 flex flex-col  gap-40'>
            {
                data.details.map((i)=><ProjectCard data={i}></ProjectCard>)
            }


        </div>


    </div>

  )
}

export default Landing