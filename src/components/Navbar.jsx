import React,{useEffect, useState} from 'react'
import useMediaQuery from '../hooks/useMediaQuery';
import {Plus} from '@styled-icons/bootstrap';
import { Close,Menu, } from '@styled-icons/material';
import Dropdown from './Dropdown';
import {ChevronDown,ChevronRight} from '@styled-icons/bootstrap';
import data from './Navbardata';
import { Phone,Email } from '@styled-icons/material';

const Navbar = ({isTopPage}) => {
  const [isMenuOpen,setIsMenuOpen] = useState(false);
  const isAboveMediumScreen = useMediaQuery("(min-width:1050px)");
  const [isScrolled,setscroll]= useState(false);
  // const EngDrop = ["engineering","engineering","engineering","engineering",]
  // window.onscroll = function(e){
  //   setscroll(true);
  //   console.log(isScrolled)
  // }

  useEffect(()=>{
    window.addEventListener("scroll", function(){

          if(this.window.pageYOffset===0){
            setscroll(false);
          }else{
            setscroll(true);
          }
    })

    return ()=>window.removeEventListener("scroll", function(){
      if(this.window.pageYOffset===0){
        setscroll(false);
      }else{
        setscroll(true);
      }
})


},[isScrolled])


console.log(isScrolled);


  return (
    <nav>

  
    <div className=' font-montserrat bg-white text-black sticky md:fixed top-0 left-0  nav flex flex-col md:justify-evenly justify-between items-center  min-h-max py-5 w-full px-3  z-50 '>
    
    <div className={`${isScrolled?"hidden":"visible"}  pb-1 transition-all flex gap-5 w-full mb-3 justify-center  mt-0 text-black border-b-black border-b-[0.5px]`} >
    <p className={`  text-[12px] md:text-lg font-anton  `}>    <Email size={15}></Email> genesizmeppvtltd@gmail.com</p>
      
      <p className={` text-[12px] md:text-lg  font-anton text-right`}><Phone size={15}></Phone> +91-7736188669</p>
        </div>
        
    <div className=' flex   justify-between w-full'>

        <div className=' max-w-[280px]'>
        
      
      
         <a className=' flex gap-3 items-center w-max' href='/'><img className=' h-16 md:w-[260px] ' src='./assets/Genesizlogo.png'></img>
         {/* <div>
         <h1 className='text-lg ss:text-xl'>Genesiz MEP</h1> 
         <p className=' md:text-[10px] text-[6px]'>HVAC | ELECTRICAL | FIRE FIGHTING | PLUMBING</p>
         </div> */}
         
         </a>

         {/* <img src='public/assets/homepage/New-NY-Logos-03.webp'></img> */}
        </div>
        <div className=' flex flex-col gap-3  '>
        
       
        {
          isAboveMediumScreen? (<div className='flex gap-7 items-center justify-center my-auto text-xl font-semibold cursor-pointer'>
          
          <div><a href='/'>Home </a></div>
            <div className='group/item1'><a >Engineering <ChevronDown size={12}></ChevronDown></a>
            <div className=' border-t-solid  border-t-textOrange border-t-8 group-hover/item1:scale-100  rounded-xl scale-0 p-5 min-w-[200px] items-center bg-white absolute'>
        {
          
          data[1].data.map((item)=><a href={item.url} className='hover:text-textOrange text-slate-700 flex justify-between border-b-[1px]  border-dotted border-b-black z-2000 '><p>{item.name} </p> </a>)
        }
        </div>
            </div>
            
            <div className='group/item1'><a>Projects <ChevronDown size={12}></ChevronDown></a>
            <div className=' border-t-solid  border-t-textOrange border-t-8 group-hover/item1:scale-100 rounded-xl scale-0 p-5 min-w-[200px] items-center bg-white absolute'>
        {
          
          data[2].data.map((item)=><a href={item.url} className='hover:text-textOrange border-b-[1px]  border-dotted border-b-black text-slate-700 flex justify-between z-2000 '><p>{item.name} </p>  </a>)
        }
        </div>
            </div>
          

            <div><a href='/about'>About us</a></div>
            <div><a href='/contact'>Contact</a></div>
            <div className='rounded-3xl  py-1 hover:bg-textOrange cursor-pointer px-3  border-solid border-[2px] border-textOrange '><a href='/requestaproposal'>Request A Proposal</a></div>
        </div>): (<>
          {
            isMenuOpen ? <Close onClick={()=>setIsMenuOpen(false)} size={30} className="transition duration-1000"></Close> : <Menu onClick={()=>setIsMenuOpen(true)} size={30} className=" hover:scale-100 transition-all duration-1000"></Menu>

          }
          
          
        </>)
        }
        </div>
        
        </div>
      
       
    
    </div>
    {
          isMenuOpen && !isAboveMediumScreen && (
            <div className={` w-full bg-white text-black nav text-lg sticky ss:text-xl transition duration-10000 ${(isMenuOpen)? "scale-100":"scale-0"} transition-all duration-300 ease-in `}>
            {
              data.map((item)=><Dropdown item={item}></Dropdown>)
            }
            
            </div>
          )
        }
       
        


    </nav>
  )
}

export default Navbar