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


export default class Regulate extends Component {

    render() {
        return (
            <section className="regulate-container" name="regulate">
                <div className="regulate-inner-container">
                    <div className="regulate-txt-container">
                        <div className="regulate-actual-txt-container">
                            <img src={RegulateLogo1} id="regulate-logo"></img>
                            <p id="regulate-title">Frontend Capstone</p>
                            <p id="regulate-text">I created Regulate to help both clients and therapists as they work together to improve their mental health. My wife is a therapist and together we realized the need for an intuitive, intelligent application to help clients track data, recall coping techniques, and find support. Over time, this data can make a significant impact in how clients progress and manage their unique situations.</p>

                            <IconContext.Provider value={{ size: '1.5rem' }}>
                                <a className="readmore" href="http://www.github.com/c-sandlin" target="_blank">View this project on Github <IoIosArrowRoundForward style={{ marginBottom: '-8px' }} /></a>
                            </IconContext.Provider>

                            <div className="techs-container">
                                <DiHtml5 className="techicon" />
                                <DiCss3 className="techicon" />
                                <DiReact className="techicon" />
                                <DiGithubBadge className="techicon" />
                            </div>
                        </div>
                    </div>
                    <div className="regulate-img-container">
                        <img src={Regulate1}></img>
                    </div>
                </div>
            </section>
        )
    }

}