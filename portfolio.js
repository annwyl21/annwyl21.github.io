// Content
let brand = {
	portfolioIntro: `<p>I have projects on <strong>github</strong> and <strong>dockerhub</strong> to showcase my skills.</p><p>I am looking for a <strong>junior role</strong> with opportunities to learn.</p>`,
	myPhoto: ""
}

let project = {
	projectName: "test",
	info: "intro and why I developed it, problem solved, challenges faced, what I enjoyed",
	detail: "TDD, OOP, what it does",
	image: "",
	skills: ""
}

let skills = {
	languages: {
		Python: 'py',
		JavaScript: 'js',
		SQL: 'sql'
	}
}

// Code
let brandPara = document.getElementById('brand')
brandPara.innerHTML = brand.portfolioIntro;
