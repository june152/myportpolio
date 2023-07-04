import React from 'react';
import { faCertificate } from "@fortawesome/free-solid-svg-icons";
import "./styles/works.css";
import Card from '../common/Card';
import OPic from "../../assets/opic4meta.png"
import Infomation from "../../assets/infomation.png"

const CertCards = () => {
    return (
        <div className="works">
			<Card
				icon={faCertificate}
				title="Certificates"
				body={
					<div className="works-body">
						<div className="work">
							<img
								src={Infomation}
								alt="onfomation"
								className="work-image"
							/>
							<div className="work-title">정보처리기사</div>
							<div className="work-subtitle">
								
							</div>
							<div className="work-duration">발급기관 - 한국산업인력공단</div>
						</div>

						<div className="work">
							<img
								src={OPic}
								alt="ssafy"
								className="work-image"
							/>
							<div className="work-title">Oral Proficiency Interview - computer (OPic)</div>
							<div className="work-subtitle">
								
							</div>
							<div className="work-duration">발급기관 - ACTFL</div>
						</div>
					</div>
				}
			/>
		</div>
    );
};

export default CertCards;