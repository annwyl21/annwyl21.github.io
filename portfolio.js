let brand;
let projectsCollection;
let skills;

let displayProjects = 2;

(async function() {
    try {
        let response = await fetch('./brand.json');
        brand = await response.json();

		response = await fetch('./project.json');
        let project = await response.json();
        let yahtzee = project.yahtzeeScorerProject;
        projectsCollection = [yahtzee];

		response = await fetch('./skills.json');
        skills = await response.json();
        console.log('test skills', skills.skills.languages.Python)

        // Once data is fetched, invoke the main function
        main();
		

    } catch (error) {
        console.error('Error fetching JSON:', error);
    }
})();

async function main() {
    // all my code runs after the fetch is completed using async here

    //populate introduction text
	let brandPara = document.getElementById('brand');
	brandPara.innerHTML = brand.portfolioIntro;

    //generate project section
    let projectSection = document.getElementById('experience');
    // for every project create a project div
    for (let i=0; i<displayProjects; i++){
        displayProjects = 3;
        let myProject = projectsCollection[i];

        // create each project div
        let projectDiv = document.createElement('div');
        projectDiv.classList.add('project-details');
        projectSection.appendChild(projectDiv);

        // create each project row
        if (i%2==0){
            // design the row text then cards
            let projectTextBox = document.createElement('div');
            projectTextBox.classList.add('project-text-box');
            projectDiv.appendChild(projectTextBox);
            // populate text box with project information
	        projectTextBox.innerHTML = myProject.info;
            // create horizontal rule
            let hr = document.createElement('hr');
            projectDiv.appendChild(hr);
           
            //now generate the cards on the other side of the hr

        }else{
            // design the row cards then text
        }

        
    };

}

// function createCards(location){
// 	// create Card and append it to the location
// 	let card = document.createElement('div');
// 	card.classList.add('project-cards');
// 	location.appendChild(card);
// 	// create card sections
// 	let top = document.createElement('div');
// 	top.classList.add('image');
// 	card.appendChild(top);
// 	let bottom = document.createElement('div');
// 	bottom.classList.add('detail');
// 	card.appendChild(bottom);
// 	//populate card with image and abbreviations
// 	top.innerHTML=`${label}`;
// 	//<img src=${image - "./images/coffeeLogo.jpg"} alt=${name - "coffee cup logo"}></img>
// 	bottom.innerHTML=`<button class="btnCard" id="${abbrev}" value="${abbrev}">${abbrev}</button>`;
// };

// //call create cards for items in customisations menu
// function createCustomiseCards(){
// 	let customCards = document.getElementById('customCards');
// 	for (let custom in customAbbrev){
// 		createCards(customCards, customAbbrev[custom], custom);
		
// 		let orderButtonE = document.getElementById(`${custom}`);
// 		orderButtonE.addEventListener('click', function getOrder(){
// 			order = order + ' ' + orderButtonE.value;
// 			document.getElementById('addOrder').innerHTML = `Add Order: ${order}`;
// 		})
// 	};
// };


// <!-- project one -->
// <div class="project-details">
//     <div class="project-text-box">
//         <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iure id facere commodi quidem necessitatibus dolores voluptate consequatur numquam, fuga deserunt amet dicta placeat impedit vero mollitia quas repellat non minus unde suscipit tempora voluptatem beatae! Voluptatum iusto animi eligendi natus at. Similique, tenetur laborum consequatur officiis accusantium expedita, nobis fugiat ullam eligendi atque laudantium cupiditate et accusamus. Dolorum, alias asperiores quaerat qui atque voluptatibus eos veniam nulla? Atque optio, molestiae repudiandae mollitia, aliquid ab natus, unde a eligendi et dignissimos.</p>
//     </div>
//     <hr>

//     <div class="project-cards">
//         <!-- project image card-->
//         <div class="proj-cd" id="bk-cd">
//             <div class="card-top">
//                 <img src="./placeholder.jpg" alt="placeholder">
//             </div>
//             <div class="card-bottom">
//                 placeholder
//                 <br>
//             </div>
//         </div>

//         <!-- sample card skills and info-->
//         <div class="proj-cd">
//             <div class="card-top">
//                 text about project Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe, ipsam. Accusantium laudantium ducimus fugit molestias fugiat officia rem culpa quae. Deleniti, accusantium quibusdam, cumque rerum dolores eaque sed quod, praesentium fugiat saepe laudantium. Neque qui obcaecati consectetur iusto, adipisci explicabo ad similique temporibus officiis vitae eligendi, quisquam, tempora quam voluptatem!
//             </div>
//             <div class="card-bottom">
//                 info about skills involved Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur magnam perferendis aperiam temporibus autem adipisci?
//                 <br>
//             </div>
//         </div>
//     </div>
// </div>

