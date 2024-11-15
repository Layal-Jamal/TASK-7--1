import { Col, Row } from 'react-bootstrap';
import './Footersection.css'
import { FaLongArrowAltRight } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { RiArrowRightDoubleLine } from "react-icons/ri";
import { CiCalendarDate } from "react-icons/ci";
import { SlEnvolopeLetter } from "react-icons/sl";
import { BsFillTelephoneFill } from "react-icons/bs";
export default function Footersection() {
  return (
    <>
    <div className="lastsec px-5 pb-5 pt-2">

   <div className='beginning'>
    <div className='me-5 d-none d-sm-block'>
    <img  src='src/assets/V7-task/V7-task/ctaThumb.webp' />
    </div>
   
    <div className=' ms-5 text-start'>
     <p className='ms-5'>Stay Connected With Cutting Edge IT </p>
     </div>
   <button>TALK TO A SPECIALIST  <FaLongArrowAltRight /></button>

   </div>

  <Row>
  <Col className='footerone text-start '>
  <img className='mb-2'  src="src/assets/V7-task/V7-task/logo.svg"/>
   
    <p >Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iusto sapiente non adipisci voluptates officia autem.</p>
    <div className='footericons'>
    <FaFacebookF className='me-1'/><FaTwitter className='me-1'/><FaYoutube className='me-1'/><FaInstagram />
    </div>
  </Col>
  <Col className='footertwo text-start '>
  <h3 className='ms-4'>Quick Links</h3>
  <ul>
    <li className='mb-2'><RiArrowRightDoubleLine />Extech About</li>
    <li className='mb-2'><RiArrowRightDoubleLine />Our Services</li>
    <li className='mb-2'><RiArrowRightDoubleLine />Our Blogs</li>
    <li className='mb-2'><RiArrowRightDoubleLine />FAQS</li>
    <li className='mb-2'><RiArrowRightDoubleLine />Contact Us</li>

  </ul>
  </Col>
  <Col>
  <div className='footerthree text-start '>
    <h3>Recent Posts</h3>
    <div className='d-flex mb-2'>
        <img src='src/assets/V7-task/V7-task/footerThumb1_1.webp'/>   
    <div  className='text-start ms-2'>
        <h5><CiCalendarDate />15th April,2024</h5>
        <h4>Top 5 Most Famous Technology Trend in 2024</h4>
    </div>
  </div>
  </div>
  <div className='d-flex'>
    <img src='src/assets/V7-task/V7-task/footerThumb1_2.webp'/>
  <div className='text-start ms-2'>
  <h5><CiCalendarDate />20th June,2024</h5>
  <h4>The Surfing Man Will Blow Your Mind</h4>
  </div>
  </div>
  </Col>
  <Col>
  <div className='footerfour text-start '>
    <h3 className='ms-4'>Contact Us</h3>
    <ul>
        <li className='mb-2'><SlEnvolopeLetter className='me-1'/>info@example.com</li>
        <li className='mb-2'><BsFillTelephoneFill className='me-1'/>+208-6666-0112</li>
        <li className='mb-2'><input className='email' placeholder='Your email address'/></li>
        <li className='mb-2'><input className='checkboxfeild' type='checkbox'/>I agree to the <a href='#'>Privacy Policy</a></li>
    </ul>
  </div>
  </Col>
  </Row>
 



</div>
   <div className='endoffooter px-5'>
   <span>@All Copyright 2024 by Extech</span>
 < span >
   <span className='me-4'>Terms & Condition</span>
   <span>Privacy Policy</span>
 </span>
 </div>
</>
    
  )
}
