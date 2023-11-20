import { Link } from "react-router-dom";
import { useContext } from 'react';

import UserContext from "../pages/Data";


// IMAGES

import logo from "../media/ISCP_Logo.png"


function Navbar(){
  let {user, setUser} = useContext(UserContext);

    return(
        <div>
            <nav className="navbar navbar-expand-lg ">
  <div className="container-fluid">
    
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <Link className="navbar-brand" to="/home">Home</Link>
        <li className="nav-item">
          <Link className="nav-link" to="/profile">Profile</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/contact">About</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/contact">Contact Us</Link>
        </li>
        
        <li className="nav-item">
          <Link className="nav-link" to="/references">{user}</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/login">Log Out</Link>
        </li>
        
        
      </ul>
      
        
      <Link className="nav-link" to="/home">
        <img src={logo} style={{height: '5rem'}} to='/home'></img>
      </Link>
      
    </div>
  </div>
</nav>
        </div>
    )
}

export default Navbar;