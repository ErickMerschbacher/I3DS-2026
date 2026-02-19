import { useState } from "react";
import "./App.css";
import Link from "./components/Link/Link";
import Perfil from "./components/Perfil/Perfil";
import Rodape from "./components/Rodape/Rodape";
import SocialLink from "./components/SocialLink/SocialLink";
import Switch from "./components/Switch/Switch";
import foto from "./assets/Cooper-Flag-9-1024x576.jpg"
function App() {
  const [isLight, setIsLight] = useState(true);

  const troca = () => {
    setIsLight(!isLight);
  };

  return (
    <div id="App" className={isLight ? "light" : ""}>
      <Perfil fotoPerfil={foto}>Erick Merschbacher</Perfil>

      <Switch troca={troca} isLight={isLight} />

      <div id="Link">
        <ul>
          <Link url={"https://www.corinthians.com.br/"}>Vai Corintia!</Link>
          <Link url={"https://www.sesisp.org.br/esporte/volei"}>SESI voleibol</Link>
          <Link url={"https://www.starbucks.com.br/"}>Me pague um café!</Link>
          <Link url={"https://youtu.be/St5F2BHsxaA?si=xhDqBkHbO0GzoJVd"}>Conheça o SENAI</Link>
        </ul>
      </div>

      <div id="SocialLinks">
        <SocialLink url={"https://github.com"} icon={"logo-github"} />
        <SocialLink url={"https://instagram.com"} icon={"logo-instagram"} />
        <SocialLink url={"https://youtube.com"} icon={"logo-youtube"} />
        <SocialLink url={"https://br.linkedin.com/"} icon={"logo-linkedin"} />
      </div>
      <Rodape>ProfCastello</Rodape>
    </div>
  );
}

export default App;
