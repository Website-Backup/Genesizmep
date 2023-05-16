import React,{useState,useEffect} from 'react'
import BrochureForm from './OtherPages/BrochureForm';
import { Close } from '@styled-icons/material';
import { useFirebase } from '../context/Firebase'


function BrochureDownloadButton() {



  const [isBlinking, setIsBlinking] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsBlinking((prevIsBlinking) => !prevIsBlinking);
    }, 500);

    return () => {
      clearInterval(interval);
    };
  }, []);

  const firebase = useFirebase()
  async function addData(userdata){
        await firebase.addDocument(userdata);
  }

   const [popup,handlePopup] = useState(false);

  return (
    <div>
        {!popup ? <button onClick={()=>{handlePopup(true)}} className={`hover:bg-textOrange hover:text-white hover:scale-110 transition-all duration-300 font-medium shadow-2xl shadow-footerBlack font-jost text-xl px-5 py-2 md:px-10 rounded-2xl ${isBlinking ? 'bg-black text-white':' bg-textOrange text-white' }`}>
        Download Brochure
        </button> : <button className='bg-black text-white font-jost text-xl px-3 py-2 rounded-2xl  hover:bg-textOrange hover:scale-110 transition-all duration-300'>
        Download Brochure
        </button>}
        {popup ?
        <div className='fixed top-0 left-0 w-full h-full justify-center items-center bg-black bg-opacity-25' style={{zIndex: '5000',backgroundColor: 'rgb(0, 0, 0, 0.7)'}}>
            <div className='flex flex-col justify-center items-center h-full p-10'>
              <BrochureForm handleSave={addData}></BrochureForm>
            </div>
            <div className="absolute top-0 right-0 px-5 py-3 bg-white rounded-lg">
              <button className='text-black text-xl' onClick={()=>{handlePopup(false)}}>
                <div className='flex justify-center items-center gap-2'>
                  <h1 className='text-black'>Close</h1>
                  <Close size={30}></Close>
                </div>
              </button>
            </div>
        </div>
      :<></>}

    </div>
  );
}

export default BrochureDownloadButton;