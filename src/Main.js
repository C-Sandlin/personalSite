import React, { Component } from "react";
import { NavLink } from 'react-router-dom'
import { IoIosArrowRoundForward, IoIosArrowRoundBack } from "react-icons/io"
import { IconContext } from 'react-icons';
import * as Scroll from 'react-scroll';
import { Link, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll';
import Regulate from "./img/Regulate.jpg";
import RegulateLogo from "./img/RegulateLogo.svg";
import { DiHtml5, DiCss3, DiReact, DiGithubBadge } from "react-icons/di"
import "./styles/index.css";
import "./styles/main.css";
import "./styles/nav.css";
import "./styles/nutshell.css";
import "./styles/regulate.css";
import "./styles/technologies.css";
import "./styles/footer.css";


export default class Main extends Component {

    render() {
        return (
            <div className="main-container">
                <section className="landing-container">
                    <div className="tagline-container">
                        <h1>I'm a Full-Stack Developer with a background in creative problem solving.</h1>
                        {/* <h3>I started my career as an Industrial Designer <br></br>before switching to web development</h3> */}
                        <IconContext.Provider value={{ size: '1.5rem' }}>
                            <NavLink className="readmore" to="/aboutme">Read more about what makes me tick <IoIosArrowRoundForward style={{ marginBottom: '-8px' }} /></NavLink>
                        </IconContext.Provider>
                    </div>
                    <div className="scroll-container">
                        <Link id="scroll-arrow" to="regulate" smooth={true} duration={500}><IoIosArrowRoundBack style={{ marginBottom: '-2px', marginRight: '10px' }} />Projects</Link>
                    </div>
                </section>
                <Element className="regulate-container" name="regulate">
                    <div className="regulate-txt-container">
                        <div className="regulate-actual-txt-container">
                            <img src={RegulateLogo} id="regulate-logo"></img>
                            <p id="regulate-title">Frontend Capstone</p>
                            <p id="regulate-text">I created Regulate to help both clients and therapists as they work together to improve their mental health. My wife is a therapist and together we realized the need for an intuitive, intelligent application to help clients track data, recall coping techniques, and find support. Over time, this data can make a significant impact in how clients progress and manage their unique situations.</p>

                            <IconContext.Provider value={{ size: '1.5rem' }}>
                                <a className="readmore" href="http://www.github.com/c-sandlin" target="_blank">View this project on Github <IoIosArrowRoundForward style={{ marginBottom: '-8px' }} /></a>
                            </IconContext.Provider>

                            <div className="techs-container">
                                <DiHtml5 className="techicon" /><DiCss3 className="techicon" /><DiReact className="techicon" /><DiGithubBadge className="techicon" />
                            </div>
                        </div>
                    </div>
                    <div className="regulate-img-container">
                        <img src={Regulate}></img>
                    </div>
                </Element>
                <Element className="nutshell-container" name="nutshell">
                    <div className="nutshell-img-container">
                    </div>
                </Element>
                <Element className="footer-container">
                    <div className="footer-hero-container">
                        <h3>Thanks for stopping by. I'd love to talk!</h3>
                    </div>
                    <div className="footer-txt-container">
                        <h5>Go to:</h5>
                        <a>Email</a>
                        <a>Linkedin</a>
                        <a>Github</a>
                        <a>Design Portfolio</a>
                        <a>Instagram</a>
                    </div>
                </Element>
            </div>
        )
    }
}