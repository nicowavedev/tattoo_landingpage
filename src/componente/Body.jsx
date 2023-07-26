/*import React from "react";

const styles = {
  container: {},

  title: {
    fontSize: "60px", // tamaño letra
    textAlign: "center",
  },

  imgJair: {
    width: "600px",
    height: "600px",
  },
  inlinetext: {
    display: "inline",
    margin: 0,
    padding: 0,
    lineHeight: 1.5,
  },
};

function Body() {
  return (
    <>
      <div style={styles.container}>
        <p style={styles.title}>La piel envuelve y encarna a la persona</p>
      </div>
      <div>
        <div>
          <span style={styles.inlinetext}>This is an inline paragraph.</span>
        </div>
        <img
          style={styles.imgJair}
          src={require("../images/IMG_jair1.jpg")}
          alt="foto leon mano"
        />
      </div>
    </>
  );
}

export default Body;*/

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
  },
  textonumero1: {
    border: "30px solid black",
  },
  fotoimagen2: {
    width: "40%",
    alignItems: "center",
  },
  containernumero2: {
    display: "flex",
    justifyContent: "flex start",
    alignItems: "center",
  },
  containernumero3: {
    display: "flex",
    justifyContent: "flex start, ",
    border: "20px solid black",
    alignItems: "center",
    justifyContent: "space between",
    fontSize: "15px",
  },
};

function Body() {
  return (
    <>
      <div>
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
        <p>
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
        </p>
      </div>
    </>
  );
}

export default Body;
