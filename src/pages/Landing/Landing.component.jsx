import React, {useEffect, useRef, useState} from 'react';
import { gsap } from 'gsap';
import SplitType from 'split-type'
import './Landing.styles.css';
import NavBar from '../../components/NavBar/NavBar.component.jsx';
import Footer from '../../components/footer/Footer.component.jsx';
import heroImage from '../../assets/hero-image.svg';
// import firstPageOne from '../../assets/first-page-image.svg';
import firstPageOne from '../../assets/first-page-one.svg';
import firstPageTwo from '../../assets/first-page-two.svg';
import firstPageThree from '../../assets/first-page-three.svg';
import firstPageFour from '../../assets/first-page-four.svg';

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
import exploreMiniLeft from '../../assets/explore-mini-icon-left.svg';
import exploreMiniMiddle from '../../assets/explore-mini-icon-middle.svg';
import exploreMiniRight from '../../assets/explore-mini-icon-right.svg';
import exploreRightTop from '../../assets/explore-right-top.svg';
import exploreRightTop2 from '../../assets/explore-right-top-2.svg';
import exploreRightMiddle from '../../assets/explore-right-middle.svg';
import exploreRightMiddle2 from '../../assets/explore-right-middle-2.svg';
import exploreRightBottom from '../../assets/explore-right-bottom.svg';
import exploreRightBottomTwo from '../../assets/explore-right-bottom-2.svg';




