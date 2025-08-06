import { Link } from "react-router-dom";
import styles from "./codepen.module.css";
import { TfiArrowLeft } from "react-icons/tfi";
import CodePen from "./assets/codepen2.png";



function codepen() {
    return (
      <div className={styles.projetoContainer}>
      <div className={styles.voltarContainer}>
      <TfiArrowLeft id="icon" style={{ fill: '#007bff' }} />
          <Link to="/" className={styles.voltar}>
              Voltar para o portfólio
          </Link>
      </div>
      <h1>Página de E-commerce</h1>
      <p>
      Realizei um projeto pessoal de uma página de E-commerce de produtos eletrônicos, totalmente original e à partir de minhas próprias ideias.  
      </p>
      <img src={CodePen} alt="Projeto 2" className={styles.projetoImagem} />
      <h2>Tecnologias Utilizadas</h2>
      <p>HTML, CSS e JavaScript</p>
      <h2>Link do projeto</h2>
      <a href="https://codepen.io/Isabela-Silva-the-looper/pen/dPbpNez" target="_blank" rel="noopener noreferrer">
          Clique aqui para ser redirecionado ao projeto.
      </a>
  </div>
    );
  }
  
  export default codepen;
  