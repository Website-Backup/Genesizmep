import React, { useState } from 'react'
import { Close } from '@styled-icons/material';


const PopupLeadForm = ({visible}) => {


  const [showMyForm, setShowMyForm] = useState(true);

  if (visible==="visible" && window.location.pathname!="/contact"){
  if (showMyForm){
  
  return (

  <div className="fixed top-0 left-0 flex w-full h-full justify-center items-center bg-black bg-opacity-25" style={{zIndex: '3000',backgroundColor: 'rgb(0, 0, 0, 0.25)'}}>
    <div className="relative"> 
    <div className="flex flex-wrap justify-evenly m-2 items-evenly p-2 shadow-2xl rounded-3xl bg-white">

      <div className="flex justify-center items-center" style={{backgroundColor: 'orange', borderRadius: "20px", padding: "7px"}}>
      <div className="flex-col gap-4">
        <div>
          <h3 className="text-4xl text-center text-bold"> Prefer talking to our experts first? </h3>
          <h1 className='text-center'>Let us know what you need - we're happy to help!</h1>
        </div>
        <div className="flex justify-center items-center" style={{backgroundColor: 'orange'}}>
          <button onClick={()=>setShowMyForm(false)} className="bg-black text-white lg:text-2xl px-4 py-2  font-semibold rounded-2xl  hover:bg-textOrange hover:scale-110 transition-all duration-300"><a href='/contact'>REQUEST A CALLBACK</a></button>
        </div>
      </div>


        <div>
          <img src="./assets/pop-character.webp"></img>
        </div>



     

    </div>
    <div className="absolute top-0 right-0 bg-white">
          <button onClick={()=>setShowMyForm(false)}><Close size={30}></Close></button>
    </div> 

    </div>

      
          

    </div>
</div>



  )};
 };
};

 export default PopupLeadForm   