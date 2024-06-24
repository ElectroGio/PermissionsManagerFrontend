import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import PermissionForm from './PermissionForm';

test('renders PermissionForm and submits data', () => {
  render(<PermissionForm type="request" />);

  userEvent.type(screen.getByLabelText(/name/i), 'Test Permission');
  userEvent.type(screen.getByLabelText(/description/i), 'Test Description');

  userEvent.click(screen.getByText(/request permission/i));

  // Expect some result or side effect after submit
});
