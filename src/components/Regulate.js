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
import RegulateLogo1 from "../img/RegulateLogo.svg";
import Regulate1 from "../img/Regulate-Thumb.jpg"
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
                                <img src={RegulateLogo1} className="project-logo"></img>
                                <p className="project-title">Frontend Capstone</p>
                                <p className="project-text">Regulate was built to help clients and therapists as they work together to improve their mental health. My wife is a therapist and together we realized the need for an intuitive, intelligent application to help clients track data, recall coping techniques, and find support. Over time, this data can make a significant impact in how clients progress and manage their unique situations by providing tangible feedback and metrics in an easy-to-understand format.
                                </p>
                                <IconContext.Provider value={{ style: { verticalAlign: 'middle' }, size: '14.4px' }} >
                                    <p style={{ fontSize: '14.4.px' }}><IoMdPerson />      testuser@test.com </p>
                                    <p style={{ fontSize: '14.4px' }}><IoIosUnlock />      password010</p>
                                </IconContext.Provider>
                                <IconContext.Provider value={{ size: '16px', style: { verticalAlign: 'middle' } }} >
                                    <a className="readmore" href="https://github.com/C-Sandlin/capstone-deployed" target="_blank">View Deployed Project <FiArrowRightCircle /></a>
                                </IconContext.Provider>


                            </div>


                        </div>
                        <div className="project-img-container" onClick={() => window.open("https://github.com/C-Sandlin/capstone-deployed", "_blank")}>
                            <div className="overlay">
                                <div className="overlay-txt">Click to view project on Github</div>
                            </div>
                            <img src={Regulate1} className="project-thumb"></img>

                        </div>

                    </div>
                </section >
            </ScrollAnimation >
        )
    }

}