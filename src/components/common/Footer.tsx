import React from 'react';
import {
  useNavigate,
} from "react-router-dom";

import "./styles/footer.css";

const Footer = ({handleModalToggle}: {handleModalToggle : Function}) => {
    const navigate = useNavigate();

    return (
        <React.Fragment>
			<div className="footer">
				<div className="footer-links">
					<ul className="footer-nav-link-list">
						<li className="footer-nav-link-item">
							<a href='#' onClick={() => navigate("/home")}>Home</a>
                        </li>
                        <li className="footer-nav-link-item">
							<a href='#' onClick={() => navigate("/about")}>About</a>
                        </li>
                        <li className="footer-nav-link-item">
							<a href='#' onClick={() => navigate("/projects")}>Projects</a>
                        </li>
                        <li className="footer-nav-link-item">
							<a href='#' onClick={() => navigate("/certificates")}>Certificates</a>
                        </li>
                        <li className="footer-nav-link-item">
							<a style={{ cursor: "pointer" }} onClick={() => handleModalToggle(true)}>Contact</a>
						</li>
					</ul>
				</div>

				{/* <div className="footer-credits">
					<div className="footer-credits-text">
						© 2023 Tharindu.dev. All Rights Reserved.
					</div>
				</div> */}
			</div>
		</React.Fragment>
    );
};

export default Footer;