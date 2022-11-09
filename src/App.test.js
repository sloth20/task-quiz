import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';

import App from './App';

describe('renders learn react link', () => {
  it('should render App', async () => {
    render(<App />);

    await waitFor(() => {
      expect(screen.getByText('퀴즈 풀기')).toBeInTheDocument();
    });

    const target = screen.getByText('퀴즈 풀기');
    userEvent.click(target);
  });
});
