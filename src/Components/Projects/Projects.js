import {Wrapper, Content} from "./Projects.style";
import {Link} from "react-router-dom";
import {Navbar} from "../MainPage/MainPage.style";
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import insta from "../../assets/insta.png";

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
                <Swiper
                    spaceBetween={30}
                    centeredSlides={true}
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
                        <a target="_blank" href="https://github.com/Kabdoldinai/instagram_clone"><img src={insta} alt=""/></a>
                        <span>Insta Clone project, used NextJS && Tailwind</span>
                    </SwiperSlide>
                </Swiper>
            </Content>
        </Wrapper>
    )

}