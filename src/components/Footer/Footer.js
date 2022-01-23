import React from 'react';
import { Link } from 'react-router-dom';
// import './Footer.css'

const Footer = () => {
    return (
        
        <footer className="navbar navbar-expand-lg navbar-dark bg-dark">
             
  <div className="container-fluid">
    
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link to='/' className="nav-link active" aria-current="page">Home</Link>
        </li>
        <li className="nav-item">
          <Link to='about' className="nav-link">About</Link>
        </li>
        <li className="nav-item dropdown">
          <Link to='' className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            App's
          </Link>
          <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><Link to='nasalist' className="dropdown-item" href="#">Nasa List</Link></li>
            <li><hr className="dropdown-divider" /></li>
            <li><Link to='giphy' className="dropdown-item" href="#">Giphy</Link></li>
            <li><hr className="dropdown-divider" /></li>
            <li><Link to='starships' className="dropdown-item" href="#">Star Wars Ships</Link></li>
          </ul>
        </li>
        
      </ul>
    
    </div>
  </div>
        </footer>
     
    );
}

export default Footer;
