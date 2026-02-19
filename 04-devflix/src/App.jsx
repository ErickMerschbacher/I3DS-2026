import Rodape from "./components/Rodape/Rodape";
import "./App.css";
import logo from "./assets/devflix.png";
import lupa from "./assets/search.svg";

const App = () => {
  return (
    <div id="App">
      <img
        className="logo"
        src={logo}
        alt="Logotipo da Netflix com fundo preto e letras vermelhas, representando a plataforma de streaming de filmes e séries"
      />
      <div className="search">
        <input type="text" placeholder="Pesquise por filmes e séries..." />
        <img src={lupa} alt="Botão de ação para Pesquisa!" />
      </div>
      <Rodape link="https://bybeauty.my.canva.site/highia">ErickMerschbacher</Rodape>
    </div>
  );
};

export default App;
