import { Menu } from "antd";

const items = [
  { key: "personal", label: "Sobre mí" },
  { key: "experiencia", label: "Experiencia" },
  { key: "estudios", label: "Estudios" },
  { key: "proyectos", label: "Proyectos" },
  { key: "contacto", label: "Contacto" },
];

function Navbar() {
  const navegarASeccion = ({ key }) => {
    document.getElementById(key)?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <Menu
      theme="dark"
      mode="horizontal"
      items={items}
      onClick={navegarASeccion}
      className="portfolio-menu"
    />
  );
}

export default Navbar;