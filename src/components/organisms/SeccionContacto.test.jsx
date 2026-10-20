import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import SeccionContacto from './SeccionContacto';

describe('Componente SeccionContacto', () => {
  it('debe mostrar el título de la sección', () => {
    render(<SeccionContacto />);

    expect(
      screen.getByRole('heading', { name: 'Contacto' })
    ).toBeInTheDocument();
  });

  it('debe renderizar el componente de contacto', () => {
    const { container } = render(<SeccionContacto />);

    expect(
      container.querySelector('.contacto-titulo')
    ).toBeInTheDocument();
  });
});