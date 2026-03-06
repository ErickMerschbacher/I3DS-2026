import React from "react";
import "./Rodape.module.css";

const Rodape = ({ link, children }) => {
  return (
    <footer>
      <p>
        <img
          src={Rodape}
          alt="04-atividadeDevflix/src/assets/foto.png"
          style={{ width: "200px" }}
        />
        Feito com 🏐 por <a href={link}>{children}</a>
      </p>
    </footer>
  );
};

export default Rodape;
