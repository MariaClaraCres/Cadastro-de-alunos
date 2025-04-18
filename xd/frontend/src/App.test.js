import { render, screen } from '@testing-library/react';
import App from './App';

test('renderiza título da aplicação', () => {
  render(<App />);
  const titulo = screen.getByText(/cadastro de alunos/i);
  expect(titulo).toBeInTheDocument();
});