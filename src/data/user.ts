import Duck from "../assets/증빙1.png"
import GjDaum from "../assets/gjdaum.png"
import Dobanjang from "../assets/dobanjang.png"

export type Career = {
    companyNo: string,
    period: string,
    position: string,
}

export type Skills = {
    skillNm: string,
    level: string,
}

const career: Career[] = [
    {
        companyNo: "(주)인포렉스",
        period: "2022.06 ~ 2022.11",
        position: "프론트엔드"
    },
    {
        companyNo: "(주)엔유비즈",
        period: "2023.02 ~ (재직 중)",
        position: "프론트엔드"
    },
]

const skills: Skills[] = [
    {
        skillNm: "Java Script",
        level: "중상",
    },
    {
        skillNm: "JAVA",
        level: "상",
    },
    {
        skillNm: "React",
        level: "중상",
    },
    {
        skillNm: "Type Script",
        level: "중상",
    },
    {
        skillNm: "Python",
        level: "중",
    }
]

const INFO = {
	main: {
		title: "HJP's Portpolio",
		name: "Hong Jun Pyo",
		email: "sciencepyo@nubiz.kr",
		logo: Duck,
	},

	socials: {
		github: "https://github.com/june152",
	},

	homepage: {
		title: "Full-stack 지향 웹 개발자, 홍준표입니다 :)",
		description:
			"현재 (주)엔유비즈에 재직중이며, 프론트엔드를 담당하고 있습니다. 지금 진행중인 프로젝트의 메인 담당은 프론트엔드지만, 스프링부트 기반 백엔드에서 직접 API를 작성하고 쿼리 및 프로세스에 대한 추가 및 수정 또한 하고 있습니다. 목표로 하는 풀스택 개발자가 되기 위해 새로운 기술을 보고 사용하는 것을 좋아합니다. 언제나 앞으로 나아가기 위해 최선을 다하는 개발자가 되고 싶습니다.",
	},

	about: {
		title: "저는 Full-stack을 지향하는 웹 개발자, 홍준표입니다 :)",
        description: {
            education: "전남대학교 소프트웨어학과 학사 졸업 (2015.02~2022.02)",
            etc: "삼성 청년 소프트웨어 아카데미 1학기 수료 (2022.02 ~ 2022.06)",
            language: "OPic IM1",
            cert: "정보처리기사",
            career: career,
            stack: skills,
        }
	},

	certificates: {
		title: "자격 및 경력 증빙자료",
		description:
			"About에 작성된 내용에 대한 증빙자료입니다 :)",
	},

	projects: [
		{
			title: "광주다움 통합돌봄",
			description:
				"돌봄이 필요한 광주시민이면 누구나 이용할 수 있는 빈틈없는 전 생애주기 지역사회 통합돌봄 서비스",
			logo: GjDaum,
			linkText: "View Project",
			link: "https://www.gwangju.go.kr/welfare/contentsView.do?pageId=welfare190",
		},

		{
			title: "우리동네 두반장",
			description:
				"광주광역시 동구 주민이면 누구나 이용할 수 있는 생활밀착 문제해결 디지털 플랫폼",
			logo: Dobanjang,
			linkText: "View Project",
			link: "https://github.com/june152",
		},

		{
			title: "기타 프로젝트 작성",
			description:
				"프로젝트 내용 작성",
			logo: "https://cdn.jsdelivr.net/npm/programming-languages-logos/src/html/html.png",
			linkText: "View Project",
			link: "https://github.com/june152",
		},
	],
};

export default INFO;
