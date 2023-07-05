import React, { useEffect } from 'react';
import NavBar from '../components/common/NavBar';
import Footer from '../components/common/Footer';
import Logo from '../components/common/Logo';

import "./styles/projects.css";
import AllProjects from '../components/projects/AllProjects';

const Projects = () => {
    useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

    return (
        <React.Fragment>
            <div className="page-content">
                <div className='content-wrapper'>
                    <div className="projects-logo-container">
						<div className="projects-logo">
							<Logo width={46} />
						</div>
                    </div>
                    
                    <div className="projects-container">
                        <div className="title projects-title">
                            진행 프로젝트 목록
                        </div>

                        <div className="subtitle projects-subtitle">
                            제가 참여한 완료된, 혹은 진행 중인 프로젝트 목록입니다.
                        </div>
                        <div className="subtitle projects-subtitle">
                            아래 프로젝트들은 회사에서 진행한 프로젝트 및 개인 및 팀원과 함께 진행한 프로젝트입니다.
                        </div>

                        <div className="projects-list">
                            <AllProjects />
                        </div>
                    </div>
                </div>
            </div> 
        </React.Fragment>
    );
};

export default Projects;