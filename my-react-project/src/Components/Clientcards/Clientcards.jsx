import { BsStarFill } from "react-icons/bs";
import { BsStar } from "react-icons/bs";
import Card from 'react-bootstrap/Card';
import { RiDoubleQuotesR } from "react-icons/ri";

function Clientcards(info) {
  return (
    <Card className="mt-4 rounded-4">
    <div className="text-start ms-3"><BsStarFill /><BsStarFill /><BsStarFill /><BsStarFill /><BsStar /></div>
      <Card.Body>
        <Card.Text className="text-start">
       {info.text}
        </Card.Text>

        <div className="personinfo d-flex justify-content-space-between">
          <div className="personphoto text-start  d-flex align-items-center">
            <img className="me-2" src={info.photo}/>
          <div> <h5>{info.name}</h5> <h6>{info.job}</h6></div>
           </div>
      <RiDoubleQuotesR className="ms-auto font-size-5" />
        </div>
      </Card.Body>
    </Card>
  );
}
export default Clientcards;