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
        Hello, I'm Brenda. Full stack web developer with three years of experience in secondary science education personalizing the
learning experience for students. Now looking to create esthetically pleasing and tailored experiences for users
on the web. Earned a certificate in full stack development from the University of Texas in Austin, with newly
developed skills in JavaScript, CSS, React.js, and responsive web design. Creative thinker and problem solver,
ardent about web development. Ready for a new challenge and opportunity for growth personalizing user
experience on the web.
      </p>
    </div>
  );
}
