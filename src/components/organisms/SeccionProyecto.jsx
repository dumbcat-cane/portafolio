import { Row, Col, Space, Empty } from "antd";

import CardProyecto from "../molecules/CardProyecto";
import { FolderOpenFilled } from "@ant-design/icons";

const proyectos = [
  {
    id: 1,
    titulo: "OptiBeans",
    imagen: "/images/proyecto1.png",
    repositorio:
      "https://github.com/dumbcat-cane/EvaluacionFullStack",
    descripcion: "Sistema de gestión para una óptica.",
  },
  {
    id: 2,
    titulo: "Gourmet Hub",
    imagen: "/images/proyecto2.png",
    repositorio:
      "https://github.com/dumbcat-cane/optibean_nunez_zepeda_becerra_011D",
    descripcion:
      "Aplicación web de gastronomía con catálogo de productos y talleres.",
  },
];

function SeccionProyecto() {
  return (
    <Space
      direction="vertical"
      size="large"
      style={{ width: "100%" }}
    >

      <div className="proyecto-titulo">
        <FolderOpenFilled />
        <h2>Mis Proyectos</h2>
      </div>
    
      {proyectos.length > 0 ? (
        <Row gutter={[24, 24]} style={{ width: "100%" }}>
          {proyectos.map((proyecto) => (
            <Col xs={24} md={12} key={proyecto.id}>
              <CardProyecto
                titulo={proyecto.titulo}
                imagen={proyecto.imagen}
                repositorio={proyecto.repositorio}
                descripcion={proyecto.descripcion}
              />
            </Col>
          ))}
        </Row>
      ) : (
        <Empty description="No hay proyectos disponibles." />
      )}
    </Space>
 
  );
}

export default SeccionProyecto;