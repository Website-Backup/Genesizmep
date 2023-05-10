import React from 'react'
import Contact from '../Homepage/Contact'
import { useFirebase } from '../../context/Firebase'

const Landing = () => {

  const firebase = useFirebase()
  async function addData(userdata){
        await firebase.addDocument(userdata);
  }

  return (
       <div className='flex flex-col gap-10 md:grid md:grid-cols-2 md:my-16   md:py-[110px]'>
        <div className=' bg-black py-10 col-start-1 col-end-2 '>
            <div className=' py-4 px-2  bg-textOrange text-white text-center '>
                <h1 className=' font-anton text-6xl mb-4'>OUR CONTACT</h1>
                <p className=' font-jost text-2xl'>We respond on the same day!</p>
            </div>
            <div className=' font-jost  flex flex-col justify-center items-center py-5 text-left gap-4 text-white px-5'>
              <h4 className=' text-3xl font-semibold'>+91-7736188669</h4>
              <p className=' text-2xl'>genesizmeppvtltd@gmail.com</p>
              <p className=' text-2xl'>www.genesizmep.in</p>
              <img className=' mx-auto' src='./assets/contactPage/icon.webp'></img>
            </div>


        </div>

<div>
<div className=' flex flex-col gap-5 uppercase font-jost text-lg text-center'>
<p>we work</p>
<h2 className=' text-5xl'>nationwide</h2>
<p>GET YOUR QUOTE TODAY!</p>
</div>

<Contact handleSave={addData} > </Contact>



</div>


    </div>
  )
}

export default Landing