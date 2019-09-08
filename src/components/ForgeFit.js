import "../styles/index.css";
import "../styles/main.css";
import "../styles/footer.css";
import "../styles/regulate.css";
import "../styles/main.css";
import { IconContext } from 'react-icons';
import { FaGithub, FaLinkedinIn, FaDribbble, FaBehance } from 'react-icons/fa';
import { MdMailOutline } from 'react-icons/md'
import { FiGithub, FiChevronUp, FiDownloadCloud, FiArrowRightCircle } from 'react-icons/fi'
import React, { Component } from "react";
import { NavLink } from 'react-router-dom';
import * as Scroll from 'react-scroll';
import DesignLogo1 from "../img/website_logos-01.svg";
import UXimg from "../img/UX.jpg"
import { IoIosArrowRoundForward, IoIosArrowRoundBack, IoMdPerson, IoIosUnlock } from "react-icons/io"
import { DiHtml5, DiCss3, DiReact, DiGithubBadge, DiJsBadge } from "react-icons/di"
import ScrollAnimation from 'react-animate-on-scroll';
import { Accordion, AccordionItem } from 'react-sanfona';
import { FaCaretDown } from "react-icons/fa"





export default class UX extends Component {

    state = {
        photoIndex: 0,
        isOpen: false,
    }

    render() {
        return (
            <ScrollAnimation animateIn='fadeIn' duration={2}>
                <section className="project-container" name="ux">
                    <div className="project-inner-container">
                        <div className="project-img-container" onClick={() => window.open("https://c-sandlin.myportfolio.com/forgefit-ios-workout-app", "_blank")}>
                            <div className="overlay">
                                <div className="overlay-txt">Click to view project on Behance</div>
                            </div>
                            <img src={UXimg} className="project-thumb"></img>

                        </div>
                        <div className="project-txt-container">
                            <div className="project-actual-txt-container">
                                <img src={DesignLogo1} className="project-logo-design" style={{ width: '200px' }}></img>

                                <p className="project-title">UX/UI Design - personal project</p>
                                <p className="project-text">An exercise in designing the perfect workout app that simplifies, shares, and customizes so you can just focus on training.
                                </p>
                                <IconContext.Provider value={{ size: '16px', style: { verticalAlign: 'middle' } }} >
                                    <a className="readmore" href="https://c-sandlin.myportfolio.com/" target="_blank">View Project <FiArrowRightCircle /></a>
                                </IconContext.Provider>


                            </div>


                        </div>


                    </div>
                </section >
            </ScrollAnimation >
        )
    }

}





