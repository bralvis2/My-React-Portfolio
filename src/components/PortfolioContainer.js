import React, { useState } from 'react';
import Nav from './Nav';
import Resume from './pages/Resume';
import About from './pages/About';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';
import Footer from './Footer'
import logo from '../images/logo.png'
// style sheet
import '../styles/PortfolioContainer.css'

export default function PortfolioContainer() {
  const [currentPage, setCurrentPage] = useState('About');

  // This method is checking to see what the value of `currentPage` is. Depending on the value of currentPage, we return the corresponding component to render.
  const renderPage = () => {
    if (currentPage === 'About') {
      return <About />;
    }
    if (currentPage === 'Portfolio') {
      return <Portfolio />;
    }
    if (currentPage === 'Contact') {
      return <Contact />;
    }
    return <Resume />;
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div>
      <header>
        {/* We are passing the currentPage from state and the function to update it */}
        <a href='#About'>
          <img src={logo} alt='logo' width={'380px'} />
        </a>
        <div className='navContainer'>
          <Nav currentPage={currentPage} handlePageChange={handlePageChange} />
        </div>
        {/* Here we are calling the renderPage method which will return a component  */}
      </header>
      <main>
        {renderPage()}
      </main>
      <div>
        <Footer />
      </div>
    </div>
  );
}
