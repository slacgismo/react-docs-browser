import React from 'react';
import { AutoResImg, NavBar } from '../../../styling/styledElem';
import gismo from '../../assets/gismo-logo.png';

function Nav() {
  return (
    <NavBar>
      <a className="navbar-brand" href="https://gismo.slac.stanford.edu/" target="_blank" rel="noreferrer">
        <AutoResImg className="navbar-logo" src={gismo} alt="Redirect to SLAC homepage" />
      </a>
    </NavBar>
  );
}

export default Nav;
