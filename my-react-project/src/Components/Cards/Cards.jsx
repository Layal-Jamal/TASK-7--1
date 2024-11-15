import './Cards.css'
import Button from 'react-bootstrap/Button';
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
function Cards(props) {
  return (
    <div className=' my-5 text-start'>
    <div className='four-cards p-3 rounded-5'>
      <img className='card-img '  src={props.image} />
      <div className='C-body'>
        <h5>{props.title}</h5>
        <p>{props.description}</p>
        <Button variant="primary" className='rounded-pill '>{props.buttonText} <MdKeyboardDoubleArrowRight /></Button>
      </div>
      </div>
    </div>
  );
}

export default Cards;