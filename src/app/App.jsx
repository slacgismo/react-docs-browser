import React, { useState, useEffect } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import {
  Main, DivRow, DivCol, DivColDocs,
} from '../styling/styledElem';

// ------------END OF DEPENDENCIES------------

import Nav from './components/navbar/Nav';
import Finder from './components/project-finder/Finder';

// ------------END OF IMPORTS------------

function App() {
  return (
    <Main data-testid="app">
      <Nav />
      <DivRow>
        <DivCol>
          <Finder />
          <div>TOC PLACEHOLDER</div>
        </DivCol>
        <DivColDocs>DOC PLACEHOLDER</DivColDocs>
      </DivRow>
    </Main>
  );
}

export default App;
