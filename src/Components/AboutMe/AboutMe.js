import React from "react";
import {Wrapper, Content, About, Menu} from "./AboutMe.style";
import girl from "../../assets/girl.png";
import close from "../../assets/close.svg";
import linkedin from "../../assets/linkedin.svg";
import github from "../../assets/github.svg";
import email from "../../assets/email.svg";
import {Link} from "react-router-dom";


export default function AboutMe(){
    return (
        <Wrapper>
            <Content>
                <div>
                    <img src={girl} width={600}alt=""/>
                </div>
                <About>
                    <div className="header">
                        <h1>About Me.</h1>
                        <span className="red-square"></span>
                    </div>
                    <p>
                        I am Kabdoldina Indira, being originated from Central Asia, Kazakhstan.
                        I describe myself as a passionate developer who loves coding, solving and overcoming challenges.
                        My experience includes building different kinds of websites, projects such as developing commericial
                        chat, architecturing ERP system, and creating management dashboards and platforms. I like to discover
                        new technologies and find new ways to grow as a professional developer.
                    </p>
                </About>
                <Menu>
                    <span>
                        <Link to="/"><img src={close} width={30} height={30} alt=""/></Link>
                    </span>
                    <span className="line"></span>
                    <div className="sns">
                        <img src={linkedin} width={40} height={40} alt=""/>
                        <img src={github} width={40} height={40} alt=""/>
                        <img src={email} width={40} height={40} alt=""/>
                    </div>
                </Menu>
            </Content>
        </Wrapper>
    )
}