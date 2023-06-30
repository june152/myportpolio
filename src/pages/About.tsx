import React, { useEffect } from 'react';
import NavBar from '../components/common/NavBar';
import Footer from '../components/common/Footer';
import Logo from '../components/common/Logo';
import INFO from '../data/user';
import Socials from '../components/about/Socials';

import "./styles/about.css";

const About = () => {
    useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

    return (
        <React.Fragment>
            <div className="page-content">
                <NavBar active="about" />
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

								<div className="subtitle about-subtitle">
                                    <strong>학력 : </strong>{INFO.about.description.education}<br />
                                    <strong>교육 : </strong>{INFO.about.description.etc}<br />
                                    <br />
                                    <strong>어학 : </strong>{INFO.about.description.language}<br />
                                    <strong>자격 : </strong>{INFO.about.description.cert}<br />
                                    <br />
                                    <strong>경력 사항</strong><br />
                                    <br />
                                    {INFO.about.description.career.map((item) => (
                                        <>
                                            <strong>기업명 : </strong>{item.companyNo}<br />
                                            <strong>재직기간 : </strong>{item.period}<br />
                                            <strong>담당업무 : </strong>{item.position}<br />
                                            <br />
                                        </>
                                    ))}
								</div>
                            </div>

                            <div className="about-left-side">
                                <div className="about-image-container">
									<div className="about-image-wrapper">
										<img
											src="about.jpg"
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

                   <div className="page-footer">
                        <Footer />
                    </div> 
                </div>

            </div> 
        </React.Fragment>
    );
};

export default About;