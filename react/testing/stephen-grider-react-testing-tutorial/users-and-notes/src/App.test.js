import { render, screen, within } from '@testing-library/react';
import user from '@testing-library/user-event';
import App from './App';

test('it can receive a new user and show it on a lost', () => {
  render(<App />);

  const nameInput = screen.getByRole('textbox', {
    name: /name/i
  })
  const emailInput = screen.getByRole('textbox', {
    name: /enter email/i
  })
  const button = screen.getByRole('button');


  user.click(nameInput);
  user.keyboard('jane');
  
  user.click(emailInput);
  user.keyboard('jane@jane.com');
  
  user.click(button);

  const nameEl = screen.getByRole('cell', {name: 'jane'});
  const emailEl = screen.getByRole('cell', {name: 'jane@jane.com'});

  expect(nameEl).toBeInTheDocument()
  expect(emailEl).toBeInTheDocument()
})
