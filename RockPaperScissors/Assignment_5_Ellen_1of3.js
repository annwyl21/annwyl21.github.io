//global variables - change text once here and the game still works
//image name and string must match
//strings can be easily changed to use different images, eg lizard.jpg
const rock = 'rock';
const paper = 'paper';
const scissors = 'scissors';
const options = [rock, paper, scissors];

//global variables to update during the game
let gameStatus = 'readyToPlay';
let userChoice = '';
let gameCount = 0;
let userWon = 0;
let computerWon = 0;
let drawCount = 0;
let winnerImage = '';

//elements that are grabbed and updated during the game play
let imageArray = document.getElementsByClassName('image');
let btnLeft = document.getElementById('btnLeft');
let btnRight = document.getElementById('btnRight');
let btnMiddle = document.getElementById('btnMiddle');
let congrats = document.getElementsByTagName('h2')[0];
let winnerText = document.getElementsByTagName('h3')[0];

const rpsLogic = function(userChoice, computerChoice) {
	let matchWinner = '';
	switch(true){
		case userChoice==computerChoice: { 
		matchWinner='draw'}
		break;
		case userChoice==rock && computerChoice==scissors:
		matchWinner='you'
		break;
		case userChoice==scissors && computerChoice==paper:
		matchWinner='you'
		break;
		case userChoice==paper && computerChoice==rock:
		matchWinner='you'
		break;
		default: 
		matchWinner='computer'
	};
	return matchWinner;
};

//set images at start of game
function setImages(){
	for (i=0; i<imageArray.length; i++){
		imageArray[i].innerHTML=`<img src="./${options[i]}.jpg" alt="${options[i]}">`;
	};
}
function setButtonText(){
	btnLeft.innerHTML=options[0].toLocaleUpperCase();
	btnMiddle.innerHTML=options[1].toLocaleUpperCase();
	btnRight.innerHTML=options[2].toLocaleUpperCase();
}
setImages();
setButtonText();

btnLeft.addEventListener('click', function chooseRock(){
	userChoice = rock;
	startGame();
})

btnRight.addEventListener('click', function chooseScissors(){
		userChoice = scissors;
		startGame();
})

//the click events on the middle button manage the game play
btnMiddle.addEventListener('click', function choosePaper(){
	if (gameStatus=='readyToPlay'){
		userChoice = paper;
		startGame();
	}else if(gameStatus=='reveal'){
		reveal();
	}else{
		playAgain();
	}
})

function startGame(){
	//replace images to organise player choices
	imageArray[0].innerHTML=`<img src="./${userChoice}.jpg" alt="${userChoice}">`;
	imageArray[1].innerHTML=`<img src="./schrodinger.jpg" alt="computer choice">`;
	imageArray[2].innerHTML=`<img src="./${userChoice}.jpg" alt="${userChoice}">`;

	//hide left and right buttons
	btnLeft.style.visibility='hidden';
	btnRight.style.visibility='hidden';
	
	//replace text of middle button & update game status
	btnMiddle.innerHTML='REVEAL';
	gameStatus='reveal';
}

function reveal(){
	//Determine computer choice
	cardSelected = options[Math.round(Math.random()*2)];

	//Reveal Computer Choice
	imageArray[1].innerHTML=`<img src="./${cardSelected}.jpg" alt="${cardSelected}">`;

	determineWinner();

	//display scoreboard
	winnerText.style.visibility='visible';
	
	updateGamesPlayed();

	//Update game status
	gameStatus='reset';
}

function determineWinner(){
	let matchWinner = rpsLogic(userChoice ,cardSelected);
	winnerText.innerHTML=`${matchWinner.toLocaleUpperCase()}`;
	if (matchWinner == 'draw'){
		drawCount++;
		winnerImage='autumnLeaves';
	}else if(matchWinner == 'computer'){
		computerWon++;
		winnerImage='lightning';
		winnerText.innerHTML += " WON";
	}else{
		userWon++;
		winnerImage='balloons'
		winnerText.innerHTML += " WON";
	};
	imageArray[2].innerHTML=`<img src="./${winnerImage}.jpg" alt="${matchWinner} won">`;
}

function updateGamesPlayed(){
	gameCount++;
	congrats.innerHTML=`Games ${gameCount} of 3`;
	//console.log(`${userWon}, ${computerWon}, Games played ${gameCount}`);
	if (gameCount <3){
		btnMiddle.innerHTML='Play Again';
	}else{
		btnMiddle.style.visibility='hidden';
		setTimeout(celebrate, 2000);
	};
}

function celebrate(){
	congrats.style.color='var(--tea-green)';
	let gameWinner = '';
	if (userWon===computerWon){
		congrats.innerhtml="It's a Draw";
		winnerText.innerHTML=`${userWon}:${computerWon}<br>(Draws: ${drawCount})`;
		winnerImage = 'autumnLeaves';
		gameWinner = 'Draw';
	}else if (userWon>computerWon){
		congrats.innerHTML="Congratulations";
		winnerText.innerHTML=`You ${userWon}: Computer ${computerWon}<br>(Draws: ${drawCount})`;
		winnerImage = 'balloons';
		gameWinner = 'You won';
	}else{
		congrats.innerHTML="Good Game";
		winnerText.innerHTML=`Computer ${computerWon}: You ${userWon}<br>(Draws: ${drawCount})`;
		winnerImage = 'lightning';
		gameWinner = 'Computer Won';		
	};
	for (i=0; i<imageArray.length; i++){
		imageArray[i].innerHTML=`<img src="./${winnerImage}.jpg" alt="${gameWinner}">`;
	};

	//reload page after 5 seonds
	function delay(){
		location.reload()
	};
	setTimeout(delay, 5000);
}

function playAgain(){
	setImages();
	setButtonText();

	//unhide buttons
	btnLeft.style.visibility='visible';
	btnRight.style.visibility='visible';

	//hide scoreboard
	winnerText.style.visibility='hidden';

	//reset game status
	gameStatus='readyToPlay';
}
