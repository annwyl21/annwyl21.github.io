let project;
let projectVariable = "debt";
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
let extraInfo = document.getElementsByClassName('extraInfo')[0];

// title
extraInfo.innerHTML += `<h1 class="projectSpecific">${selectedProject.projectName}</h1>`;
let myBadge=selectedProject.badges;
for (let b=0; b<myBadge.length; b++){
    // TODO change abbreviations on badges and centre
    extraInfo.innerHTML += `<span class="badge projectSpecificBadge">${myBadge[b]}</span>`;
};

// links
let links = document.createElement('div');
extraInfo.appendChild(links);
if (selectedProject.github){
    links.innerHTML += `<a href="${selectedProject.github}" target="_blank"><img src="./icons/icons8-github-90.png" alt="linked in icon by Icons8.com"></a>`
}
if (selectedProject.docker){
    links.innerHTML += `<a href="${selectedProject.docker}" target="_blank"><img src="./icons/icons8-docker-96.png" alt="linked in icon by Icons8.com"></a>`
}
if (selectedProject.azure){
    links.innerHTML += `<button class="btn"><a href="${selectedProject.azure}">Link to Azure Container</a></button>`
}
if (selectedProject.localLink){
    links.innerHTML += `<button class="btn"><a href="${selectedProject.localLink}">Play with ${selectedProject.projectName}`
}




extraInfo.innerHTML += `<p>${selectedProject.skills}</p>`


if (selectedProject.extraInfo){
    extraInfo.innerhtml += `<p>${selectedProject.extraInfo}</p>`
}

if (selectedProject.imagesArray){
    extraInfo.innerHTML += `<br><img src="${selectedProject.image}" alt="${selectedProject.alt}">`
    for (let a=0; a<selectedProject.imagesArray.length; a++){
        extraInfo.innerHTML += `<img src="${selectedProject.imagesArray[a]}" alt="${selectedProject.altArray[a]}"><p>${selectedProject.moreInfo[a]}</p>`
    }
}else{
    extraInfo.innerHTML += `<br><img src="${selectedProject.image}" alt="${selectedProject.alt}">`
}

extraInfo.innerHTML += `<p>${selectedProject.info}</p>`
extraInfo.innerHTML += `<p>${selectedProject.detail}</p>`


