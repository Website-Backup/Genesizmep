import React, { useState } from 'react'
import LandingPage from '../containers/Homepage/LandingPage'
import AboutUs from '../containers/Homepage/AboutUs'
import ClientPage from '../containers/Homepage/ClientPage'
import Navbar from '../components/Navbar'
import Industries from '../containers/Homepage/Industries'
import Working from '../containers/Homepage/Working'
import OnDemandEng from '../containers/Homepage/OnDemanEng'
import Contact from '../containers/Homepage/Contact'
import Footer from '../containers/Homepage/Footer'
import OurService from '../containers/Homepage/OurService'
import { useFirebase } from '../context/Firebase'
import PopupLeadForm from '../components/OtherPages/PopupLeadForm'





const Homepage = () => {
  const firebase = useFirebase()
  async function addData(userdata){
        await firebase.addDocument(userdata);
  }


  const [Visible,changeVisible] = useState("NotVisible");
  const timer = setTimeout(()=>{changeVisible("Visible")},35000);

  return (
    <div>
      <PopupLeadForm visible={Visible}></PopupLeadForm>
      <div>
        <Navbar></Navbar>
        <LandingPage></LandingPage>
        <AboutUs></AboutUs>
        <ClientPage></ClientPage>
        <OurService></OurService>
        <Industries></Industries>
        <Working></Working>
        <OnDemandEng></OnDemandEng>
        <Contact handleSave={addData} ></Contact>
        <Footer></Footer>
        
        </div>
    </div>
      
  )
}

export default Homepage