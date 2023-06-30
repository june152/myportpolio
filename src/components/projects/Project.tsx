import React from 'react';
import "./styles/project.css";
import {
	Link,
} from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLink } from "@fortawesome/free-solid-svg-icons";

export interface ProjectProps {
    logo: string,
    link: string,
    title: string,
    description: string,
    linkText: string,
}

const Project = (props: ProjectProps) => {
    const { logo, title, description, linkText, link } = props;

    return (
        <React.Fragment>
			<div className="project">
				<Link to={link}>
					<div className="project-container">
						<div className="project-logo">
							<img src={logo} alt="logo" />
						</div>
						<div className="project-title">{title}</div>
						<div className="project-description">{description}</div>
						<div className="project-link">
							<div className="project-link-icon">
								<FontAwesomeIcon icon={faLink} />
							</div>

							<div className="project-link-text">{linkText}</div>
						</div>
					</div>
				</Link>
			</div>
		</React.Fragment>
    );
};

export default Project;