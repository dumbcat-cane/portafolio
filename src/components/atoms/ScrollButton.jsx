
import { Button } from "antd";
import { DownOutlined } from "@ant-design/icons";

function ScrollButton({ targetId, label }) {
  const scrollsection = () => {
    document.getElementById(targetId)?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <Button
      className="scroll-button"
      shape="round"
      icon={<DownOutlined />}
      aria-label={label}
      onClick={scrollsection}
    >
      {label}
    </Button>
  );
}

export default ScrollButton;
