import React from 'react'

import { Helmet } from 'react-helmet'

import Navbar from '../components/navbar'
import Check from '../components/check'
import Footer from '../components/footer'
import './inscription.css'

const Inscription = (props) => {
  return (
    <div className="inscription-container">
      <Helmet>
        <title>Inscription - Finbest</title>
        <meta name="description" content="Description of the website" />
        <meta property="og:title" content="Inscription - Finbest" />
        <meta property="og:description" content="Description of the website" />
      </Helmet>
      <div className="inscription-pricing">
        <Navbar></Navbar>
        <div className="inscription-content">
          <div className="inscription-header">
            <div className="inscription-heading"></div>
          </div>
          <h2 className="inscription-text">Seleccione la cuota </h2>
          <div className="inscription-pricing-plans">
            <div className="inscription-plans">
              <div className="inscription-plan">
                <div className="inscription-top">
                  <div className="inscription-heading1">
                    <span className="inscription-text01">Plan Standard</span>
                    <span className="inscription-text02">
                      ¡Te ayudamos a alcanzar tu objetivo!
                    </span>
                  </div>
                  <div className="inscription-container1">
                    <div className="inscription-container2">
                      <div className="inscription-container3">
                        <div className="inscription-container4">
                          <div className="inscription-container5">
                            <div className="inscription-container6">
                              <div className="inscription-container7">
                                <div className="inscription-cost">
                                  <span className="inscription-text03">
                                    36,80€
                                  </span>
                                  <span className="inscription-text04">
                                    /mes
                                  </span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="inscription-bottom">
                  <div className="inscription-check-list">
                    <Check feature="Abono para mayores de 16 años."></Check>
                    <Check feature="Acceso a centro en horario completo."></Check>
                    <Check feature="Acceso completo a sala fitness, zonas de aguas y actividades dirigidas."></Check>
                    <Check feature=" Seguimiento profesional disponible para conseguir tus objetivos."></Check>
                  </div>
                  <div className="inscription-button">
                    <span className="inscription-text05">Seleccionar</span>
                  </div>
                </div>
              </div>
              <div className="inscription-plan1">
                <div className="inscription-top1">
                  <div className="inscription-heading2">
                    <span className="inscription-text06">Plan Plus</span>
                    <span className="inscription-text07">
                      ¡Te incluimos los servicios más demandados!
                    </span>
                  </div>
                  <div className="inscription-cost1">
                    <span className="inscription-text08">47€</span>
                    <span className="inscription-text09">/mes</span>
                  </div>
                </div>
                <div className="inscription-bottom1">
                  <div className="inscription-check-list1">
                    <Check feature="Beneficios del Plan Standard "></Check>
                    <Check feature="3 invitaciones gratis para tus amigos y familiares cada mes"></Check>
                    <Check feature="Plan de entrenamiento personalizado"></Check>
                    <Check feature="Dieta personalizada y Nutricionista con seguimiento quincenal"></Check>
                  </div>
                  <div className="inscription-button1">
                    <span className="inscription-text10">Seleccionar</span>
                  </div>
                </div>
              </div>
              <div className="inscription-plan2">
                <div className="inscription-top2">
                  <div className="inscription-heading3">
                    <span className="inscription-text11">Plan Familiar</span>
                    <span className="inscription-text12">
                      ¡Entrena con acompañamiento!
                    </span>
                  </div>
                  <div className="inscription-cost2">
                    <span className="inscription-text13">62€</span>
                    <span className="inscription-text14">/mes</span>
                  </div>
                </div>
                <div className="inscription-bottom2">
                  <div className="inscription-check-list2">
                    <Check feature="Abono para miembros de misma unidad familiar"></Check>
                    <Check feature="Descuento en 2º adulto con respecto a la cuota individual."></Check>
                    <Check feature="Gratis para menores de 16 años (según centro)."></Check>
                    <Check feature=" Acceso a centro en horario completo."></Check>
                    <Check feature="Seguimiento profesional disponible para conseguir tus objetivos."></Check>
                  </div>
                  <span className="inscription-text15">
                    *Necesario presentar libro familiar o registro civil
                    (parejas de hecho).
                  </span>
                  <div className="inscription-button2">
                    <span className="inscription-text16">Seleccionar</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="inscription-expand">
              <div className="inscription-overlay">
                <div className="inscription-header1">
                  <div className="inscription-heading4">
                    <span className="inscription-text17">
                      Plan Personalizado
                    </span>
                    <span className="inscription-text18">
                      ¡Empezarás a sentirte bien!
                    </span>
                  </div>
                  <div className="inscription-check-list3">
                    <div className="inscription-check">
                      <svg viewBox="0 0 1024 1024" className="inscription-icon">
                        <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                      </svg>
                      <span className="inscription-text19">
                        Sed ut perspiciatis unde
                      </span>
                    </div>
                    <div className="inscription-check1">
                      <svg
                        viewBox="0 0 1024 1024"
                        className="inscription-icon02"
                      >
                        <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                      </svg>
                      <span className="inscription-text20">
                        Quis nostrud exercitation ulla
                      </span>
                    </div>
                    <div className="inscription-check2">
                      <svg
                        viewBox="0 0 1024 1024"
                        className="inscription-icon04"
                      >
                        <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                      </svg>
                      <span className="inscription-text21">
                        Duis aute irure dolor intuit
                      </span>
                    </div>
                  </div>
                </div>
                <div className="inscription-button3">
                  <span className="inscription-text22">
                    <span>Contáctanos</span>
                    <br></br>
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="inscription-plans1">
            <div className="inscription-plan3">
              <div className="inscription-top3">
                <div className="inscription-heading5">
                  <span className="inscription-text25">Standard</span>
                  <span className="inscription-text26">
                    Sed ut perspiciatis unde omnis iste natus error sit.
                  </span>
                </div>
                <div className="inscription-cost3">
                  <span className="inscription-text27">Free</span>
                </div>
              </div>
              <div className="inscription-bottom3">
                <div className="inscription-check-list4">
                  <Check></Check>
                  <Check feature="Quis nostrud exercitation ulla"></Check>
                  <Check feature="Duis aute irure dolor intuit"></Check>
                  <Check feature="Voluptas sit aspernatur aut odit"></Check>
                  <Check feature="Corporis suscipit laboriosam"></Check>
                </div>
                <div className="inscription-button4">
                  <span className="inscription-text28">Get Standard</span>
                </div>
              </div>
            </div>
            <div className="inscription-plan4">
              <div className="inscription-top4">
                <div className="inscription-heading6">
                  <span className="inscription-text29">Plus</span>
                  <span className="inscription-text30">
                    Sed ut perspiciatis unde omnis iste natus error sit.
                  </span>
                </div>
                <div className="inscription-cost4">
                  <span className="inscription-text31">$8</span>
                  <span className="inscription-text32">/month</span>
                </div>
              </div>
              <div className="inscription-bottom4">
                <div className="inscription-check-list5">
                  <Check></Check>
                  <Check feature="Quis nostrud exercitation ulla"></Check>
                  <Check feature="Duis aute irure dolor intuit"></Check>
                  <Check feature="Voluptas sit aspernatur aut odit"></Check>
                  <Check feature="Corporis suscipit laboriosam"></Check>
                </div>
                <div className="inscription-button5">
                  <span className="inscription-text33">Get Plus</span>
                </div>
              </div>
            </div>
            <div className="inscription-plan5">
              <div className="inscription-top5">
                <div className="inscription-heading7">
                  <span className="inscription-text34">Premium</span>
                  <span className="inscription-text35">
                    Sed ut perspiciatis unde omnis iste natus error sit.
                  </span>
                </div>
                <div className="inscription-cost5">
                  <span className="inscription-text36">$16</span>
                  <span className="inscription-text37">/month</span>
                </div>
              </div>
              <div className="inscription-bottom5">
                <div className="inscription-check-list6">
                  <Check></Check>
                  <Check feature="Quis nostrud exercitation ulla"></Check>
                  <Check feature="Duis aute irure dolor intuit"></Check>
                  <Check feature="Voluptas sit aspernatur aut odit"></Check>
                  <Check feature="Corporis suscipit laboriosam"></Check>
                </div>
                <div className="inscription-button6">
                  <span className="inscription-text38">Get Plus</span>
                </div>
              </div>
            </div>
            <div className="inscription-expand1">
              <div className="inscription-overlay1">
                <div className="inscription-header2">
                  <div className="inscription-heading8">
                    <span className="inscription-text39">Expand</span>
                    <span className="inscription-text40">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt.
                    </span>
                  </div>
                  <div className="inscription-check-list7">
                    <div className="inscription-check3">
                      <svg
                        viewBox="0 0 1024 1024"
                        className="inscription-icon06"
                      >
                        <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                      </svg>
                      <span className="inscription-text41">
                        Sed ut perspiciatis unde
                      </span>
                    </div>
                    <div className="inscription-check4">
                      <svg
                        viewBox="0 0 1024 1024"
                        className="inscription-icon08"
                      >
                        <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                      </svg>
                      <span className="inscription-text42">
                        Quis nostrud exercitation ulla
                      </span>
                    </div>
                    <div className="inscription-check5">
                      <svg
                        viewBox="0 0 1024 1024"
                        className="inscription-icon10"
                      >
                        <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                      </svg>
                      <span className="inscription-text43">
                        Duis aute irure dolor intuit
                      </span>
                    </div>
                  </div>
                </div>
                <div className="inscription-button7">
                  <span className="inscription-text44">
                    <span>Contact us</span>
                    <br></br>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  )
}

export default Inscription
