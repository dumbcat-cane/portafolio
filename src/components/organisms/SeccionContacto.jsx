import { Space } from "antd";
import ContactCard from "../molecules/CardContacto";

function SeccionContacto() {
  return (
    <Space
      direction="vertical"
      size="large"
      style={{ width: "100%" }}
    >
      <div className="contacto-titulo">
        <h2>Contacto</h2>
      </div>

      <ContactCard />
    </Space>
  );
}

export default SeccionContacto;