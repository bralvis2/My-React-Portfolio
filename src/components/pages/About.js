import React from 'react';
import picture from './images/me.png'
// style sheet
import './About.css'

export default function About() {
  return (
    <div className='about'>
      <div className='title'>
        <h1>About Me</h1>
        <img className='selfie' src={picture} alt='my selfie' width={'200px'}></img>
      </div>
      <p className='about-text'>
        Hello, I'm Brenda. I am a MERN Full Stack Web Developer. I would describe myself as a creative problem solver.
      </p>
    </div>
  );
}
