import React, { useEffect } from "react";
import NavBar from '../components/common/NavBar';
import Footer from '../components/common/Footer';
import Logo from '../components/common/Logo';
import INFO from '../data/user';
import "./styles/certificates.css"

const Certificates = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
	}, []);

    return (
        <React.Fragment>
            <div className="page-content">
                <NavBar active="certificates" />
                <div className="content-wrapper">
                    <div className="certificates-logo-container">
                        <div className="certificates-logo">
							<Logo width={46} />
						</div>
                    </div>

                    <div className="certificates-main-container">
                        <div className="title certificates-title">
							{INFO.certificates.title}
                        </div>
                        
                        <div className="subtitle certificates-subtitle">
							{INFO.certificates.description}
                        </div>
                        
                        <div className="certificates-container">
                            <div className="certificates-wrapper">

                            </div>
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

export default Certificates;