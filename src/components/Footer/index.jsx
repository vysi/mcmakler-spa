import React from "react";
import "./Footer.scss";

const Footer = () => {
  return (
    <div className="footer">
      <p>
        <a href="https://www.mcmakler.de/agb">AGB</a> &#8226;{" "}
        <a href="https://www.mcmakler.de/datenschutz">Datenschutz</a> &#8226;{" "}
        <a href="https://www.mcmakler.de/impressum">Impressum</a>
      </p>
    </div>
  );
};

export default Footer;
