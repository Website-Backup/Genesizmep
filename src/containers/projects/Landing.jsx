import React, { useState } from 'react'
import ProjectCard from '../../components/Projects/ProjectCard'
import Footer from '../Homepage/Footer'
import Navbar from '../../components/Navbar'
import PopupLeadForm from '../../components/OtherPages/PopupLeadForm'


const Landing = ({data}) => {

    const [Visible,changeVisible] = useState("NotVisible");
    const timer = setTimeout(()=>{changeVisible("Visible")},20000) 
      
  
    return (
        <div>
            <PopupLeadForm visible={Visible}></PopupLeadForm>
        <div>
            <Navbar></Navbar>

            <div className=' md:mt-30 ' >
                <div className=' relative projectLanding min-h-screen justify-center flex items-center'>
                <h1 className='relative text-5xl uppercase font-bold'>{data.title}</h1>
                </div>

                <div className=' py-20 flex flex-col  gap-40'>
                    {
                        data.details.map((i)=><ProjectCard data={i}></ProjectCard>)
                    }
                </div>
            </div>
            <Footer></Footer>
        </div>

        </div>


  )
}

export default Landing