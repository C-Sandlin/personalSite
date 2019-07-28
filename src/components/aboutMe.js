import React, { Component } from "react";
import '../styles/aboutme.css'
// import Profile01 from "../img/Profile01.jpg";
import Profile02 from "../img/TreCime-19.jpg";
import { IconContext } from 'react-icons';
import { FaGithub, FaLinkedinIn, FaDribbble, FaBehance } from 'react-icons/fa';
import { MdMailOutline } from 'react-icons/md'
import { FiGithub, FiChevronUp, FiDownloadCloud } from 'react-icons/fi'
import PDF from "../files/Colin_Sandlin_Resume.pdf";

export default class AboutMe extends Component {

    render() {
        return (
            <div className="aboutme-container">
                <section className="img-container">
                    <img src={Profile02} className="profile02"></img>
                    {/* <img src={Profile01} className="profile01"></img> */}
                </section>
                <section className="txt-container">
                    <h2>About Me</h2>
                    <p>
                        I am a Full-stack Developer, but I first became an Industrial Designer because I love creative problem solving - digging deep into issues to find solutions that make people’s lives better. For five years, my teams worked with developers to create dynamic installations for clients such as the Dallas Cowboys, Stanford University, and Mailchimp, and my interest in coding was piqued.
                    </p>
                    <p>
                        That experience motivated me to pivot my career and become a developer. At the end of 2018, I left my job as a designer to begin preparing for my education at Nashville Software School. As a student, I have embraced the attitude of constant learning and have found a career that I get excited about every day. My passion for creative problem solving still drives me forward, the only difference is, now I can find solutions using code. In my free time, you can find me hiking, mountain biking, or searching for the next cup of coffee with my wife.
                    </p>
                </section>
                <div className="divider"></div>
                <section className="resume-container">
                    <a href={PDF} target="_blank">Download Resume</a>
                </section>
                <section className="aboutme-links">
                    <IconContext.Provider value={{ size: '1.3rem', padding: '100px' }}>
                        <a href="mailto:csandlin010@gmail.com" className="am-tooltip">
                            <span className="am-tooltiptext">Email</span>
                            <MdMailOutline />
                        </a>
                        <a href="http://www.github.com/c-sandlin" target="_blank" className="am-tooltip">
                            <span className="am-tooltiptext">Github</span>
                            <FaGithub />
                        </a>
                        <a href="http://www.linkedin.com/in/c-sandlin" target="_blank" className="am-tooltip">
                            <span className="am-tooltiptext">Linkedin</span>
                            <FaLinkedinIn />
                        </a>
                        <a href="https://c-sandlin.myportfolio.com/" target="_blank" className="am-tooltip">
                            <span className="am-tooltiptext">Portfolio</span>
                            <FaBehance />
                        </a>
                    </IconContext.Provider>
                </section>
            </div>
        )
    }
}