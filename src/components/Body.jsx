import React from "react";
// import fondoprincipal from "../images/fondoprincipal.png";

const styles = {
  container: {
    backgroundColor: "black",
  },

  imgJair: {
    display: "block",
    marginLeft: "auto",
    marginRight: "auto",
    width: "75%",
  },

  contenedortexto: {
    color: "white",
  },
  fotopensa: {
    width: "40%",
    border: "30px solid black",
  },
  containernumero1: {
    display: "flex",
    justifyContent: "flex start",
    alignItems: "center",
    color: "orange",
    fontSize: "50px",
  },
  textonumero1: {
    border: "30px solid black",
    fontSize: "100px",
    regular: "400px",
    color: "#054342",
    fontFamily: "Amatic SC, cursive",
  },
  fotoimagen2: {
    width: "40%",
    alignItems: "center",
  },
  containernumero2: {
    fontSize: "80px",
    display: "flex",
    justifyContent: "flex start",
    alignItems: "center",
    color: "#7FFF00",
    fontFamily: "Amatic SC, cursive",
  },
  containernumero3: {
    display: "flex",
    justifyContent: "flex start, ",
    border: "20px solid black",
    alignItems: "center",
    fontSize: "100px",
    color: "orange",
  },
  backgroundimage: {
    backgroundImage: "paper.gif",
  },
};

function Body() {
  return (
    <>
      <div className="body">
        <div style={styles.backgroundimage}>
          <img
            style={styles.imgJair}
            src={require("../images/img-perfiljair.jpeg")}
            alt="foto leon mano"
          />
          <div style={styles.contenedortexto}></div>
        </div>
        <div style={styles.containernumero1}>
          <img
            style={styles.fotopensa}
            src={require("../images/IMG_11.jpg")}
            alt="foto pensamientos"
          />
          <div>
            <p style={styles.textonumero1}>
              el tatuaje nos conecta con el presente y el pasado...
            </p>
          </div>
        </div>
        <div style={styles.containernumero2}>
          <p>Recuerdos ,sucesos y creencias plasmadas en la Piel.</p>
          <img
            style={styles.fotoimagen2}
            src={require("../images/IMG_jair2.jpg")}
            alt="fote2"
          />
        </div>
        {/* <h1>Imperdiet moui id</h1> */}

        <div style={styles.containernumero3}>
          {/* <p>
          On the other hand, we denounce with righteous indignation and dislike
          men who are so beguiled and demoralized by the charms of pleasure of
          the moment, so blinded by desire, that they cannot foresee the pain
          and trouble that are bound to ensue; and equal blame belongs to those
          who fail in their duty through weakness of will, whic
        </p>
        <p>
          On the other hand, we denounce with righteous indignation and dislike
          men who are so beguiled and demoralized by the charms of pleasure of
          the moment, so blinded by desire, that they cannot foresee the pain
          and trouble that are bound to ensue; and equal blame belongs to those
          who fail in their duty through weakness of will, whic
        </p> */}
        </div>
      </div>{" "}
    </>
  );
}

export default Body;
