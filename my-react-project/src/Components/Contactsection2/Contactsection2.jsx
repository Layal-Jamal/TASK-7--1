import './Contactsection2.css'
import { SlEnvolopeLetter } from "react-icons/sl";
import { BsTelephonePlusFill } from "react-icons/bs";
import { GrLocation } from "react-icons/gr";
import { FaLongArrowAltRight } from "react-icons/fa";
export default function Contactsection2() {
  return (
    <>
    <div className='bothleftright m-5'>

     <div className='co-left'>

   <div className='call-us pt-3'>
      <div className='d-flex align-items-center p-2 border-bottom mx-5'>
        <div className='contactimg'><BsTelephonePlusFill /></div>
        <div><h4>Call Us 7/24</h4>
        <h3>+208-555-0112</h3></div>
      </div>

      <div className='d-flex align-items-center p-2  border-bottom mx-5'>
        <div className='contactimg'><SlEnvolopeLetter /></div>
        <div><h4>Make a Quote</h4>
        <h3>Infotech@gmail.com</h3></div>
      </div>

      <div className='d-flex align-items-center p-2  border-bottom mx-5'>
        <div className='contactimg'><GrLocation /></div>
        <div><h4>Location</h4>
        <h3>4517 Washington ave</h3></div>
      </div>
      <div>
      <iframe className='video2' height={310} src="https://www.youtube.com/embed/QjMJsQx_O7o?si=c_otRo_yMmVmyx8i" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
      </div>

  </div>
     </div>
     <div className='co-right text-start p-5'>
        <div className='mb-4'><h2>Ready To Get Started?</h2>
        <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam veritatis saepe ad, sunt culpa commodi doloribus laborum.</div>
        </div>

        <div className='inputfield mb-4'>
            <div className='w-50 me-1'><h3>Your Name*</h3><input type='text' className='w-100'/></div>
            <div className='w-50'><h3>Your Email*</h3><input type='email' className='w-100'/></div>
        </div>
        <div className='mb-4'>
        <h3>Write Message*</h3> <textarea className='w-100'></textarea>
        </div>

        <div><button>Send Message <FaLongArrowAltRight /></button></div>

     </div>

    </div>


    <div><iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d25973.23042438593!2d35.792317670743195!3d35.53755199123072!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1526ae989796ef1f%3A0xf8d7c9dd92bdf2ad!2sTishrine%2C%20Latakia%2C%20Syria!5e0!3m2!1sen!2s!4v1731630571043!5m2!1sen!2s" className='w-100' height="450" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe></div>
    </>
  )
}
