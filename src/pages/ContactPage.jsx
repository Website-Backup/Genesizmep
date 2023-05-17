import React from 'react';
import Landing from '../containers/ContactPage/Landing';
import SecondPage from '../containers/ContactPage/SecondPage';
import ThirdPage from '../containers/ContactPage/ThirdPage';
import FourthPage from '../containers/ContactPage/FourthPage';
import MapPage from '../containers/ContactPage/MapPage';
import Working from '../containers/Homepage/Working'
import Navbar from '../components/Navbar';
import Footer from '../containers/Homepage/Footer';
import FifthPage from "../containers/OtherPages/FifthPage";
import LeadMax from '../containers/ContactPage/LeadMax';


const ContactPage = () => {
  return (
    <div>
      <Navbar></Navbar>
      <Landing></Landing>
      <SecondPage></SecondPage>
      <Working></Working>
      <FifthPage></FifthPage>
      <ThirdPage></ThirdPage>
      <LeadMax></LeadMax>
    <FourthPage></FourthPage>
    <Footer></Footer>


{/* <FifthPage></FifthPage> */}

    </div>
  )
}
 
export default ContactPage