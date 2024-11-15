import './Navbar.css'
import { FaAngleDown } from "react-icons/fa6";
import { CiSearch } from "react-icons/ci";
import { SlBasket } from "react-icons/sl";
import { FaArrowRight } from "react-icons/fa6";
import { Link } from 'react-router-dom';
export default function Navbar() {
  return (
    <nav className='LJ-Navbar'>
        <div>
        <h1><img src='src/assets/V7-task/V7-task/logo-image.jpg'alt='' /> Extech</h1>
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
            <SlBasket className='basket'/>
            </div>
        <button>GET A QUOTE <FaArrowRight /></button>

    </nav>
  )
}