import Rodape from "./components/Rodape/Rodape";
import "./App.css";
import logo from "./assets/devflix.png";
import lupa from "./assets/search.svg";
import { useEffect, useState } from "react";

const App = () => {
  const [movies, setMovies] = useState([]);
  //utilizando uma chave de API do arquivo .env
  const apiKey =  import.meta.enc.VITE_OMDB_API_KEY;  
  const apiUrl = `https://omdpapi.com/?apikey=${apiKey}`;
  //Criando a conexão coma a API e trazendo informações
  const searchMovies = async (title) => {
    const response = await fetch(`${apiUrl}&s=${title}`);
    const data = await response.json;

    //Alimentando a váriavel movies
    setMovies(data.Search);
  };

  useEffect(()=>{
    searchMovies("Batman"); 
    
  })
  return (
    <div id="App">
      <img
        className="Logo"
        src={logo}
        alt="Logotipo da Netflix com fundo preto e letras vermelhas, representando a plataforma de streaming de filmes e séries"
      />
      <div className="search">
        <input type="text" placeholder="Pesquise por filmes e séries..." />
        <img src={lupa} alt="Botão de ação para Pesquisa!" />
      </div>

      <Rodape link="https://bybeauty.my.canva.site/highia">
        ErickMerschbacher
      </Rodape>
    </div>
  );
};

export default App;
