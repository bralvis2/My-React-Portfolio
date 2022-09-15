import React from 'react';

// style sheet
import './Resume.css'

export default function Resume() {
  return (
    <div className='resumeContainer'>
      <div className='resumeInfo'>
        <h1>Resume Page</h1>
        <p className='downloadResume'>
          Download my resume.
        </p>
        <a href='https://drive.google.com/file/d/1hxaAQW79EvwmUp8ht59Y3xITBZSx3tVx/view?usp=sharing' 
        target="_blank">
          <button className='resumeBtn'>Download</button>
        </a>
      </div>
      <div className='skills'>
        <h3>Technical Skills</h3>
        <ul className='skillsList'>
          <li>HTML</li>
          <li>CSS</li>
          <li>Javascript</li>
          <li>MySQL</li>
          <li>Node.js</li>
          <li>MongoDB</li>
          <li>React</li>
        </ul>
      </div>
    </div>
  );
}
