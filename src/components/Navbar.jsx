import React from "react";
import { Link } from "react-router-dom";

const styles = {
  navbar: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height: "60px",
    backgroundColor: "black",
    color: "white",
    fontSize: "18px",
  },
  logo: {
    height: "50px",
    width: "auto",
    marginRight: "10px",
  },
  navItem: {
    padding: "0 10px",
  },
};

function Navbar() {
  return (
    <div style={styles.navbar}>
      <div style={styles.navItem}>Home</div>
      <div style={styles.navItem}>
        <Link to="/about">About</Link>
      </div>
      <div style={styles.navItem}>
        <Link to="/gallery">Gallery</Link>
      </div>
    </div>
  );
}
export default Navbar;
