import { Button } from "antd";

function AppButton({
  texto,
  onClick,
  htmlType = "button",
}) {
  return (
    <Button
      type="primary"
      className="app-button"
      htmlType={htmlType}
      onClick={onClick}
    >
      {texto}
    </Button>
  );
}

export default AppButton;