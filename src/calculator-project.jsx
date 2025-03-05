import Calculator from "./assets/calculator.png";
import { Link } from "react-router-dom";
import styles from "./calculator.module.css";
import { TfiArrowLeft } from "react-icons/tfi";

function Calculadora() {
    return (
        <div className={styles.projetoContainer}>
            <div className={styles.voltarContainer}>
            <TfiArrowLeft id="icon" style={{ fill: '#007bff' }} />
                <Link to="/" className={styles.voltar}>
                    Voltar para o portfólio
                </Link>
            </div>
            <h1>Calculadora</h1>
            <p>
                No curso de Front End do site FreeCodeCamp, havia uma etapa em que deveríamos criar uma calculadora. Essa etapa me ajudou a aprimorar os meus conhecimentos em HTML, CSS e JavaScript.
            </p>
            <img src={Calculator} alt="Projeto 1" className={styles.projetoImagem} />
            <h2>Tecnologias Utilizadas</h2>
            <p>HTML, CSS, JavaScript e React</p>
            <h2>Link do projeto</h2>
            <a href="https://bel2390.github.io/Calculator/" target="_blank" rel="noopener noreferrer">
                Clique aqui para ser redirecionado ao projeto.
            </a>
        </div>
    );
}

export default Calculadora;