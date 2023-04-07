import React from 'react'
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


const Homepage = () => {
  const firebase = useFirebase()
  async function addData(userdata){
        await firebase.addDocument(userdata);
  }



  return (
    <div>
  
      <LandingPage></LandingPage>
      <AboutUs></AboutUs>
      <ClientPage></ClientPage>
      <OurService></OurService>
      <Industries></Industries>
      <Working></Working>
      <OnDemandEng></OnDemandEng>
      <Contact handleSave={addData} ></Contact>

    
      
    </div>
  )
}

export default Homepage