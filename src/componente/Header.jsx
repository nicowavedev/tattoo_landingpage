import React from "react";

const styles = {
  header: {
    backgroundColor: "black",
    color: "#fff",
    display: "flex",
    justifyContent: "center",
    padding: "10px 20px",
  },
  name: {
    textAlign: "",
    fontSize: "24px",
  },
};

function Header() {
  return (
    <>
      <div style={styles.header}>
        <h2 style={styles.name}>Jair alvarez</h2>
      </div>
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
    </>
  );
}

export default Header;
