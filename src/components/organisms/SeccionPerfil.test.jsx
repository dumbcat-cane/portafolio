
import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import SeccionPerfil from "./SeccionPerfil";

describe('Componente PersonalSection', () => {
  it('debe mostrar el nombre del perfil', () => {
    render(<SeccionPerfil />);

    expect(
      screen.getByRole('heading', { name: 'Canela Nuñez' })
    ).toBeInTheDocument();
  });

  it('debe mostrar la descripción del perfil', () => {
    render(<SeccionPerfil />);

    expect(
      screen.getByText(/Me interesa el desarrollo de aplicaciones web/)
    ).toBeInTheDocument();
  });

  it('debe renderizar la sección personal', () => {
    const { container } = render(<SeccionPerfil />);

    expect(container.querySelector('#personal')).toBeInTheDocument();
  });
});
