import React, { useState, useReducer } from 'react';
import ElemBuilder from './ElemBuilder';
import docForm from '../../dispatches/docform';

const elements = [
  {
    label: 'Host',
    input: 'Text',
  },
  {
    label: 'Organization',
    input: 'Text',
  },
  {
    label: 'Project',
    input: 'Text',
  },
  {
    label: 'Branch',
    input: 'Select',
  },
];

const DEFAULT_STATE = {
  Host: {
    value: 'github.com',
  },
  Organization: {
    value: 'slacgismo',
  },
  Project: {
    value: 'openfido-client',
  },
  Branch: {
    value: 'master',
  },
};

function Finder() {
  const [docFinder, dispatch] = useReducer(docForm, DEFAULT_STATE);

  const handleChange = (e) => {
    dispatch({
      type: 'HANDLE INPUT TEXT',
      field: e.target.id,
      payload: e.target.value,
    });
  };
  return (
    <form className="nav-form">
      {elements.map((item, index) => {
        const key = `${index}nav`;
        return (
          <ElemBuilder
            key={key}
            elem={item}
            handleChange={handleChange}
            value={docFinder[item.label]}
          />
        );
      })}
    </form>
  );
}

export default Finder;
