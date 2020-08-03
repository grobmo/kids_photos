import React from 'react';
import { render } from '@testing-library/react';
import Heading from './Heading';

test('renders grobmo home link', () => {
  const { getByText } = render(<Heading />);
  const linkElement = getByText(/GrobMo/i);
  expect(linkElement).toBeInTheDocument();
});
