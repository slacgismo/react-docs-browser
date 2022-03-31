import React from 'react';
import ReactDOM from 'react-dom';
import { test, expect } from '@jest/globals';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';
import App from '../src/app/App.jsx';

const AppTest = () => {
  it('should display initial UI', () => {
    render(<App />);
    expect(screen.getByText('Host')).toBeInTheDocument();
    expect(screen.getByText('Organization')).toBeInTheDocument();
    expect(screen.getByText('Project')).toBeInTheDocument();
    expect(screen.getByText('Branch')).toBeInTheDocument();
    expect(screen.getByText('This must be set to the default project owner (user or organization, e.g., slacgismo).')).toBeInTheDocument();
  });
};

AppTest();
