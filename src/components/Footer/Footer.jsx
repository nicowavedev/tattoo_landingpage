import React from "react";
import "./Footer.css";

// import linkinstagram from "../../images/linkinstagram.png";
// // import fondoprincipal from "../../images/fondoprincipal.png";

// import "./Footer.css";

// const Footer = () => {
//   return (
//     <footer style={styles.footer} className="footer">
//       <div style={styles.logo}>
//         <a
//           href="https://www.instagram.com/tu_cuenta_de_instagram"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           <img
//             src={linkinstagram} // Reemplaza con la ruta a tu imagen de Instagram
//             alt="Instagram"
//           />
//         </a>
//         <div>Síguenos en Instagram: @cristo.carlo.3</div>
//       </div>
//       <div style={styles.container}>
//         <p style={styles.text}>
//           © {new Date().getFullYear()} Your Website Name. All rights reserved.
//         </p>
//         <p style={styles.text}>Contact us at: contact@example.com</p>
//       </div>
//     </footer>
//   );
// };

// const styles = {
//   footer: {
//     backgroundColor: "black",
//     padding: "20px",
//     marginTop: "50px",
//     gap: "20px",
//   },
//   container: {
//     maxWidth: "800px",
//     margin: "0 auto",
//   },
//   text: {
//     fontSize: "14px",
//     textAlign: "center",
//     color: "white",
//     margin: "10px 0",
//   },
//   logo: {
//     textAlign: "center",
//     color: "turquoise",
//     Gap: "10px",
//   },
// };

// export default Footer;
//************segundo footer****************

const Footer = () => {
  return (
    <div className="footer-clean">
      <footer>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-sm-4 col-md-3 item">
              <h3>Services</h3>
              <ul>
                <li>
                  <a href="#">Web design</a>
                </li>
                <li>
                  <a href="#">Development</a>
                </li>
                <li>
                  <a href="#">Hosting</a>
                </li>
              </ul>
            </div>
            <div className="col-sm-4 col-md-3 item">
              <h3>About</h3>
              <ul>
                <li>
                  {/* <Link to="/about">About</Link> */}

                  <a href="#">Company</a>
                </li>
                <li>
                  <a href="#">Team</a>
                </li>
                <li>
                  <a href="#">Legacy</a>
                </li>
              </ul>
            </div>
            <div className="col-sm-4 col-md-3 item">
              <h3>Careers</h3>
              <ul>
                <li>
                  <a href="#">Job openings</a>
                </li>
                <li>
                  <a href="#">Employee success</a>
                </li>
                <li>
                  <a href="#">Benefits</a>
                </li>
              </ul>
            </div>
            <div className="footer-empty">
              <div>hshshshhs</div>
            </div>
            <div className="col-lg-3 item social">
              <a href="#">
                <i className="icon ion-social-facebook"></i>
              </a>
              <a href="#">
                <i className="icon ion-social-twitter"></i>
              </a>
              <a href="#">
                <i className="icon ion-social-snapchat"></i>
              </a>
              <a href="#">
                <i className="icon ion-social-instagram"></i>
              </a>
              <p className="copyright">Company Name © 2018</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
