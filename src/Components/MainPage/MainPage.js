import React from "react";
import {Wrapper, Navbar, Content} from "./MainPage.style";
import {Link} from "react-router-dom"

export default function MainPage(){
    return (
        <Wrapper>
                <Navbar>
                    <span className="white-circle"></span>
                    <menu>
                        <ul>
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
                <header>
                    Front-end Developer
                </header>
                <p>
                    Hello, World! I’m Indira. I live in Kazakhstan and work
                    as a frontend developer.
                </p>
                <Link to="/aboutme"><button>About me</button></Link>
            </Content>
        </Wrapper>
    )
}