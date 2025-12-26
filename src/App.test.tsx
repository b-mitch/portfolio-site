import { render, screen } from '@testing-library/react';
import App from './App';

test('renders heading with name', () => {
  render(<App />);
  const heading = screen.getByText(/Brenden Mitchum/i);
  expect(heading).toBeInTheDocument();
});
