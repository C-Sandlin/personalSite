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
import ScrollAnimation from 'react-animate-on-scroll';
import PDF from "../files/Colin_Sandlin_Resume.pdf"


export default class Footer extends Component {

    render() {
        return (
            <ScrollAnimation animateIn='fadeIn' className="footer-bg" duration={2}>
                <div className="footer-container">
                    <div className="footer-hero-container">
                        <h2>Nice to meet you.</h2>
                        <h2></h2>
                    </div>
                    <div className="footer-txt-container">
                        <div className="footer-resume-section">
                            <h4 className="footer-resume-section-title">About Me</h4>
                            <p className="footer-resume-section-txt">
                                I'm a former Industrial Designer turned UX Designer and developer who loves solving problems that improve people's lives.
                            </p>
                        </div>
                        <div className="footer-resume-section">
                            <h4 className="footer-resume-section-title">Experience</h4>
                            <div className="footer-resume-section-div">
                                <p style={{ fontWeight: '600', marginBottom: '0px' }}>Nashville Software School</p>
                                <p className="footer-resume-section-txt" style={{ marginTop: '0px' }}>Six Months of full-time, intensive individual and team-based learning of a full-stack curriculum.</p>

                                <p style={{ fontWeight: '600', marginBottom: '0px' }}>Design Lead/ Senior Designer at Advent</p>
                                <p className="footer-resume-section-txt" style={{ marginTop: '0px' }}>Four years of leading project teams in finding creative, user-centric solutions for clients.</p>

                                <p style={{ fontWeight: '600', marginBottom: '0px' }}>Industrial Designer at ASD | Sky Design</p>
                                <p className="footer-resume-section-txt" style={{ marginTop: '0px' }}>One year working at a major international firm.</p>

                                <a href={PDF} target="_blank" style={{ fontWeight: '800', marginBottom: '0px', textDecoration: 'none', textTransform: 'capitalize', letterSpacing: '.1px' }}>View Full Resume</a>
                            </div>
                        </div>
                        <div className="footer-resume-section">
                            <h4 className="footer-resume-section-title">Tech Stack</h4>
                            <p className="footer-resume-section-txt">HTML, CSS3, Javascript, Grunt, Browserify, React, C#, ASP.NET, SQL Server, Azure Data Studio, ADO.NET</p>
                        </div>
                        <div className="footer-resume-section">
                            <h4 className="footer-resume-section-title">Skillsets</h4>
                            <p className="footer-resume-section-txt">
                                User, Product, & Market Research, Industrial Design, Sketching, User Experience Design, Graphic Design & Typography, Adobe Photoshop, Illustrator, XD
                            </p>
                        </div>
                        <div className="footer-resume-section">
                            <h4 className="footer-resume-section-title">Contact</h4>
                            <p className="footer-resume-section-txt">
                                <IconContext.Provider value={{ size: '20.8px', padding: '100px' }}>
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
                                    <a href={PDF} target="_blank" className="tooltip">
                                        <span className="tooltiptext">Resume</span>
                                        <FiDownloadCloud style={{ paddingRight: '30px' }} />
                                    </a>
                                </IconContext.Provider>
                            </p>
                        </div>
                        <div className={["back-to-top", "footer-resume-section"].join(' ')}>
                            <h4 className="footer-resume-section-title"></h4>
                            <IconContext.Provider value={{ size: '24px' }}>
                                <Link to="landing-container" smooth={true} duration={500} offset={-200}><FiChevronUp className="uparrows" /> back to top</Link>
                            </IconContext.Provider>
                        </div>
                    </div>
                </div>
            </ScrollAnimation>
        )
    }
}