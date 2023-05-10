import React, { useState } from 'react'
import Homepage from './pages/HomePage'
import { BrowserRouter, Routes, Route, Navigate} from "react-router-dom";
import OtherPages from './pages/OtherPages';
import AboutUs from './pages/AboutUs';
import Navbar from './components/Navbar';
import Footer from './containers/Homepage/Footer';
import ContactPage from './pages/ContactPage';
import RequestPage from './pages/RequestPage';
import Landing from './containers/projects/Landing';
import { projectData } from './data';
import "./App.css"
import SocialIcon from './components/SocialIcon';
import PopupLeadForm from '../src/components/OtherPages/PopupLeadForm'

const App = () => {
  
  const landingData = [{name:"MECHANICAL - HVAC ENGINEERING SERVICES",
  details:"Genesiz creates custom HVAC system solutions that are tailored to your specific requirements, maximising energy efficiency and lowering construction costs.",
  className:"hvac",
  img:"HVAC.jpg",

},
  
{
    name:"ELECTRICAL ENGINEERING SERVICES",
    details:"Buildings today contain more electrical components than ever before. We have your solution for low to high voltage building systems, as well as normal and emergency power.",
    className:"electrical",
    img:"Electrical.jpg",
},
{
    name:"PLUMBING ENGINEERING & DESIGN SERVICES",
    details:"Our specialty plumbing solutions are intended to be efficient, functional, and long-lasting.",
    className:"plumbing",
    img:"Plumbing.jpg",
},
{
    name:"FIRE PROTECTION ENGINEERING SERVICES",
    details:"Fire can cause significant damage in high-rise buildings in a short period of time. To help keep you and your building safe, our systems alert the fire department at the first sign of smoke.",
    className:"fire",
    img:"Fire.jpg",
    
}

]


const [Visible,changeVisible] = useState("NotVisible");

const timer = setTimeout(()=>{changeVisible("Visible")},5000)



  return (
    <div>
       <PopupLeadForm visible={Visible}></PopupLeadForm> 
      <div>
          <BrowserRouter>
        <header>
        <Navbar></Navbar>
        </header>


          <Routes>
            <Route
              path='/'
              element={<Homepage></Homepage>}
            ></Route>
          
            <Route
              path='/hvac'
              element={<OtherPages data={landingData[0]}></OtherPages>}
            ></Route>
            <Route path='/electrical' element={<OtherPages data={landingData[1]}></OtherPages>}></Route>
            <Route path='/plumbing' element={<OtherPages data={landingData[2]}></OtherPages>}></Route>
            <Route path='/fireprotection' element={<OtherPages data={landingData[3]}></OtherPages>}></Route>
            <Route path='/about' element={<AboutUs></AboutUs>}></Route>
            <Route path='/contact' element={<ContactPage></ContactPage>}></Route>
            <Route path='/requestaproposal' element={<RequestPage></RequestPage>}></Route>
            <Route path='/hotel' element={<Landing data={projectData[0]}></Landing>}></Route>
            <Route path='/office' element={<Landing data={projectData[1]}></Landing>}></Route>
            <Route path='/education' element={<Landing data={projectData[2]}></Landing>}></Route>
            <Route path='/airport' element={<Landing data={projectData[3]}></Landing>}></Route>
            <Route path='/mall-stadium'element={<Landing data={projectData[4]}></Landing>}></Route>
            <Route path='/healthcare' element={<Landing data={projectData[5]}></Landing>}></Route>

          </Routes>

          <SocialIcon></SocialIcon>
          <footer>
          <Footer></Footer>
          </footer>

          </BrowserRouter>

      </div>



    </div>
  )
}

export default App