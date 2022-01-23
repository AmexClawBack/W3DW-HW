import React from 'react';
import { Link } from 'react-router-dom';
// import './Footer.css'

const Footer = () => {
    return (
        
        <footer className='footerBar'>
                <Link to='/'>Home</Link>
                <Link to='nasalist'>NASA List</Link>
                <Link to='about'>About</Link>
                <Link to='giphy'>Giphy</Link>
                <Link to='starships'>Star Ships</Link>
        </footer>
     
    );
}

export default Footer;
