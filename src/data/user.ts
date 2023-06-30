export type Career = {
    companyNo: string,
    period: string,
    position: string,
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

const INFO = {
	main: {
		title: "HJP's Portpolio",
		name: "Hong Jun Pyo",
		email: "sciencepyo@nubiz.kr",
		logo: "../logo.png",
	},

	socials: {
		github: "https://github.com/june152",
	},

	homepage: {
		title: "Full-stack을 지향하는 웹 개발자, 홍준표입니다.",
		description:
			"현재 (주)엔유비즈에 재직중이며, 프론트엔드를 담당하고 있습니다. 현재 진행중인 프로젝트의 메인 담당은 프론트엔드지만, 스프링부트 기반 백엔드에서 직접 API를 작성하고 쿼리 및 프로세스에 대한 추가 및 수정 또한 하고 있습니다. 목표로 하는 풀스택 개발자가 되기 위해 새로운 기술을 보고 사용하는 것을 좋아합니다. 언제나 앞으로 나아가기 위해 최선을 다하는 개발자가 되고 싶습니다.",
	},

	about: {
		title: "저는 Full-stack을 지향하는 웹 개발자, 홍준표입니다.",
        description: {
            education: "전남대학교 소프트웨어학과 학사 졸업 (2015.02~2022.02)",
            etc: "삼성 청년 소프트웨어 아카데미 1학기 수료 (2022.02 ~ 2022.06)",
            language: "OPic IM1",
            cert: "정보처리기사",
            career: career
        }
	},

	articles: {
		title: "I'm passionate about pushing the boundaries of what's possible and inspiring the next generation of innovators.",
		description:
			"Chronological collection of my long-form thoughts on programming, leadership, product design, and more.",
	},

	projects: [
		{
			title: "Project 1",
			description:
				"Lorem ipsum dolor sit amet. Et incidunt voluptatem ex tempore repellendus qui dicta nemo sit deleniti minima.",
			logo: "https://cdn.jsdelivr.net/npm/programming-languages-logos/src/javascript/javascript.png",
			linkText: "View Project",
			link: "https://github.com",
		},

		{
			title: "Project 2",
			description:
				"Lorem ipsum dolor sit amet. Et incidunt voluptatem ex tempore repellendus qui dicta nemo sit deleniti minima.",
			logo: "https://cdn.jsdelivr.net/npm/programming-languages-logos/src/python/python.png",
			linkText: "View Project",
			link: "https://github.com",
		},

		{
			title: "Project 3",
			description:
				"Lorem ipsum dolor sit amet. Et incidunt voluptatem ex tempore repellendus qui dicta nemo sit deleniti minima.",
			logo: "https://cdn.jsdelivr.net/npm/programming-languages-logos/src/html/html.png",
			linkText: "View Project",
			link: "https://github.com",
		},

		{
			title: "Project 4",
			description:
				"Lorem ipsum dolor sit amet. Et incidunt voluptatem ex tempore repellendus qui dicta nemo sit deleniti minima.",
			logo: "https://cdn.jsdelivr.net/npm/programming-languages-logos/src/javascript/javascript.png",
			linkText: "View Project",
			link: "https://github.com",
		},

		{
			title: "Project 5",
			description:
				"Lorem ipsum dolor sit amet. Et incidunt voluptatem ex tempore repellendus qui dicta nemo sit deleniti minima.",
			logo: "https://cdn.jsdelivr.net/npm/programming-languages-logos/src/javascript/javascript.png",
			linkText: "View Project",
			link: "https://github.com",
		},
	],
};

export default INFO;
