import React from 'react'

import { Helmet } from 'react-helmet'

import './services.css'

const Services = (props) => {
  return (
    <div className="services-container">
      <Helmet>
        <title>Services - Finbest</title>
        <meta name="description" content="Description of the website" />
        <meta property="og:title" content="Services - Finbest" />
        <meta property="og:description" content="Description of the website" />
      </Helmet>
    </div>
  )
}

export default Services
