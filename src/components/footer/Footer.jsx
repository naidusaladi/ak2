import React from 'react'
import { FaSquareFacebook } from "react-icons/fa6";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaYoutubeSquare } from "react-icons/fa";
import './Footer.css'
const Footer = () => {
  return (
    <>
     <div className='footer-container'>
        <div className='footer-cover'>
            <div className='footer-company-icon'>AK Technologies</div>
            <p className='footer-para'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi, architecto!</p>
            <div className='footer-icons'>
               <FaSquareFacebook className='footer-icon' />
               <FaSquareInstagram className='footer-icon' />
               <FaYoutubeSquare className='footer-icon' />
               
            </div>
        </div>
        <div className='footer-support'>
            <div>
                <h3 className='footer-underline'>Support</h3>
            </div>
            <p>Contact Support</p>
            <p>FAQ</p>
            <p>Pravicy Policy</p>
            <p>Terms & Conditions</p>
        </div>
        <div className='footer-links'>
            <div>
                    <h3 className='footer-underline'>Useful Link</h3>
                    {/* <div className='footer-underline'></div> */}
                </div>
                <p>About Us</p>
                <p>Services</p>
                <p>Portfolio</p>
                <p>Blog</p>

            </div>
     </div>
    
    </>
  )
}

export default Footer
