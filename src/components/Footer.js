import "../styles/index.css";
import "../styles/main.css";
import "../styles/footer.css";
import { IconContext } from 'react-icons';
import { FaGithub, FaLinkedinIn, FaDribbble, FaBehance } from 'react-icons/fa';
import { MdMailOutline } from 'react-icons/md'
import { FiGithub, FiChevronUp, FiDownloadCloud } from 'react-icons/fi'
import React, { Component } from "react";
import { NavLink } from 'react-router-dom';
import * as Scroll from 'react-scroll';
import { Link, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll';


export default class Footer extends Component {

    render() {
        return (
            <div className="footer-bg">
                <div className="footer-container">
                    <div className="footer-hero-container">
                        <h2>Nice to meet you.</h2>
                        <h2></h2>
                    </div>
                    <div className="footer-txt-container">
                        <div className="footer-resume-section">
                            <h4 className="footer-resume-section-title">About Me</h4>
                            <p className="footer-resume-section-txt">
                                Visual Design, Experience Design, Interaction Design, Product Design, Front-end Development, Strong knowledge of HTML / CSS / JS, User Testing, Prototyping, UX Strategy
                            </p>
                        </div>
                        <div className="footer-resume-section">
                            <h4 className="footer-resume-section-title">Experience</h4>
                            <p className="footer-resume-section-txt">5 years as a Designer</p>
                        </div>
                        <div className="footer-resume-section">
                            <h4 className="footer-resume-section-title">Tech Stack</h4>
                            <p className="footer-resume-section-txt">HTML, CSS, Javascript, Grunt, Browserify, ReactJS, C#, SQL</p>
                        </div>
                        <div className="footer-resume-section">
                            <h4 className="footer-resume-section-title">Skillsets</h4>
                            <p className="footer-resume-section-txt">
                                Visual Design, Experience Design, Interaction Design, Product Design, Front-end Development, Strong knowledge of HTML / CSS / JS, User Testing, Prototyping, UX Strategy
                            </p>
                        </div>
                        <div className="footer-resume-section">
                            <h4 className="footer-resume-section-title">Contact</h4>
                            <p className="footer-resume-section-txt">
                                <IconContext.Provider value={{ size: '1.3rem', padding: '100px' }}>
                                    <a href="mailto:csandlin010@gmail.com">
                                        <MdMailOutline style={{ paddingRight: '30px' }} />
                                    </a>
                                    <a href="http://www.github.com/c-sandlin" target="_blank" >
                                        <FaGithub style={{ paddingRight: '30px' }} />
                                    </a>
                                    <a href="http://www.linkedin.com/in/c-sandlin" target="_blank">
                                        <FaLinkedinIn style={{ paddingRight: '30px' }} />
                                    </a>
                                    <a href="https://c-sandlin.myportfolio.com/" target="_blank" >
                                        <FaBehance style={{ paddingRight: '30px' }} />
                                    </a>
                                    <a href="https://c-sandlin.myportfolio.com/" target="_blank" >
                                        <FiDownloadCloud style={{ paddingRight: '30px' }} />
                                    </a>
                                </IconContext.Provider>
                            </p>
                        </div>
                        <div className={["back-to-top", "footer-resume-section"].join(' ')}>
                            <h4 className="footer-resume-section-title"></h4>
                            <IconContext.Provider value={{ size: '1.5rem' }}>
                                <Link to="landing" smooth={true} duration={500} offset={-75}><FiChevronUp className="uparrows" /> back to top</Link>
                            </IconContext.Provider>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}