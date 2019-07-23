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
import Regulate1 from "../img/Regulate-Thumb.jpg"
import { IoIosArrowRoundForward, IoIosArrowRoundBack } from "react-icons/io"
import { DiHtml5, DiCss3, DiReact, DiGithubBadge, DiJsBadge } from "react-icons/di"
import ScrollAnimation from 'react-animate-on-scroll';
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css';
import firebasesvg from '../img/firebase.svg';
import leafletsvg from '../img/Leaflet.svg';
import chartjssvg from '../img/chartjs.svg';
import momentjssvg from '../img/momentjs.svg';
import reactjssvg from '../img/reactjs_tiny.svg';
import herejssvg from "../img/herejs.svg";

const images = [
    'https://camo.githubusercontent.com/1b039f92a53a78cae7aabc86cf657efda7a32a8a/68747470733a2f2f666972656261736573746f726167652e676f6f676c65617069732e636f6d2f76302f622f636f6c696e732d63617073746f6e652d313535383536353236323734392e61707073706f742e636f6d2f6f2f53637265656e25323053686f74253230323031392d30372d3031253230617425323031302e30322e3537253230414d2e706e673f616c743d6d6564696126746f6b656e3d61396463636532662d643434332d343535362d623338632d376561656464303835373165',
    'https://camo.githubusercontent.com/6fb47a84a74e98a6dd98949ee5d3d3de7cf38f48/68747470733a2f2f666972656261736573746f726167652e676f6f676c65617069732e636f6d2f76302f622f636f6c696e732d63617073746f6e652d313535383536353236323734392e61707073706f742e636f6d2f6f2f53637265656e25323053686f74253230323031392d30372d30312532306174253230392e35342e3434253230414d2e706e673f616c743d6d6564696126746f6b656e3d39383534373237332d316631652d343639322d626131652d393234396161323366306432',
    'https://camo.githubusercontent.com/d836d6826e552cb67251d84418a2c526ce24f108/68747470733a2f2f666972656261736573746f726167652e676f6f676c65617069732e636f6d2f76302f622f636f6c696e732d63617073746f6e652d313535383536353236323734392e61707073706f742e636f6d2f6f2f53637265656e25323053686f74253230323031392d30372d30312532306174253230392e35352e3030253230414d2e706e673f616c743d6d6564696126746f6b656e3d62363932393139642d613661662d343366342d383163322d626661303837633036623235',
    'https://camo.githubusercontent.com/5ae019f4b5f30e3234e817a1d0e27f524793951e/68747470733a2f2f666972656261736573746f726167652e676f6f676c65617069732e636f6d2f76302f622f636f6c696e732d63617073746f6e652d313535383536353236323734392e61707073706f742e636f6d2f6f2f53637265656e25323053686f74253230323031392d30372d30312532306174253230392e35352e3135253230414d2e706e673f616c743d6d6564696126746f6b656e3d61636434386538662d663737652d343364382d626537652d653839356464366132373935',
    'https://camo.githubusercontent.com/ad1b6084300d61ceddcbb49f4c70cd5e64bd856e/68747470733a2f2f666972656261736573746f726167652e676f6f676c65617069732e636f6d2f76302f622f636f6c696e732d63617073746f6e652d313535383536353236323734392e61707073706f742e636f6d2f6f2f53637265656e25323053686f74253230323031392d30372d30312532306174253230392e35352e3331253230414d2e706e673f616c743d6d6564696126746f6b656e3d32393038633061362d393432622d346136642d616331332d313135373561613030616239',
    'https://camo.githubusercontent.com/5d619ae68866d2d9e320a212bdfeb9661490d7b4/68747470733a2f2f666972656261736573746f726167652e676f6f676c65617069732e636f6d2f76302f622f636f6c696e732d63617073746f6e652d313535383536353236323734392e61707073706f742e636f6d2f6f2f53637265656e25323053686f74253230323031392d30372d30312532306174253230392e35362e3231253230414d2e706e673f616c743d6d6564696126746f6b656e3d61326330626631352d323565652d346665382d613363362d333939623832393338626636'
];


export default class Regulate extends Component {

    state = {
        photoIndex: 0,
        isOpen: false,
    }

