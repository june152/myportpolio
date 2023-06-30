import React, { ReactElement } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "./styles/card.css";
import { IconProp } from '@fortawesome/fontawesome-svg-core';

export interface CardProps {
    icon: IconProp,
    title: string,
    body: ReactElement<any, any>,
}

const Card = (props: CardProps) => {
    const { icon, title, body } = props;

    return (
        <div className="card">
			<div className="card-container">
				<div className="card-header">
					<div className="card-icon">
						<FontAwesomeIcon icon={icon} />
					</div>
					<div className="card-title">{title}</div>
				</div>
				<div className="card-body">
                    <div className="card-text">
                        {body}
                    </div>
				</div>
			</div>
		</div>
    );
};

export default Card;