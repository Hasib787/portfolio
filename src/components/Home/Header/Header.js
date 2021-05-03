import React from 'react';
import { Button } from 'react-bootstrap';
import Particles from 'react-particles-js';
import Typical from 'react-typical'
import './Header.css';

const Header = () => {
    return (
        <div>
            <div className="particles">
                <Particles
                    params={{
                        "particles": {
                            "number": {
                                "value": 60
                            },
                            "size": {
                                "value": 3
                            }
                        },
                        "interactivity": {
                            "events": {
                                "onhover": {
                                    "enable": true,
                                    "mode": "repulse"
                                }
                            }
                        }
                    }}

                />
            </div>
            <div className=" col-sm-12 flex text-center header">
                <p className="greeting">WELCOME TO MY WORLD</p>
                <h1 className="title">Hi There! <br /><span className="name"> I'm Masud Rana</span></h1>
                <h1 style={{ color: '#f9004d' }}>
                    <Typical
                        loop={Infinity}
                        wrapper="b"
                        steps={[
                            'Web Developer',
                            1000,
                            'Full Stack Developer',
                            1000,
                            'Front-End Developer.',
                            1000,
                        ]}
                    />
                </h1>
                <Button className="resume-btn mt-3 text-center" variant="primary"><a href="http://drive.google.com/file/d/18c3Bu0tOgaVEScBNnvSA5Wukpqc8ucOj/view?usp=sharing" target="_blank" style={{ color: 'white', textDecoration: 'none' }} rel="noopener noreferrer">Get Resume</a></Button>
            </div>
            
        </div>
    );
};

export default Header;