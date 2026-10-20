import { Space } from "antd";
import ContactCard from "../molecules/CardContacto";
import {StarOutlined  } from "@ant-design/icons";

function SeccionContacto() {
  return (
    <Space
      direction="vertical"
      size="large"
      style={{ width: "100%" }}
    >
      <div className="contacto-titulo">
        <StarOutlined />
        <h2>Contacto</h2>
      </div>

      <ContactCard />
    </Space>
  );
}

export default SeccionContacto;