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
            <div className="paragraph">Content of article 1</div>
            <img
                src="https://picsum.photos/200/300"
                alt="random"
                className="randImage"
            />
        </div>

export const Cert_2:ReactNode = 
        <div className="certificate-content">
            <div className="paragraph">Content of article 2</div>
            <img
                src="https://picsum.photos/200/300"
                alt="random"
                className="randImage"
            />
        </div>

const myCert_1:CertType = {
    date: "2023.07.03",
    title: "Cert 1",
    description: "description of Cert 1",
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
    title: "Cert 2",
    description: "description of Cert 2",
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

export const MyCerts = [
    myCert_1,
    myCert_2
]