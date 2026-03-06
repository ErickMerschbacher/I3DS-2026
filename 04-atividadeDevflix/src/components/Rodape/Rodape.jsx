import React from "react";
import "./Rodape.module.css";

const Rodape = ({ link, children }) => {
  return (
    <footer>
      Feito com 🏐 por <a href={link}>{children}</a>
    </footer>
  );
};

export default Rodape;
