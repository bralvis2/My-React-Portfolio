import React from 'react';
import git from '../images/git.png'
import linked from '../images/linkedin.png'
import twitter from '../images/twitter.png'
// style sheet
import '../styles/Footer.css'

export default function Footer() {
    return (
        <footer>
            <a href='https://github.com/bralvis2' target="_blank">
                <img src={git} alt='github icon and link' width={'50px'} className='icons' />
            </a>
            <a href='https://www.linkedin.com/in/brenda-alvis-11639a241/'target="_blank">
                <img src={linked} alt='linkedin icon and link' width={'85px'} className='icons' />
            </a>
            <a href='https://twitter.com/bralvis2'target="_blank">
                <img src={twitter} alt='twitter icon and link' width={'50px'} className='icons' />
            </a>
        </footer>
    )
}