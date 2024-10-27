import { render, screen, fireEvent } from '@testing-library/react';
import LoginForm from '../components/LoginForm';
import '@testing-library/jest-dom';

test('renders login form', () => {
  render(<LoginForm email="" password="" onLogin={jest.fn()} handleEmailChange={jest.fn()} handlePasswordChange={jest.fn()} />);
  
  expect(screen.getByLabelText(/email/i)).toBeInTheDocument();
  expect(screen.getByLabelText(/password/i)).toBeInTheDocument();
});

test('calls onLogin on form submission', () => {
  const onLogin = jest.fn();
  const { getByText } = render(
    <LoginForm
      email="test@test.com"
      password="password"
      onLogin={onLogin}
      handleEmailChange={jest.fn()}
      handlePasswordChange={jest.fn()}
    />
  );
  
  fireEvent.click(getByText('Login'));

  expect(onLogin).toHaveBeenCalled();
});