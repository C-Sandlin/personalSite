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
                                I'm a former Industrial Designer turned developer who loves solving problems that improve people's lives. I'm a highly creative person that leverages my design experience to help inform how I code.
                            </p>
                        </div>
                        <div className="footer-resume-section">
                            <h4 className="footer-resume-section-title">Experience</h4>
                            <div className="footer-resume-section-div">
                                <p style={{ fontWeight: '600', marginBottom: '0px' }}>Nashville Software School</p>
                                <p className="footer-resume-section-txt" style={{ marginTop: '0px' }}>Six Months of full-time, intensive individual and team-based learning.</p>

                                <p style={{ fontWeight: '600', marginBottom: '0px' }}>Design Lead/ Senior Designer at Advent</p>
                                <p className="footer-resume-section-txt" style={{ marginTop: '0px' }}>Four years of leading project teams in finding creative solutions for clients.</p>

                                <p style={{ fontWeight: '600', marginBottom: '0px' }}>Industrial Designer at ASD | Sky Design</p>
                                <p className="footer-resume-section-txt" style={{ marginTop: '0px' }}>One year working at a major international firm.</p>
                            </div>
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
                                    <a href="mailto:csandlin010@gmail.com" className="tooltip">
                                        <span className="tooltiptext">Email</span>
                                        <MdMailOutline style={{ paddingRight: '30px' }} />
                                    </a>
                                    <a href="http://www.github.com/c-sandlin" target="_blank" className="tooltip">
                                        <span className="tooltiptext">Github</span>
                                        <FaGithub style={{ paddingRight: '30px' }} />
                                    </a>
                                    <a href="http://www.linkedin.com/in/c-sandlin" target="_blank" className="tooltip">
                                        <span className="tooltiptext">Linkedin</span>
                                        <FaLinkedinIn style={{ paddingRight: '30px' }} />
                                    </a>
                                    <a href="https://c-sandlin.myportfolio.com/" target="_blank" className="tooltip">
                                        <span className="tooltiptext">Portfolio</span>
                                        <FaBehance style={{ paddingRight: '30px' }} />
                                    </a>
                                    <a href="https://c-sandlin.myportfolio.com/" target="_blank" className="tooltip">
                                        <span className="tooltiptext">Resume</span>
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