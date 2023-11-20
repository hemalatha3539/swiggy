import React from "react";
import ReactDOM from "react-dom/client";
import { Link } from "react-router-dom";


const Navbar =()=>{
    return <div className="navbar">
      <div className="nav-start">
      <div className="nav-logo">
        <img src="https://logos-world.net/wp-content/uploads/2020/11/Swiggy-Emblem-700x394.png" className="logo"></img>

      </div>
      <div className="nav-pera">
       <p className="pera"><span className="others">others</span> Tirupati,Andrapradesh,India<i class="bi bi-chevron-down"></i></p>
      </div>
      </div>
      

      <div className="nav-items">
        <ul className="ul">
          <Link className="link" to="/search"><li className="li">  <i className="bi bi-search"></i>    Search</li> </Link>
          <Link className="link" to="/offer"><li  className="li">  <i className="bi bi-patch-check"></i>   Offer</li></Link>
          <Link className="link" to="/contact">     <li  className="li"> <i className="bi bi-patch-question"></i>    Help</li></Link>
          <li  className="li"> <i className="bi bi-person-circle"></i>    Sign in</li>
          <li  className="li"> <i className="bi bi-cart2"></i>    Cart</li>
        </ul>
      </div>


    </div>

}
export default Navbar;
