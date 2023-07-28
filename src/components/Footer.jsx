import React from "react";

const Footer = () => {
  return (
    <footer style={styles.footer}>
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
};

export default Footer;
