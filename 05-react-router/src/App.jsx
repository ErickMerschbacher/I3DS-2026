import { Route, Routes } from "react-router";
import "./App.css";
import Sobre from "./pages/Sobre";
import Home from "./pages/Home";
import Header from "./components/header/Header";
import Contato from "./pages/Contato";
import NaoEncontrado from "./pages/NaoEncontrado";
import Footer from "./components/footer/Footer";
function App() {
  return (
    <>
      <Header />
      <div className="containerApp">
        <Routes>
          {/**identfica todas as rota do sistema */}
          <Route path="/" element={<Home />} />
          <Route path="/sobre" element={<Sobre />} /> {/*uma rota do sistema*/}
          <Route path="/contato" element={<Contato />} />{" "}
          {/*uma rota do sistema*/}
          <Route path="/naoencontrado" element={<NaoEncontrado />} />{" "}
          {/*uma rota do sistema*/}
          <Route path="/footer" element={<Footer />} />{" "}
          {/*uma rota do sistema*/}
        </Routes>
      </div>

      <Footer Link={"https://github.com/ErickMerschbacher"}>Erickin</Footer>
    </>
  );
}

export default App;
