import React, { useState, useEffect } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import { Main } from '../styling/styledElem';

// ------------END OF DEPENDENCIES------------

import Nav from './components/navbar/Nav';

// ------------END OF IMPORTS------------

function App() {
  return (
    <Main data-testid="app">
      <Nav />
    </Main>
  );
}

export default App;
