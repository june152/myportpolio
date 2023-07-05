import React, { ReactNode } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { CertType } from '../../data/Certificates';
import { Link } from "react-router-dom";
import "./styles/certificate.css"

export class CertProps {
    constructor(
        public date: string,
        public title: string,
        public description: string,
        public link: string,
    ) {}
}

const CertificateItem = (props: CertProps) => {
    const { date, title, description, link } = props;

    return (
        <React.Fragment>
			<div className="certificate">
				<div className="certificate-left-side">
					<div className="certificate-date">{date}</div>
				</div>

                <Link to={link}>
                    <div className="certificate-right-side">
                        <div className="certificate-title">{title}</div>
                        <div className="certificate-description">{description}</div>
                        <div className="certificate-link">
                            View Certificate{" "}
                            <FontAwesomeIcon
                                style={{ fontSize: "10px" }}
                                icon={faChevronRight}
                            />
                        </div>
                    </div>
                </Link>
                
			</div>
		</React.Fragment>
    );
};

export default CertificateItem;