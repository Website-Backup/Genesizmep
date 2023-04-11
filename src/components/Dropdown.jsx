import React,{useState} from 'react'
import { Plus,FileMinus } from '@styled-icons/bootstrap';


const Dropdown = ({item}) => {
  
  const [open,setOpen] = useState(false);
 
  
  return (
  
  
    
    <div className=' sticky'>

   
    <div className=' border-solid border-black sticky z-50 border-[0.1px] items-stretch flex justify-between '>
    <a href={item.url}>{item.name}</a>
    
    {
      item.isdrop?<span className=' border-black border-dotted sticky z-40 border-[0.5px] '>
      {!open?
    <Plus size={30} onClick={()=>setOpen(true)}></Plus>:<FileMinus size={30} onClick={()=>setOpen(false)}></FileMinus>}</span>:<></>
    }

    



    </div>

    {
      open ? item.data.map((item)=><Dropdown item={item}></Dropdown>) :null
    
    }
    


    </div>




  )
}

export default Dropdown