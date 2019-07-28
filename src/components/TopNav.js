import React, { Component } from "react";
import { NavLink } from 'react-router-dom'
import linearLogo from "../img/Colin-Branding-04.svg"
import { Link, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll';
import "../styles/nav.css";

export default class TopNav extends Component {

    render() {
        return (
            <nav className="topnav-container">
                <div className="logo-container">
                    <NavLink to="/">
                        <img className="main-logo" />
                    </NavLink>
                </div>
                <div className="links-container">
                    <NavLink to="/" className="link-item" activeClassName="currentLink">Home</NavLink>
                    {/* <Link className="link-item" to="regulate" smooth={true} duration={500}>Projects</Link>
                    <Link className="link-item" to="technologies" smooth={true} duration={500}>Tech Stack</Link> */}
                    <NavLink to="/aboutme" className="link-item" activeClassName="currentLink">Profile</NavLink>
                </div>
            </nav >
        )
    }
}