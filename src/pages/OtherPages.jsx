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

const OtherPages = ({data}) => {
  
  const [Visible,changeVisible] = useState("NotVisible");
  const timer = setTimeout(()=>{changeVisible("Visible")},20000) 

    return (
    <div>
      <PopupLeadForm visible={Visible}></PopupLeadForm>
    <div>
        <Navbar></Navbar>
        <LandingPage props={data} ></LandingPage>
        <SecPage></SecPage>
        <Engineering></Engineering>
        <OurService></OurService>
        <ThirdPage></ThirdPage>
        <ContactPage></ContactPage>
        <FifthPage></FifthPage>
        <SixthPage></SixthPage>
        <SeventhPage></SeventhPage>
        <Member></Member>
        <Footer></Footer>
        
    </div>
    </div>
  )
}

export default OtherPages