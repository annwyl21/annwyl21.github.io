let project;
let projectVariable = "yahtzee";
let selectedProject;

// import the content from my json project file to populate the page
try {
    let response = await fetch('./scripts/project.json');
    project = await response.json();
    
    switch(true){
        case projectVariable=='yahtzee': { 
        selectedProject=project.yahtzeeScorerProject}
        break;
        case projectVariable=='brewqueue': { 
            selectedProject=project.brewqueue}
        break;
        case projectVariable=='symptomLogger': { 
            selectedProject=project.symptomLogger}
        break;
        case projectVariable=='debt': { 
            selectedProject=project.debtComparisonCalculator}
        break;
        case projectVariable=='rps': { 
            selectedProject=project.rps}
        break;
        case projectVariable=='weatherApi': { 
            selectedProject=project.weatherApi}
        break;
        case projectVariable=='sentenceTranslation': { 
            selectedProject=project.sentenceTranslation}
        break;
        case projectVariable=='heathrowHeatmaps': { 
            selectedProject=project.heathrowHeatmaps}
        break;
        default: 
        selectedProject=project.yahtzeeScorerProject
    };

} catch (error) {
    console.error('Error fetching JSON:', error);
}

// PROJECT PAGE
let extraInfo = document.getElementsByClassName('extraInfo');

// title
extraInfo.innerHTML = `<h1>${selectedProject.projectName}</h1>`;

/*		badges
		extra extraInfo
		auto images
		<button class="btn"><a class="menu" href="mailto:ellen.a.ash@gmail.com">Contact Me</a></button>
		main extraInfoskills
		card-reverse details */
