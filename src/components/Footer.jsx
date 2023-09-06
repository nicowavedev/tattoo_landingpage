import React from "react";
import linkinstagram from "../images/linkinstagram.png";

const Footer = () => {
  return (
    <footer style={styles.footer}>
      <div style={styles.logo}>
        <a
          href="https://www.instagram.com/tu_cuenta_de_instagram"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src={linkinstagram} // Reemplaza con la ruta a tu imagen de Instagram
            alt="Instagram"
          />
        </a>
        <div>Síguenos en Instagram: @cristo.carlo.3</div>
      </div>
      <div style={styles.container}>
        <p style={styles.text}>
          © {new Date().getFullYear()} Your Website Name. All rights reserved.
        </p>
        <p style={styles.text}>Contact us at: contact@example.com</p>
      </div>
    </footer>
  );
};

const styles = {
  footer: {
    backgroundColor: "black",
    padding: "20px",
    marginTop: "50px",
    gap: "20px",
  },
  container: {
    maxWidth: "800px",
    margin: "0 auto",
  },
  text: {
    fontSize: "14px",
    textAlign: "center",
    color: "white",
    margin: "10px 0",
  },
  logo: {
    textAlign: "center",
    color: "turquoise",
    Gap: "10px",
  },
};

export default Footer;
