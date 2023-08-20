//Code Research
//When developers want to save a JavaScript object to localStorage, they typically convert the object to a JSON string using JSON.stringify()
//When retrieving that object, they parse it back into a JavaScript object using JSON.parse()
//To loop through an object in js:
// for (const property in object) {
//console.log(`${property}: ${object[property]}`);}

let today = new Date();
//let month = today.toLocaleDateString('en-us', {month:'2-digit'});
let myDate = `${today.getDate()}`;
let coffeeMenuOpen = false;
let teaMenuOpen = false;
let order = '';
let ordersDict = {};
let queue = 0;
let brewQueue = document.getElementById('brewQueue');

function increaseCoffeeCount(){
	coffeeCount++;
	localStorage.setItem('coffeeCount', coffeeCount);
	displayOrderCount();
};

//clear queue - off by 1 bug resolved by deleting the intial order until all orders are removed
function clrQueue(){
	let removeOrderHistory = document.getElementsByClassName('delete')
	for (let i=removeOrderHistory.length; i>0; i--){
		removeOrderHistory[0].parentNode.remove();
		queue--;
	}
};

//call clear queue function by clicking clear queue button
document.getElementById('clrq').addEventListener('click', function deleteQueueForever(){
	if(window.confirm('WARNING: Pressing "OK" will delete all of the stored orders!')){
		localStorage.removeItem('myBrewQueue');
		clrQueue();
		displayQueueCount();
	}
});

//on refresh or start get the saved order list
function start(){
	let recoveredList = localStorage.getItem('myBrewQueue');
	if (recoveredList != null){
		ordersDict = JSON.parse(recoveredList);
		for (let orderReference in ordersDict){
			if(ordersDict[orderReference].fulfilled == false){
				createBrewQueue(orderReference);
			};
		};
	};
	let recoveredCoffeeCount = localStorage.getItem('coffeeCount');
	if (recoveredCoffeeCount==null){
		let coffeeCount = 0;
		localStorage.setItem('coffeeCount', 0);
	}else{
		coffeeCount = recoveredCoffeeCount;
	};
	displayOrderCount();
};
start();

function displayOrderCount(){
	let cupCount = document.getElementsByTagName('h3')[1];
	cupCount.innerHTML=`Cup Count: ${coffeeCount}`;
};

function displayQueueCount(){
	let queueCount = document.getElementsByTagName('h3')[0];
	queueCount.innerHTML=`Queue: ${queue}`;
};

//hide or reveal the image in the order space to fill blank space
function fillWhiteSpace(){
	let displayImage = document.getElementById('backgroundImage');
	let queueCountDisplay = document.getElementsByTagName('h3')[0];
	if(queue == 0){
		displayImage.style.visibility='visible';
		queueCountDisplay.style.fontWeight='200';
	}else{
		displayImage.style.visibility='hidden';
		queueCountDisplay.style.fontWeight='400';
	}
};

//Data to create menu cards
let coffeeAbbrev = {'Bl-Am': 'Black Americano', 'Cap': 'Cappuccino', 'Bl-Fil': 'Black Filter', 'Fl-Wh': 'Flat White', 'Espr': 'Espresso', 'Latte': 'Latte', 'Macc': 'Macchiato', 'Mocha': 'Mocha'};
let teaAbbrev = {'Ch-L': 'Chai Latte', 'EG-T': 'Earl Grey Tea', 'Br-T': 'BreakfastTea', 'Gr-T': 'Green Tea', 'HCh': 'Hot Chocolate', 'Ma-T': 'Matcha Latte','Pep-T': 'Peppermint Tea'};
let customAbbrev = {'D': 'Decaf', 'Sk': 'Skinny', 'Ex': 'Extra Shot', 'Sy': 'Syrup', 'L': 'Large', 'M': 'Medium', 'S': 'Small'};

function createCards(location, label, abbrev){
	// create Card and append it to the location
	let card = document.createElement('div');
	card.classList.add('card');
	location.appendChild(card);
	// create card sections
	let top = document.createElement('div');
	top.classList.add('image');
	card.appendChild(top);
	let bottom = document.createElement('div');
	bottom.classList.add('detail');
	card.appendChild(bottom);
	//populate card with image and abbreviations
	top.innerHTML=`${label}`;
	//<img src=${image - "./images/coffeeLogo.jpg"} alt=${name - "coffee cup logo"}></img>
	bottom.innerHTML=`<button class="btnCard" id="${abbrev}" value="${abbrev}">${abbrev}</button>`;
};

//call create cards for items in customisations menu
function createCustomiseCards(){
	let customCards = document.getElementById('customCards');
	for (let custom in customAbbrev){
		createCards(customCards, customAbbrev[custom], custom);
		
		let orderButtonE = document.getElementById(`${custom}`);
		orderButtonE.addEventListener('click', function getOrder(){
			order = order + ' ' + orderButtonE.value;
			document.getElementById('addOrder').innerHTML = `Add Order: ${order}`;
		})
	};
};

function removeCards(){
	//remove created card set
	let cardsCreated = document.querySelectorAll('.card');
	for( let i=0; i<cardsCreated.length; i++){
		cardsCreated[i].remove();
	}
};

function createOrder(){
	//reference
	orderRef = myDate+coffeeCount;
	//name
	let fname = document.getElementById('textfname').value;
	if (fname == ''){fname = orderRef};
	orderObject = {
		guest: fname,
		drink: order,
		fulfilled: false
	};
	ordersDict[orderRef] = orderObject;
};

