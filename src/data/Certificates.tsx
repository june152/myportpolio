import { ReactNode } from "react"
import JnuCert from "../assets/jnuCert.jpg"
import InforexCert from "../assets/inforexCert.jpg"
import OPicCert from "../assets/OPic1.jpg"
import myInfoCert from "../assets/myInfoCert.png"
import myEmploy from "../assets/employment.jpg"

export class CertType {
    constructor(
        public date: string,
        public title: string,
        public description: string,
        public style: string,
        public body: ReactNode,
    ) {}
    
}

export const Cert_1:ReactNode = 
        <div className="certificate-content">
            <div className="paragraph"></div>
            <img
                src={JnuCert}
                alt="random"
                className="randImage"
            />
        </div>

export const Cert_2:ReactNode = 
        <div className="certificate-content">
            <div className="paragraph"></div>
            <img
                src={myInfoCert}
                alt="random"
                className="randImage"
            />
    </div>
        
export const Cert_3:ReactNode = 
        <div className="certificate-content">
            <div className="paragraph"></div>
            <img
                src={OPicCert}
                alt="random"
                className="randImage"
            />
    </div>
        
export const Cert_4:ReactNode = 
        <div className="certificate-content">
            <div className="paragraph"></div>
            <img
                src={InforexCert}
                alt="random"
                className="randImage"
            />
    </div>
        
export const Cert_5:ReactNode = 
        <div className="certificate-content">
            <div className="paragraph"></div>
            <img
                src={myEmploy}
                alt="random"
                className="randImage"
            />
        </div>

const myCert_1:CertType = {
    date: "01.)",
    title: "전남대학교 소프트웨어학과 졸업증명서",
    description: "",
    style: `
				.certificate-content {
					display: flex;
					flex-direction: column;
					align-items: center;
				}

				.randImage {
					align-self: center;
					outline: 2px solid red;
				}
				`,
    body: Cert_1,
}

const myCert_2:CertType = {
    date: "02.)",
    title: "정보처리기사 자격증",
    description: "",
     style: `
				.certificate-content {
					display: flex;
					flex-direction: column;
					align-items: center;
				}

				.randImage {
					align-self: center;
					outline: 2px solid red;
				}
				`,
    body: Cert_2,
}

const myCert_3:CertType = {
    date: "03.)",
    title: "OPic 자격증",
    description: "",
     style: `
				.certificate-content {
					display: flex;
					flex-direction: column;
					align-items: center;
				}

				.randImage {
					align-self: center;
					outline: 2px solid red;
				}
				`,
    body: Cert_3,
}

const myCert_4:CertType = {
    date: "04.)",
    title: "(주)인포렉스 경력증명서(건강보험 납부확인서)",
    description: "",
     style: `
				.certificate-content {
					display: flex;
					flex-direction: column;
					align-items: center;
				}

				.randImage {
					align-self: center;
					outline: 2px solid red;
				}
				`,
    body: Cert_4,
}

const myCert_5:CertType = {
    date: "05.)",
    title: "(주)엔유비즈 재직증명서",
    description: "",
     style: `
				.certificate-content {
					display: flex;
					flex-direction: column;
					align-items: center;
				}

				.randImage {
					align-self: center;
					outline: 2px solid red;
				}
				`,
    body: Cert_5,
}

export const MyCerts = [
    myCert_1,
    myCert_2,
    myCert_3,
    myCert_4,
    myCert_5,
]