import React, { useEffect, useState } from 'react';
import "./styles/homepage.css";
import INFO from "../data/user";
import NavBar from '../components/common/NavBar';
import Logo from '../components/common/Logo';
import { faMailBulk } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faGithub,
} from "@fortawesome/free-brands-svg-icons";
import Footer from '../components/common/Footer';
import AllProjects from '../components/projects/AllProjects';
import Works from '../components/homepage/Works';
import GetOut from "../assets/증빙6.jpeg"

export interface LogoStyle {
    display: string,
    position: string,
    top: string,
    zIndex: string,
    border: string,
    borderRadius: string,
    boxShadow: string,
}

const Homepage = () => {
    const [stayLogo, setStayLogo] = useState(false);
	const [logoSize, setLogoSize] = useState(80);
    const [oldLogoSize, setOldLogoSize] = useState(80);
    
    useEffect(() => {
		window.scrollTo(0, 0);
    }, []);
    
    useEffect(() => {
		const handleScroll = () => {
			let scroll = Math.round(window.scrollY);

			let newLogoSize = 80 - (scroll * 4) / 10;

			if (newLogoSize < oldLogoSize) {
				if (newLogoSize > 40) {
					setLogoSize(newLogoSize);
					setOldLogoSize(newLogoSize);
					setStayLogo(false);
				} else {
					setStayLogo(true);
				}
			} else {
				setLogoSize(newLogoSize);
				setStayLogo(false);
			}
		};

		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
    }, [logoSize, oldLogoSize]);
    
    const logoStyle:LogoStyle = {
		display: "flex",
		position: stayLogo ? "fixed" : "relative",
		top: stayLogo ? "3vh" : "auto",
		zIndex: "999",
		border: stayLogo ? "1px solid white" : "none",
		borderRadius: stayLogo ? "50%" : "none",
		boxShadow: stayLogo ? "0px 4px 10px rgba(0, 0, 0, 0.25)" : "none",
	};

    return (
        <React.Fragment>
           <div className="page-content">
                <NavBar active="home" />
                <div className='content-wrapper'>
                    <div className="homepage-logo-container">
                        <div style={logoStyle}>
                            <Logo width={logoSize} link={false} />
                        </div>
                    </div>

                    <div className="homepage-container">
                        <div className="homepage-first-area">
                            <div className="homepage-first-area-left-side">
                                <div className="title homepage-title">
									{INFO.homepage.title}
								</div>

								<div className="subtitle homepage-subtitle">
									{INFO.homepage.description}
								</div>
                            </div>

                            <div className="homepage-first-area-right-side">
								<div className="homepage-image-container">
									<div className="homepage-image-wrapper">
										<img
											src={GetOut}
											alt="about"
											className="homepage-image"
										/>
									</div>
								</div>
                            </div>
                        </div>

                        <div className="homepage-socials">
                            <a
                                href={INFO.socials.github}
                                target="_blank"
                                rel="noreferrer"
                            >
                                <FontAwesomeIcon
                                    icon={faGithub}
                                    className="homepage-social-icon"
                                />
                            </a>
                            <a
                                href={`mailto:${INFO.main.email}`}
                                target="_blank"
                                rel="noreferrer"
                            >
                                <FontAwesomeIcon
                                    icon={faMailBulk}
                                    className="homepage-social-icon"
                                />
                            </a>
                        </div>
                        
                        <div className="homepage-projects">
							<AllProjects />
                        </div>

                        <div className="homepage-works">
                            <Works />
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

export default Homepage;