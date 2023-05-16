import React,{useState,useEffect} from 'react'

const OnDemandEng = () => {

  
  const [isBlinking, setIsBlinking] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsBlinking((prevIsBlinking) => !prevIsBlinking);
    }, 500);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div className=' py-28 px-5 md:px-20'>
        <div><h2 className=' text-xl ss:text-2xl text-center md:text-5xl mb-7'>ON DEMAND ENGINEERING SERVICES</h2></div>
        <div className='flex  flex-col justify-center gap-6'>
            <div className=' text-sm ss:text-xl'>
                <p className='mb-4 text-textGrey'>Not every MEP design challenge necessitates an entire engineering team, lengthy proposals, and lengthy discussion hours. 
                Perhaps your team requires additional assistance, authorities require letters, or the architect requires drawings to be reviewed by experts. In such cases, Genesiz can be your partner.</p>
            <p className='mb-4 text-center'><strong>Get engineering help within one week, in 3 easy steps with our On Demand Engineering Services.</strong></p>
               <a href='/contact' className=' flex justify-center items-center'><button className={`hover:bg-textOrange hover:text-white hover:scale-110 transition-all duration-300 shadow-2xl shadow-footerBlack font-jost text-xl px-4 py-2 rounded-xl ${isBlinking ? 'bg-black text-white':' bg-textOrange text-white' }`}>Get your design done in record time</button></a>
            </div>
            {/* <div>
                <img className=' mx-auto md:min-w-[300px]' src='./assets/homepage/VES.webp'></img>
            </div>  */}
        </div>
    </div>
  )
}

export default OnDemandEng