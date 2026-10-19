import { Card } from "antd";
import PerfilAvatar from "../atoms/PerfilAvatar";
import ScrollButton from "../atoms/ScrollButton";

function CardPerfil({ nombre, descripcion }) {
  return (
    <Card className="card-perfil" bordered={false}>
      <div className="perfil-contenido">
        <div className="perfil-foto">
          <PerfilAvatar />
        </div>

        <div className="perfil-texto">
          <span className="perfil-saludo">¡Hola! Soy</span>
          <h1>{nombre}</h1>
          <p>{descripcion}</p>

          <span className="perfil-rol">
            Estudiante de programación
          </span>

          <div className="perfil-boton">
            <ScrollButton
              targetId="proyectos"
              label="Mis proyectos"
            />
          </div>
        </div>
      </div>
    </Card>
  );
}

export default CardPerfil;