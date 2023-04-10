import React from 'react'

const LandingPage = ({props}) => {
  const background = `./assets/homePage/OurServices/${props.img}`;
  const styles = {
    backgroundImage: `url(${background})` ,
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',
 
  backgroundPosition: 'center',

}

  return (
    <div style={styles} className={`flex  flex-col max-h-max items-stretch py-40 px-10 md:pt-64 `}  >
        
        <div className=' flex flex-col gap-3 text-left opacity-100 z-10 textShadow text-bgGrey3 '>
            <h6 className=' text-2xl uppercase font-jost font-bold'>GENESIZ MEP CONSULTANT </h6>
            <h1 className=' uppercase text-6xl font-bold'>
                {props.name}
            </h1>
            <h6 className=' text-2xl font-thin font-jost'>{props.details}</h6>
            <h4 className=' text-3xl font-jost font-semibold'>YOUR ONE STOP SHOP FOR ALL MEP NEEDS!</h4>
        </div>
    </div>
  )
}

export default LandingPage