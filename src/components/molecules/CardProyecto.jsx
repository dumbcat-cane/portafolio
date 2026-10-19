import { Card, Typography, Space } from "antd";
import { CodeOutlined } from "@ant-design/icons";
import AppButton from "../atoms/AppButton";

const { Title, Paragraph } = Typography;

function CardProyecto({ titulo, imagen, repositorio, descripcion }) {
  return (
    <Card
      className="project-card"
      bordered={false}
      cover={
        <img
          alt={`Vista previa de ${titulo}`}
          src={imagen}
          className="project-imagen"
        />
      }
    >
      <Space align="center" size="small">
        <CodeOutlined className="project-icono" />
        <Title level={4} style={{ margin: 0 }}>
          {titulo}
        </Title>
      </Space>

      <Paragraph className="project-descripcion">
        {descripcion}
      </Paragraph>

      <div className="project-boton">
        <AppButton
          texto="Ver repositorio"
          onClick={() =>
            window.open(repositorio, "_blank", "noopener,noreferrer")
          }
        />
      </div>
    </Card>
  );
}

export default CardProyecto;