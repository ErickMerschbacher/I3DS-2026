import React from "react";
const Footer = ({ children }) => {
  return (
    <footer>
      <p>
        Feito com 🫰🏻por <a href={"https://github.com/ErickMerschbacher"}>{children}</a>
      </p>
    </footer>
  );
};

export default Footer;