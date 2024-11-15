import './Newnav.css'
import { FaAngleDown } from "react-icons/fa6";
import { CiSearch } from "react-icons/ci";
import { FaArrowRight } from "react-icons/fa6";
import { Link } from 'react-router-dom';
export default function Newnav() {
  return (
    <nav className='LJ-Newnav'>
        <div ><img className='plane ms-4' src="src/assets/V7-task/V7-task/plane.webp"/></div>
        <div>
        <h1><img className='ex' src='src/assets/V7-task/V7-task/logo-image.jpg'alt='' /> Extech</h1>
        </div>
        <div className='side-2'>
            <ul className='Menu'>
              <Link to={'/'}>  <li>Home
                <FaAngleDown />
                </li></Link>
              <Link to={'/about'}> <li>About</li> </Link>
                <li>Services
                <FaAngleDown />
                </li>
                <li>Pages
                <FaAngleDown />
                </li>
                <li>Blog
                <FaAngleDown />
                </li>
         <Link to={'/contact'}>  <li>Contact</li></Link>
            </ul>
        </div>
        <div className='search-basket'>
            <CiSearch />
            </div>
        <button className='me-3' >GET A QUOTE <FaArrowRight /></button>

    </nav>
  )
}