    render() {
        return (
            <ScrollAnimation animateIn='fadeIn' duration={2}>
                <section className="project-container" name="regulate">
                    <div className="project-inner-container">

                        <div className="project-txt-container">
                            <div className="project-actual-txt-container">
                                <img src={RegulateLogo1} className="project-logo"></img>
                                <p className="project-title">Frontend Capstone</p>
                                <p className="project-text">I created Regulate to help both clients and therapists as they work together to improve their mental health. My wife is a therapist and together we realized the need for an intuitive, intelligent application to help clients track data, recall coping techniques, and find support. Over time, this data can make a significant impact in how clients progress and manage their unique situations.</p>

                                <IconContext.Provider value={{ size: '1.5rem' }}>
                                    <a className="readmore" href="https://github.com/C-Sandlin/capstone-deployed" target="_blank">Read More on Github <IoIosArrowRoundForward style={{ marginBottom: '-8px' }} /></a>
                                </IconContext.Provider>

                                <div className="techs-container">
                                    <div className="techs-icons">
                                        <IconContext.Provider value={{ size: '1.6rem', style: { verticalAlign: 'middle' } }}>
                                            <p className="tooltip"><DiHtml5 className="techicon" /><span className="tooltiptext2">HTML5</span></p>
                                            <p className="tooltip"><DiCss3 className="techicon" /><span className="tooltiptext2">CSS3</span></p>
                                            <p className="tooltip"><DiJsBadge className="techicon" /><span className="tooltiptext2">Javascript</span></p>
                                            {/* <p className="tooltip"><DiReact id="reactjssvg" className="techicon" /><span className="tooltiptext2">ReactJs</span></p> */}
                                            <p className="tooltip"><img id="reactjs" className={["techicon", "colin-icon"].join(' ')} src={reactjssvg} alt="firebase logo"></img><span className="tooltiptext2">React Js</span></p>
                                            <p className="tooltip"><img className={["techicon", "colin-icon"].join(' ')} src={firebasesvg} alt="firebase logo"></img><span className="tooltiptext2">Firebase</span></p>
                                            <p className="tooltip"><img className={["techicon", "colin-icon"].join(' ')} src={leafletsvg} alt="firebase logo"></img><span className="tooltiptext2">Leaflet.js</span></p>
                                            <p className="tooltip"><img className={["techicon", "colin-icon"].join(' ')} src={chartjssvg} alt="firebase logo"></img><span className="tooltiptext2">Chart.js</span></p>
                                            <p className="tooltip"><img id="momentjs" className={["techicon", "colin-icon"].join(' ')} src={momentjssvg} alt="firebase logo"></img><span className="tooltiptext2">Moment.js</span></p>
                                            <p className="tooltip"><img id="momentjs" className={["techicon", "colin-icon"].join(' ')} src={herejssvg} alt="firebase logo"></img><span className="tooltiptext2">Here.js</span></p>
                                            <p className="tooltip"><IconContext.Provider value={{ size: '1.8rem', style: { verticalAlign: 'middle' } }}><DiGithubBadge id="github" className="techicon" /></IconContext.Provider><span className="tooltiptext2">Github</span></p>
                                        </IconContext.Provider>
                                    </div>
                                </div>
                            </div>

                        </div>
                        <div className="project-img-container" onClick={() => this.setState({ isOpen: true })}>
                            <div className="overlay">
                                <div className="overlay-txt">Click to view screenshots</div>
                            </div>
                            <img src={Regulate1} className="project-thumb"></img>

                            {this.state.isOpen && (
                                <Lightbox
                                    imagePadding={50}
                                    mainSrc={images[this.state.photoIndex]}
                                    nextSrc={images[(this.state.photoIndex + 1) % images.length]}
                                    prevSrc={images[(this.state.photoIndex + images.length - 1) % images.length]}
                                    onCloseRequest={() => this.setState({ isOpen: false })}
                                    onMovePrevRequest={() =>
                                        this.setState({
                                            photoIndex: (this.state.photoIndex + images.length - 1) % images.length,
                                        })
                                    }
                                    onMoveNextRequest={() =>
                                        this.setState({
                                            photoIndex: (this.state.photoIndex + 1) % images.length,
                                        })
                                    }
                                />
                            )}
                        </div>

                    </div>
                </section>
            </ScrollAnimation>
        )
    }

}