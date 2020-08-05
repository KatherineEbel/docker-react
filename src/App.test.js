import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders learn docker link', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/Learn Docker/i);
  expect(linkElement).toBeInTheDocument();
});

test('renders learn docker link', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/Learn Docker/i);
  expect(linkElement).toBeInTheDocument();
});

