import React from "react";
import {Wrapper, Content} from "./MyJourney.style";
import {Link} from "react-router-dom";
import {Navbar} from "../MainPage/MainPage.style";

export default function MyJourney() {
    return (
        <Wrapper>
            <Navbar>
                <span className="white-circle"></span>
                <menu>
                    <ul>
                        <Link to="/"><li>Main</li></Link>
                        <Link to="/resume"><li>Resume</li></Link>
                        <li>MyJourney</li>
                        <Link to="/projects">
                            <li>Projects
                                <span className="white-circle red-cirlce"></span>
                            </li></Link>
                    </ul>
                </menu>
            </Navbar>
            <Content>
                coming soon...
            </Content>
        </Wrapper>
    )
}