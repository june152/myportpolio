import React from 'react';
import { faSchool } from "@fortawesome/free-solid-svg-icons";
import "./styles/works.css";
import Card from '../common/Card';
import JNU from "../../assets/jnu.jpg"
import SSAFY from "../../assets/SSAFY.jpg"

const Education = () => {
    return (
        <div className="works">
			<Card
				icon={faSchool}
				title="Educations"
				body={
					<div className="works-body">
						<div className="work">
							<img
								src={JNU}
								alt="jnu"
								className="work-image"
							/>
							<div className="work-title">전남대학교</div>
							<div className="work-subtitle">
								소프트웨어학과 학사
							</div>
							<div className="work-duration">2015.02 - 2022.02</div>
						</div>

						<div className="work">
							<img
								src={SSAFY}
								alt="ssafy"
								className="work-image"
							/>
							<div className="work-title">삼성 청년 소프트웨어 아카데미</div>
							<div className="work-subtitle">
								7기 1학기 수료
							</div>
							<div className="work-duration">2022.02 - 2022.06</div>
						</div>
					</div>
				}
			/>
		</div>
    );
};

export default Education;