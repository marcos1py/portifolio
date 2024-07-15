import './App.css';
import Contato from './sections/Contato/Contato';
import Footer from './sections/Footer/Footer';
import Sobre from './sections/Sobre/Sobre';
import Projetos from './sections/Projetos/Projetos';
import Skills from './sections/Skills/Skills';

function App() {
  return (
    <>
      <Sobre />
      <Projetos />
      <Skills />
      <Contato />
      <Footer />
    </>
  );
}

export default App;
