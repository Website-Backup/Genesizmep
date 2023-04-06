import React from 'react'

const FourthPage = () => {
  const griditems = ["grid1","grid2","grid8","grid4","grid3","grid6","grid7","grid5"];
  return (
    <div className=' flex flex-col md:grid md:grid-cols-2 items-stretch'>
        <img src='./assets/contactPage/logos_bg.png'></img>
       
        
        <div className=' grid grid-cols-3 grid-rows-3 justify-center items-center gap-x-3 gap-y-6 '>
       
        {
          griditems.map((i)=>
          (i==="grid7")?(<img className=' col-start-1 col-end-3' src={`./assets/homePage/grid/${i}.png`}></img>):(<img className='' src={`public/assets/homePage/grid/${i}.png`}></img>)
          )
        }
        
        </div>
    </div>
  )
}

export default FourthPage