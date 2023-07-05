import React, { useState } from 'react';
import Socials from '../about/Socials';

const ContactDialog = (
    {
        handleModalToggle,
    }
        :
    {
        handleModalToggle : Function
    }) => {
    const [fadeOut, setFadeOut] = useState(false)
    const handleCloseModal = () => {
        setFadeOut(true)
        setTimeout(() => handleModalToggle(false), 350)
    }
    
    return (
        <div className={`modal ${fadeOut ? "fade-out" : ""}`} id="estimateModal" tabIndex={-1} role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
            <div className="modal-backdrop" onClick={() => handleCloseModal()}></div>
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close" onClick={() => handleCloseModal()}><span aria-hidden="true">&times;</span></button>
                        <h4 className="modal-title" id="myModalLabel">아래는 저의 연락처입니다! :)</h4>
                    </div>
                    <div className="modal-body">
                        <h2 className="left-section-title">아래 메일로 문의해주세요!</h2>
                        <div className="estimate-call">
                            <Socials />
                        </div>
                        <hr />
                        <article className="part3">
                            <h2 className="left-section-title">저의 포트폴리오를 봐주셔서 감사합니다!</h2>
                            <ul>
                                <li>
                                    포트폴리오 참고 템플릿 : https://github.com/truethari/reactfolio<br />
                                </li>
                                <br />
                                <li>
                                    React → React Typescript 로 재구성
                                </li>
                                <br />
                                <li>
                                    기타 컴포넌트 변경 및 추가
                                </li>
                            </ul>
                        </article>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn_blue" data-dismiss="modal" onClick={() => handleCloseModal()}>Close</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactDialog;