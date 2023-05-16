import React ,{useEffect,useState} from 'react'

const LandingPage = ({props}) => {
  const background = `./assets/homePage/OurServices/${props.img}`;
  const styles = {
    backgroundImage: `url(${background})` ,
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',
 
  backgroundPosition: 'center',
  backgroundColor: 'rgb(0, 0, 0, 0.25)',
 
}

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
    <div style={styles} className='bg-fixed flex  flex-col  items-stretch px-5 md:px-10 md:pt-64'>
        
        <div className=' flex flex-col gap-3 items-center text-center opacity-100 z-10 py-28 textShadow text-bgGrey3 '>
            <h6 className=' text-2xl uppercase font-jost font-bold'>GENESIZ MEP CONSULTANT </h6>
            <h1 className=' uppercase text-6xl font-bold'>
                {props.name}
            </h1>
            <h6 className=' text-2xl font-thin font-jost'>{props.details}</h6>
            <h4 className=' text-3xl font-jost font-semibold'>YOUR ONE STOP SHOP FOR ALL MEP NEEDS!</h4>
            <div className='relative'><a href='/contact'><button className={`hover:bg-textOrange hover:text-white hover:scale-110 transition-all duration-300 font-semibold shadow-2xl shadow-footerBlack font-jost text-xl px-10 py-3 rounded-2xl ${isBlinking ? 'bg-black text-white':' bg-textOrange text-white' }`}>
        Inquiry
        </button></a></div>
        
        </div>
    </div>
  )
}

export default LandingPage