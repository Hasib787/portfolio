import React from 'react';
import './About.css';
import fast from '../../../images/fast.JPG';
import responsive from '../../../images/responsive.JPG';
import intuitive from '../../../images/intuitive.JPG';
import dynamic from '../../../images/dynamic.JPG';


const About = () => {
    return (
        <section id="about">
            <div className="container flex ">
                <div className="aboutHeader">
                    <h1  className="mt-5">About</h1>
                    <p className="header-bar mt-3"></p>
                </div>
                <div className="row text-center m-5">
                    <div className="col-sm-6 col-lg-3 box">
                        <img src={fast} alt=""/>
                        <h3>Fast</h3>
                        <p>Fast load times and lag free <br/>
                         interaction, my highest priority.</p>
                    </div>
                    <div className="col-sm-6 col-lg-3 box">
                        <img src={responsive} alt=""/>
                        <h3>Responsive</h3>
                        <p>My layouts will work on any <br/> device, big or small.</p>
                    </div>
                    <div className="col-sm-6 col-lg-3 box">
                        <img src={intuitive} alt=""/>
                        <h3>Intuitive</h3>
                        <p>Strong preference for easy to <br/> use, intuitive PSD to HTML.</p>
                    </div>
                    <div className="col-sm-6 col-lg-3 box">
                        <img src={dynamic} alt=""/>
                        <h3>Dynamic</h3>
                        <p>Websites don't have to be static, I love <br/> making pages come to life.</p>
                    </div>
                </div>
                <div>

                </div>
            </div>
        </section>
    );
};

export default About;