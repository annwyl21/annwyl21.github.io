let jsonData;
let brand;
let project;
let skills;

(async function() {
    try {
        let response = await fetch('./brand.json');
        brand = await response.json();

		response = await fetch('./project.json');
        project = await response.json();

		response = await fetch('./skills.json');
        skills = await response.json();

        // Once data is fetched, invoke the main function
        main();
		console.log(skills.languages)

    } catch (error) {
        console.error('Error fetching JSON:', error);
    }
})();

async function main() {
    // all my code runs after the fetch is completed using async here

	let brandPara = document.getElementById('brand')
	brandPara.innerHTML = brand.portfolioIntro;

}
