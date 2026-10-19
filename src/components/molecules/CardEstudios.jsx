import { Card } from "antd";
import {
  BookOutlined,
  BankOutlined,
  CalendarOutlined,
} from "@ant-design/icons";

function CardEstudios({
  institucion,
  titulo,
  anio,
}) {
  return (
    <Card className="card-estudios" bordered={false}>
      <div className="estudios-contenido">

        <div className="estudios-icono">
          <BookOutlined />
        </div>

        <div className="estudios-info">
          <h3>{titulo}</h3>

          <p className="estudios-institucion">
            <BankOutlined />
            <span>{institucion}</span>
          </p>

          {anio && (
            <p className="estudios-anio">
              <CalendarOutlined />
              <span>{anio}</span>
            </p>
          )}
        </div>

      </div>
    </Card>
  );
}

export default CardEstudios;