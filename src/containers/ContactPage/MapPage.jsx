import React from 'react'
import AddressCard from '../../components/contactPage/AddressCard'


const data=[{
    name:"Bangalore",
    content:"Souparnika #142, 3rd Main 4th Cross, Nrupatunga Nagar JP Nagar 7th phase, Bangalore Karnataka-560076",
    link:"https://goo.gl/maps/C4udDqE5srhgbzgJA",
},
{
    name:"Ernakulam",
    content:"49/1070, First Floor, Deeparadhana Building, Vyttila P.O., Ernakulam",
    link:"https://goo.gl/maps/yVBpNTneKi5t6KKc6",
},
{
    name:"Thiruvananthapuram",
    content:" 68/1212, Ganga Nagar Manacaud P.O., Kerala",
    link:"https://goo.gl/maps/6HsQmuF9fFXuwGkp7",
},

]

const MapPage = () => {
  return (
    <div className='grid md:grid-cols-3 justify-center gap-5 px-5' >
        {
            data.map((i)=><AddressCard data={i}></AddressCard>)
        }
    </div>
  )
}

export default MapPage