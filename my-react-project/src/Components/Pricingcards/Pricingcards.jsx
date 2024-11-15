import './Pricingcards.css'
import { GoQuestion } from "react-icons/go";
import Button from 'react-bootstrap/Button';
import { FaArrowRight } from "react-icons/fa6";
import { MdDownloadDone } from "react-icons/md";
import { FiMinusCircle } from "react-icons/fi";
export default function Pricingcards(data) {
  return (

        <div className='all-cards my-5 text-start'>
        <div className='three-cards p-3 rounded-5'>
          <div className='cardhero'>
            <div>
            <p>{data.ptitle}</p>
            <p>{data.price}</p>
            </div>
            <div className="pricingIcon ">
            <img  src={data.image}/>
            </div>
          </div>

          <div className='Card-body'>
            <div className='mx-2 '>   
            <div className='line'> <div><MdDownloadDone className='trueicon me-2'/>{data.paragragh1}</div>  <div><GoQuestion /></div></div>
            <div className='line'><div><MdDownloadDone className='trueicon me-2'/>{data.paragragh2}</div>  <div><GoQuestion /></div></div>
            <div className='line'><div><MdDownloadDone className='trueicon me-2'/>{data.paragragh3}</div>  <div><GoQuestion /></div></div> 
            <div className='line'><div><MdDownloadDone className='trueicon me-2'/>{data.paragragh4}</div>  <div><GoQuestion /></div></div>
            <div className='line'><div><MdDownloadDone className='trueicon me-2'/>{data.paragragh5}</div>  <div><GoQuestion /></div></div>
            <div className='line'><div><FiMinusCircle  className='falseicon me-2'/>{data.paragragh6}</div>  <div><GoQuestion /></div></div>
            <div className='line'><div><FiMinusCircle className='falseicon me-2'/>{data.paragragh7}</div>  <div><GoQuestion /></div></div>
            <Button className='rounded-4 mt-4 w-100 '>{data.cardbutton} <FaArrowRight /></Button>
          </div>
          </div>
        </div>
        </div>
      );
    }