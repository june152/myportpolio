import React, { useEffect } from "react";
import Logo from '../components/common/Logo';
import INFO from '../data/user';
import "./styles/certificates.css"
import { MyCerts } from "../data/Certificates";
import CertificateItem from "../components/certificates/certificate";

const Certificates = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
	}, []);

    return (
        <React.Fragment>
            <div className="page-content">
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
                                {MyCerts.map((myCert, idx) => (
                                    <div
										className="certificates-article"
										key={idx}
									>
										<CertificateItem
											key={idx}
											date={myCert.date}
											title={myCert.title}
											description={myCert.description}
											link={"/viewcert/" + (idx+ 1)}
										/>
									</div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
};

export default Certificates;