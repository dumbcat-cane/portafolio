import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import CardContacto from './CardContacto';

describe('Componente CardContacto', () => {
  it('debe mostrar el mensaje de contacto', () => {
    render(<CardContacto />);

    expect(
      screen.getByText(/Puedes encontrarme en mis redes sociales/i)
    ).toBeInTheDocument();
  });

  it('debe mostrar los enlaces a las redes sociales', () => {
    render(<CardContacto />);

    expect(screen.getByRole('link', { name: /GitHub/i }))
      .toHaveAttribute('href', 'https://github.com/dumbcat-cane');

    expect(screen.getByRole('link', { name: /LinkedIn/i }))
      .toHaveAttribute(
        'href',
        'https://cl.pinterest.com/pin/680888037459156527/'
      );
  });

  it('debe mostrar los campos del formulario', () => {
    render(<CardContacto />);

    expect(screen.getByLabelText('Nombre')).toBeInTheDocument();
    expect(
      screen.getByLabelText('Correo electrónico')
    ).toBeInTheDocument();
    expect(screen.getByLabelText('Mensaje')).toBeInTheDocument();

    expect(
      screen.getByRole('button', { name: /Enviar mensaje/i })
    ).toBeInTheDocument();
  });

  it('debe mostrar errores si se envía el formulario vacío', async () => {
    render(<CardContacto />);

    fireEvent.click(
      screen.getByRole('button', { name: /Enviar mensaje/i })
    );

    expect(
      await screen.findByText('Ingresa tu nombre.')
    ).toBeInTheDocument();

    expect(screen.getByText('Ingresa tu correo.')).toBeInTheDocument();
    expect(screen.getByText('Escribe tu mensaje.')).toBeInTheDocument();
  });

  it('debe permitir escribir en los campos del formulario', () => {
    render(<CardContacto />);

    fireEvent.change(screen.getByLabelText('Nombre'), {
      target: { value: 'Cane' },
    });

    fireEvent.change(screen.getByLabelText('Correo electrónico'), {
      target: { value: 'cane@gmail.com' },
    });

    fireEvent.change(screen.getByLabelText('Mensaje'), {
      target: { value: 'Hola, este es un mensaje de prueba.' },
    });

    expect(screen.getByLabelText('Nombre')).toHaveValue('Cane');
    expect(screen.getByLabelText('Correo electrónico'))
      .toHaveValue('cane@gmail.com');
    expect(screen.getByLabelText('Mensaje'))
      .toHaveValue('Hola, este es un mensaje de prueba.');
  });
});