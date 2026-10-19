import { Card } from "antd";
import {
  CoffeeOutlined,
  ShopOutlined,
  CalendarOutlined,
  IdcardOutlined,
} from "@ant-design/icons";

function CardExperiencia({
  empresa,
  cargo,
  fechaInicio,
  fechaTermino,
}) {
  return (
    <Card className="card-experiencia" bordered={false}>
      <div className="experiencia-contenido">

        <div className="experiencia-icono">
          <CoffeeOutlined />
        </div>

        <div className="experiencia-info">
          <h3>{cargo}</h3>

          <p className="experiencia-empresa">
            <ShopOutlined />
            <span>{empresa}</span>
          </p>

          <p className="experiencia-fechas">
            <CalendarOutlined />
            <span>
              {fechaInicio} — {fechaTermino}
            </span>
          </p>
        </div>

      </div>
    </Card>
  );
}

export default CardExperiencia;