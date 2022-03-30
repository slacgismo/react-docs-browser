import React from 'react';
import { NavBar } from '../../../styling/styledElem';
import gismo from '../../assets/gismo-logo.png';

function Nav() {
  return (
    <NavBar>
      <nav className="NavBar navbar-default">
        <div className="container-fluid">
          <div className="navbar-header">
            <a className="navbar-brand" href="https://gismo.slac.stanford.edu/" target="_blank" rel="noreferrer">
              <img className="navbar-logo" src={gismo} alt="Redirect to SLAC homepage" />
            </a>
          </div>
        </div>
      </nav>
    </NavBar>
  );
}

export default Nav;
