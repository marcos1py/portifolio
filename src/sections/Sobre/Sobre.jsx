import styles from './SobreStyles.module.css';
import euImg from '../../assets/Eu.jpeg';
import sun from '../../assets/sun.svg';
import moon from '../../assets/moon.svg';
import githubLight from '../../assets/github-light.svg';
import githubDark from '../../assets/github-dark.svg';
import linkedinLight from '../../assets/linkedin-light.svg';
import linkedinDark from '../../assets/linkedin-dark.svg';
import CV from '../../assets/cv.pdf';
import { useTheme } from '../../common/ThemeContext';

function Sobre() {
  const { theme, toggleTheme } = useTheme();

  const themeIcon = theme === 'light' ? sun : moon;
  const githubIcon = theme === 'light' ? githubLight : githubDark;
  const linkedinIcon = theme === 'light' ? linkedinLight : linkedinDark;

  return (
    <section id="euImg" className={styles.container}>
      <div className={styles.colorModeContainer}>
        <img
          src={euImg}
          className={styles.euImg}
          alt="Profile picture of Marcos Antonio"
        />
        <img
          className={styles.colorMode}
          src={themeIcon}
          alt="Color mode icon"
          onClick={toggleTheme}
        />
      </div>
      <div className={styles.info}> 
        <h1>
          Marcos
          <br />
          Antonio
        </h1>
        <h2>Programador Fullstack</h2>
        <span>
          <a href="https://github.com/" target="_blank">
            <img src={githubIcon} alt="Github icon" />
          </a>
          <a href="https://linkedin.com/" target="_blank">
            <img src={linkedinIcon} alt="Linkedin icon" />
          </a>
        </span>
        <p className={styles.description}>
          Apaixodado por desafios e por criar algo novo.
        </p>
        <a href={CV} download>
          <button className="hover">Resumo</button>
        </a>
      </div>
    </section>
  );
}

export default Sobre;
