import React from 'react';
import {Link} from 'react-router-dom';
import './Header.css';


export default function  Header (){ 
  return (
    <header>
      <Link to='/Home' id='Header-link'>Petful</Link>
    </header> 
  )
}

// <Link to='/Home'>Petful</Link>