import React from 'react';
import './Landing.styles.css';
import NavBar from "../../components/NavBar/NavBar.component.jsx";
import Footer from "../../components/footer/Footer.component.jsx";

const Landing = () => {

    return (
        <div className='container-fluid'>
            <NavBar/>
            <section className='hero-section'>
                <h1 className='text-center'>OUR ADVANTAGES</h1>
            </section>
            <Footer/>
        </div>
    )
}

export default Landing;
