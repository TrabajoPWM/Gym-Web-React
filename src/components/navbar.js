import React from 'react'
import { Link } from 'react-router-dom'

import Script from 'dangerous-html/react'
import PropTypes from 'prop-types'

import './navbar.css'

const Navbar = (props) => {
  return (
    <nav className="navbar-navbar">
      <div className="navbar-desktop">
        <img
          alt={props.imageAlt1}
          src={props.imageSrc1}
          className="navbar-image"
        />
        <div className="navbar-main">
          <div className="navbar-branding"></div>
          <div className="navbar-links">
            <Link to="/" className="link">
              {props.link1}
            </Link>
            <Link to="/" className="link">
              {props.link2}
            </Link>
            <Link to="/" className="link">
              {props.link3}
            </Link>
            <Link to="/" className="link">
              {props.link4}
            </Link>
          </div>
        </div>
        <div className="navbar-quick-actions">
          <Link to="/" className="link navbar-log-in">
            Log in
          </Link>
          <Link to="/" className="navbar-navlink">
            <div className="navbar-sign-up-btn">
              <span className="navbar-sign-up">Sign up</span>
            </div>
          </Link>
          <img
            id="open-mobile-menu"
            alt={props.pastedImageAlt}
            src={props.pastedImageSrc}
            className="navbar-hamburger-menu"
          />
        </div>
      </div>
      <div>
        <div className="navbar-container1">
          <Script
            html={` <script>
    /*
    Mobile menu - Code Embed
    */

    // Mobile menu
    const mobileMenu = document.querySelector("#mobile-menu");

    // Buttons
    const closeButton = document.querySelector("#close-mobile-menu");
    const openButton = document.querySelector("#open-mobile-menu");

    if (mobileMenu && closeButton && openButton) {
      // On openButton click, set the mobileMenu position left to -100vw
      openButton.addEventListener("click", function () {
        mobileMenu.style.transform = "translateX(0%)";
      });

      // On closeButton click, set the mobileMenu position to 0vw
      closeButton.addEventListener("click", function () {
        mobileMenu.style.transform = "translateX(100%)";
      });
    }
  </script>`}
          ></Script>
        </div>
      </div>
    </nav>
  )
}

Navbar.defaultProps = {
  imageSrc1: '/61f7ccb667553f0004c53e67-200h.png',
  link3: 'Inscribirse',
  text1: 'Features',
  text12: 'Prices',
  link4: 'Actividades',
  brandingSrc:
    'https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/4a46e3f6-a2fb-4002-a0ce-bb246bd8698d/afed3d97-066a-440a-a27e-491fdc7ac2b5?org_if_sml=15413',
  link1: 'Servicios',
  text131: 'Log in',
  imageAlt: 'image',
  pastedImageSrc: '/pastedimage-8o98.svg',
  text1311: 'Sign up',
  text13: 'Contact',
  link2: 'Eventos',
  pastedImageAlt: 'pastedImage',
  imageSrc: 'afed3d97-066a-440a-a27e-491fdc7ac2b5',
  brandingAlt: 'pastedImage',
  imageAlt1: 'image',
  text11: 'How it works',
}

Navbar.propTypes = {
  imageSrc1: PropTypes.string,
  link3: PropTypes.string,
  text1: PropTypes.string,
  text12: PropTypes.string,
  link4: PropTypes.string,
  brandingSrc: PropTypes.string,
  link1: PropTypes.string,
  text131: PropTypes.string,
  imageAlt: PropTypes.string,
  pastedImageSrc: PropTypes.string,
  text1311: PropTypes.string,
  text13: PropTypes.string,
  link2: PropTypes.string,
  pastedImageAlt: PropTypes.string,
  imageSrc: PropTypes.string,
  brandingAlt: PropTypes.string,
  imageAlt1: PropTypes.string,
  text11: PropTypes.string,
}

export default Navbar
