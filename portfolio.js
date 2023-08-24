let project;
let skills;
let brand;
let projectsCollection;
let skillsCollection;

// import the content from my json files to populate the site
try {
    let response = await fetch('./brand.json');
    brand = await response.json();

    response = await fetch('./project.json');
    let project = await response.json();
    let yahtzee = project.yahtzeeScorerProject;
    let brewqueue = project.brewqueue;
    let symptomLogger = project.symptomLogger;
    let debtComparisonCalculator = project.debtComparisonCalculator;
    let rps = project.rps;
    let weatherApi = project.weatherApi;
    let sentenceTranslation = project.sentenceTranslation;
    let heathrowHeatmaps = project.heathrowHeatmaps;
    projectsCollection = [yahtzee, brewqueue, heathrowHeatmaps, symptomLogger, debtComparisonCalculator, weatherApi, sentenceTranslation, rps];

    response = await fetch('./skills.json');
    let skills = await response.json();
    let languages = skills.knowledge.languages;
    let database = skills.knowledge.database;
    let git = skills.knowledge.git;
    let libraries = skills.knowledge.libraries;
    let ide = skills.knowledge.ide;
    let api = skills.knowledge.api;
    skillsCollection = [languages, database, git, libraries, ide, api];

} catch (error) {
    console.error('Error fetching JSON:', error);
}

// MAIN INTRO SECTION
//populate introduction text
let brandPara = document.getElementById('brand');
brandPara.innerHTML += brand.portfolioIntro;

// PROJECT CARDS SECTION
function createhr(projectDiv){
    // HORIZONTAL RULE
    let hr = document.createElement('hr');
    projectDiv.appendChild(hr);
};

function createFlipCard(projectDiv, myProject){
    // create flip card
    let projectCards = document.createElement('div');
    projectCards.classList.add('flip-card');
    projectDiv.appendChild(projectCards);

    // create flip card inner
    let flipCardInner = document.createElement('div');
    flipCardInner.classList.add('flip-card-inner');
    projectCards.appendChild(flipCardInner);

    // create flip card front & populate
    let flipCardFront = document.createElement('div');
    flipCardFront.classList.add('flip-card-front');
    flipCardInner.appendChild(flipCardFront);
    flipCardFront.innerHTML = `<img class="flip-image" src="${myProject.image}" alt="${myProject.alt}">`;
    let textDiv = document.createElement('div');
    textDiv.style.padding="0px 15px";
    flipCardFront.appendChild(textDiv);
    textDiv.innerHTML += `<p>${myProject.alt}</p>`;
    let myBadge=myProject.badges;
    for (let b=0; b<myBadge.length; b++){
        textDiv.innerHTML += `<p class="badge">${myBadge[b]}</p>`;
    };
    
    // create flip card back & populate
    let flipCardBack = document.createElement('div');
    flipCardBack.classList.add('flip-card-back');
    flipCardInner.appendChild(flipCardBack);
    flipCardBack.style.cssText = "padding: 20px; text-align: left;";
    flipCardBack.innerHTML = `${myProject.detail}<br><p>Built with ${myProject.skills}</p>`;
};

function createProjTextBox(projectDiv, myProject){
    // TEXT BOX
    let projectTextBox = document.createElement('div');
    projectTextBox.classList.add('project-text-box');
    projectDiv.appendChild(projectTextBox);
    // populate text box with project information
    projectTextBox.innerHTML = `<h1>${myProject.projectName}</h1><p>${myProject.info}</p>`;
    projectTextBox.innerHTML += `<button class="btn" ><a href="${myProject.primaryLink}">See More</button>`;
};

//generate project section
let projectSection = document.getElementById('experience');
// for every project create a project div
for (let index=0; index<=projectsCollection.length-1; index++){
    let myProject = projectsCollection[index];

    // create each project div
    let projectDiv = document.createElement('div');
    projectDiv.classList.add('project-details');
    projectSection.appendChild(projectDiv);

    // create each project row
    if (index%2==0){
        // even rows text then cards
        createProjTextBox(projectDiv, myProject);
        createhr(projectDiv);
        createFlipCard(projectDiv, myProject);

    }else{
        // odd rows cards then text
        createFlipCard(projectDiv, myProject);
        createhr(projectDiv);
        createProjTextBox(projectDiv, myProject);
    }
};

// ASIDE SECTION
// generate skills section
let mySkills = document.getElementById('mySkills');

for (let i=0; i<skillsCollection.length; i++){
    // create unordered list for each list of skills using title and info
    let skillHeading = document.createElement('div');
    mySkills.innerHTML += `<p>${skillsCollection[i].title}:</p>`;
    mySkills.appendChild(skillHeading);
    let skillList = document.createElement('ul');
    skillHeading.appendChild(skillList);

    let skillDetail = skillsCollection[i].info;
    for(let x=0; x<skillDetail.length; x++){
        // loop through list items
        let listItem = document.createElement('li');
        listItem.innerHTML = `${skillDetail[x]}`; 
        skillList.appendChild(listItem); 
    }           
};

// toggle theme button
let theme = 'light';
let body = document.getElementById('body');
let flipCardStyle = document.getElementsByClassName('flip-card-front')
    document.getElementById('themeButton').addEventListener('click', function() {
        if (theme == 'light') {
        theme = 'dark'
        body.style.backgroundColor = "var(--dark-grey)";
        body.style.color = "var(--paler-grey)";
        for (let i=0; i<flipCardStyle.length; i++){
            flipCardStyle[i].style.backgroundColor = "var(--light-grey)";
            flipCardStyle[i].style.color = "var(--dark-grey)";
        }
        } else {
        theme = 'light'
        body.style.backgroundColor = "var(--paler-grey)";
        body.style.color = "var(--dark-grey)";
        for (let i=0; i<flipCardStyle.length; i++){
            flipCardStyle[i].style.backgroundColor = "var(--dark-grey)";
            flipCardStyle[i].style.backgroundColor = "var(--white)";
        }
    }
});

// button animation
let buttonArray = document.getElementsByTagName('button');
function animation(selected){
    let random = Math.round(Math.random()*(buttonArray.length-1));
    let selected = random;
    console.log(selected)
    animatebutton(selected);
    resetbutton(selected);
};
function animatebutton(selected){
    buttonArray[selected].style.color="white";
    buttonArray[selected].classList.add('btn-animation');
};
function resetbutton(selected){
    buttonArray[selected].style.color="var(--red-neverwithdkgrey)";
    buttonArray[selected].classList.remove('btn-animation');
};

setInterval(animation, 500);

