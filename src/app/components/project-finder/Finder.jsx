import React, { useState } from 'react';
import ElemBuilder from './ElemBuilder';

const elements = [
  {
    label: 'Host',
    input: 'Text',
  },
  {
    label: 'User/Organization',
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

function Finder() {
  return (
    <form className="nav-form">
      {elements.map((item, index) => {
        const key = `${index}nav`;
        console.log(item);
        return <ElemBuilder key={key} elem={item} />;
      })}
    </form>
  );
}

export default Finder;
