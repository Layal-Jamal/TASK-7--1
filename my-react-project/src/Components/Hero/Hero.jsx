import './Hero.css'
import { CiWavePulse1 } from "react-icons/ci";
import { FaLongArrowAltRight } from "react-icons/fa";
import { IoStarSharp } from "react-icons/io5";
import { FaCheck } from "react-icons/fa";
export default function Hero() {
  return (
    <div className='Hero'>
      <div className='left-side text-start'>
        <div className='left-side-section'>
          <div className='ch1'>
          <CiWavePulse1 className='ms-3'/>Everything you need to create a website
          </div>
          <h1 className='mb-4'>BUSINESS Innovation With IT Services Expertise</h1>
          <div className='d-flex'>
          <ul>
            <li><FaCheck />Deployment and Support </li>
            <li><FaCheck />Discovery and Analysis</li>
          </ul>
          <ul>
            <li><FaCheck />Flexibility and Adaptability </li>
            <li><FaCheck />Competitive Advantage</li>
          </ul>
          </div>
          <button>GET STARTED <FaLongArrowAltRight className='ms-1'/></button>
        </div>

       <div className='herobottom'>
        <div className='on-left'>
            <h3>Trustipilot</h3>
            <div className='d-flex align-items-center'> 
            <img className='me-3' src="src/assets/V7-task/V7-task/profileShape1_1.webp" />
          <div>
          <IoStarSharp /><IoStarSharp /><IoStarSharp />
          <p>450+ reviews</p>
          </div>
        </div>
        </div>

          <div>
            <h3>GOOGLE</h3>
            <div  className='d-flex align-items-center'>
              <div>
            <img className='me-3' src='src/assets/V7-task/V7-task/profileShape1_1.webp'/>
          </div>
          <div>
          <IoStarSharp /><IoStarSharp /><IoStarSharp />
          <p >450+ reviews </p>
          </div>
          </div>
        </div>
   
</div>
      </div>
      <div className='right-side'>
      <div className='heroimg'>
        <img src='src/assets/V7-task/V7-task/heroThumb1_1.webp'/>
      </div>
      </div>
    </div>
  )
}
