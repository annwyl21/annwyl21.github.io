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
brandPara.innerHTML += `<p>${brand.portfolioIntro}</p>`;

// PROJECT CARDS SECTION
function createhr(projectDiv){
    // HORIZONTAL RULE
    let hr = document.createElement('hr');
    projectDiv.appendChild(hr);
};

function createFlipCard(projectDiv, myProject, index){
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
    textDiv.innerHTML += `<span>${myProject.alt}</span><br>`;
    let myBadge=myProject.badges;
    for (let b=0; b<myBadge.length; b++){
        if (index%2==0){
            myBadge.sort((a, b) => b.length - a.length);
        }else{
            myBadge.sort((a, b) => a.length - b.length);
        }
        textDiv.innerHTML += `<br><span class="badge">${myBadge[b]}</span>`;
    };
    
    // create flip card back & populate
    let flipCardBack = document.createElement('div');
    flipCardBack.classList.add('flip-card-back');
    flipCardInner.appendChild(flipCardBack);
    flipCardBack.style.cssText = "padding: 15px 10px 0px 20px; text-align: left;";
    flipCardBack.innerHTML = `<p>${myProject.detail}<p><span><i>${myProject.skills}</i></span>`;
};

function createProjTextBox(projectDiv, myProject){
    // TEXT BOX
    let projectTextBox = document.createElement('div');
    projectTextBox.classList.add('project-text-box');
    projectDiv.appendChild(projectTextBox);
    // populate text box with project information
    projectTextBox.innerHTML = `<h1>${myProject.projectName}</h1><p>${myProject.info}</p>`;
    projectTextBox.innerHTML += `<button class="btn" ><a href="${myProject.primaryLink}" target="_blank">${myProject.seeMore}</button>`;
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
        createFlipCard(projectDiv, myProject, index);

    }else{
        // odd rows cards then text
        createFlipCard(projectDiv, myProject, index);
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
    mySkills.innerHTML += `<span>${skillsCollection[i].title}:</span>`;
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

// BUTTON ANIMATION
let buttonArray = document.getElementsByTagName('button');
function animation(){
    let random = Math.round(Math.random()*(buttonArray.length-1));
    let num = random;
    animatebutton(num);
    setTimeout(resetbutton, 1000, num);
};
function animatebutton(num){
    buttonArray[num].classList.add('btn-animation');
};
function resetbutton(num){
    buttonArray[num].classList.remove('btn-animation');
};

setInterval(animation, 5000);

// ON BUTTON MOUSEOVER
for (let i=0; i<buttonArray.length; i++){
    let selectedButton = buttonArray[i];
    selectedButton.addEventListener('mouseover', function(){
        selectedButton.style.fontSize="1.5rem";
        selectedButton.style.borderWidth="3px";
    selectedButton.addEventListener('mouseout', function(){
        selectedButton.style.fontSize="1rem";
        selectedButton.style.borderWidth="1px";
    })
    })
}

// TOGGLE THEME BUTTON
let theme = 'dark';
// all the elements that change
let body = document.getElementById('body');
let flipCardStyle = document.getElementsByClassName('flip-card-front');
let flipCard = document.getElementsByClassName('flip-card');
let labelArray = document.getElementsByTagName('h1');
let hr = document.getElementsByTagName('hr');
// defining the button
document.getElementById('themeButton').addEventListener('click', function() {
    if (theme == 'light') {
    theme = 'dark'
    body.style.backgroundColor = "var(--dark-mode-background)";
    body.style.color = "var(--light-mode-background)";
    for (let i=0; i<flipCardStyle.length; i++){
        flipCardStyle[i].style.backgroundColor = "var(--card-reverse)";
        flipCardStyle[i].style.color = "var(--dark-mode-background)";
        flipCard[i].style.borderColor = "var(--buttons-dark-mode)";
        
    };
    for (let i=0; i<buttonArray.length; i++){
        buttonArray[i].style.backgroundColor = "#ffd5005b";
        buttonArray[i].style.borderColor = "var(--buttons-dark-mode)";
    };
    for (let i=0; i<hr.length; i++){
        hr.style.backgroundColor = "var(--buttons-dark-mode)";
        hr.style.color = "var(--buttons-dark-mode)";
    };
    
    } else {
    theme = 'light'
    body.style.backgroundColor = "var(--light-mode-background)";
    body.style.color = "var(--dark-mode-background)";
    for (let i=0; i<flipCardStyle.length; i++){
        flipCardStyle[i].style.backgroundColor = "var(--dark-mode-background)";
        flipCardStyle[i].style.color = "var(--white)";
        flipCard[i].style.borderColor = "var(--buttons-light-mode)";
        };
    for (let i=0; i<buttonArray.length; i++){
        buttonArray[i].style.backgroundColor = "#e7201d2f";
        buttonArray[i].style.borderColor = "var(--buttons-light-mode)";
    };
    for (let i=0; i<hr.length; i++){
        hr.style.backgroundColor = "var(--buttons-light-mode)";
        hr.style.color = "var(--buttons-light-mode)";
    }
}
});
