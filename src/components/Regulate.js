import "../styles/index.css";
import "../styles/main.css";
import "../styles/footer.css";
import "../styles/regulate.css";
import "../styles/main.css";
import { IconContext } from 'react-icons';
import { FaGithub, FaLinkedinIn, FaDribbble, FaBehance } from 'react-icons/fa';
import { MdMailOutline } from 'react-icons/md'
import { FiGithub, FiChevronUp, FiDownloadCloud } from 'react-icons/fi'
import React, { Component } from "react";
import { NavLink } from 'react-router-dom';
import * as Scroll from 'react-scroll';
import RegulateLogo1 from "../img/RegulateLogo.svg";
import Regulate1 from "../img/Regulate.jpg"
import { IoIosArrowRoundForward, IoIosArrowRoundBack } from "react-icons/io"
import { DiHtml5, DiCss3, DiReact, DiGithubBadge } from "react-icons/di"
import ScrollAnimation from 'react-animate-on-scroll';


export default class Regulate extends Component {

    render() {
        return (
            <ScrollAnimation animateIn='fadeIn' duration={2}>
                <section className="project-container" name="regulate">
                    <div className="project-inner-container">

                        <div className="project-txt-container">
                            <div className="project-actual-txt-container">
                                <img src={RegulateLogo1} className="project-logo"></img>
                                <p className="project-title"> {"<"} Frontend Capstone /{">"}</p>
                                <p className="project-text">I created Regulate to help both clients and therapists as they work together to improve their mental health. My wife is a therapist and together we realized the need for an intuitive, intelligent application to help clients track data, recall coping techniques, and find support. Over time, this data can make a significant impact in how clients progress and manage their unique situations.</p>

                                <IconContext.Provider value={{ size: '1.5rem' }}>
                                    <a className="readmore" href="http://www.github.com/c-sandlin" target="_blank">Read More on Github <IoIosArrowRoundForward style={{ marginBottom: '-8px' }} /></a>
                                </IconContext.Provider>

                                <div className="techs-container">
                                    <div className="techs-icons">
                                        <p className="tooltip"><DiHtml5 className="techicon"></DiHtml5><span className="tooltiptext2">HTML5</span></p>
                                        <p className="tooltip"><DiCss3 className="techicon" ></DiCss3><span className="tooltiptext2">CSS3</span></p>
                                        <p className="tooltip"><DiReact className="techicon" ></DiReact><span className="tooltiptext2">ReactJs</span></p>
                                        <p className="tooltip"><DiGithubBadge className="techicon" ></DiGithubBadge><span className="tooltiptext2">Github</span></p>
                                    </div>
                                </div>
                            </div>

                        </div>

                        <div className="project-img-container">
                            <img src={Regulate1}></img>
                        </div>

                    </div>
                </section>
            </ScrollAnimation>
        )
    }

}