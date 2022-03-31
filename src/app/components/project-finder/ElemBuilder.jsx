import React from 'react';

function ElemBuilder({ elem, value, handleChange }) {
  let text;
  switch (elem.label) {
    case 'Host':
      text = 'This should generally be set to github.com but can be set to any host that support the GitHub API.';
      break;
    case 'Organization':
      text = 'This must be set to the default project owner (user or organization, e.g., slacgismo).';
      break;
    case 'Project':
      text = 'This must be set to the default project name (e.g., docs-browser).';
      break;
    case 'Branch':
      text = 'This should be set to the default branch (e.g., master).';
      break;
    default:
      text = 'It appears something went wrong';
  }
  if (elem.input === 'Text') {
    return (
      <div>
        <label>
          {elem.label}
          <input
            type="text"
            id={elem.label}
            placeholder="Enter Host"
            value={value.value}
            onChange={(e) => handleChange(e)}
          />
        </label>
        <br />
        <small>{text}</small>
      </div>
    );
  }
  if (elem.input === 'Select') {
    return (
      <div>
        <label>
          {elem.label}
          <select id={elem.label}>
            <option>Maaaaaster</option>
          </select>
        </label>
        <br />
        <small>{text}</small>
      </div>
    );
  }
}

export default ElemBuilder;

/*
      <div className="form-group">
        <button id="refresh-data" className="btn btn-primary" type="button">Refresh</button>
      </div>
      <div className="toast" data-delay="1500">
        <div className="toast-header">
          404 Error
        </div>
        <div className="toast-body">
          Requested doc could not be found. Please validate the input(s).
        </div>
      </div>
      <hr />
      */
