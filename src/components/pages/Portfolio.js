import React from 'react';
import olympiad from './images/olympiad.png'
import travel from './images/travel.png'
import goat from './images/goat.png'

// style sheet
import './Portfolio.css'

export default function Portfolio() {
  return (
    <div className='portfolioContainer'>
      <h1>My Portfolio</h1>
      <div className='work'>
        
        <div>
          <div class="card">
            <img class="card-img-top" src={olympiad} alt="Olympiad" />
            <div class="card-body">
              <h5 class="card-title">Olympiad</h5>
              <p class="card-text">Trivia game!</p>
              <a href="https://olympiad-game.herokuapp.com" target="_blank" class="appBtn">Check it Out</a>
            </div>
          </div>
        </div>

        <div>
          <div class="card">
            <img class="card-img-top" src={goat} alt="Olympiad" />
            <div class="card-body">
              <h5 class="card-title">Goat Rodeo</h5>
              <p class="card-text">Goat themed Dodgeball game!</p>
              <a href="https://courtsandrevival.herokuapp.com/" target="_blank" class="appBtn">Check it Out</a>
            </div>
          </div>
        </div>

        <div>
          <div class="card">
            <img class="card-img-top" src={travel} alt="Olympiad" />
            <div class="card-body">
              <h5 class="card-title">Trip Planner</h5>
              <p class="card-text">The app for a road trip!</p>
              <a href="https://andrew87e.github.io/Travel-Planner/" target="_blank" class="appBtn">Check it Out</a>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
