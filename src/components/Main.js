import React, { Component } from "react";
import { NavLink } from 'react-router-dom'
import { IoIosArrowRoundForward, IoIosArrowRoundBack } from "react-icons/io"
import { IconContext } from 'react-icons';
import * as Scroll from 'react-scroll';
import { Link, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll';
import RegulateLogo from "../img/RegulateLogo.svg";
import { DiHtml5, DiCss3, DiReact, DiGithubBadge } from "react-icons/di"
import Footer from "./Footer.js";
import Regulate from "./Regulate.js";
import Nutshell from "./Nutshell.js";
import TechStack from "./TechStack.js";
import SideNav from "./SideNav.js";
import UX from "./UX.js"
import "../styles/index.css";
import "../styles/main.css";
import "../styles/nav.css";
import "../styles/nutshell.css";
import "../styles/regulate.css";
import "../styles/technologies.css";
import "../styles/footer.css";
import ScrollAnimation from 'react-animate-on-scroll';



export default class Main extends Component {

    render() {
        return (

            <div className="overall-page">
                <SideNav />
                <div className="main-container">
                    <ScrollAnimation animateIn='fadeInUp' className="landing-container" name="landing" delay={500} initiallyVisible={false} animateOnce={true}>
                        <div className="tagline-container">
                            <h1> I'm a Full-Stack Developer with a background in creative problem solving.</h1>
                            <IconContext.Provider value={{ size: '20.8px' }}>
                                <NavLink className="readmore" to="/aboutme">Contact Me <IoIosArrowRoundForward style={{ marginBottom: '-8px' }} /></NavLink>
                            </IconContext.Provider>
                        </div>

                        <ScrollAnimation animateIn='rubberBand' className="scroll-container" delay={3000} initiallyVisible={true}>
                            <Link id="scroll-arrow" to="regulate" smooth={true} duration={500}><IoIosArrowRoundBack style={{ marginBottom: '-2px', marginRight: '10px' }} />
                                Projects
                        </Link>
                        </ScrollAnimation>
                    </ScrollAnimation>

                    <Regulate />
                    <Nutshell />
                    <UX />
                    <TechStack />

                    <Footer />
                </div>
            </div >

        )
    }
}