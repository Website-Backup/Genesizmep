import React from 'react'
import Contact from '../Homepage/Contact'
import { useFirebase } from '../../context/Firebase'
import RequestCallbackForm from '../../components/contactPage/RequestCallbackForm'
import { Phone,Email } from '@styled-icons/material';
import Working from '../Homepage/Working';
import BrochureDownloadButton from '../../components/DownloadBrochure';


const LeadMax = () => {

  const firebase = useFirebase()
  async function addData(userdata){
        await firebase.addDocument(userdata);
  }

  return (
       <div className='flex flex-col items-center w-full justify-center md:grid md:grid-cols-2 py-12'>
        <div>
            <div className='flex flex-col py-4 px-2 gap-8 border-b-black text-center '>
                <h1 className=' font-anton text-5xl  mb-4 '>Request a Callback</h1>
                <p className=' font-jost text-2xl border-b-black '>Intrested in getting your MEP Design and Permit for your Project? Then kindly fill the form, our team will contact you within 24 hours!</p>
                <div><BrochureDownloadButton></BrochureDownloadButton></div>
            </div>  




        </div>

        <div>


            <RequestCallbackForm handleSave={addData}></RequestCallbackForm> 

        {/* <Contact handleSave={addData} > </Contact> */}



        </div>


    </div>
  )
}

export default LeadMax