const Landing = () => {
    const cardRef = useRef(null);
    const cardRefTwo= useRef(null);
    const cardRefThree= useRef(null);

    const [splitTextInstance, setSplitTextInstance] = useState(null);


    useEffect(() => {
        const timeline = gsap.timeline();
        const timelineTwo = gsap.timeline();
        const timelineThree = gsap.timeline();

        const ourText = new SplitType('h1.our-text', { types: 'chars' });
        setSplitTextInstance(ourText);

        gsap.fromTo(
            ourText.chars,
            {
                y: 100,
                opacity: 0
            },
            {
                y: 0,
                opacity: 1,
                stagger: 0.05,
                duration: 2,
                ease: 'power4.out',
            }
        )

        /**
         * First image animation
         */
        // Initial position (off-screen) and tilt
        gsap.set(cardRef.current, { y: '100%', rotate: -10 });

        // Spin animation
        timeline.to(cardRef.current, { rotate: 10, duration: 0.5 });

        // Slide up animation after a delay
        timeline.to(cardRef.current, { y: -280, duration: 0.3, delay: 1 });

        // Fade out and remove from DOM
        timeline.to(cardRef.current, {
            opacity: 0,
            duration: 0.5,
            onComplete: () => {
                cardRef.current.style.display = 'none';
            },
        });

        /**
         * Second image animation
         */
        gsap.set(cardRefTwo.current, { y: '100%', rotate: -10 });

        // Spin animation
        timelineTwo.to(cardRefTwo.current, { rotate: 10, duration: 0.5 });

        // Slide up animation after a delay
        timelineTwo.to(cardRefTwo.current, { y: -280, duration: 0.3, delay: 2 });

        // Fade out and remove from DOM
        timelineTwo.to(cardRefTwo.current, {
            opacity: 0,
            duration: 0.5,
            onComplete: () => {
                cardRefTwo.current.style.display = 'none';
            },
        });

        /**
         * Third image animation
         */
        gsap.set(cardRefThree.current, { y: '100%', rotate: -10 });

        // Spin animation
        timelineThree.to(cardRefThree.current, { rotate: 10, duration: 0.5 });

        // Slide up animation after a delay
        timelineThree.to(cardRefThree.current, { y: -280, duration: 0.3, delay: 3 });

        // Fade out and remove from DOM
        timelineThree.to(cardRefThree.current, {
            opacity: 0,
            duration: 0.5,
            onComplete: () => {
                cardRefThree.current.style.display = 'none';
            },
        });

    }, []);

    return (
        <div className='container-fluid container-parent'>
            <div className='container-wrapper container-pagethree'>
                <NavBar/>
                <section className='hero-section'>
                    <h1 className='text-center our-text'>OUR ADVANTAGES</h1>
                    <div className='hero-section__overlay'>
                        <div>
                            <img src={firstPageFour} alt="first-page-four"/>
                        </div>
                        <div className='animated-imagewrapper'
                             ref={cardRefThree}
                        >
                            <img src={firstPageThree} alt="first-page-three"/>
                        </div>
                        <div className='animated-imagewrapper'
                        ref={cardRefTwo}>
                            <img src={firstPageTwo} alt="first-page-two"/>
                        </div>
                        <div
                            className='animated-imagewrapper'
                            ref={cardRef}
                        >
                            <img src={firstPageOne} alt="first-page"/>
                        </div>
                    </div>
                </section>

                {/*Revotionalize section*/}
                {/*<section className='container-fluid'>*/}
                {/*  <div className='revolution-hero d-flex align-items-center justify-content-center gap-4'>*/}
                {/*      <h1>REVOLUTIONILIZING</h1>*/}
                {/*      <div>*/}
                {/*          <div className='d-flex align-items-center gap-2'>*/}
                {/*              <img src={revolutionImageOne} alt="left-revolution-image"/>*/}
                {/*              <img src={revolutionImageTwo} alt="middle-revolution-image"/>*/}
                {/*              <img src={revolutionImageThree} alt="right-revolution-image"/>*/}
                {/*          </div>*/}
                {/*          <p>Modern Solutions,<br></br> Timeless Smiles</p>*/}
                {/*      </div>*/}
                {/*  </div>*/}
                {/*    <div className='mt-5 dental-care container-fluid d-flex align-items-center gap-4 justify-content-center'>*/}
                {/*        <div className='dental-care__images d-flex align-items-center gap-2'>*/}
                {/*            <img src={assistanceText} alt="assistance-text"/>*/}
                {/*            <img src={assistanceIcon} alt="assistance-icon"/>*/}
                {/*        </div>*/}
                {/*        <div className='d-flex align-items-center gap-4'>*/}
                {/*            <h2>DENTAL</h2>*/}
                {/*            <div className='dental-care__textimage'>*/}
                {/*                <img className='img-fluid' src={avatar} alt="avatar"/>*/}
                {/*                <img className='img-fluid' src={starIcon} alt="star-icon"/>*/}
                {/*            </div>*/}
                {/*            <h2>CARE</h2>*/}
                {/*          </div>*/}
                {/*    </div>*/}
                {/*    <div className="container-fluid with-tech d-flex align-items-center justify-content-center gap-2">*/}
                {/*        <h2>WITH TECHNOLOGY</h2>*/}
                {/*        <div className='with-tech__images'>*/}
                {/*            <img src={smileImageOne} alt="smile-image-1"/>*/}
                {/*            <img src={smileImageTwo} alt="smile-image-2"/>*/}
                {/*            <img src={smileImageThree} alt="smile-image-3"/>*/}
                {/*            <img src={smileImageFour} alt="smile-image-4"/>*/}
                {/*        </div>*/}
                {/*        <div className='with-tech__cross mb-4'>*/}
                {/*            <img src={withTechCross} alt="with-tech-cross"/>*/}
                {/*        </div>*/}
                {/*    </div>*/}
                {/*    <div className="near-footer container-fluid d-flex justify-content-start">*/}
                {/*        <div className='near-footer__image'>*/}
                {/*            <img className='img-fluid' src={smile} alt="with-tech-smile-image"/>*/}
                {/*            <img className='img-fluid' src={play} alt="play-image"/>*/}
                {/*        </div>*/}
                {/*        <img className='near-footer__getstarted' src={getStarted} alt="getStarged"/>*/}
                {/*    </div>*/}
                {/*</section>*/}
                {/*End of Revotionalize section*/}

               {/*<div className='nav-pagethree'>*/}
               {/*    <NavBar/>*/}
               {/*</div>*/}
                {/*EXPLORE SECTION*/}
                {/*<section className="container-fluid explore d-flex flex-wrap justify-content-between">*/}
                {/*    <div className="explore__left">*/}
                {/*        <div className='d-flex align-items-center gap-2'>*/}
                {/*                          <img src={exploreMiniLeft} alt="left-mini-icon"/>*/}
                {/*                          <img src={exploreMiniMiddle} alt="middle-mini-icon"/>*/}
                {/*                          <img src={exploreMiniRight} alt="right-mini-icon"/>*/}
                {/*                      </div>*/}
                {/*        <div className='content-wrapper'>*/}
                {/*            <h2>EXPLORE OUR SERVICE, MAKE YOUR SMILE SHINE</h2>*/}
                {/*            <div className='content-wrapper__buttons d-flex gap-3'>*/}
                {/*                <button>Get The App</button>*/}
                {/*                <button>Meet The Team</button>*/}
                {/*            </div>*/}
                {/*        </div>*/}
                {/*    </div>*/}
                {/*    <div className="explore__right">*/}
                {/*    <div className='d-flex gap-4'>*/}
                {/*        <div className='image-buttonwrapper'>*/}
                {/*            <img src={exploreRightTop} alt="explore-right-top-image"/>*/}
                {/*            <button>Toothbrush Tracking</button>*/}
                {/*        </div>*/}
                {/*        <div className='image-buttonwrapper'>*/}
                {/*            <img src={exploreRightTop2} alt="explore-right-top-2-image"/>*/}
                {/*            <button>Oral Care Guides</button>*/}
                {/*        </div>*/}
                {/*    </div>*/}
                {/*        <div className='d-flex gap-4 mt-3'>*/}
                {/*            <div className='image-buttonwrapper'>*/}
                {/*                <img src={exploreRightMiddle} alt="explore-middle-image"/>*/}
                {/*                <button>Dental Health Records</button>*/}
                {/*            </div>*/}
                {/*            <div className='image-buttonwrapper'>*/}
                {/*                <img src={exploreRightMiddle2} alt="explore-middle-image-two"/>*/}
                {/*                <button>Appointment Scheduling</button>*/}
                {/*            </div>*/}
                {/*        </div>*/}
                {/*        <div className='d-flex gap-4 mt-3'>*/}
                {/*            <div className='image-buttonwrapper'>*/}
                {/*                <img src={exploreRightBottom} alt="explore-right-bottom-image"/>*/}
                {/*                <button>Oral Health Assessment</button>*/}
                {/*            </div>*/}
                {/*            <div className='image-buttonwrapper'>*/}
                {/*                <img src={exploreRightBottomTwo} alt="explore-right-bottom-image-two"/>*/}
                {/*                <button>Medication Tracking</button>*/}
                {/*            </div>*/}
                {/*        </div>*/}
                {/*    </div>*/}
                {/*</section>*/}
                {/*END OF EXPLORE SECTION*/}
            </div>
            <Footer/>
        </div>
    )
}

export default Landing;
