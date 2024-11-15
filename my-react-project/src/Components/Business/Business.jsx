import './Business.css'
import { FaLongArrowAltLeft } from "react-icons/fa";
import { FaLongArrowAltRight } from "react-icons/fa";
import Cards from '../Cards/Cards';
import { Row } from 'react-bootstrap';
import {Col} from 'react-bootstrap';

export default function Business() {
  return (
    < >
    <div className='Elavating-business py-4 my-5'>
  <div className='sec-title'>
    <div className='our-services'>
    <FaLongArrowAltLeft /> OUR SERVICES <FaLongArrowAltRight />
   <h2>Elevating Businesses With IT Ingenuity</h2>
   </div>
   <div className='arrows' >
   <FaLongArrowAltLeft className='leftarrow'/>
   <FaLongArrowAltRight className='rightarrow'/>
   </div>
 </div>
     

     <Row>
    <Col>
      <Cards title="Woo Commerce" description="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quisquam aliquid quibusdam beatae omnis perspiciatis."  image="src/assets/V7-task/V7-task/serviceIcon1_2.svg" buttonText="Read more"/>
    </Col>
     <Col className='d-none d-sm-block'>
       <Cards className='d-none d-sm-block' title="CRM Solutions" description="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quisquam aliquid quibusdam beatae omnis perspiciatis." image="src/assets/V7-task/V7-task/serviceIcon1_1.svg" buttonText="Read more"/>
     </Col>

    <Col className='d-none d-sm-block'>
      <Cards className='d-none d-sm-block' title="Web Design" description="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quisquam aliquid quibusdam beatae omnis perspiciatis." image="src/assets/V7-task/V7-task/serviceIcon1_4.svg" buttonText="Read more"/>
     </Col>

    <Col className='d-none d-sm-block'>
      <Cards  title="Data Guard" description="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quisquam aliquid quibusdam beatae omnis perspiciatis." image="src/assets/V7-task/V7-task/serviceIcon1_1.svg" buttonText="Read more"/>
    </Col>
     </Row>
    </div>
    </>
  )
}
