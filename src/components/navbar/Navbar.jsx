import {useState} from 'react'
import './Navbar.css'
import { RxCross2} from "react-icons/rx";
import { FaBars } from "react-icons/fa";

import img1 from "../../assets/images/lg.png"

const Navbar = () => {
  const [toggle,setToggle]=useState(false)
  return (
    <>
        <nav className='navbar'>
            <div className='logo-container'><img src={img1} className='logo-img'/></div>
            <div className='nav-elements'>
                <div className='nav-item'>Home</div>
                <div className='nav-item'>About Us</div>
                <div className='nav-item'>Services</div>
                <div className='nav-item'>Contact Us</div>
                <div className='nav-item'>Page</div>
            </div>
            {
              toggle?<div className='dumbler' onClick={()=>{setToggle(false)}}><RxCross2  className='cross' /></div>
              :<div className='dumbler' onClick={()=>{setToggle(true)}}><FaBars className='cross'/></div>
            }
            
            {
              toggle&&<div className='mobile-nav-elements'>
            
              <div className='nav-item'>Home</div>
              <div className='nav-item'>About Us</div>
              <div className='nav-item'>Services</div>
              <div className='nav-item'>Contact Us</div>
              <div className='nav-item'>Page</div>
     
          </div>
            }


        </nav>
      
    </>
  )
}

export default Navbar
