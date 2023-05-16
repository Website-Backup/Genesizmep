import React, { useState } from 'react'
import Landing from '../containers/AboutUs/Landing'
import SecondPage from '../containers/AboutUs/SecondPage';
import Member from '../containers/AboutUs/Member';
import { useFirebase } from '../context/Firebase';
import FourthPage from '../containers/AboutUs/FourthPage';
import Navbar from '../components/Navbar';
import Footer from '../containers/Homepage/Footer';
import PopupLeadForm from '../components/OtherPages/PopupLeadForm';

const AboutUs = () => {

  const [Visible,changeVisible] = useState("NotVisible");
  const timer = setTimeout(()=>{changeVisible("Visible")},20000)





  return (
    <div>
      <PopupLeadForm visible={Visible}></PopupLeadForm>
      <div>
        <Navbar></Navbar>
        <Landing></Landing>
        <SecondPage></SecondPage>
        <Member></Member>
        <FourthPage></FourthPage>
        <Footer></Footer>
      </div>
    </div>
  )
} 


export default AboutUs