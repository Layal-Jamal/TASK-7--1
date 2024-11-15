import './Clientfeedback.css'
import { FaLongArrowAltLeft } from "react-icons/fa";
import { FaLongArrowAltRight } from "react-icons/fa";
import Clientcards from '../Clientcards/Clientcards';
import { Col, Row } from 'react-bootstrap';
export default function Clientfeedback() {
  return (
    <div  className='Client p-5'>
       
   <div className='firstsec'>
    <img className='me-5' src='src/assets/V7-task/V7-task/ctaThumb1_1.webp' />
    
    <div className='me-5 text-start'>
    <div className='contact'> <FaLongArrowAltLeft /> CONTACT US <FaLongArrowAltRight /></div>
     <p className='expert'>24/7 Expert Hosting Support Our Customers Love </p>
     </div>
   <button>TALK TO A SPECIALIST  <FaLongArrowAltRight /></button>
   </div>

<div className='mt-5 pt-5'>
  <div className='TESTIMONIALS'> <FaLongArrowAltLeft /> TESTIMONIALS <FaLongArrowAltRight /></div>
   <h2>Our latest Client Feedback</h2>
</div>
  <Row>
    <Col>
    <Clientcards  text="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempore voluptas sint optio, incidunt aliquam maxime reprehenderit aspernatur officia ipsam." photo="src/assets/V7-task/V7-task/testiThumb3_1.webp" name="Krostin Waston"job="Web Designer" />
    </Col>

    <Col>
    <Clientcards  text="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempore voluptas incidunt aliquam maxime reprehenderit aspernatur officia ipsam." photo="src/assets/V7-task/V7-task/testiThumb3_1.webp" name="Krostin Waston" job="Tech enthusiost"/>
    </Col>

    <Col>
    <Clientcards  text="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempore voluptas incidunt aliquam maxime reprehenderit aspernatur officia ipsam." photo="src/assets/V7-task/V7-task/testiThumb3_1.webp" name="Krostin Waston" job="Web Enterprenuor"/>
    </Col>
    
  </Row>
</div>
    
  )
}
