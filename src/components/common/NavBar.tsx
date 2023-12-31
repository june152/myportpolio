import React from 'react';
import {
  useNavigate,
} from "react-router-dom";
import "./styles/navBar.css";

export type NavActive = "home" | "about" | "projects" | "certificates" | "contact" | "certificate"

export type NavigateProps = {
    active?: NavActive,
    handleModalToggle: Function,
}

const NavBar = (props: NavigateProps) => {
    const navigate = useNavigate();
    const { active, handleModalToggle } = props;

    return (
        <React.Fragment>
            <div className="nav-container">
                <nav className="navbar">
                    <div className="nav-background">
                        <ul className="nav-list">
                            <li
                                className={
                                    active === "home"
                                        ? "nav-item active"
                                        : "nav-item"
                                }
                            >
                                <a href='#' onClick={() => navigate("/home")}>Home</a>
                            </li>
                            <li
                                className={
                                    active === "about"
                                        ? "nav-item active"
                                        : "nav-item"
                                }
                            >
                                <a href='#' onClick={() => navigate("/about")}>About</a>
                            </li>
                            <li
                                className={
                                    active === "projects"
                                        ? "nav-item active"
                                        : "nav-item"
                                }
                            >
                                <a href='#' onClick={() => navigate("/projects")}>Projects</a>
                            </li>
                            <li
                                className={
                                    active === "certificates"
                                        ? "nav-item active"
                                        : "nav-item"
                                }
                            >
                                <a href='#' onClick={() => navigate("/certificates")}>Certificates</a>
                            </li>
                            <li
                                className={
                                    active === "contact"
                                        ? "nav-item active"
                                        : "nav-item"
                                }
                            >
                                <a style={{ cursor: "pointer" }} onClick={() => handleModalToggle(true)}>Contact</a>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div> 
        </React.Fragment>
    );
};

export default NavBar;