// BACK-UP html
// <!-- project one -->
// <div class="project-details">
//     <div class="text-box">
//         <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iure id facere commodi quidem necessitatibus dolores voluptate consequatur numquam, fuga deserunt amet dicta placeat impedit vero mollitia quas repellat non minus unde suscipit tempora voluptatem beatae! Voluptatum iusto animi eligendi natus at. Similique, tenetur laborum consequatur officiis accusantium expedita, nobis fugiat ullam eligendi atque laudantium cupiditate et accusamus. Dolorum, alias asperiores quaerat qui atque voluptatibus eos veniam nulla? Atque optio, molestiae repudiandae mollitia, aliquid ab natus, unde a eligendi et dignissimos.</p>
//     </div>
//     <hr>
//     <div class="project-cards">
//         <!-- project image card-->
//         <div class="proj-cd" id="bk-cd">
//             <div class="card-top">
//                 <img src="./placeholder.jpg" alt="placeholder">
//             </div>
//             <div class="card-bottom">
//                 placeholder
//                 <br>
//             </div>
//         </div>

//         <!-- sample card skills and info-->
//         <div class="proj-cd">
//             <div class="card-top">
//                 text about project Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe, ipsam. Accusantium laudantium ducimus fugit molestias fugiat officia rem culpa quae. Deleniti, accusantium quibusdam, cumque rerum dolores eaque sed quod, praesentium fugiat saepe laudantium. Neque qui obcaecati consectetur iusto, adipisci explicabo ad similique temporibus officiis vitae eligendi, quisquam, tempora quam voluptatem!
//             </div>
//             <div class="card-bottom">
//                 info about skills involved Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur magnam perferendis aperiam temporibus autem adipisci?
//                 <br>
//             </div>
//         </div>
//     </div>
// </div>

// <!-- project two -->
// <div class="project-details">
//     <div class="project-cards">
//         <!-- project image card-->
//         <div class="proj-cd" id="bk-cd">
//             <div class="card-top">
//                 <img src="./placeholder.jpg" alt="placeholder">
//             </div>
//             <div class="card-bottom">
//                 placeholder
//                 <br>
//             </div>
//         </div>

//         <!-- sample card skills and info-->
//         <div class="proj-cd">
//             <div class="card-top">
//                 text about project Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe, ipsam. Accusantium laudantium ducimus fugit molestias fugiat officia rem culpa quae. Deleniti, accusantium quibusdam, cumque rerum dolores eaque sed quod, praesentium fugiat saepe laudantium. Neque qui obcaecati consectetur iusto, adipisci explicabo ad similique temporibus officiis vitae eligendi, quisquam, tempora quam voluptatem!
//             </div>
//             <div class="card-bottom">
//                 info about skills involved Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur magnam perferendis aperiam temporibus autem adipisci?
//                 <br>
//             </div>
//         </div>
//     </div>
//     <hr>
//     <div class="right-text-box">
//         <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iure id facere commodi quidem necessitatibus dolores voluptate consequatur numquam, fuga deserunt amet dicta placeat impedit vero mollitia quas repellat non minus unde suscipit tempora voluptatem beatae! Voluptatum iusto animi eligendi natus at. Similique, tenetur laborum consequatur officiis accusantium expedita, nobis fugiat ullam eligendi atque laudantium cupiditate et accusamus. Dolorum, alias asperiores quaerat qui atque voluptatibus eos veniam nulla? Atque optio, molestiae repudiandae mollitia, aliquid ab natus, unde a eligendi et dignissimos.</p>
//     </div>
// </div>

// <!-- project three -->
// <div class="project-details">
//     <div class="text-box">
//         <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iure id facere commodi quidem necessitatibus dolores voluptate consequatur numquam, fuga deserunt amet dicta placeat impedit vero mollitia quas repellat non minus unde suscipit tempora voluptatem beatae! Voluptatum iusto animi eligendi natus at. Similique, tenetur laborum consequatur officiis accusantium expedita, nobis fugiat ullam eligendi atque laudantium cupiditate et accusamus. Dolorum, alias asperiores quaerat qui atque voluptatibus eos veniam nulla? Atque optio, molestiae repudiandae mollitia, aliquid ab natus, unde a eligendi et dignissimos.</p>
//     </div>
//     <hr>
//     <div class="project-cards">
//         <!-- project image card-->
//         <div class="proj-cd" id="bk-cd">
//             <div class="card-top">
//                 <img src="./placeholder.jpg" alt="placeholder">
//             </div>
//             <div class="card-bottom">
//                 placeholder
//                 <br>
//             </div>
//         </div>

//         <!-- sample card skills and info-->
//         <div class="proj-cd">
//             <div class="card-top">
//                 text about project Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe, ipsam. Accusantium laudantium ducimus fugit molestias fugiat officia rem culpa quae. Deleniti, accusantium quibusdam, cumque rerum dolores eaque sed quod, praesentium fugiat saepe laudantium. Neque qui obcaecati consectetur iusto, adipisci explicabo ad similique temporibus officiis vitae eligendi, quisquam, tempora quam voluptatem!
//             </div>
//             <div class="card-bottom">
//                 info about skills involved Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur magnam perferendis aperiam temporibus autem adipisci?
//                 <br>
//             </div>
//         </div>
//     </div>
// </div>