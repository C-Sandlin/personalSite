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
import DesignLogo1 from "../img/DesignPortfolioLogo.svg";
import SpaceX from "../img/Spacex.jpg"
import { IoIosArrowRoundForward, IoIosArrowRoundBack, IoMdPerson, IoIosUnlock } from "react-icons/io"
import { DiHtml5, DiCss3, DiReact, DiGithubBadge, DiJsBadge } from "react-icons/di"
import ScrollAnimation from 'react-animate-on-scroll';
import { Accordion, AccordionItem } from 'react-sanfona';
import { FaCaretDown } from "react-icons/fa"





export default class Regulate extends Component {

    state = {
        photoIndex: 0,
        isOpen: false,
    }

    render() {
        return (
            <ScrollAnimation animateIn='fadeIn' duration={2}>
                <section className="project-container" name="regulate">
                    <div className="project-inner-container">

                        <div className="project-txt-container">
                            <div className="project-actual-txt-container">
                                <img src={DesignLogo1} className="project-logo"></img>
                                <p className="project-title">Selected works</p>
                                <p className="project-text">A small collection of design projects I have worked on, including Industrial Design, UX/UI Design, Experiential Design, and Graphic Design.
                                </p>
                                <IconContext.Provider value={{ size: '16px', style: { verticalAlign: 'middle' } }} >
                                    <a className="readmore" href="https://c-sandlin.myportfolio.com/work" target="_blank">View Portfolio <FiArrowRightCircle /></a>
                                </IconContext.Provider>


                            </div>


                        </div>
                        <div className="project-img-container" onClick={() => window.open("https://c-sandlin.myportfolio.com/work", "_blank")}>
                            <div className="overlay">
                                <div className="overlay-txt">Click to view selected design projects on Behance</div>
                            </div>
                            <img src={SpaceX} className="project-thumb"></img>

                        </div>

                    </div>
                </section >
            </ScrollAnimation >
        )
    }

}