import { render, screen } from '@testing-library/react';
import App from './App';

test('renders the app whith a text, a quote, and a button', () => {
  render(<App />);

  const buttonEl = screen.getByRole('button');
  const imageEl = screen.getByRole('img');
  const textEl = screen.getByRole('p');

  expect(buttonEl).toBeInTheDocument();
  expect(imageEl).toBeInTheDocument();
  expect(textEl).toBeInTheDocument();
});
