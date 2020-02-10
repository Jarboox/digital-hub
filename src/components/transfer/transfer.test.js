import React from 'react';
import { render } from '@testing-library/react';
import Transfer from './transfer';

test('renders learn react link', () => {
  const { getByText } = render(<Transfer />);
  const linkElement = getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
