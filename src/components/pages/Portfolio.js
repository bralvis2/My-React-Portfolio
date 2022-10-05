import React from 'react';
import olympiad from './images/olympiad.png'
import travel from './images/travel.png'
import goat from './images/goat.png'
import github from './images/github-icon.png'
import portfolio from './images/portfolio.png'
import comingSoon from './images/coming-soon.gif'
import team from './images/team-generator.png'
import backend from './images/backend.png'
import noteTaker from './images/note.png'
import weather from './images/weather.png'

// style sheet
import './Portfolio.css'

export default function Portfolio() {
  return (
    <div className='portfolioContainer'>
      <h1>My Portfolio</h1>
      <div className='work'>

      <div className='card'>
          <div className='card-body'>
            <img className="img-style" src={comingSoon} alt="The Chem Spot" width={'300px'} height={'210px'} />
            <div className="app-info">
              <h3>The Chem Spot</h3>
              <p>MERN Full Stack application for chemistry teachers to browse for teaching material and plan lessons.<i>coming soon</i></p>
              {/* <a href="" target="_blank" class="appBtn">Check it Out</a> */}
              <a href='https://github.com/bralvis2/The-Chem-Spot' target="_blank">
                <img src={github} alt='github icon and link' width={'35px'} className='git' />
              </a>
            </div>
          </div>
        </div>

        <div className='card'>
          <div className='card-body'>
            <img className="img-style" src={olympiad} alt="example" width={'300px'} />
            <div className="app-info">
              <h3>Olympiad</h3>
              <p>MERN Full Stack Application. Trivia game to play idependently or with friends.</p>
              <a href="https://olympiad-game.herokuapp.com" target="_blank" class="appBtn">Check it Out</a>
              <a href='https://github.com/bralvis2/Olympiad' target="_blank">
                <img src={github} alt='github icon and link' width={'35px'} className='git' />
              </a>
            </div>
          </div>
        </div>

        <div className='card'>
          <div className='card-body'>
            <img className="img-style" src={team} alt="Team Profile Generator" width={'300px'} height={'210px'} />
            <div className="app-info">
              <h3>Team Profile Generator</h3>
              <p>Generates a team profile from the terminal using Node.js, NPM packages Inquirer.js and Jest.js.</p>
              <a href="https://drive.google.com/file/d/1N-BnQ92Sy-FERtRzORgbWjgrmUVweNSS/view" target="_blank" class="appBtn">Check it Out</a>
              <a href='https://github.com/bralvis2/Team-Profile-Generator' target="_blank">
                <img src={github} alt='github icon and link' width={'35px'} className='git' />
              </a>
            </div>
          </div>
        </div>

        <div className='card'>
          <div className='card-body'>
            <img className="img-style" src={backend} alt="NoSQL Backend Application" width={'300px'} height={'250px'} />
            <div className="app-info">
              <h3>NoSQL Social Network API</h3>
              <p>Backend Application highlighting my skills with Node.js & MongooseDB.</p>
              <a href="https://drive.google.com/file/d/1ld-ErKtjPVYoUUUkEnjwZ9uVrz1DfomS/view" target="_blank" class="appBtn">Check it Out</a>
              <a href='https://github.com/bralvis2/NoSQL-Social-NetWORK-API' target="_blank">
                <img src={github} alt='github icon and link' width={'35px'} className='git' />
              </a>
            </div>
          </div>
        </div>

        <div className='card'>
          <div className='card-body'>
            <img className="img-style" src={backend} alt="SQL Backend Application" width={'280px'} height={'240px'} />
            <div className="app-info">
              <h3>SQL Employee Tracker</h3>
              <p>Backend application using Node.js & SQL.</p>
              <a href="https://drive.google.com/file/d/1xQpKoY3qxa5bVX8XCK7_bBf97V8Yse01/view" target="_blank" class="appBtn">Check it Out</a>
              <a href='https://github.com/bralvis2/SQL-Employee-Tracker' target="_blank">
                <img src={github} alt='github icon and link' width={'35px'} className='git' />
              </a>
            </div>
          </div>
        </div>

        <div className='card'>
          <div className='card-body'>
            <img className="img-style" src={noteTaker} alt="Note Taker Application" width={'300px'} height={'200px'} />
            <div className="app-info">
              <h3>Note Taker</h3>
              <p>Application to keep track of notes using Express.js.</p>
              <a href="https://note-taker-manager.herokuapp.com/" target="_blank" class="appBtn">Check it Out</a>
              <a href='https://github.com/bralvis2/Note-Taker-Manager' target="_blank">
                <img src={github} alt='github icon and link' width={'35px'} className='git' />
              </a>
            </div>
          </div>
        </div>

        <div className='card'>
          <div className='card-body'>
            <img className="img-style" src={portfolio} alt="First Portfolio I created" width={'300px'} />
            <div className="app-info">
              <h3>First Portfolio</h3>
              <p>My first porfolio when I began coding using HTML & CSS.</p>
              <a href="https://bralvis2.github.io/My-First-Portfolio/" target="_blank" class="appBtn">Check it Out</a>
              <a href='https://github.com/bralvis2/My-First-Portfolio' target="_blank">
                <img src={github} alt='github icon and link' className='git' />
              </a>
            </div>
          </div>
        </div>

        {/* <div className='card'>
          <div className='card-body'>
            <img className="img-style" src={team} alt="Team Profile Generator" width={'300px'} height={'210px'} />
            <div className="app-info">
              <h3>Team Profile Generator</h3>
              <p>Node.js, NPM packages Inquirer.js and Jest.js</p>
              <a href="https://drive.google.com/file/d/1N-BnQ92Sy-FERtRzORgbWjgrmUVweNSS/view" target="_blank" class="appBtn">Check it Out</a>
              <a href='https://github.com/bralvis2/Team-Profile-Generator' target="_blank">
                <img src={github} alt='github icon and link' width={'35px'} className='git' />
              </a>
            </div>
          </div>
        </div> */}

        {/* <div className='card'>
          <div className='card-body'>
            <img className="img-style" src={team} alt="Team Profile Generator" width={'300px'} height={'210px'} />
            <div className="app-info">
              <h3>Team Profile Generator</h3>
              <p>Node.js, NPM packages Inquirer.js and Jest.js</p>
              <a href="https://drive.google.com/file/d/1N-BnQ92Sy-FERtRzORgbWjgrmUVweNSS/view" target="_blank" class="appBtn">Check it Out</a>
              <a href='https://github.com/bralvis2/Team-Profile-Generator' target="_blank">
                <img src={github} alt='github icon and link' width={'35px'} className='git' />
              </a>
            </div>
          </div>
        </div> */}

      </div>
    </div>
  );
}
