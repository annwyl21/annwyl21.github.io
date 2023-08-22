let brand;
let projectsCollection;
let skillsCollection;

let displayProjects = 10;
let theme = 'light';

(async function() {
    try {
        let response = await fetch('./brand.json');
        brand = await response.json();

		response = await fetch('./project.json');
        let project = await response.json();
        let yahtzee = project.yahtzeeScorerProject;
        let brewqueue = project.brewqueue;
        let symptomLogger = project.symptomLogger;
        projectsCollection = [yahtzee, brewqueue, symptomLogger];

		response = await fetch('./skills.json');
        let skills = await response.json();
        let languages = skills.knowledge.languages;
        let database = skills.knowledge.database;
        let git = skills.knowledge.git;
        let libraries = skills.knowledge.libraries;
        let ide = skills.knowledge.ide;
        let api = skills.knowledge.api;
        skillsCollection = [languages, database, git, libraries, ide, api];

        console.log('get data from json', skills.knowledge.languages)

        // Once data is fetched, invoke the main function
        main();

    } catch (error) {
        console.error('Error fetching JSON:', error);
    }
})();

async function main() {
    // all my code runs after the fetch is completed using async here

    // toggle theme button
    document.getElementById('themeButton').addEventListener('click', function() {
        if (theme == 'light') {
            theme = 'dark'
        } else {
            theme = 'light'
        }
    });

    //populate introduction text
	let brandPara = document.getElementById('brand');
	brandPara.innerHTML = brand.portfolioIntro;

    //generate project section
    let projectSection = document.getElementById('experience');
    // for every project create a project div
    for (let i=0; i<=displayProjects; i++){
        let myProject = projectsCollection[i];

        // create each project div
        let projectDiv = document.createElement('div');
        projectDiv.classList.add('project-details');
        projectSection.appendChild(projectDiv);

        // create each project row
        if (i%2==0){
            // even rows text then cards
            // TEXT BOX
            let projectTextBox = document.createElement('div');
            projectTextBox.classList.add('project-text-box');
            projectDiv.appendChild(projectTextBox);
            // populate text box with project information
	        projectTextBox.innerHTML = `<h2>${myProject.projectName}</h2><p>${myProject.info}</p>`;
            
            // HORIZONTAL RULE
            let hr = document.createElement('hr');
            projectDiv.appendChild(hr);

            // create project cards div
            let projectCards = document.createElement('div');
            projectCards.classList.add('project-cards');
            projectDiv.appendChild(projectCards);

            // function createCard(cardLocation){
            //     let card = document.createElement('div');
            //     let cardClass = 'proj-cd'+ cardLocation;
            //     card.classList.add(cardClass);
            //     projectCards.appendChild(card);
            
            //     let cardTop = document.createElement('div');
            //     let cardClassTop = 'card-top'+ cardLocation;
            //     cardTop.classList.add(cardClassTop);
            //     card.appendChild(cardTop);
            
            //     let cardBottom = document.createElement('div');
            //     let cardClassBottom = 'card-bottom'+ cardLocation;
            //     cardBottom.classList.add(cardClassBottom);
            //     card.appendChild(cardBottom);
            // }

            // createCard('Back');
            // let cardTop = document.getElementsByClassName('card-topBack');
            // for (i=0; i<cardTop.length; i++){
            //     cardTop.innerHTML = `<img src="${myProject.image}" alt="${myProject.alt}">`;
            // }

            // let cardBottom = document.getElementsByClassName('card-bottomBack');
            // for (i=0; i<cardBottom.length; i++){
            //     cardBottom.innerHTML = `<p>${myProject.alt}</p>`;
            // }

            // BACK CARD
            let backCard = document.createElement('div');
            backCard.classList.add('proj-cd');
            projectCards.appendChild(backCard);

            let cardTopB = document.createElement('div');
            cardTopB.classList.add('card-top');
            backCard.appendChild(cardTopB);
            cardTopB.innerHTML = `<img src="${myProject.image}" alt="${myProject.alt}">`;

            let cardBottomB = document.createElement('div');
            cardBottomB.classList.add('card-bottom');
            backCard.appendChild(cardBottomB);
            cardBottomB.innerHTML = `<p>${myProject.alt}</p>`;

            // FRONT CARD
            let frontCard = document.createElement('div');
            frontCard.classList.add('proj-cd');
            projectCards.appendChild(frontCard);

            let cardTopF = document.createElement('div');
            cardTopF.classList.add('card-top');
            frontCard.appendChild(cardTopF);
            cardTopF.innerHTML = `<p>${myProject.badges}, ${myProject.detail}</p>`;

            let cardBottomF = document.createElement('div');
            cardBottomF.classList.add('card-bottom');
            frontCard.appendChild(cardBottomF);
            cardBottomF.innerHTML = `<p>${myProject.skills}</p><a href="${myProject.github}">Github</a>`;

        }else{
            // odd rows cards then text
            // create project cards div
            let projectCards = document.createElement('div');
            projectCards.classList.add('project-cards');
            projectDiv.appendChild(projectCards);

            // BACK CARD
            let backCard = document.createElement('div');
            backCard.classList.add('proj-cd');
            projectCards.appendChild(backCard);

            let cardTopB = document.createElement('div');
            cardTopB.classList.add('card-top');
            backCard.appendChild(cardTopB);
            cardTopB.innerHTML = `<img src="${myProject.image}" alt="${myProject.alt}">`;

            let cardBottomB = document.createElement('div');
            cardBottomB.classList.add('card-bottom');
            backCard.appendChild(cardBottomB);
            cardBottomB.innerHTML = `<p>${myProject.alt}</p>`;

            // FRONT CARD
            let frontCard = document.createElement('div');
            frontCard.classList.add('proj-cd');
            projectCards.appendChild(frontCard);

            let cardTopF = document.createElement('div');
            cardTopF.classList.add('card-top');
            frontCard.appendChild(cardTopF);
            cardTopF.innerHTML = `<p>${myProject.badges}, ${myProject.detail}</p>`;

            let cardBottomF = document.createElement('div');
            cardBottomF.classList.add('card-bottom');
            frontCard.appendChild(cardBottomF);
            cardBottomF.innerHTML = `<p>${myProject.skills}</p><a href="${myProject.github}">Github</a>`;

            // HORIZONTAL RULE
            let hr = document.createElement('hr');
            projectDiv.appendChild(hr);

            // TEXT BOX
            let projectTextBox = document.createElement('div');
            projectTextBox.classList.add('project-text-box');
            projectDiv.appendChild(projectTextBox);
            // populate text box with project information
            projectTextBox.innerHTML = `<h2>${myProject.projectName}</h2><p>${myProject.info}</p>`;

        }

    };

    // generate skills section
    let mySkills = document.getElementById('mySkills');
    console.log('skills', skillsCollection[1].info);

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

    let btnSeeMore = document.getElementById('seeMore')
    btnSeeMore.addEventListener('click', function showProjects(){
        if (displayProjects == 2){
            displayProjects = 10;
            btnSeeMore.innerHTML = "Show Less Projects";
        }else{
            displayProjects = 2;
            btnSeeMore.innerHTML = "See More Projects";
        }
    });

}
