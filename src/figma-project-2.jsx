import Figma2 from "./assets/mobile2.png";
import Second from "./assets/mobile3.png";
import DK from "./assets/Frame 1.png";
import Fourth  from "./assets/Frame 6.png"; 
import { Link } from "react-router-dom";
import styles from "./figma-project-2.module.css";
import { TfiArrowLeft } from "react-icons/tfi";



function figma2() {
    return (
      <div className={styles.projetoContainer}>
     <div className={styles.topContainer}>
  <div className={styles.voltarContainer}>
    <TfiArrowLeft id="icon" style={{ fill: '#007bff' }} />
    <Link to="/" className={styles.voltar}>
      Voltar para o portfólio
    </Link>
  </div>
  <a href="/Projeto Parceria Itaú (1).pdf" download>
    <button className={styles.button}>Baixar Projeto</button>
  </a>
</div>
      <h1>Projeto da EBAC em parceria com o banco Itaú</h1>
      <p>
      No curso de Ux Design da Ebac, havia uma etapa em que os alunos deveriam fazer um projeto em parceria com o banco Itaú.  A proposta era fazer uma pesquisa, nas redes sociais ou através de entrevista com os clientes do banco Itaú, quais as sugestões de melhoria para os serviços do banco. Nós, alunos, deveríamos implementar e sugerir melhorias através de quatro versões de protótipos, e as escolhidas por mim foram: uma versão mobile, uma web, uma smartwatch e outra simulando um caixa eletrônico.<br/> Abaixo, estão as imagens da versão mobile e do caixa eletrônico.
      Caso tenha interesse em ver o projeto completo, o botão ao lado disponibiliza ele para download.
      </p>
  
      <div className={styles.imagemContainer}>
<div className={`${styles.linhaImagens} ${styles.ultimaLinha}`}>
  <img src={Figma2} alt="Projeto 3" className={styles.projetoImagem} />
  <img src={Second} alt="Second img" className={styles.projetoImagem} />
</div>
<div className={styles.linhaImagens}>
  <img src={DK} alt="third img" className={styles.projetoImagem}  />
  <img src={Fourth} alt="fourth img" className={styles.projetoImagem}  />
</div>
</div>

      <h2>Tecnologia Utilizada</h2>
      <p> Software Figma</p>
      <h2>Link do projeto</h2>
      <a href="https://www.figma.com/design/SWy8FO0LCcgEWP11KWEDbq/Projeto-Ita%C3%BA--Prot%C3%B3tipos?node-id=0-1&t=iOpU2YNPSucX1DXC-1" target="_blank" rel="noopener noreferrer">
          Clique aqui para ser redirecionado ao projeto no figma.
      </a>
  </div>
    );
  }
  
  export default figma2;
  