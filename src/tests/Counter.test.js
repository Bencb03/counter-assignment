import { render, screen, fireEvent } from '@testing-library/react';
import Counter from '../components/App';

beforeEach(() => {
  render(<Counter />);
})

test('renders counter message', () => {
  const titleElement = screen.getByText(/Counter/i);
  expect(titleElement).toBeInTheDocument();
});

test('should render initial count with value of 0', () => {
  const countElement = screen.getByTestId('count');
  expect(countElement).toHaveTextContent('0');
});

test('clicking + increments the count', () => {
  const incrementButton = screen.getByText('+');
  fireEvent.click(incrementButton);
  // After clicking, the count should be 1
  const countElement = screen.getByTestId('count');
  expect(countElement).toHaveTextContent('1');
});

test('clicking - decrements the count', () => {
  const incrementButton = screen.getByText('+');
  fireEvent.click(incrementButton);
  // Now, find and click the decrement button
  const decrementButton = screen.getByText('-');
  fireEvent.click(decrementButton);
  // After decrementing, the count should be back to 0
  const countElement = screen.getByTestId('count');
  expect(countElement).toHaveTextContent('0');
});

