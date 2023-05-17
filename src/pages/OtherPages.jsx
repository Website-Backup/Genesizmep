import React, { useState } from 'react'
import ContactPage from "../containers/OtherPages/ContactPage";
import LandingPage from "../containers/OtherPages/LandingPage";
import FifthPage from "../containers/OtherPages/FifthPage";
import SecPage from "../containers/OtherPages/SecPage";
import SeventhPage from "../containers/OtherPages/SeventhPage";
import SixthPage from "../containers/OtherPages/SixthPage";
import ThirdPage from "../containers/OtherPages/ThirdPage";
import Footer from '../containers/Homepage/Footer';
import Navbar from '../components/Navbar';
import PopupLeadForm from '../components/OtherPages/PopupLeadForm';
import OurService from '../containers/Homepage/OurService';
import Engineering from '../components/OtherPages/Engineering';
import Member from '../containers/AboutUs/Member';
import ClientPage from '../containers/Homepage/ClientPage'
import Working from '../containers/Homepage/Working'
import Industries from '../containers/Homepage/Industries'
import OnDemandEng from '../containers/Homepage/OnDemanEng'

const OtherPages = ({data}) => {
  
  const [Visible,changeVisible] = useState("NotVisible");
  const timer = setTimeout(()=>{changeVisible("Visible")},35000) 

    return (
    <div>
      <PopupLeadForm visible={Visible}></PopupLeadForm>
    <div>
        <Navbar></Navbar>
        <LandingPage props={data} ></LandingPage>
        <SecPage></SecPage>
        <Engineering></Engineering>
        <ClientPage></ClientPage>
        <OurService></OurService>
        <ThirdPage></ThirdPage>
        <ContactPage></ContactPage>
        <FifthPage></FifthPage>
        <Working></Working>
        <Industries></Industries>
        <SixthPage></SixthPage>
        <OnDemandEng></OnDemandEng>
        <SeventhPage></SeventhPage>
        <Member></Member>
        <Footer></Footer>
        
    </div>
    </div>
  )
}

export default OtherPages