import React from 'react';
// import '../styles/Nav.css';

function Nav() {
    return (
        <ul class="nav justify-self-right">
            <li class="nav-item">
                <a className='nav-link' href="#">About</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="#">Portfolio</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="#">Contact</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="#">Resume</a>
            </li>
        </ul>
    );
}

export default Nav;
