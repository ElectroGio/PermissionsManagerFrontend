import { render, screen, fireEvent } from '@testing-library/react';
import PermissionsTable from './PermissionsTable';

test('renders PermissionsTable and handles edit', () => {
  render(<PermissionsTable />);

  // Mocking API calls might be required here
  fireEvent.click(screen.getByText(/edit/i));

  // Expect dialog to open and show form
});
