import React from 'react';
// import { Route, Routes } from 'react-router-dom';
// import { Nav ,NavDropdown,NavItem,Navbar} from 'react-bootstrap';
import './App.css';
// import { Routes ,Route } from 'react-router-dom';
import Navbar from './my-component/Navbar'
import Header from './my-component/Header';
import Feature from './my-component/Feature';
import Offer from './my-component/Offer';
import About from './my-component/About';
import Contact from './my-component/Contact';
function App() {
  return (
    <>
      <Navbar/>
      <Header/>
      <Feature/>
      <Offer/>
       <About/>
       <Contact/>
           {/* <Routes>
      <Route path="/" element={<Header />} />
      <Route path="/Header" element={<Contact />} />
    </Routes> */}
    </>
  );
}

export default App;
