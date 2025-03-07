import { useState, useEffect } from "react";
import { Routes, Route, Link, useLocation } from "react-router-dom";
import { FaLinkedin, FaInstagram } from "react-icons/fa";
import { VscAccount } from "react-icons/vsc";
import { ImPhone } from "react-icons/im";
import { MdWork } from "react-icons/md";
import Project1 from "./figma-project-1.jsx";
import Project2 from "./figma-project-2.jsx";
import CodePenProject from "./codepen-project.jsx";
import Calculadora from "./calculator-project.jsx";
import Foto from "./assets/Foto linkedin.jpeg";
import Figma3 from "./assets/figma3.png";
import Figma4 from "./assets/Frame 1.png";
import CodePen from "./assets/codepen.png";
import Calculator from "./assets/calculator.png";
import "./App.css";

function App() {
  const location = useLocation();
  const isCalculatorPage = location.pathname === "/calculator";
  const isCodepenPage = location.pathname === "/codepen";
  const isFigma1Page = location.pathname === "/figma1";
  const isFigma2Page = location.pathname === "/figma2";

  return (
    <div
      id="principal-container"
      className={
        isCalculatorPage || isCodepenPage || isFigma1Page || isFigma2Page
          ? "calculator-background"
          : ""
      }
    >
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/figma1" element={<Project1 />} />
        <Route path="/figma2" element={<Project2 />} />
        <Route path="/codepen" element={<CodePenProject />} />
        <Route path="/calculator" element={<Calculadora />} />
      </Routes>
    </div>
  );
}

function Home() {
  const [selectedIcon, setSelectedIcon] = useState(null);
  const [quote, setQuote] = useState(""); // Estado para armazenar a citação
  const location = useLocation();

  useEffect(() => {
    fetch("/api/random") // Use /api/random
      .then((response) => response.json())
      .then((data) => {
        setQuote(`${data.content} – ${data.author}`);
      })
      .catch((error) => console.error("Erro ao buscar citação:", error));
  }, []);
  

  const handleIconClick = (icon) => {
    setSelectedIcon(icon);
    const sectionId = `${icon}-section`;
    const section = document.getElementById(sectionId);

    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <>
      {location.pathname === "/" && (
        <div id="box">
          <img
            src={Foto}
            alt="Minha foto do LinkedIn"
            className="profile-photo"
          />
          <h1>Isabela Albuquerque</h1>
          <button id="description">
            Desenvolvedora Front End / UX Designer
          </button>
          <div className="social-icons">
            <a
              href="https://www.linkedin.com/in/isabela-albuquerque-38b16826b"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin className="icon linkedin" />
            </a>
            <a
              href="https://www.instagram.com/albq.bela/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram className="icon instagram" />
            </a>
          </div>
          <a href="/CV Isabela Silva.pdf" download>
            <button id="cv-button">Baixar CV</button>
          </a>
          {/* Exibição correta da citação */}
          <p id="quote" style={{ fontStyle: "italic", fontSize: "14px" }}>
            {quote}
          </p>
        </div>
      )}

      <div className="app-container">
        <div id="prin-container">
          <section id="about-section">
            <h3 id="dk">Sobre mim</h3>
            <p id="about-text">
              Olá! Me chamo Isabela, prazer! Sou estudante de Sistemas de
              Informação, e sou apaixonada pela área de tecnologia -
              principalmente pelas áreas de programação e design de experiência
              do usuário.<br />
              Atualmente, ainda não trabalho em nenhuma dessas áreas, porém sigo
              em busca da minha primeira oportunidade! No meu dia a dia, utilizo
              as ferramentas essenciais para dar vida a um projeto web, como
              HTML, CSS, JavaScript e React (esse portfólio, por exemplo, foi
              feito com o framework React). Mas, meu trabalho não se limita à
              programação. Acredito que um bom design é fundamental para o
              sucesso de qualquer projeto. Por isso, me aprofundo em UX/UI
              Design, com princípios que buscam sempre proporcionar a melhor
              experiência ao usuário. Caso tenha interesse, abaixo na seção
              &ldquo;Trabalhos&rdquo; estão alguns dos meus projetos.
            </p>
          </section>

          <section id="work-section">
            <h3 id="prjct">Meus projetos</h3>
            <div className="projects">
              <Link to="/figma1">
                <img
                  src={Figma3}
                  alt="Projeto1"
                  id="figma1"
                  className="project-img"
                />
              </Link>
              <Link to="/figma2">
                <img
                  src={Figma4}
                  alt="Projeto2"
                  className="project-img"
                />
              </Link>
              <Link to="/codepen">
                <img
                  src={CodePen}
                  alt="CodePen Project"
                  id="codepen"
                  className="project-img"
                />
              </Link>
              <Link to="/calculator">
                <img
                  src={Calculator}
                  alt="Calculator Project"
                  className="project-img"
                />
              </Link>
            </div>
          </section>

          <section id="contact-section">
            <h3 id="contct">Contato</h3>
            <p id="contct1">Email: albuquerqueisabela951@gmail.com</p>
          </section>
        </div>

        <div id="roll">
          <div
            className={`icon-container ${
              selectedIcon === "about" ? "active" : ""
            }`}
            onClick={() => handleIconClick("about")}
          >
            <VscAccount className="icone" />
            <p>Sobre</p>
          </div>

          <div
            className={`icon-container ${
              selectedIcon === "work" ? "active" : ""
            }`}
            onClick={() => handleIconClick("work")}
          >
            <MdWork className="icone" />
            <p>Trabalhos</p>
          </div>

          <div
            className={`icon-container ${
              selectedIcon === "contact" ? "active" : ""
            }`}
            onClick={() => handleIconClick("contact")}
          >
            <ImPhone className="icone" />
            <p>Contato</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
