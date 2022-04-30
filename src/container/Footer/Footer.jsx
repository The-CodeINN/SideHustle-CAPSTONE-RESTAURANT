import React from "react";
import { FiFacebook, FiTwitter, FiGithub } from "react-icons/fi";

import { FooterOverlay, Newsletter } from "../../components";
import { images } from "../../constants";
import "./Footer.css";

const Footer = () => (
  <div className="app__footer section__padding">
    <FooterOverlay />
    <Newsletter />

    <div className="app__footer-links">
      <div className="app__footer-links_contact">
        <h1 className="app__footer-headtext">Contact Us</h1>
        <p className="p__opensans">2, ChurchGate State, VI, Lagos </p>
        <p className="p__opensans">+(234) 810 684 1813</p>
        <p className="p__opensans" style={{ textTransform: "lowercase" }}>
          emijere.richard@gmail.com
        </p>
      </div>

      <div className="app__footer-links_logo">
        <img src={images.gericht} alt="Footer Img" />
        <p className="p__opensans">
          "The best way to find yourself is to lose yourself in the service of
          others."
        </p>
        <img
          src={images.spoon}
          alt="spoon"
          className="spoon__img"
          style={{ marginTop: 15 }}
        />
        <div className="app__footer-links_icons">
          <a href="https://web.facebook.com/emijere.richard">
            <FiFacebook />
          </a>

          <a href="https://twitter.com/The_Codeinn">
            <FiTwitter />
          </a>

          <a href="https://www.github.com/The-CodeINN/">
            <FiGithub />
          </a>
        </div>
      </div>

      <div className="app_footer-links_work">
        <h1 className="app__footer-headtext">Working Hours</h1>
        <p className="p__opensans">Monday - Friday:</p>
        <p className="p__opensans">8:00am - 9:00pm</p>
        <p className="p__opensans">Saturday - Sunday:</p>
        <p className="p__opensans">10:00am - 9:00pm</p>
      </div>
    </div>

    <div className="footer__copyright">
      <p className="p__opensans">2022 Gericht. All Rights resverved.</p>
    </div>
  </div>
);

export default Footer;
