import React from 'react';
import { faCode } from "@fortawesome/free-solid-svg-icons";
import "./styles/works.css";
import Card from '../common/Card';
import JavaScriptIcon from "../../assets/javascript.png"
import JavaIcon from "../../assets/java.png"
import TypeScriptIcon from "../../assets/typescript.png"
import ReactIcon from "../../assets/react.png"
import PythonIcon from "../../assets/python.png"

const Skills = () => {
    return (
        <div className="works">
			<Card
				icon={faCode}
				title="Skills"
				body={
					<div className="works-body">
						<div className="work">
							<img
								src={JavaScriptIcon}
								alt="onfomation"
								className="work-image"
							/>
							<div className="work-title">Java Script</div>
							<div className="work-subtitle">
								
							</div>
							<div className="work-duration">Level - 상</div>
						</div>

						<div className="work">
							<img
								src={JavaIcon}
								alt="ssafy"
								className="work-image"
							/>
							<div className="work-title">Java</div>
							<div className="work-subtitle">
								
							</div>
							<div className="work-duration">Level - 중상</div>
						</div>

						<div className="work">
							<img
								src={TypeScriptIcon}
								alt="ssafy"
								className="work-image"
							/>
							<div className="work-title">TypeScript</div>
							<div className="work-subtitle">
								
							</div>
							<div className="work-duration">Level - 중상</div>
						</div>

						<div className="work">
							<img
								src={ReactIcon}
								alt="ssafy"
								className="work-image"
							/>
							<div className="work-title">React.js</div>
							<div className="work-subtitle">
								
							</div>
							<div className="work-duration">Level - 중상</div>
						</div>

						<div className="work">
							<img
								src={PythonIcon}
								alt="ssafy"
								className="work-image"
							/>
							<div className="work-title">Python</div>
							<div className="work-subtitle">
								
							</div>
							<div className="work-duration">Level - 중</div>
						</div>
					</div>
				}
			/>
		</div>
    );
};

export default Skills;