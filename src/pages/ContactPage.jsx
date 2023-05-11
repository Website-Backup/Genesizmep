import React from 'react';
import Landing from '../containers/ContactPage/Landing';
import SecondPage from '../containers/ContactPage/SecondPage';
import ThirdPage from '../containers/ContactPage/ThirdPage';
import FourthPage from '../containers/ContactPage/FourthPage';
import MapPage from '../containers/ContactPage/MapPage';
import FifthPage from '../containers/ContactPage/FifthPage';
import Working from '../containers/Homepage/Working'


const ContactPage = () => {
  return (
    <div>
      <Landing></Landing>
      <SecondPage></SecondPage>
      <Working></Working>
      <ThirdPage></ThirdPage>
    <FourthPage></FourthPage>


{/* <FifthPage></FifthPage> */}

    </div>
  )
}

export default ContactPage