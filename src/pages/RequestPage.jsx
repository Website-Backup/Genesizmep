import React, { useState } from 'react'
import RequestForm from '../containers/Request/RequestForm'
import { useFirebase } from '../context/Firebase'
import Navbar from '../components/Navbar'
import Footer from '../containers/Homepage/Footer'
import PopupLeadForm from '../components/OtherPages/PopupLeadForm'
const RequestPage = () => {
  
  const firebase = useFirebase()
  async function addData(userdata){
        await firebase.addDocument(userdata);
  }

  const [Visible,changeVisible] = useState("NotVisible");
  const timer = setTimeout(()=>{changeVisible("Visible")},10000) 

  return (

    <div>
      <PopupLeadForm visible={Visible}></PopupLeadForm>
    <div>
        <Navbar></Navbar>
        <div className=' md:mt-40'> 
        <RequestForm handleSave={addData}></RequestForm>
        </div>
        <Footer></Footer>
    </div>
    </div>
  )
}

export default RequestPage