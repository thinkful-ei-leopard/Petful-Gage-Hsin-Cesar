import React from 'react'
import {Link } from 'react-router-dom';
import image from '../../image/pet.jpg';
import './LandingPage.css';

function LandingPage() {
  return (
    <div id='Landing-Page'>
      <p id='Landing-Page-description'>Here at the Petful Adoption agency we pride ourselves on finding every
        cat or dog we take in a home. We have a short bio about each of our furry
        friends. The bio includes their name, age, gender and their stories. 
        Here at Petful we try to find every friend a home!
      </p>
      <img src={image} id='Landing-Page-puppies' alt='Puppies!'/>
      <Link to='/Home' id='Landing-Page-button'>Adopt!</Link>
    </div>
  )
}

export default LandingPage
