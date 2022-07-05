import React from "react";
import {Route,Routes, NavLink} from "react-router-dom";
import Home from "./components/Home";
import Help from "./components/Help";
import ContactUs from "./components/ContactUs"
import TopRatedBooks from "./components/TopRatedBooks";
import PreviousQuestionPapers from "./components/PreviousQuestionPapers";
import LoginOrSignUp from "./components/LoginOrSignUp";
import VideoTutorials from "./components/VideoTutorials";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import Books from "./components/Books";
import CSE from "./components/CSE";
import ECE from "./components/ECE";
import MECH from "./components/MECH";

import logo from "./logo.svg";
import "./App.css";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap";
function App() {
  return (
    <div>
     <div>

    <nav className="navbar navbar-expand-lg navbar-dark bg-info" style={{height:"200px"}}>
  <div className="container-fluid">
    <NavLink className="navbar-brand" to="#">
      <img className="logo" src="https://www.logoinspirations.co/wp-content/uploads/2019/07/book-logo.jpg"></img>
    </NavLink>
    <button className="btn btn-outline-dark btn-sm" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button> 
    {/* <button type="button" class="btn btn-primary">Primary</button> */}
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav nav-tabs p-4 me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <NavLink className="nav-link btn btn-outline-dark btn-sm" to="Home">
            Home
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link btn btn-outline-dark btn-sm" to="TopRatedBooks">
          TopRatedBooks
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="PreviousQuestionPapers">PreviousQuestionPapers
          
          </NavLink>
        </li>
        <li className="nav-item btn-sm">
          <NavLink className="nav-link" to="VideoTutorials">Video Tutorials
          
          </NavLink>
        </li>
        <li className="nav-item btn-sm">
          <NavLink className="nav-link" to="LoginOrSignUp">Login/SignUp
          
          </NavLink>
        </li>
        <li className="nav-item btn-sm">
          <NavLink className="nav-link" to="Books">Books
          
          </NavLink>
          
        </li>
      </ul>
      
      <form className="d-flex">
        <input className="form-control me-2" type="search" placeholder="Search here" aria-label="Search"></input>
        {/* <button className="btn btn-outline-info" type="submit">Search..</button> */}
        <button type="button" className="btn btn-outline-dark">Search</button>
      </form>
      
      
    </div>
  </div>
  </nav>
  <Routes>
<Route path="Home" element={<Home />} >
<Route path="Help" element={<Help />} />
<Route path="ContactUs" element={<ContactUs />} />
</Route>
  <Route path="TopRatedBooks" element={<TopRatedBooks />} />
  <Route path="PreviousQuestionPapers" element={<PreviousQuestionPapers />} />
  <Route path="VideoTutorials" element={<VideoTutorials />} />


  <Route path="LoginOrSignUp" element={<LoginOrSignUp />} >
  <Route path="Login" element={<Login />} />
  <Route path="SignUp" element={<SignUp />} />
  </Route>

  <Route path="Books" element={<Books />}> 
  <Route path="CSE" element={<CSE />} />
  <Route path="ECE" element={<ECE />} />
  <Route path="MECH" element={<MECH />} />
  </Route>
 
  </Routes>
  
  


</div>
 
</div>
  );
}

export default App;
