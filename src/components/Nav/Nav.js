import React from 'react';
import { Link } from 'react-router-dom';
// import './Nav.css'

const Nav = () => {
    return (
        // <div>
            // <nav classNameName='navbar navbar-expand-lg navbar-light bg-light'>
            //     {/* React router dom way of doing anchor tags <a> */}
            //     <Link to='/'>Home</Link>
            //     <Link to='nasalist'>NASA List</Link>
            //     <Link to='about'>About</Link>
            //     <Link to='giphy'>Giphy</Link>
            //     <Link to='starships'>Star Ships</Link>
            // </nav>
        // </div>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">Dillon The Developer</a>
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
      <form className="d-flex">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>
    );
}

export default Nav;
