import { Card, Form, Input, Button, Typography, Space, message } from "antd";
import { GithubOutlined, LinkedinOutlined } from "@ant-design/icons";
import AppButton from "../atoms/AppButton";

const { TextArea } = Input;
const { Paragraph } = Typography;

function CardContacto() {
  const [form] = Form.useForm();

  const onFinish = (valores) => {
    console.log("Datos del formulario:", valores);
    message.success("Formulario validado correctamente.");
    form.resetFields();
  };

  return (
    <Card className="card-contacto" bordered={false}>
      <Paragraph>
        ¡Contactame! Puedes encontrarme en mis redes sociales
        o dejarme un mensaje mediante el formulario.
      </Paragraph>

      <Space wrap size="middle" className="contacto-redes">
        <Button
          className="button-github"
          href="https://github.com/dumbcat-cane"
          target="_blank"
          rel="noopener noreferrer"
          icon={<GithubOutlined />}
        >
          GitHub
        </Button>

        <Button
          className="button-linkedin"
          href="https://cl.pinterest.com/pin/680888037459156527/"
          target="_blank"
          rel="noopener noreferrer"
          icon={<LinkedinOutlined />}
        >
          LinkedIn
        </Button>
      </Space>

      <Form
        form={form}
        layout="vertical"
        onFinish={onFinish}
      >
        <Form.Item
          label="Nombre"
          name="nombre"
          rules={[
            { required: true, message: "Ingresa tu nombre." },
            { whitespace: true, message: "Ingresa un nombre." },
          ]}
        >
          <Input maxLength={80} placeholder="Tu nombre" />
        </Form.Item>

        <Form.Item
          label="Correo electrónico"
          name="correo"
          rules={[
            { required: true, message: "Ingresa tu correo." },
            { type: "email", message: "Ingresa un correo valido." },
          ]}
        >
          <Input maxLength={254} placeholder="ejemplo@gmail.com" />
        </Form.Item>

        <Form.Item
          label="Mensaje"
          name="mensaje"
          rules={[
            { required: true, message: "Escribe tu mensaje." },
            { whitespace: true, message: "El mensaje no puede estar vacío." },
            {
              min: 10,
              message: "El mensaje debe tener al menos 10 caracteres.",
            },
          ]}
        >
          <TextArea
            rows={4}
            maxLength={1000}
            showCount
            placeholder="Escribe tu mensaje..."
          />
        </Form.Item>

        <Form.Item>
          <AppButton texto="Enviar mensaje" htmlType="submit" />
        </Form.Item>
      </Form>
    </Card>
  );
}

export default CardContacto;