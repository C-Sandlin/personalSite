import "../styles/index.css";
import "../styles/main.css";
import "../styles/footer.css";
import "../styles/regulate.css";
import "../styles/main.css";
import "../styles/nutshell.css";
import { IconContext } from 'react-icons';
import { FaGithub, FaLinkedinIn, FaDribbble, FaBehance } from 'react-icons/fa';
import { MdMailOutline } from 'react-icons/md'
import { FiGithub, FiChevronUp, FiDownloadCloud, FiArrowRightCircle } from 'react-icons/fi'
import React, { Component } from "react";
import { NavLink } from 'react-router-dom';
import * as Scroll from 'react-scroll';
import NutshellLogo1 from "../img/BryanNilsens-01.svg";
import Nutshell1 from "../img/Nutshell-Screenshot.png"
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
            <ScrollAnimation animateIn='fadeIn' duration={2} >
                <section className="project-container" name="nutshell" id="nutshell">
                    <div className="project-inner-container">
                        <div className="project-img-container" onClick={() => window.open("https://github.com/nss-day-cohort-32/Nutshell_TheBryanFivingNilsens", "_blank")}>
                            <div className="overlay">
                                <div className="overlay-txt">Click to view project on Github</div>
                            </div>
                            <img src={Nutshell1} className="project-thumb"></img>

                        </div>
                        <div className="project-txt-container">
                            <div className="project-actual-txt-container">
                                <img src={NutshellLogo1} className="project-logo"></img>
                                <p className="project-title">Frontend Team Sprint</p>
                                <p className="project-text">My team, the Bryan Fiving Nilsens, created a social media platform that allows users to view news and events, add and remove friends, create a to-do list, and post messages to a message board. Additionally, once friends were added via a friend request, the user can view friends' news and events. This application was created during the second month of class to practice fetch calls to an API, using Github for version control and collaboration, handling user events and interactions, and understand relational databases and how the operate. In addition to that, we used Grunt and Browserify as a bundler and task manager.
                                </p>
                                <IconContext.Provider value={{ style: { verticalAlign: 'middle' }, size: '14.4px' }} >
                                    <p style={{ fontSize: '14.4px' }}><IoMdPerson />      sean </p>
                                    <p style={{ fontSize: '14.4px' }}><IoIosUnlock />      sean@glavin.us</p>
                                </IconContext.Provider>
                                <IconContext.Provider value={{ size: '16px', style: { verticalAlign: 'middle' } }} >
                                    <a className="readmore" href="https://github.com/nss-day-cohort-32/Nutshell_TheBryanFivingNilsens" target="_blank">View Deployed Project <FiArrowRightCircle /></a>
                                </IconContext.Provider>
                            </div>
                        </div>
                    </div>
                </section >
            </ScrollAnimation >
        )
    }

}