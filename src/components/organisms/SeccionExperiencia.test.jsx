import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import SeccionExperiencia from './SeccionExperiencia';

describe('Componente SeccionExperiencia', () => {
  it('debe mostrar el título de experiencia laboral', () => {
    render(<SeccionExperiencia />);

    expect(
      screen.getByRole('heading', { name: /Experiencia laboral/i })
    ).toBeInTheDocument();
  });

  it('debe mostrar las empresas donde trabajó', () => {
    render(<SeccionExperiencia />);

    expect(screen.getByText('Juan valdez')).toBeInTheDocument();
    expect(screen.getByText('Cafe Solidario')).toBeInTheDocument();
  });

  it('debe mostrar los cargos desempeñados', () => {
    render(<SeccionExperiencia />);

    const cargos = screen.getAllByText('Barista / Atención al cliente');

    expect(cargos).toHaveLength(2);
  });

it('debe mostrar las fechas de las experiencias', () => {
  render(<SeccionExperiencia />);

  expect(
    screen.getByText(/junio 2024.*diciembre 2024/i)
  ).toBeInTheDocument();

  expect(
    screen.getByText(/Diciembre 2024.*Noviembre 2025/i)
  ).toBeInTheDocument();
});
});