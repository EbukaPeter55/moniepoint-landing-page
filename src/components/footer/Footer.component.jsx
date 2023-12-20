import React from 'react';
import ellipse from '../../assets/ellipse.svg';
import instagram from '../../assets/instagram.svg';
import facebook from '../../assets/facebook.svg';
import youtube from '../../assets/youtube.svg';
import arrow from '../../assets/down-arrow.svg';
import './Footer.styles.css';

const Footer = () => {
    return (
        <footer>
            <div className='d-flex align-items-center justify-content-between'>
                <div className='footer-left'>
                    <img src={ellipse} alt="ellipse"/>
                    <p>Your Smile, Our Passion</p>
                </div>
                <div className='footer-right'>
                    <div className='d-flex gap-3 footer-right__socials'>
                        <img src={instagram} alt="instagram"/>
                        <img src={youtube} alt="youtube"/>
                        <img src={facebook} alt="facebook"/>
                    </div>
                    <p className='mt-2'>Best Startup Of 2023</p>
                </div>
            </div>
            <div className='d-flex justify-content-center'>
                <img src={arrow} alt="down-arrow"/>
            </div>
        </footer>
    )
}

export default Footer;
