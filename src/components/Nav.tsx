import React from 'react';
import { Link, useLocation } from 'react-router-dom';

// // TODO: Add necessary code to display the navigation bar and link between the pages
const Nav = () => {
  const currentPage = useLocation().pathname;

  return (
    <nav>
      <h1>
        <Link to='/' id='logo'>
          Candidate Search
        </Link>
      </h1>
      <ul className='nav nav-tabs'>
        <li className='nav-item'>
          <h2>
            <Link
              to='/'
              className={currentPage === '/' ? 'nav-link active' : 'nav-link'}>
              Search Candidates
            </Link>
          </h2>
        </li>
        <li className='nav-item'>
          <h2>
            <Link
              to='/SavedCandidates'
              className={currentPage === '/SavedCandidates' ? 'nav-link active' : 'nav-link'}>
              View Saved Candidates
            </Link>
          </h2>
        </li>
      </ul>
    </nav>
  )
};

export default Nav;
