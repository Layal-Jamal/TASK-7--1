import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home/Home.jsx'
import About from './Pages/About/About.jsx' 
import Contact from './Pages/Contact/Contact.jsx'


function App() {

  return (
    <>
    <Routes>

      <Route path='/' element={<Home />}/>
      <Route path='/about' element={<About />}/>
      <Route path='/contact' element={<Contact />}/>
    </Routes>
   </>
  )
}

export default App
