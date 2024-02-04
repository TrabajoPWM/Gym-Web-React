import React from 'react'

import { Helmet } from 'react-helmet'

import Navbar from '../components/navbar'
import Feature from '../components/feature'
import Footer from '../components/footer'
import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>Finbest</title>
        <meta name="description" content="Description of the website" />
        <meta property="og:title" content="Finbest" />
        <meta property="og:description" content="Description of the website" />
      </Helmet>
      <div className="home-header">
        <div className="home-heading">
          <Navbar></Navbar>
        </div>
        <h1 className="home-text">
          <span>
            PREPÁRATE
            <span
              dangerouslySetInnerHTML={{
                __html: ' ',
              }}
            />
          </span>
          <span>PARA TU CAMBIO FÍSICO</span>
        </h1>
      </div>
      <div className="home-video">
        <div className="home-content">
          <div className="home-header1">
            <h2 className="home-text03">
              <span>Información de interes:</span>
              <br></br>
              <span>Bienestar y Salud.</span>
              <br></br>
            </h2>
          </div>
          <div className="home-container1">
            <div className="home-video-container">
              <video
                src="https://www.youtube.com/watch?v=GImwhD8l4Ho"
                loop
                muted
                poster="https://img2.rtve.es/i/?i=1678894077468.jpg"
                preload="auto"
                autoPlay
                controls="true"
                className="home-video1"
              ></video>
            </div>
          </div>
        </div>
      </div>
      <div className="home-features">
        <div className="home-header2">
          <div className="home-tag">
            <span className="home-text08">Features</span>
          </div>
          <div className="home-heading1">
            <h2 className="home-text09">Everything you get with Finbest</h2>
            <span className="home-text10">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt.
            </span>
          </div>
        </div>
        <div className="home-feature-list">
          <Feature></Feature>
          <Feature
            title="Multiple Devices"
            thumbnail="/vector6113-r6dl.svg"
          ></Feature>
          <Feature title="Analytics" thumbnail="/vector6113-6zj.svg"></Feature>
          <Feature
            title="Virtual Card"
            thumbnail="/vector6113-lvvs.svg"
          ></Feature>
          <Feature
            title="Safe Transactions"
            thumbnail="/vector6114-cupp.svg"
          ></Feature>
          <Feature
            title="Milestones"
            thumbnail="/vector6114-6m1e.svg"
          ></Feature>
          <Feature title="Trade" thumbnail="/vector6114-yjl.svg"></Feature>
          <Feature title="Wallet" thumbnail="/vector6113-lvvs.svg"></Feature>
        </div>
      </div>
      <div className="home-get-started">
        <div className="home-content1">
          <div className="home-heading2">
            <h2 className="home-text11">Get started with finbest now!</h2>
            <span className="home-text12">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore magna.
            </span>
          </div>
          <div className="home-hero-buttons">
            <div className="home-ios-btn">
              <img
                alt="pastedImage"
                src="/pastedimage-zmzg.svg"
                className="home-apple"
              />
              <span className="home-caption">Download for iOS</span>
            </div>
            <div className="home-android-btn">
              <img
                alt="pastedImage"
                src="/pastedimage-ld65.svg"
                className="home-android"
              />
              <span className="home-caption1">Download for Android</span>
            </div>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  )
}

export default Home
