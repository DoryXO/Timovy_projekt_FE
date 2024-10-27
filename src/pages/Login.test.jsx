import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { login } from '../reducers/userReducer';
import loginService from '../services/login';

// Mock the login service module
jest.mock('../services/login');

// Set up mock store and middleware
const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

test('dispatches login action on successful login', async () => {
  const store = mockStore({});  // Create a mock store with an initial empty state

  // Mock loginService response
  loginService.login.mockResolvedValueOnce({ token: 'fake-token', email: 'test@test.com' });

  // Dispatch the login action
  await store.dispatch(login({ email: 'test@test.com', password: 'password' }));

  // Capture the dispatched actions
  const actions = store.getActions();

  // Assert that the correct action was dispatched
  expect(actions[0]).toEqual({ type: 'user/setUser', payload: { token: 'fake-token', email: 'test@test.com' } });
});