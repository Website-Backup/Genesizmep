import React from 'react'
import { Phone,Email, } from '@styled-icons/material'
import { Instagram,Facebook } from '@styled-icons/boxicons-logos';


const Footer = () => {
  
    const headerStyle = 'md:text-2xl text-xl font-medium uppercase';
    const itemStyle = 'text-sm ss:text-sm'
    const buttonStyle = 'text-sm py-2 hover:bg-textOrange min-w-max transition duration-200 border-solid border-[2px] border-textOrange '
    return (
    <div className=' bg-footerBlack font-jost text-white  p-10'>
       <div className='md:grid md:grid-cols-5 items-stretch flex flex-col gap-9  mx-auto'>

       
        <div className='  flex flex-col gap-2 items-stretch'>
            <h4 className={headerStyle}>ENGINEERING</h4>
            <div className=' w-4 h-[1.5px] bg-textOrange'></div>
            <div className={`flex flex-col uppercase ${itemStyle}`}>
            <a href='/hvac'>HVAC </a>
            <a href='/fireprotection'> FIRE PROTECTION</a>
            <a href='/electrical'>ELECTRICAL</a>
            <a href='/plumbing'>PLUMBING</a>
            
            </div>

        </div>
        
        <div className='  flex flex-col gap-2 items-stretch uppercase'>
            <h4 className={headerStyle}>projects</h4>
            <div className=' w-4 h-[1.5px] bg-textOrange'></div>
            <div className={`flex flex-col  ${itemStyle}`}>
            <a href='/hotel'>hotel </a>
            <a href='/office'>office</a>
            <a href='/education'>education</a>
            <a href='/airport'>airport</a>
            <a href='/mall-stadium'>malls and stadium</a>
            <a href='/healthcare'> healthcare</a>
            
            
            </div>

        </div>
        <div className=' max-w-max flex flex-col gap-2 items-stretch'>
            <h4 className={headerStyle}>COMPANY</h4>
            <div className=' w-4 h-[1.5px] bg-textOrange'></div>
            <div className={`flex flex-col ${itemStyle}`}>
            <a href='/about'>ABOUT US</a>
            <a href='/contact'>CONTACT</a>
            
            <a href='/requestaproposal'>REQUEST A PROPOSAL</a>
            <div className=' mt-2 cursor-pointer flex  gap-2'> <a href='https://m.facebook.com/profile.php?id=100086182247566'><Facebook size={30}></Facebook></a><a href='https://instagram.com/genesizmep?igshid=YmMyMTA2M2Y='><Instagram size={30}></Instagram></a></div>
           


            </div>
           
      
          

        </div>
   

            <div className=' flex flex-col gap-3'>
            <h4 className={headerStyle}>REACH US</h4>
            <div className=' w-4 h-[1.5px] bg-textOrange'></div>
            
            <p>
            <strong><p>Bangalore</p></strong>
                Souparnika #142, 3rd Main 4th Cross, Nrupatunga Nagar JP Nagar 7th phase, Bangalore Karnataka-560076
            </p>
            <p>
            <strong><p>Ernakulam </p></strong>
               49/1070, First Floor, Deeparadhana Building, Vyttila P.O., Ernakulam
            </p>
            <p>
            <strong><p>Thiruvananthapuram</p></strong>
                68/1212, Ganga Nagar Manacaud P.O., Kerala
            </p>
            </div>

            <div className=' max-w-max flex flex-col gap-2 justify-start items-stretch justify-items-stretch'>
           <button className={buttonStyle}> <a href='/requestaproposal'>REQUEST A PROPOSAL</a></button>
<button className={buttonStyle}><a className=' text-sm' href='/contact'>CONTACT</a></button>
            
           
            <a><Phone size={15}></Phone>+91-7736188669</a>
            <a className=' text-sm'><Email size={15}></Email> genesizmeppvtltd@gmail.com</a>
        </div>


        </div>
    </div>
  )
}

export default Footer