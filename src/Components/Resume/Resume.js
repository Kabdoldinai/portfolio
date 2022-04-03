import React from "react";
import {Navbar} from "../MainPage/MainPage.style";
import {Wrapper, Content, Line, Description, Experience, Jobs, Menu, Ml} from "../Resume/Resume.style";
import {Link} from "react-router-dom";
import kaspi from "../../assets/kaspi.svg"
import cube from "../../assets/Cube.svg"
import stallions from "../../assets/Stallions.svg"
import asiafreight from "../../assets/AsiaFreight.svg"
import slexn from "../../assets/SLEXN.svg"
import university from "../../assets/university.svg"
import skills from "../../assets/skills.svg";
import education from "../../assets/education.svg";
import download from "../../assets/download.svg";

export default function Resume() {
    return(
        <Wrapper>
            <Navbar>
                <span className="white-circle"></span>
                <menu>
                    <ul>
                        <Link to="/"><li>Main</li></Link>
                        <Link to="/myjourney"><li>MyJourney</li></Link>
                        <Link to="/projects">
                            <li>Projects
                                <span className="white-circle red-cirlce"></span>
                            </li></Link>
                    </ul>
                </menu>
            </Navbar>
            <Content>
                <Description>
                    <h1>
                        KABDOLDINA INDIRA
                    </h1>
                    <Line></Line>
                    <p>
                        Front-end developer with 2 years of experience working on building and maintaining web applications.
                        freeCodeCamp certified. Working at top Fin-tech company, and volunteering in Malaysian  startup.
                    </p>
                </Description>
                <Experience>
                    <Jobs>
                        <h2>
                            Experience
                        </h2>
                        <div className="block">
                            <div><img src={kaspi} width={30} height={30} alt=""/></div>
                            <div className="description">
                                <span className="title">Software Developer</span>
                                <p>Kaspi.kz ` Full-time</p>
                                <p>Jul 2021 - Present ` 9months <br/> Almaty, Kazakhstan </p>
                                <span>
                                    - Maintenance of Siebel CRM Application <br/>
                                    - Development of local Chat System for Call Center <br/>
                                    - Java Backend experience <br/>
                                    - Used technologies JavaScript, jQuery, Ajax, Fetch, EAI HTTP Transport, VueJS, Java, Unit Test (JUnit Framework) <br/>
                                    - PL/SQL <br/>
                                    - Version Control: Bitbucket <br/>
                                    - Collaboration with the team <br/>
                                </span>
                            </div>
                        </div>

                        <div className="block">
                            <div><img src={cube} width={30} height={30} alt=""/></div>
                            <div className="description">
                                <span className="title">Software Developer</span>
                                <p>Cube ERP ` Full-time</p>
                                <p>Sep 2020 - Aug 2021 ` 1year <br/> Almaty, Kazakhstan </p>
                                <span>
                                    - Worked on backend project, using Go <br/>
                                    - Created a new module (designing architecture, making it user-friendly) <br/>
                                    - Wrote MSSQL queries
                                    - Created interface by using ReactJS
                                </span>
                            </div>
                        </div>

                        <div className="block">
                            <div><img src={asiafreight} width={30} height={200} alt=""/></div>
                            <div className="description">
                                <span className="title">Frontend Developer</span>
                                <p>AsiaFreight ` Full-time</p>
                                <p>Nov 2020 - Jul 2021 ` 9month<br/> Almaty, Kazakhstan </p>
                                <span>
                                    - Designed and constructed web user interfaces and visual elements used in online applications. <br/>
                                    - Maintained production applications, using PHP for Back-end, writing PostgreSQL functions, and using frameworks: VueJS, ReactJS <br/>
                                    - Collaborated with designers and software engineers to ensure design vision was maintained <br/>
                                    - Developed understanding of REST API <br/>
                                    - Worked with Git: init, add, commit, push, checkout, stashing and etc. <br/>
                                    - Worked with the package managers: npm, yarn
                                </span>
                            </div>
                        </div>

                        <div className="block">
                            <div><img src={stallions} width={30} height={200} alt=""/></div>
                            <div className="description">
                                <span className="title">Frontend Developer</span>
                                <p>Stallions Tech Labs Private Ltd ` Internship</p>
                                <p>Jul 2020 - Sep 2020 ` 4month<br/> Almaty, Kazakhstan </p>
                                <span>
                                  - Used  HTML web design and usability skills to create a great user experience. <br/>
                                  - Supported sites by updating templates and producing additional functional components. <br/>
                                  - Designed new components.
                                </span>
                            </div>
                        </div>

                        <div className="block">
                            <div><img src={slexn} width={30} height={200} alt=""/></div>
                            <div className="description">
                                <span className="title">Sales Manager</span>
                                <p>ArchitectGroup  ` Full-time</p>
                                <p>Feb 2019 - Mar 2020 ` 1year 2months <br/> Almaty, Kazakhstan </p>
                                <span>
                                    - Supported website content: https://gitpossible.com/ <br/>
                                    - Managed sales negotiations with foreign partners. <br/>
                                    - Worked with Senior Developers to conduct software trainings in<br/>
                                    Samsung, LG Electronics Inc for engineers.<br/>
                                    - Participated in IT events & conferences.<br/>
                                    - Provided technical and written translations from English to Korean
                                    and vice versa.
                                </span>
                            </div>
                        </div>

                        <h2>Education</h2>
                        <div className="block">
                            <div className="university"><img src={university} width={40} height={40} alt=""/></div>
                            <div className="description">
                                <p>March 2015 - February 2019</p>
                                <p>Pusan National University, South Korea. <br/>
                                    International Relations & Computer Science </p>
                            </div>
                        </div>
                        <h2>SKILLS</h2>
                        <div className="block">
                            <div className="university"><span>Languages</span></div>
                            <div className="skills">
                                <Ml>
                                    <p>- JavaScript</p>
                                    <p>- HTML5 </p>
                                    <p>- CSS3 </p>
                                </Ml>
                                <div className="description">
                                    <p>- TypeScript</p>
                                    <p>- Java</p>
                                    <p>- SASS</p>
                                </div>

                            </div>
                            <div>
                            </div>
                        </div>
                        <div className="block">
                            <div className="university"><span>Technologies</span></div>
                            <div className="skills">
                                <div>
                                    <p>- ReactJS</p>
                                    <p>- Bootstrap </p>
                                </div>
                                <div className="description">
                                    <p>- VueJS</p>
                                    <p>- jQuery</p>
                                </div>
                            </div>
                            <div>
                            </div>
                        </div>
                    </Jobs>
                    <Menu>
                        <span className="line"></span>
                        <div className="sns">
                            <img src={skills} width={80} height={80} alt=""/>
                            <img src={education} width={80} height={80} alt=""/>
                            <img src={download} width={80} height={80} alt=""/>
                        </div>
                    </Menu>
                </Experience>
            </Content>

        </Wrapper>
    )
}