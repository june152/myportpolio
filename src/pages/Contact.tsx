import React, { useEffect } from "react";
import NavBar from '../components/common/NavBar';
import Footer from '../components/common/Footer';
import Logo from '../components/common/Logo';

import "./styles/contact.css";
import Socials from "../components/about/Socials";
import INFO from "../data/user";

const Contact = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
	}, []);

    return (
        <React.Fragment>
            <div className="page-content">
                <NavBar active="contact" />
                <div className="content-wrapper">
                    <div className="contact-logo-container">
						<div className="contact-logo">
							<Logo width={46} />
						</div>
                    </div>
                    
                    <div className="contact-container">
                        <div className="title contact-title">
							아래는 저의 연락처입니다! :)
                        </div>
                        
                        <div className="subtitle contact-subtitle">
                            이메일 : <a href={`mailto:${INFO.main.email}`}>
								{INFO.main.email}
                            </a><br />
                            연락처 : 010-6719-7942
                        </div>
                    </div>

                    <div className="socials-container">
                        <div className="contact-socials">
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

export default Contact;