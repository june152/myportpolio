import { ReactNode } from "react"

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
            <div className="paragraph">전남대학교 소프트웨어 학과 졸업증명서</div>
            <img
                src="https://picsum.photos/200/300"
                alt="random"
                className="randImage"
            />
        </div>

export const Cert_2:ReactNode = 
        <div className="certificate-content">
            <div className="paragraph">정보처리기사 자격증</div>
            <img
                src="https://picsum.photos/200/300"
                alt="random"
                className="randImage"
            />
    </div>
        
export const Cert_3:ReactNode = 
        <div className="certificate-content">
            <div className="paragraph">OPic 자격증</div>
            <img
                src="https://picsum.photos/200/300"
                alt="random"
                className="randImage"
            />
    </div>
        
export const Cert_4:ReactNode = 
        <div className="certificate-content">
            <div className="paragraph">(주)인포렉스 경력증명서</div>
            <img
                src="https://picsum.photos/200/300"
                alt="random"
                className="randImage"
            />
    </div>
        
export const Cert_5:ReactNode = 
        <div className="certificate-content">
            <div className="paragraph">(주)엔유비즈 재직증명서</div>
            <img
                src="https://picsum.photos/200/300"
                alt="random"
                className="randImage"
            />
        </div>

const myCert_1:CertType = {
    date: "2023.07.03",
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
    date: "2023.07.04",
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
    date: "2023.07.04",
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
    date: "2023.07.04",
    title: "(주)인포렉스 경력증명서",
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
    date: "2023.07.04",
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