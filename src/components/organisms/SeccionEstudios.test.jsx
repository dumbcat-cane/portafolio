import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import SeccionEstudios from './SeccionEstudios';

describe('Componente SeccionEstudios', () => {
  it('debe mostrar el título de la sección', () => {
    render(<SeccionEstudios />);

    expect(
      screen.getByRole('heading', { name: 'Estudios' })
    ).toBeInTheDocument();
  });

  it('debe mostrar la institución educativa', () => {
    render(<SeccionEstudios />);

    expect(screen.getByText('Duoc UC')).toBeInTheDocument();
  });

  it('debe mostrar la carrera estudiada', () => {
    render(<SeccionEstudios />);

    expect(screen.getByText('Analista Programador')).toBeInTheDocument();
  });

  it('debe mostrar los años de estudio', () => {
    render(<SeccionEstudios />);

    expect(screen.getByText('2025 - Actualidad')).toBeInTheDocument();
  });
});