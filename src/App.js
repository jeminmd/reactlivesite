import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import About from './About';
import Contact from './Contact';
import Home from './Home';
import Navbar from './Navbar';
import Services from './Services';


function App() {
  return (
   <>

   <Navbar/>

   <Routes>
    <Route exact path="/" element={<Home name="Home"/>}/>
    <Route exact path="/services" element={<Services name="Services"/>}/>
    <Route exact path="/about" element={<About name="About"/>}/>
    <Route exact path="/contact" element={<Contact name="Contact"/>}/>
    <Route  path="*" element={<Navigate to="/"/>}/>
   </Routes>

   </>
  );
}

export default App;
