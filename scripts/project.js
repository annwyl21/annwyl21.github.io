let project;
let projectVariable = "heathrowHeatmaps";
let selectedProject;

// import the content from my json project file to populate the page
try {
    let response = await fetch('./scripts/project.json');
    project = await response.json();
    
    switch(true){
        case projectVariable=='restapi': { 
        selectedProject=project.restapi}
        break;
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
let extraInfo = document.getElementsByClassName('extraInfo')[0];

// title
extraInfo.innerHTML += `<h1 class="projectSpecific">${selectedProject.projectName}</h1>`;

// extra explanatory project paragraph
if (selectedProject.extraInfo){
    extraInfo.innerhtml += `<p>${selectedProject.extraInfo}</p>`
}

// create 1 div to contain skills and links divs
let skillsLinks = document.createElement('div');
skillsLinks.classList.add('skillsLinks')
extraInfo.appendChild(skillsLinks)
let skillsDiv = document.createElement('div');
skillsDiv.classList.add('skillsDiv')
skillsLinks.appendChild(skillsDiv)
let linksDiv = document.createElement('div');
linksDiv.classList.add('linksDiv')
skillsLinks.appendChild(linksDiv);

// skills
skillsDiv.innerHTML += `<p>This project was built using my knowledge of:`;

let skillsListul = document.createElement('ul');
skillsDiv.appendChild(skillsListul);

for (let s=0; s<selectedProject.skills.length; s++){
    skillsListul.innerHTML += `<li>${selectedProject.skills[s]}</li>`
};

// links
if (selectedProject.github){
    linksDiv.innerHTML += `<a href="${selectedProject.github}" target="_blank"><img src="./icons/icons8-github-60.png" alt="linked in icon by Icons8.com"></a>`
}
if (selectedProject.docker){
    linksDiv.innerHTML += `<a href="${selectedProject.docker}" target="_blank"><img src="./icons/icons8-docker-48.png" alt="linked in icon by Icons8.com"></a>`
}
if (selectedProject.azure){
    linksDiv.innerHTML += `<button class="btn"><a href="${selectedProject.azure}">Azure Container</a></button>`
}
if (selectedProject.localLink){
    linksDiv.innerHTML += `<button class="btn"><a href="${selectedProject.localLink}">Play with ${selectedProject.projectName}`
}

// create the images
let imageHoverBox = document.createElement('div');
imageHoverBox.classList.add('image-box')
extraInfo.appendChild(imageHoverBox);

// create a card for each image in the array and add it to the images box
for (let i=0; i<selectedProject.imagesArray.length; i++){
    let imageCard = document.createElement('div');
    imageCard.classList.add('image-card');
    imageHoverBox.appendChild(imageCard)
    imageCard.innerHTML = `<img src="${selectedProject.imagesArray[i]}" alt="${selectedProject.altArray[i]}">"`
};

// add the remaining info that was present on the main page for completeness
extraInfo.innerHTML += `<p>${selectedProject.info}</p>`
extraInfo.innerHTML += `<p>${selectedProject.detail}</p>`


