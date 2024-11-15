import Hero from '../../Components/Hero/Hero'
import Navbar from "../../Components/Navbar/Navbar";
import Logos from '../../Components/Logos/Logos';
import Business from '../../Components/Business/Business'
import Specialties from '../../Components/Specialties/Specialties'
import Pricingplans from '../../Components/Pricingplans/Pricingplans'
import Clientfeedback from '../../Components/Clientfeedback/Clientfeedback'
import  Featured from '../../Components/Featured/Featured'
import Footersection from '../../Components/Footersection/Footersection'
 export default function Home() {
  return (
    <div>
        <Navbar/>
        <Hero />
        <Logos/>
        <Business/>  
        <Specialties />
        <Pricingplans/>
        <Clientfeedback/>
        <Featured/>
        <Footersection/>
    </div>
  )
}
