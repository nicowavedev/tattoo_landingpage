/*import React from "react";
import Logo from "../images/Logo.jpg";

const styles = {
  navBar: {
    backgroundColor: "black",
    color: "#fff",
    display: "flex",
    padding: "20px 5px",
  },
  logo: {
    height: "50px",
    width: "auto",
  },
  menuLinks: {
    display: "flex",
  },
  menuItem: {
    marginLeft: "10px",
  },
};

const NavBar = () => {
  return (
    <nav style={styles.navBar}>
      <div>
        <img src={Logo} alt="Logo" style={styles.logo} />
      </div>
      <div style={styles.menuLinks}>
        <div style={styles.menuItem}>Home</div>
        <div style={styles.menuItem}>About you</div>
        <div style={styles.menuItem}>videos and photos</div>
      </div>
    </nav>
  );
};

export default NavBar;*/

/*import React from "react";
import Logo from "../images/Logo.jpg";

const styles = {
  navbar: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height: "60px",
    backgroundImage: "url('../images/Logo.jpg')",
    backgroundSize: "cover",
    color: "white",
    fontSize: "18px",
  },
  navItem: {
    padding: "0 10px",
  },
};

function Navbar() {
  return (
    <div style={styles.navbar}>
      <div style={styles.navItem}>Home</div>
      <div style={styles.navItem}>About</div>
      <div style={styles.navItem}>Services</div>
      <div style={styles.navItem}>Contact</div>
    </div>
  );
}

export default Navbar;*/

import React from "react";
import Logo from "../images/Logo.jpg";

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
      <img src={Logo} alt="Logo" style={styles.logo} />
      <div style={styles.navItem}>Home</div>
      <div style={styles.navItem}>About</div>
      <div style={styles.navItem}>Services</div>
      <div style={styles.navItem}>Contact</div>
    </div>
  );
}

export default Navbar;
