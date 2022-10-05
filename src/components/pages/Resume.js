import React from 'react';
import resume from './images/resume.png'

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
        <img src={resume} width={'200px'} className='resume'></img>
        <a href='https://drive.google.com/file/d/1njn85qmwoc71WkjNbpndfduidUisVFUB/view?usp=sharing' 
        target="_blank" className='resume-link'>
          <button className='resumeBtn'>Download</button>
        </a>
      </div>
      <div className='skills'>
        <h3>Technical Skills</h3>
        <ul className='skillsList'>
          <li>HTML</li>
          <li>CSS</li>
          <li>Javascript</li>
          <li>SQL</li>
          <li>Node.js</li>
          <li>MongoDB</li>
          <li>React</li>
        </ul>
      </div>
    </div>
  );
}
