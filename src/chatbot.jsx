import Print from "./assets/print21.png"
import { Link } from "react-router-dom";
import styles from "./chatbot.module.css";
import { TfiArrowLeft } from "react-icons/tfi";

function Chatbot() {
    return (
        <div className={styles.projetoContainer}>
            <div className={styles.voltarContainer}>
            <TfiArrowLeft id="icon" style={{ fill: '#007bff' }} />
                <Link to="/" className={styles.voltar}>
                    Voltar para o portfólio
                </Link>
            </div>
            <h1>Calmbot</h1>
            <p>
        Esse projeto é de um chatbot que criei, focado em pessoas que gostam de meditação e autocuidado. O bot tem funções como: envio de mensagens motivacionais, sons relaxantes, <br />
        entre outros. É um chatbot simples, mas funcional.
            </p>
            <img src={Print} alt="Projeto 3" className={styles.projetoImagem} />
            <h2>Tecnologias Utilizadas</h2>
            <p>HTML, CSS e JavaScript (React)</p>
            <h2>Link do projeto</h2>
            <a href="https://calmbot-chatbot-git-master-isabela-s-projects-0d4915cd.vercel.app/" target="_blank" rel="noopener noreferrer">
                Clique aqui para ser redirecionado ao projeto.
            </a>
        </div>
    );
}
 
export default Chatbot;