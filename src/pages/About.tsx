import React, { useEffect } from 'react';
import NavBar from '../components/common/NavBar';
import Footer from '../components/common/Footer';
import Logo from '../components/common/Logo';
import INFO from '../data/user';
import Socials from '../components/about/Socials';
import MyPicture from '../assets/hjp.jpg'

import "./styles/about.css";
import Education from '../components/homepage/Education';
import CertCards from '../components/homepage/CertCards';
import Works from '../components/homepage/Works';
import Skills from '../components/homepage/Skills';
import Escape from "../assets/증빙7.jpeg"

const About = () => {
    useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

    return (
        <React.Fragment>
            <div className="page-content">
                <div className='content-wrapper'>
                    <div className="about-logo-container">
						<div className="about-logo">
							<Logo width={46} />
						</div>
                    </div>
                    
                    <div className="about-container">
                        <div className="about-main">
                            <div className="about-right-side">
                                <div className="title about-title">
									{INFO.about.title}
								</div>

								{/* <div className="subtitle about-subtitle">
                                    <strong>학력 : </strong>{INFO.about.description.education}<br />
                                    <strong>교육 : </strong>{INFO.about.description.etc}<br />
                                    <br />
                                    <strong>어학 : </strong>{INFO.about.description.language}<br />
                                    <strong>자격 : </strong>{INFO.about.description.cert}<br />
                                    <br />
                                    <br />
                                    <strong>경력 사항</strong><br />
                                    {INFO.about.description.career.map((item, idx) => (
                                        <p key={idx}>
                                            <strong>기업명 : </strong>{item.companyNo}<br />
                                            <strong>재직기간 : </strong>{item.period}<br />
                                            <strong>담당업무 : </strong>{item.position}<br />
                                            <br />
                                        </p>
                                    ))}
                                    <strong>기술 스택</strong><br />
                                    {INFO.about.description.stack.map((item, idx) => (
                                        <p key={idx}>
                                            <strong>{item.skillNm} : </strong>{item.level}<br />
                                        </p>
                                    ))}
                                </div> */}
                                <div className="about-works">
                                    <Education />
                                </div>
                                <div className="about-works">
                                    <CertCards />
                                </div>
                                <div className="about-works">
                                    <Works />
                                </div>
                                <div className="about-works">
                                    <Skills />
                                </div>
                            </div>

                            <div className="about-left-side">
                                <div className="about-image-container">
									<div className="about-image-wrapper">
										<img
											src={MyPicture}
											alt="about"
											className="about-image"
										/>
									</div>
                                </div>

								<div className="about-socials">
									<Socials />
								</div>
                            </div>
                        </div>
                        <div className="about-socials-mobile">
							<Socials />
						</div>
                    </div>
                </div>

            </div> 
        </React.Fragment>
    );
};

export default About;