import React, { Component } from "react";
import '../styles/aboutme.css'
// import Profile01 from "../img/Profile01.jpg";
import Profile02 from "../img/Profile02.jpg";
import { IconContext } from 'react-icons';
import { FaGithub, FaLinkedinIn, FaDribbble, FaBehance } from 'react-icons/fa';
import { MdMailOutline } from 'react-icons/md'
import { FiGithub, FiChevronUp, FiDownloadCloud } from 'react-icons/fi'

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
                    <h5>By Day</h5>
                    <p>
                        I first became an Industrial Designer because I love creative problem solving. Specifically, I love the user research and design process - digging deep into issues to find solutions that would make people’s lives better.
                    </p>
                    <p>
                        For a little over five years, I worked for two exciting design firms delivering creative solutions through physically and digitally interactive environments. I worked with exciting clients such as the Dallas Cowboys, Stanford University, and MailChimp. On several of these projects, my team worked with developers to create powerful, dynamic installations. My interest in coding was piqued with the realization that a few lines of code could do some pretty cool things.
                    </p>
                    <p>
                        That experience, along with the opportunities available in the development world, motivated me to pivot my career path towards becoming a developer. At the end of 2018, I left my job as a designer to begin preparing for my education at Nashville Software School. As a student, I have embraced the attitude of constant learning and have found a career that I get excited about every day. My passion for creative problem solving still drives me forward, the only difference is, now I can find solutions using code.
                    </p>
                    <h5>In my free time</h5>
                    <p>
                        You can find me hiking, mountain biking, camping, or trying a new recipe with my wife. We also love to take road trips and search for the perfect cup of coffee.
                    </p>
                </section>
                <div className="divider"></div>
                <section className="resume-container">
                    <button>Download Resume</button>
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