import React from 'react';
import { faBriefcase } from "@fortawesome/free-solid-svg-icons";
import "./styles/works.css";
import Card from '../common/Card';

const Works = () => {
    return (
        <div className="works">
			<Card
				icon={faBriefcase}
				title="Work"
				body={
					<div className="works-body">
						<div className="work">
							<img
								src="./facebook.png"
								alt="facebook"
								className="work-image"
							/>
							<div className="work-title">(주)인포렉스</div>
							<div className="work-subtitle">
								front-end
							</div>
							<div className="work-duration">2022.07 - 2022.11</div>
						</div>

						<div className="work">
							<img
								src="./twitter.png"
								alt="twitter"
								className="work-image"
							/>
							<div className="work-title">(주)엔유비즈</div>
							<div className="work-subtitle">
								front-end
							</div>
							<div className="work-duration">2023.02 - Present</div>
						</div>
					</div>
				}
			/>
		</div>
    );
};

export default Works;