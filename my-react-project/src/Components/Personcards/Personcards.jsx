import './Personcards.css'
import Card from 'react-bootstrap/Card';

export default function Personcards(person) {
  return (
    <div className='persondiv'>
      <Card.Img variant='top' src={person.photo} />
      <div className='ca-body'>
        <h2>{person.name}</h2>
        <h4>{person.job}</h4>
      </div>
    </div>
  );
}



