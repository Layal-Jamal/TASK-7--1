import './Newhero.css'
import { IoIosArrowForward } from "react-icons/io";
export default function Newhero() {
  return (
    <div>
        <img className='herophoto' src="src/assets/V7-task/V7-task/breadcrumb.webp" />
        <div className='incenter'>
          <h1>ABOUT US</h1>
          <h5>Home <IoIosArrowForward /> About Us</h5>
        </div>
    </div>
  )
}
