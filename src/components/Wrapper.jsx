import React from 'react';
import About from "./About";
import Face from "./Basic";
import Footer from "./Footer";
import Nav from "./Nav";
import Projects from "./Projects";

const Wrapper = () => {
    return (
        <div className='root-wrapper'>
            <Face/>
            <Nav/>
            <About/>
            <Projects/>
            <Footer/>
        </div>
    );
};

export default Wrapper;