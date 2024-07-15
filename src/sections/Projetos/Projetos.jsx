import styles from "./ProjetosStyles.module.css";
import AppCalculadora from "../../assets/App Calculadora.png";
import SistemaCinema from "../../assets/Sistema Cinema.png";
import SistemaProjeto from "../../assets/Sistema gestao de projeto.png";
import ComandaFacil from "../../assets/ComandaFacil.png";
import ProjectCard from "../../common/ProjectCard";

function Projetos() {
  return (
    <section id="projetos" className={styles.container}>
      <h1 className="sectionTitle">Projetos</h1>
      <div className={styles.projetosContainer}>
        <ProjectCard
          src={AppCalculadora}
          link="https://github.com/marcos1py/ByMarcos"
          h3="Calculadora doces"
          p={`Cliente que vendia trufas solicitou um app para calcular os lucros e gastos.\n 
            Web:Django Mobile:Kivy`}
        />
        <ProjectCard
          src={SistemaCinema}
          link="https://github.com/marcos1py/Sistema-de-cinema-em-java-"
          h3="CineABC"
          p={`Sistema Desktop para gerenciar compras de ingresso e funcionas, podendo colocar filme. \nDescktop:Java`}
        />
        <ProjectCard
          src={SistemaProjeto}
          link="https://github.com/marcos1py/SistemaKanban"
          h3="Gestão de Projetos"
          p={`Sistema de projetos que usa kanbam, para gerenciar projetos. \nDescktop:Java`}
        />
        <ProjectCard
          src={ComandaFacil}
          link="https://github.com/marcos1py/comandafacil"
          h3="Comanda Facil"
          p={`Sistema de comanda para bares e restaurantes pela Web e ter o gerenciamento das mesas. 
            \n Web:JSF(JAVA)/Primeface, postgresql.`}
        />
      </div>
    </section>
  );
}

export default Projetos;
