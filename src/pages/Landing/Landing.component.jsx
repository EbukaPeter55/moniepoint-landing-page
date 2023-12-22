import React from 'react';
import './Landing.styles.css';
import NavBar from '../../components/NavBar/NavBar.component.jsx';
import Footer from '../../components/footer/Footer.component.jsx';
import heroImage from '../../assets/hero-image.svg';
import revolutionImageOne from '../../assets/revolution-1.svg';
import revolutionImageTwo from '../../assets/revolution-2.svg';
import revolutionImageThree from '../../assets/revolution-3.svg';
import assistanceText from '../../assets/assistance.svg';
import assistanceIcon from '../../assets/assistance-icon.svg';
import avatar from '../../assets/avatar-revolu.svg';
import starIcon from '../../assets/star.svg';
import smileImageOne from '../../assets/smile-image-1.svg';
import smileImageTwo from '../../assets/with-technology-2.svg';
import smileImageThree from '../../assets/with-technology-3.svg';
import smileImageFour from '../../assets/with-technology-4.svg';
import withTechCross from '../../assets/with-cross-tech.svg';
import smile from '../../assets/with-technology.svg';
import play from '../../assets/play.svg';
import getStarted from '../../assets/get-started.svg';





const Landing = () => {

    return (
        <div className='container-fluid container-parent'>
            <div className='container-wrapper'>
                <NavBar/>
                {/*<section className='hero-section'>*/}
                {/*    <h1 className='text-center'>OUR ADVANTAGES</h1>*/}
                {/*    <div className='hero-section__overlay'>*/}
                {/*        <img className='img-fluid' src={heroImage} alt="hero-image"/>*/}
                {/*    </div>*/}
                {/*</section>*/}

                {/*Revotionalize section*/}
                <section className='container-fluid'>
                  <div className='revolution-hero d-flex align-items-center justify-content-center gap-4'>
                      <h1>REVOLUTIONILIZING</h1>
                      <div>
                          <div className='d-flex align-items-center gap-2'>
                              <img src={revolutionImageOne} alt="left-revolution-image"/>
                              <img src={revolutionImageTwo} alt="middle-revolution-image"/>
                              <img src={revolutionImageThree} alt="right-revolution-image"/>
                          </div>
                          <p>Modern Solutions,<br></br> Timeless Smiles</p>
                      </div>
                  </div>
                    <div className='mt-5 dental-care container-fluid d-flex align-items-center gap-4 justify-content-center'>
                        <div className='dental-care__images d-flex align-items-center gap-2'>
                            <img src={assistanceText} alt="assistance-text"/>
                            <img src={assistanceIcon} alt="assistance-icon"/>
                        </div>
                        <div className='d-flex align-items-center gap-4'>
                            <h2>DENTAL</h2>
                            <div className='dental-care__textimage'>
                                <img className='img-fluid' src={avatar} alt="avatar"/>
                                <img className='img-fluid' src={starIcon} alt="star-icon"/>
                            </div>
                            <h2>CARE</h2>
                          </div>
                    </div>
                    <div className="container-fluid with-tech d-flex align-items-center justify-content-center gap-2">
                        <h2>WITH TECHNOLOGY</h2>
                        <div className='with-tech__images'>
                            <img src={smileImageOne} alt="smile-image-1"/>
                            <img src={smileImageTwo} alt="smile-image-2"/>
                            <img src={smileImageThree} alt="smile-image-3"/>
                            <img src={smileImageFour} alt="smile-image-4"/>
                        </div>
                        <div className='with-tech__cross mb-4'>
                            <img src={withTechCross} alt="with-tech-cross"/>
                        </div>
                    </div>
                    <div className="near-footer container-fluid d-flex justify-content-start">
                        <div className='near-footer__image'>
                            <img className='img-fluid' src={smile} alt="with-tech-smile-image"/>
                            <img className='img-fluid' src={play} alt="play-image"/>
                        </div>
                        <img className='near-footer__getstarted' src={getStarted} alt="getStarged"/>
                    </div>
                </section>
                {/*End of Revotionalize section*/}

            </div>
            <Footer/>
        </div>
    )
}

export default Landing;
