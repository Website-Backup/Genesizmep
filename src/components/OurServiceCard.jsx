import React from 'react'
import background1 from "../../public/assets/homePage/OurServices/HVAC.jpg"

const OurServiceCard = ({data}) => {
    const background = `./assets/homePage/OurServices/${data.img}`;
  const styles = {
    backgroundImage: `url(${background})` ,
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',
  backgroundPosition: 'center',


  }
  
    return (
   <div>
   <a href={data.url}>
   <div style={styles} className={`  relative before:bg-[url("./public/assets/homePage/OurServices/${data.img}")] before:bg-no-repeat  before:absolute before:bg-black  cursor-pointer hover:opacity-100 px-5 hover:scale-110 transition-all rounded-lg shadow-2xl flex  justify-center items-center h-[230px]`}>
   
        <div >
        <h3  className=' opacity-100 text-bgGrey3 font-anton pl-1 text-left text-2xl '>{data.name}</h3>
        </div>
       
  
    </div>
    </a>
    </div>
  )
}

export default OurServiceCard