//on button click create card set for coffee menu items
document.getElementById('btnCoffee').addEventListener('click', function createCoffeeSelection(){
	//hide tea button
	document.getElementById('btnTea').style.visibility='hidden';
	createCustomiseCards();

	let coffeeCards = document.getElementById('coffeeCards');
	if (coffeeMenuOpen==false){
		for (let drink in coffeeAbbrev){
			createCards(coffeeCards, coffeeAbbrev[drink], drink);

			let orderButtonC = document.getElementById(`${drink}`);
			orderButtonC.addEventListener('click', function getOrder(){
				order = order + ' ' + orderButtonC.value;
				document.getElementById('addOrder').innerHTML = `Add Order: ${order}`;
			})
			coffeeMenuOpen = true;
		};
	}else{
		removeCards();
		//reset tea button
		document.getElementById('btnTea').style.visibility='visible';
		coffeeMenuOpen = false;
	};
});

//on button click create card set for tea & other menu items
debugger;
document.getElementById('btnTea').addEventListener('click', function createTeaSelection(){
	//hide coffee button
	document.getElementById('btnCoffee').style.visibility='hidden';
	createCustomiseCards();

	let teaCards = document.getElementById('teaCards');
	if (teaMenuOpen==false){
		for (let drink in teaAbbrev){
			createCards(teaCards, teaAbbrev[drink], drink);
			
			let orderButtonT = document.getElementById(`${drink}`);
			orderButtonT.addEventListener('click', function getOrder(){
				order = order + ' ' + orderButtonT.value;
				document.getElementById('addOrder').innerHTML = `Add Order: ${order}`;
			})
			teaMenuOpen = true;
		};
	}else{
		removeCards();
		//reset coffee button
		document.getElementById('btnCoffee').style.visibility='visible';
		teaMenuOpen = false;
	};
});

//when 'add order' button is clicked
document.getElementById('addOrder').addEventListener('click', function addOrderToQ(){
	increaseCoffeeCount();

	//add order to dictionary
	myKey = myDate+coffeeCount;
	createOrder();
	console.log(`new order: ${myKey}, ${ordersDict[myKey].drink}`);

	//Update local storage
	localStorage.setItem('myBrewQueue', JSON.stringify(ordersDict));

	//run function to re-create queue
	createBrewQueue(myKey);
	
	//remove background image if queue exists
	fillWhiteSpace();
	
	//reset order fields for next order
	document.getElementById('textfname').value='';
	order = '';
	let coffeeMenuOpen = false;
	let cardsCreated = document.querySelectorAll('.card');
	let teaMenuOpen = false;
	document.getElementById('addOrder').innerHTML = `Add Order`;
	//remove all cards
	for( let i=0; i<cardsCreated.length; i++){
		cardsCreated[i].remove();
	}

	//reset button visibility & queue style for next order
	document.getElementById('brewQueue').style.cssText='font-size: 18; font-style: normal; color: var(--black);';
	if (document.getElementById('btnTea').style.visibility='hidden'){
		document.getElementById('btnTea').style.visibility='visible';
	};
	if (document.getElementById('btnCoffee').style.visibility='hidden'){
		document.getElementById('btnCoffee').style.visibility='visible';
	};
});

//create BrewQueue using Orders Dictionary
function createBrewQueue(orderReference){
	
	//create order item
	let orderItem = document.createElement('div');
	orderItem.classList.add('newOrder');
	orderItem.innerHTML += `<span id='${orderReference}'>${ordersDict[orderReference].guest}: ${ordersDict[orderReference].drink}</span><button class='delete' name="${orderReference}">&#9749;</button>`;
	brewQueue.appendChild(orderItem);
	//add 1 to queue count & update queue count;
	queue++;
	displayQueueCount();
		
	//when order fulfilled click icon, change fulfilled property to true, recreate queue
	var currentOrder = document.querySelectorAll('.delete');
	for( let i=0; i<currentOrder.length; i++){
		currentOrder[i].onclick = function(){
			//strikethrough & change entity
			let reference = currentOrder[i].name
			this.innerHTML = '&#x2713;';
			document.getElementById(reference).style.textDecoration='line-through';
				
			//delete - this.parentNode.remove();
			function delayedRemoval(){
				currentOrder[i].parentNode.remove();
			}
			setTimeout(delayedRemoval, 5000);
				
			//update dictionary and update local storage
			ordersDict[Number(reference)].fulfilled = true;
			localStorage.setItem('myBrewQueue', JSON.stringify(ordersDict));
			//reduce queue and recount
			queue--;
			displayQueueCount();
				
			//recount queue and remove background image if queue is true
			fillWhiteSpace();
		};
	};
};

//reset cup count
let reset = document.getElementById('resetCupCount')
reset.addEventListener('click', function resetCupCount(){
	if(window.confirm("Do you want to reset cup count? WARNING: Resetting cup count will REMOVE cup count history permanently!")){
		localStorage.setItem('coffeeCount', 0);
	}
	displayOrderCount();
	location.reload();
	reset.style.visibility="hidden";
})

//Reveal Reset Button
document.getElementById('revealReset').addEventListener('mouseover', function reveal(){
	reset.style.visibility='visible';
	setTimeout(function hide(){
		reset.style.visibility='hidden';
	}, 3000);
})