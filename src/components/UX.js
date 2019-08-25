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

                        <div className="project-txt-container">
                            <div className="project-actual-txt-container">
                                <img src={DesignLogo1} className="project-logo-design"></img>
                                <p className="project-title">UX/UI Design</p>
                                <p className="project-text">I have experience in Industrial/Product Design, Environmental Graphic Design, UX/UI Design, Website Design, and Typography. Here is a small sample of selected, relevant works.
                                </p>
                                <IconContext.Provider value={{ size: '16px', style: { verticalAlign: 'middle' } }} >
                                    <a className="readmore" href="https://c-sandlin.myportfolio.com/" target="_blank">View Design Portfolio <FiArrowRightCircle /></a>
                                </IconContext.Provider>


                            </div>


                        </div>
                        <div className="project-img-container" onClick={() => window.open("https://c-sandlin.myportfolio.com/", "_blank")}>
                            <div className="overlay">
                                <div className="overlay-txt">Click to view design projects on Behance</div>
                            </div>
                            <img src={UXimg} className="project-thumb"></img>

                        </div>

                    </div>
                </section >
            </ScrollAnimation >
        )
    }

}