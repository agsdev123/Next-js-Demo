import { fireEvent, render, screen } from '@testing-library/react';

import LoginPage from './page';

describe('LoginPage', () => {
  test('renders login form', () => {
    render(<LoginPage />);
    
    const usernameInput = screen.getByLabelText('Username');
    const passwordInput = screen.getByLabelText('Password');
    const loginButton = screen.getByRole('button', { name: 'Login' });
    
    expect(usernameInput).toBeInTheDocument();
    expect(passwordInput).toBeInTheDocument();
    expect(loginButton).toBeInTheDocument();
  });
  
  test('validates required fields', () => {
    render(<LoginPage />);
    
    const loginButton = screen.getByRole('button', { name: 'Login' });
    
    fireEvent.click(loginButton);
    
    const usernameError = screen.getByText('Required', { selector: '.invalid-feedback' });
    const passwordError = screen.getByText('Required', { selector: '.invalid-feedback' });
    
    expect(usernameError).toBeInTheDocument();
    expect(passwordError).toBeInTheDocument();
  });
  
  test('handles successful login', async () => {
    render(<LoginPage />);
    
    const usernameInput = screen.getByLabelText('Username');
    const passwordInput = screen.getByLabelText('Password');
    const loginButton = screen.getByRole('button', { name: 'Login' });
    
    fireEvent.change(usernameInput, { target: { value: 'testuser' } });
    fireEvent.change(passwordInput, { target: { value: 'testpassword' } });
    fireEvent.click(loginButton);
    
    // Mock the authenticateUser function to return a valid access token
    jest.spyOn(window, 'authenticateUser').mockResolvedValue('validAccessToken');
    
    // Mock the storeAccessToken function
    jest.spyOn(window, 'storeAccessToken').mockImplementation();
    
    // Mock the router.push function
    jest.spyOn(window.router, 'push').mockImplementation();
    
    // Wait for the login process to complete
    await screen.findByText('Login');
    
    expect(window.authenticateUser).toHaveBeenCalledWith('testuser', 'testpassword');
    expect(window.storeAccessToken).toHaveBeenCalledWith('validAccessToken');
    expect(window.router.push).toHaveBeenCalledWith('/dashboard');
  });
  
  test('handles invalid login', async () => {
    render(<LoginPage />);
    
    const usernameInput = screen.getByLabelText('Username');
    const passwordInput = screen.getByLabelText('Password');
    const loginButton = screen.getByRole('button', { name: 'Login' });
    
    fireEvent.change(usernameInput, { target: { value: 'testuser' } });
    fireEvent.change(passwordInput, { target: { value: 'testpassword' } });
    fireEvent.click(loginButton);
    
    // Mock the authenticateUser function to return null
    jest.spyOn(window, 'authenticateUser').mockResolvedValue(null);
    
    // Wait for the login process to complete
    await screen.findByText('Invalid username or password');
    
    const errorText = screen.getByText('Invalid username or password', { selector: '.invalid-feedback' });
    
    expect(window.authenticateUser).toHaveBeenCalledWith('testuser', 'testpassword');
    expect(errorText).toBeInTheDocument();
  });
});