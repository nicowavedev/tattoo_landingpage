import React from "react";

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
  },
  textonumero1: {
    border: "30px solid black",
    fontFamily: "cursive",
    fontSize: "50px",
    regular: "400px",
    color: "#054342",
  },
  fotoimagen2: {
    width: "40%",
    alignItems: "center",
  },
  containernumero2: {
    display: "flex",
    justifyContent: "flex start",
    alignItems: "center",
    color: "orange",
  },
  containernumero3: {
    display: "flex",
    justifyContent: "flex start, ",
    border: "20px solid black",
    alignItems: "center",
    justifyContent: "space between",
    fontSize: "15px",
    color: "orange",
  },
  backgroundimage: {
    backgroundImage: "paper.gif",
  },
};

function Body() {
  return (
    <>
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
      <h1>Imperdiet moui id</h1>

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
    </>
  );
}

export default Body;
