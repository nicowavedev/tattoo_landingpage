import React from "react";
import { Link } from "react-router-dom";

const styles = {
  navbar: {
    width: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height: "60px",
    fontSize: "18px",
    gap: "100px",
    backgroundColor: "#383838",
    color: "#7FFF00",
    fontFamily: "Amatic SC",
  },

  navItem: {
    // border: "10px solid #ccc",
    padding: "10px",
    backgroundColor: "gray",
    fontFamily: "Amatic SC",
    color: "#7FFF00",
  },
  navItem2: {
    color: "#7FFF00",
  },
};

function Navbar() {
  return (
    <div style={styles.navbar}>
      <div style={styles.navItem}>Home</div>
      <div style={styles.navItem2}>
        <Link to="/about">About</Link>
      </div>
      <div style={styles.navItem}>
        <Link to="/gallery">Art works</Link>
        {/* <Link to="/gallery" style={styles.font}>Gallery</Link> */}
      </div>
    </div>
  );
}
export default Navbar;
