import React from 'react'

import PropTypes from 'prop-types'

import './footer.css'

const Footer = (props) => {
  return (
    <div className="footer-footer">
      <img alt={props.imageAlt} src={props.imageSrc} className="footer-image" />
      <h1 className="footer-text">{props.contacto2}</h1>
      <span className="footer-text1">{props.text1}</span>
      <span className="footer-text2">{props.text}</span>
    </div>
  )
}

Footer.defaultProps = {
  link9: 'Careers',
  link1: 'Responsive Prototypes',
  link: 'Responsive Web Design',
  link8: 'Partners',
  link3: 'Static Website Builder',
  link10: 'Press & Media',
  text1:
    'Si tienes cualquier pregunta o sugerencia, no dudes en contactar con nosotros a través de nuestras vías de contacto.',
  contacto: 'Company',
  pastedImageSrc:
    'https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/4a46e3f6-a2fb-4002-a0ce-bb246bd8698d/99b28711-1d54-4589-9918-a73b8ad8556b?org_if_sml=15394',
  pastedImageAlt: 'pastedImage',
  imageSrc: '/61f7ccb667553f0004c53e677-200h.png',
  contacto2: 'CONTACTO',
  link7: 'News',
  link2: 'Design to Code',
  link5: 'About',
  text: '© 2024 GYM. All Rights Reserved.',
  imageAlt: 'image',
  header: 'Solutions',
  link6: 'Team',
  link4: 'Static Website Generator',
}

Footer.propTypes = {
  link9: PropTypes.string,
  link1: PropTypes.string,
  link: PropTypes.string,
  link8: PropTypes.string,
  link3: PropTypes.string,
  link10: PropTypes.string,
  text1: PropTypes.string,
  contacto: PropTypes.string,
  pastedImageSrc: PropTypes.string,
  pastedImageAlt: PropTypes.string,
  imageSrc: PropTypes.string,
  contacto2: PropTypes.string,
  link7: PropTypes.string,
  link2: PropTypes.string,
  link5: PropTypes.string,
  text: PropTypes.string,
  imageAlt: PropTypes.string,
  header: PropTypes.string,
  link6: PropTypes.string,
  link4: PropTypes.string,
}

export default Footer
