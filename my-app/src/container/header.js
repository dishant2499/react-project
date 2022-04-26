import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';

import { Outlet, Link } from "react-router-dom";



const Header = () => {
  return (
   <>
   <nav className="navbar navbar-expand-lg navbar-light bg-light sticky-top">
  <div className="container-fluid">
    <Link className="navbar-brand" to="/">Navbar</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link className="nav-link " aria-current="page" to="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/package">package</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/calculator">calculator</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/todo">todo</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/weather">weather</Link>
        </li>
        
       
      </ul>
    </div>
  </div>
</nav>
<Outlet/>
   </>
  )
}

export default Header