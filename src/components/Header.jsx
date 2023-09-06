import React from "react";
const styles = {
  header: {
    backgroundColor: "black",
    color: "white",
    display: "flex",
    justifyContent: "center",
    padding: "10px 20px",
  },
  name: {
    textAlign: "center",
    fontSize: "24px",
    fontFamily: "Amatic SC",
  },
  textoheader: {
    textAlign: "center",
    color: "white",
    backgroundColor: "black",
  },

  imagendelfondo: {
    color: "red",
    textAlign: "center",
  },
};

function Header() {
  return (
    <>
      <div style={styles.header}>
        <h3 style={styles.name}>Jair alvarez</h3>
      </div>
      <div style={styles.imagendelfondo}>
        <div>
          <h1>geografia </h1>
        </div>
        <div>
          <h1>de la memoria </h1>
        </div>

        <div>
          <h1>en la piel</h1>
        </div>
        <div>
          <h1> </h1>
        </div>
      </div>
    </>
  );
}

export default Header;
