import React, { Component } from "react";
import { IconContext } from 'react-icons';
import { FaGithub, FaLinkedinIn, FaDribbble, FaBehance } from 'react-icons/fa';
import { MdMailOutline } from 'react-icons/md'
import { FiGithub } from 'react-icons/fi'
import '../styles/nav.css';
import ScrollAnimation from 'react-animate-on-scroll';

export default class SideNav extends Component {

    render() {
        return (

            <ScrollAnimation animateIn='fadeIn' duration={5} className="sidenav-container">
                {/* <nav className="sidenav-container"> */}
                <div className="sidenav-links-container">
                    <IconContext.Provider value={{ size: '1em', color: '#2f3b44' }}>
                        <a href="mailto:csandlin010@gmail.com"><MdMailOutline /></a>
                    </IconContext.Provider>
                    <IconContext.Provider value={{ size: '1em', color: '#2f3b44' }}>
                        <a href="http://www.github.com/c-sandlin" target="_blank"><FiGithub /></a>
                    </IconContext.Provider>
                    <IconContext.Provider value={{ size: '.8em', color: '#2f3b44' }}>
                        <a href="http://www.linkedin.com/in/c-sandlin" target="_blank"><FaLinkedinIn /></a>
                    </IconContext.Provider>
                    <IconContext.Provider value={{ size: '.9em', color: '#2f3b44' }}>
                        <a href="https://c-sandlin.myportfolio.com/" target="_blank"><FaBehance /></a>
                    </IconContext.Provider>
                </div>
                {/* </nav> */}
            </ScrollAnimation>
        )
    }
}