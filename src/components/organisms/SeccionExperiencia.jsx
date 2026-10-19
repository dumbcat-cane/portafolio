import { ClockCircleOutlined } from "@ant-design/icons";
import CardExperiencia from "../molecules/CardExperiencia";

const experiencias = [
  {

    id: 1,
    empresa: "Juan valdez",
    cargo: "Barista / Atención al cliente",
    fechaInicio: "junio 2024",
    fechaTermino: "diciembre 2024",

  },
  {
    id: 2,
    empresa: "Cafe Solidario",
    cargo: "Barista / Atención al cliente",
    fechaInicio: "Diciembre 2024",
    fechaTermino: "Noviembre 2025",
  },
];

function SeccionExperiencia() {
  return (
    <div className="experiencia-seccion">
      <div className="experiencia-titulo">
        <ClockCircleOutlined />
        <h2>Experiencia laboral</h2>
      </div>



      <div className="experiencia-lista">
        {experiencias.map((experiencia) => (
          <CardExperiencia
            key={experiencia.id}
            empresa={experiencia.empresa}
            cargo={experiencia.cargo}
            fechaInicio={experiencia.fechaInicio}
            fechaTermino={experiencia.fechaTermino}
          />
        ))}
      </div>
    </div>
  );
}

export default SeccionExperiencia;