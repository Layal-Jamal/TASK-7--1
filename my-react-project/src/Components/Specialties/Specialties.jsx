import { Col,  Row } from 'react-bootstrap'
import './Specialties.css'

export default function Specialties() {
  return (
    <>
    <div className='Specialties-info'>
        <div className='Video mb-5'>
<iframe className='rounded-4 ' width='1050'  height="350" src="https://www.youtube.com/embed/nogh434ykF0?si=ZT8AL12jXxnfmCRt" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
    </div>
    <div className='row-spec pt-5'>
        <Row className='pt-5'>
            <Col className='text-start'>
            <h1 className='one'>01</h1>
            <h3>Requirement</h3>
            <p className='para'>Lorem ipsum dolor sit amet consectetur adipisicing  assumenda nemo nam blanditiis.</p>
            </Col>

            <Col  className='text-start'>
            <h1 className='two'>02</h1>
            <h3>UI/UX Design</h3>
            <p className='para'>Lorem ipsum dolor sit amet consectetur adipisicing  assumenda nemo nam blanditiis.</p>
            </Col>

            <Col  className='text-start'>
            <h1 className='three'>03</h1>
            <h3>Prototype</h3>
            <p className='para'>Lorem ipsum dolor sit amet consectetur adipisicing  assumenda nemo nam blanditiis.</p>
            </Col>

            <Col className='text-start'>
            <h1 className='four'>04</h1>
            <h3>Development</h3>
            <p className='para'>Lorem ipsum dolor sit amet consectetur adipisicing  assumenda nemo nam blanditiis.</p>
            </Col>
            
        </Row>
        </div>
    </div>
    

    </>
  )
}
