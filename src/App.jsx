
import { Layout } from 'antd';
import { GithubOutlined, LinkedinOutlined } from '@ant-design/icons';
import './App.css';
import ScrollButton from "./components/atoms/ScrollButton";
import SeccionPerfil from "./components/organisms/SeccionPerfil";
import Navbar from "./components/organisms/NavBarr";
import SeccionExperiencia from "./components/organisms/SeccionExperiencia";
import SeccionEstudios from "./components/organisms/SeccionEstudios";
import SeccionProyecto from './components/organisms/SeccionProyecto';
import SeccionContacto from "./components/organisms/SeccionContacto";
const { Header, Content, Footer } = Layout;


const App = () => {
  const currentYear = new Date().getFullYear();


  return (
    <Layout className="portfolio-layout">
      <Header className="portfolio-header">
        <Navbar />
      </Header>


      <Content className="portfolio-content">
        <section id="personal" className="portfolio-section hero">
          <SeccionPerfil/>
        </section>


        <section id="experiencia" className="portfolio-section">
          <SeccionExperiencia/>
        </section>


        <section id="estudios" className="portfolio-section">
          <SeccionEstudios/>
        </section>




        <section id="proyectos" className="portfolio-section">
          <SeccionProyecto/>
        </section>

        <section id="contacto" className="portfolio-section">
          <SeccionContacto/>

        </section>
      </Content>

      <Footer className="portfolio-footer">
        <p>GitHub · Contacto</p>

      </Footer>
    </Layout>
  );
};

export default App;
