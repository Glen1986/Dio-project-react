import React from "react";
import { render, screen } from '@testing-library/react';
// import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';
import { App } from './App';

test('renders the app whith a button, a text, a img', () => {
  render(<App />);

  const textEl = screen.getByText(/quote/);
  const buttonEl = screen.getByRole('button');
  const imageEl = screen.getByRole('img');

  expect(textEl).toBeInTheDocument();
  expect(buttonEl).toBeInTheDocument();
  expect(imageEl).toBeInTheDocument();
});
