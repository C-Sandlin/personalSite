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
import DesignLogo1 from "../img/website_logos-02.svg";
import coverImg from "../img/OKC_Gif.gif"
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
                                <img src={DesignLogo1} className="project-logo-design" style={{ width: '200px' }}></img>

                                <p className="project-title">Experiential Design</p>
                                <p className="project-text">The OKC Thunder Kid's Zone is a place for kids to enjoy interactive games and activities during breaks in the Thunder's games.
What started as a graphic refresh turned into an exciting opportunity to engage fans and reinforce brand sponsorships.
<p>
                                        Our solution was comprehensive - from updated graphics, to revised circulation patterns, to completely rethought interactive
                                        experiences. Most importantly, we delivered new value to the sponsors and created memorable experiences that will keep
                                        fans talking and coming back game after game.
</p>

                                </p>
                                <IconContext.Provider value={{ size: '16px', style: { verticalAlign: 'middle' } }} >
                                    <a className="readmore" href="https://c-sandlin.myportfolio.com/okc-thunder-kids-zone-experiential-design" target="_blank">View Project <FiArrowRightCircle /></a>
                                </IconContext.Provider>


                            </div>


                        </div>
                        <div className="project-img-container" onClick={() => window.open("https://c-sandlin.myportfolio.com/okc-thunder-kids-zone-experiential-design", "_blank")}>
                            <div className="overlay">
                                <div className="overlay-txt">Click to view project on Behance</div>
                            </div>
                            <img src={coverImg} className="project-thumb"></img>

                        </div>

                    </div>
                </section >
            </ScrollAnimation >
        )
    }

}