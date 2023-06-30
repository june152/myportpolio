import React from 'react';
import INFO from "../../data/user";
import {
  useNavigate,
} from "react-router-dom";
import "./styles/logo.css";

export type LogoProps = {
    width?: number,
    link?: boolean,
}

const Logo = (props: LogoProps) => {
    const navigate = useNavigate();
    let { width, link } = props;

	if (link === undefined) {
		link = true;
    }
    
    const imageElement = (
		<img src={INFO.main.logo} alt="logo" className="logo" width={width} />
	);

    return (
        <React.Fragment>
			{link ? <a href='#' onClick={() => navigate("/home")}>{imageElement}</a> : imageElement}
		</React.Fragment>
    );
};

export default Logo;