import CardPerfil from "../molecules/CardPerfil";

function PersonalSection() {
  return (
    <section id="personal" className="portfolio-section hero">
      <CardPerfil
        nombre="Canela Nuñez"
        descripcion="Me interesa el desarrollo de aplicaciones web, aprender nuevas
            tecnologías y crear soluciones digitales."
        foto="/perfil.jpg"
      />
    </section>
  );
}

export default PersonalSection;