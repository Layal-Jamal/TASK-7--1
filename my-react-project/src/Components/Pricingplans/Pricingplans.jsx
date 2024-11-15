import { Col, Row } from 'react-bootstrap'
import './Pricingplans.css'
import { FaLongArrowAltLeft } from "react-icons/fa";
import { FaLongArrowAltRight } from "react-icons/fa";
import Pricingcards from '../Pricingcards/Pricingcards';

export default function Pricingplans() {
  return (
    
    <>
     <div className='Our-pricing  position-relative'>
    
   <div className='pricing'><FaLongArrowAltLeft /> OUR PRICING <FaLongArrowAltRight /></div>
    <h2>Our Awesome Pricing Plans</h2>
    <div className='btn-img mt-3'>
      
    <div className='Monthly-Yearly me-5'>
        <button className='Monthly'>Monthly</button>
        <button className='Yearly'>Yearly</button>
    </div>
     <div >
      <img src='src/assets/V7-task/V7-task/pricingIcon1_2.svg'/>
    </div>
   <div className='save'>Save 25%</div>

    </div>

   <Row> 
    <Col>
    <Pricingcards ptitle ="Regular Plans"price="$49/Month" num="$49" duration="/Month" image="src/assets/V7-task/V7-task/pricingIcon1_1.svg"
    paragragh1="Lorem ipsum dolor sit amet ."
    paragragh2="Lorem ipsum dolor sit amet ."
    paragragh3="Lorem ipsum dolor sit amet ."
    paragragh4="Lorem ipsum dolor sit amet ."
    paragragh5="Lorem ipsum dolor sit amet ."
    paragragh6="Lorem ipsum dolor sit amet ."
    paragragh7="Lorem ipsum dolor sit amet ."
    cardbutton="GET STARTED NOW"
    
    />
    </Col>

    <Col>
    <Pricingcards ptitle ="Regular Plans"price="$49/Month" num="$49" duration="/Month" image="src/assets/V7-task/V7-task/pricingIcon1_1.svg"
    paragragh1="Lorem ipsum dolor sit amet ."
    paragragh2="Lorem ipsum dolor sit amet ."
    paragragh3="Lorem ipsum dolor sit amet ."
    paragragh4="Lorem ipsum dolor sit amet ."
    paragragh5="Lorem ipsum dolor sit amet ."
    paragragh6="Lorem ipsum dolor sit amet ."
    paragragh7="Lorem ipsum dolor sit amet ."
    cardbutton="GET STARTED NOW"
    
    />
    </Col>

    <Col>
    <Pricingcards ptitle ="Regular Plans"price=" $49/Month" num="$49" duration="/Month" image="src/assets/V7-task/V7-task/pricingIcon1_1.svg"
    paragragh1="Lorem ipsum dolor sit amet ."
    paragragh2="Lorem ipsum dolor sit amet ."
    paragragh3="Lorem ipsum dolor sit amet ."
    paragragh4="Lorem ipsum dolor sit amet ."
    paragragh5="Lorem ipsum dolor sit amet ."
    paragragh6="Lorem ipsum dolor sit amet ."
    paragragh7="Lorem ipsum dolor sit amet ."
    cardbutton="GET STARTED NOW"
    
    />
    </Col>
   </Row> 
   <div className='hand-image'><img src="src/assets/V7-task/V7-task/pricingShape1_1.webp" alt="" /></div>
   </div>
    </>
  )
}
