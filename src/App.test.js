import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import App from './App';
import userEvent from '@testing-library/user-event';

describe('renders learn react link', () => {
  it('should render App', async () => {
    render(<App />);

    await waitFor(() => {
      expect(
        screen.getByRole('button', { name: '퀴즈 풀기' }),
      ).toBeInTheDocument();
    });

    const target = screen.getByRole('button', { name: '퀴즈 풀기' });
    userEvent.click(target);
  });
});
