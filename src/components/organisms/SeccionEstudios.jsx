import { ReadOutlined } from "@ant-design/icons";
import CardEstudios from "../molecules/CardEstudios";

const estudios = [
  {
    id: 1,
    institucion: "Duoc UC",
    titulo: "Analista Programador",
    anio: "2025 - Actualidad",
  },

];

function SeccionEstudios() {
  return (
    <div className="estudios-seccion">
      <div className="estudios-titulo">
        <ReadOutlined />
        <h2>Estudios</h2>
      </div>


      <div className="estudios-lista">
        {estudios.map((estudio) => (
          <CardEstudios
            key={estudio.id}
            institucion={estudio.institucion}
            titulo={estudio.titulo}
            anio={estudio.anio}
          />
        ))}
      </div>
    </div>
  );
}

export default SeccionEstudios;