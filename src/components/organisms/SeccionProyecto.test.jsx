import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import SeccionProyecto from './SeccionProyecto';

describe('Componente SeccionProyecto', () => {
  it('debe mostrar el título de la sección', () => {
    render(<SeccionProyecto />);

    expect(
      screen.getByRole('heading', { name: 'Mis Proyectos' })
    ).toBeInTheDocument();
  });

  it('debe mostrar los dos proyectos', () => {
    render(<SeccionProyecto />);

    expect(screen.getByText('OptiBeans')).toBeInTheDocument();
    expect(screen.getByText('Gourmet Hub')).toBeInTheDocument();
  });

  it('debe mostrar las descripciones de los proyectos', () => {
    render(<SeccionProyecto />);

    expect(
      screen.getByText('Sistema de gestión para una óptica.')
    ).toBeInTheDocument();

    expect(
      screen.getByText(
        'Aplicación web de gastronomía con catálogo de productos y talleres.'
      )
    ).toBeInTheDocument();
  });

  it('debe mostrar los botones para ver los repositorios', () => {
    render(<SeccionProyecto />);

    const botones = screen.getAllByRole('button', {
      name: /Ver repositorio/i,
    });

    expect(botones).toHaveLength(2);
  });
});