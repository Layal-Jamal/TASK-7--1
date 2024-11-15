import { Col, Row } from 'react-bootstrap';
import './Aboutcards.css'
import { FaLongArrowAltLeft } from "react-icons/fa";
import { FaLongArrowAltRight } from "react-icons/fa";
import Personcards from '../personcards/personcards';
import Aboutfooter from '../Aboutfooter/Aboutfooter';
export default function Aboutcards() {
  return (
    <div className='my-5'>
    <div className='titleofsec'>
    <div className='our-services'>
    <FaLongArrowAltLeft /> TEAM MEMBERS <FaLongArrowAltRight />
   <h2>Our Dedicated Team Members</h2>
   </div>
   <div className='all-members' >

    <button>All Members <FaLongArrowAltRight /></button>
   </div>
 </div>
 <Row>
  <Col>
  <Personcards photo="src/assets/V7-task/V7-task/04.webp" name="Ali" job="Web Designer"/>
  </Col>

  <Col>
  <Personcards photo="src/assets/V7-task/V7-task/05.webp" name="Nour" job="Cyber Expert"/>
  </Col>

  <Col>
  <Personcards photo="src/assets/V7-task/V7-task/06.webp" name="Ahmad" job="Web Expert"/>
  </Col>

  <Col>
  <Personcards photo="src/assets/V7-task/V7-task/07.webp" name="Karam" job="Data Analyst"/>
  </Col>
 </Row>

 <div className='brands my-4'>
  1K+Brands Trust Us
 </div>
 <div className='envato'>
  <img src='src/assets/V7-task/V7-task/envato.jpg' />
  <img src='src/assets/V7-task/V7-task/envato.jpg' />
  <img className='envatogrey' src='src/assets/V7-task/V7-task/envato.jpg' />
  <img src='src/assets/V7-task/V7-task/envato.jpg' />
  <img src='src/assets/V7-task/V7-task/envato.jpg' />
 </div>
    </div>
  )
}
