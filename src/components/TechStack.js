import React, { Component } from "react";
import '../styles/techstack.css'
import HTML5 from "../img/HTML5.svg"
import CSS3 from "../img/CSS3.svg"
import JS from "../img/JS.svg"
import ReactJS from "../img/ReactJS.svg"
import CSharp from "../img/CSharp.svg"
import DotNet from "../img/DotNet.svg"
import ScrollAnimation from 'react-animate-on-scroll';


export default class TechStack extends Component {

    render() {
        return (
            <ScrollAnimation animateIn='fadeIn' className="techstack-container" duration={2}>

                <div className="ts-title">
                    <h2>Technologies</h2>
                </div>
                <div className="ts-logos">
                    <div className="ts-logos-item">
                        <img src={HTML5} ></img>
                        <p>HTML 5</p>
                    </div>
                    <div className="ts-logos-item">
                        <img src={CSS3} ></img>
                        <p>CSS 3</p>
                    </div>
                    <div className="ts-logos-item">
                        <img src={JS} ></img>
                        <p>Javascript</p>
                    </div>
                    <div className="ts-logos-item">
                        <img src={ReactJS} ></img>
                        <p>React JS</p>
                    </div>
                    <div className="ts-logos-item">
                        <img src={CSharp} ></img>
                        <p>C#</p>
                    </div>
                    <div className="ts-logos-item">
                        <img src={DotNet} ></img>
                        <p>.NET</p>
                    </div>
                </div>
            </ScrollAnimation>
        )
    }
}