import React from 'react'
import ContactForm from '../../components/OtherPages/ContactForm'
import { useFirebase } from '../../context/firebase'

const ContactPage = () => {

  const firebase = useFirebase()
  async function addData(userdata){
        await firebase.addDocument(userdata);
  }
  
  return (
    <div className=' bg-bgGrey2 flex flex-col md:grid grid-cols-6 px-10 py-5 text-center items-center'>
        <div className=' col-start-1 col-end-2'>
            <img src="./assets/OtherPages/CallUs.webp"></img>
        </div>
        <div className=' col-start-2 col-end-4 font-jost text-white'>
            <h5 className=' text-2xl mb-5'>IMPRESSED?</h5>
            <h5 className=' text-2xl'>Call us or fill out the form and we will call you back within 24 hours!</h5>
        </div>
        <div className=' col-start-4 col-end-7'>
            <ContactForm handleSave={addData}></ContactForm>
        </div>
    </div>
  )
}

export default ContactPage