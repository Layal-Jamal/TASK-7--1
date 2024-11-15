import "./Featured.css"
import { FaLongArrowAltLeft } from "react-icons/fa";
import { FaLongArrowAltRight } from "react-icons/fa";
import Featuredcards from "../Featuredcards/Featuredcards";
import { Col, Row } from "react-bootstrap";
export default function Featured() {
  return (
    <div className="featurednews  py-4 my-5">
    <div className="newssec mb-5">
  <div className='news'>
    <FaLongArrowAltLeft /> BLOG & NEWS<FaLongArrowAltRight />
   <h2>Featured News And Insights</h2>
   </div>
   <div className='arrows ' >
   <FaLongArrowAltLeft className='leftarrow'/>
   <FaLongArrowAltRight className='rightarrow'/>
   </div>

    </div>
    <Row>
      <Col>
    <Featuredcards thumb="src/assets/V7-task/V7-task/blogThumb1_2.webp" button="Uncategorized" date="MARCH 14,2024" description="Best And Fastest Data Server Ever"  person="src/assets/V7-task/V7-task/blogProfile1_2.webp" name="Admin" job="Co,Founder"/>
    </Col>
    <Col>
    <Featuredcards thumb="src/assets/V7-task/V7-task/blogThumb1_3.webp" button="Technology" date="MARCH 29,2024" description="Life Wont One Beast Air Over Above All" person="src/assets/V7-task/V7-task/blogProfile1_3.webp" name="Admin" job="Co,Founder"/>
    </Col>
    <Col>
    <Featuredcards thumb="src/assets/V7-task/V7-task/blogThumb1_1.webp" button="Shared Hosting" date="MARCH 24,2024" description="Attentive Was Born In 2015 Help Sales Teams" person="src/assets/V7-task/V7-task/blogProfile1_1.webp" name="Admin" job="Co,Founder"/>
    </Col>
    </Row>
    </div>
  )
}
