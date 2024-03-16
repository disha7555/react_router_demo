import React from 'react';
//import logo from './logo.svg';
import './App.css';
import Contact from './Contact';
import About from './About';
 import Error from './Error';
 import Links from './Links';
 import NavLinks from './NavLinks';
 import Home from './Home';
import {Route,Routes,BrowserRouter} from "react-router-dom";
//import { Route, Switch } from "react-router";
const App = () => {
  return (
    <>

   
     <BrowserRouter>

     {/* <!--simple routing--> */}

        {/* <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/contact" element={<Contact/>} />
          <Route path="/links" element={<Links/>} />
          <Route path="/navlinks" element={<NavLinks/>} />
          <Route path="*" element={<Error/>} />
        </Routes> */}
       
       {/* <!--Nested Routing --> */}
        <Routes>
       <Route path="/" element={<NavLinks/>}>
          <Route  index element={<Home/>} /> 
          <Route path="/about" element={<About/>} />
          <Route path="/contact" element={<Contact/>} />
          <Route path="/links" element={<Links/>} />
          <Route path="/navlinks" element={<NavLinks/>} />
          <Route path="*" element={<Error/>} />
        </Route>
        </Routes>
    </BrowserRouter> 
   
    </>
  );
};

export default App;
