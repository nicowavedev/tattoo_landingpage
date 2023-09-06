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
    color: "orange",
  },

  navItem: {
    // border: "10px solid #ccc",
    padding: "10px",
    backgroundColor: "gray",
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
        {/* <Link to="/gallery" style={styles.font}>Gallery</Link> */}
      </div>
    </div>
  );
}
export default Navbar;
