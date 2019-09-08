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
                        For the past five years, I led design teams that created dynamic installations and powerful user experiences for clients such as the Dallas Cowboys and Stanford University. Many of these projects required collaboration with developers, and my interest in coding and UX design was piqued. Specifically, I enjoyed researching user needs, interviewing stakeholders, and digging deep into issues to find the root problem and important storylines.
                    </p>
                    <p>
                        At the end of 2018, I left my job as a designer to begin preparing for my education at Nashville Software School. As a student, I have embraced the attitude of constant learning and love that I am now fluent in both design and development - I pride myself on being the intermediary between code and the user’s experience. In my free time, you can find me hiking, mountain biking, or searching for the next cup of coffee with my wife.
                    </p>
                </section>
                <div className="divider"></div>
                <section className="resume-container">
                    <a href={PDF} target="_blank">Download Resume</a>
                </section>
                <section className="aboutme-links">
                    <IconContext.Provider value={{ size: '20.8px', padding: '100px' }}>
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