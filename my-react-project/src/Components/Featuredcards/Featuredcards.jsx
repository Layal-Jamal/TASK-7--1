import './Featuredcards.css'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { FaLongArrowAltRight } from "react-icons/fa";
function  Featuredcards(information) {
  return (
    <div className='feasection mt-5 '>
    <Card className='photos border-0 mt-5'>
    <Card.Img variant="top" src={information.thumb} />
    </Card>
    <div className='featucards px-2 py-4 border-0 rounded-2 py-0'>
      <Card.Body>
  
        <div className='buttondate pt-0 '><Button className='me-3 rounded-5 mb-2 '>{information.button}</Button> <p className='p-0'>{information.date}</p></div>
        <Card.Text className='fdescription text-start py-3'>{information.description}</Card.Text>
        <div className=" d-flex justify-content-space-between">
             <div className=" text-start  d-flex align-items-center">
               <img className="me-2" src={information.person}/>
              <div className='namejob ms-2'> <h5>{information.name}</h5> <h6>{information.job}</h6></div>
               </div>
           <FaLongArrowAltRight  className="icon ms-auto font-size-5 mt-2" />
        </div>

      </Card.Body>

    </div>
    </div>
  );
}
export default Featuredcards;