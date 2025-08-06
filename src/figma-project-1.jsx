import Figma1 from "./assets/figma3.png";
import Second from "./assets/figma4.png";
import DK from "./assets/figma1.png";
import Fourth  from "./assets/figma2.png"; 
import { Link } from "react-router-dom";
import styles from "./figma-project-1.module.css";
import { TfiArrowLeft } from "react-icons/tfi";




function figma1() {
    return (
      <div className={styles.projetoContainer}>
            <div className={styles.voltarContainer}>
            <TfiArrowLeft id="icon" style={{ fill: '#007bff' }} />
                <Link to="/" className={styles.voltar}>
                    Voltar para o portfólio
                </Link>
            </div>
            <h1>A Arte de Vender: Website com Design Old-Fashioned </h1>
            <p>
              Esse projeto, com o design totalmente original e criado por mim, teve como base uma ideia gerada pelo site &ldquo;Goodbrief&rdquo;. A ideia era criar o protótipo de um site focado em oferecer serviços de leitura, seja vendendo livros ou assinaturas. O site deveria ter um design vintage, com: uma landing page, uma página de termos de serviço, uma página falando sobre a empresa, e outra página apresentando os produtos.
              <p>A base para a realização desse protótipo foram os princípios de UX Design.</p>
                
             
               
            </p>
            <div className={styles.imagemContainer}>
    <div className={styles.linhaImagens}>
        <img src={Figma1} alt="Projeto 3" className={styles.projetoImagem} />
        <img src={Second} alt="Second img" className={styles.projetoImagem} />
    </div>
    <div className={`${styles.linhaImagens} ${styles.ultimaLinha}`}>
        <img src={DK} alt="third img" className={`${styles.projetoImagem}  ${styles.outraImagem}`} />
        <img src={Fourth} alt="fourth img" className={`${styles.projetoImagem} ${styles.imagemDiferente}`} />
    </div>
</div>

            <h2>Tecnologia Utilizada</h2>
            <p> Software Figma</p>
            <h2>Link do projeto</h2>
            <a href="https://www.figma.com/design/ZiQLDL75CxOtkK2SLm5get/Projetinho-teste?node-id=0-1&t=kiZ2ZKzw101HBCTH-1" target="_blank" rel="noopener noreferrer">
                Clique aqui para ser redirecionado ao projeto.
            </a>
        </div>
    );
  }
  
  export default figma1;
  