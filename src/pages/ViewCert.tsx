import React, { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";
import NavBar from "../components/common/NavBar";
import Footer from "../components/common/Footer";
import Logo from "../components/common/Logo";

import "./styles/viewCert.css";
import { MyCerts } from "../data/Certificates";

let ArticleStyle = styled.div``;

const ViewCert = () => {
    const navigate = useNavigate();
    const { page } = useParams();

    const certItem = MyCerts[Number(page) - 1]

    useEffect(() => {
		window.scrollTo(0, 0);
    }, [certItem]);
    
    ArticleStyle = styled.div`
		${certItem.style}
	`;

    return (
        <React.Fragment>
            <div className="page-content">
                <NavBar />
                <div className="content-wrapper">
                    <div className="view-cert-logo-container">
                        <div className="view-cert-logo">
                            <Logo width={46} />
                        </div>
                    </div>

                    <div className="view-cert-container">
                        <div className="view-cert-back">
                            <img
								src="../back-button.png"
								alt="back"
								className="view-cert-back-button"
								onClick={() => navigate(-1)}
							/>
                        </div>

                        <div className="view-cert-wrapper">
                            <div className="view-cert-date-container">
                                <div className="view-cert-date">
                                    {certItem.date}
                                </div>
                            </div>

                            <div className="title view-cert-title">
                                {certItem.title}
                            </div>

                            <div className="view-cert-body">
                                <ArticleStyle>{certItem.body}</ArticleStyle>
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

export default ViewCert;