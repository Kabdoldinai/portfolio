import {Wrapper, Content} from "./Projects.style";
import {Link} from "react-router-dom";
import {Navbar} from "../MainPage/MainPage.style";
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import insta from "../../assets/insta.png";
import codepen from "../../assets/codepen.png";
import github from "../../assets/githib.png";
import codepenLogo from "../../assets/codepen.svg";
import {Menu} from '../../Components/Projects/Projects.style'


// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper";

export default function Projects() {
    return (
        <Wrapper>
            <Navbar>
                <span className="white-circle"></span>
                <menu>
                    <ul>
                        <Link to="/"><li>Main</li></Link>
                        <Link to="/resume"><li>Resume</li></Link>
                        <Link to="/myjourney"><li>MyJourney</li></Link>
                        <Link to="/projects">
                            <li>Projects
                                <span className="white-circle red-cirlce"></span>
                            </li></Link>
                    </ul>
                </menu>
            </Navbar>
            <Content>
                <div className="container">
                    <Swiper
                        spaceBetween={20}
                        centeredSlides={false}
                        autoplay={{
                            delay: 2900,
                            disableOnInteraction: false,
                        }}
                        pagination={{
                            clickable: true,
                        }}
                        navigation={true}
                        modules={[Autoplay, Pagination, Navigation]}
                        className="mySwiper"
                    >
                        <SwiperSlide>
                            <a target="_blank" href="https://github.com/Kabdoldinai/instagram_clone">
                                <img src={insta} alt=""/></a>
                            <span>Insta Clone project, used NextJS && Tailwind</span>
                            <a target="_blank" href="https://github.com/Kabdoldinai/instagram_clone">
                                <img className="git-logo" src={github} alt=""/>
                            </a>
                        </SwiperSlide>
                        <SwiperSlide>
                            <a target="_blank" href="https://codepen.io/kabdoldinai/pens/public">
                                <img className="codepen" src={codepen} alt=""/></a>
                            <span>Mini Projects that brought me joy, click to see the demo.</span>
                            <a target="_blank" href="https://codepen.io/kabdoldinai/pens/public">
                                <img className="git-logo" src={codepenLogo} alt=""/>
                            </a>
                        </SwiperSlide>

                    </Swiper>

                </div>
                <Menu>
                    <span className="line"></span>
                </Menu>
            </Content>
        </Wrapper>
    )

}