import React from 'react'
import ContactPage from "../containers/OtherPages/ContactPage";
import LandingPage from "../containers/OtherPages/LandingPage";
import FifthPage from "../containers/OtherPages/FifthPage";
import SecPage from "../containers/OtherPages/SecPage";
import SeventhPage from "../containers/OtherPages/SeventhPage";
import SixthPage from "../containers/OtherPages/SixthPage";
import ThirdPage from "../containers/OtherPages/ThirdPage";
import Footer from '../containers/Homepage/Footer';
import Navbar from '../components/Navbar';

const OtherPages = ({data}) => {
  
  


    return (
    <div>




        <LandingPage props={data} ></LandingPage>
        <SecPage></SecPage>
        <ThirdPage></ThirdPage>
        <ContactPage></ContactPage>
        <FifthPage></FifthPage>
        <SixthPage></SixthPage>
        <SeventhPage></SeventhPage>
        
    </div>
  )
}

export default OtherPages