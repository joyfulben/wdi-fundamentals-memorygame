const cards = [
{
	rank: "queen",
	suit: "hearts",
	cardImage: "images/queen-of-hearts.png"
},
{
	rank: "queen",
	suit: "diamonds",
	cardImage: "images/queen-of-diamonds.png"
},
{
	rank: "king",
	suit: "hearts",
	cardImage: "images/king-of-hearts.png"
},
{
	rank: "king",
	suit: "diamonds",
	cardImage: "images/king-of-diamonds.png"
}
];

let cardsInPlay = [];

let checkForMatch = function() {

	
	

	if (cardsInPlay[0] === cardsInPlay[1]) {
  	alert("You found a match!");
	} else {
  	alert("Sorry, try again.");
  	}
  
};


let flipCard = function () {

const cardId = this.getAttribute('data-id');
cardsInPlay.push(cards[cardId].rank);
this.setAttribute('src', cards[cardId].cardImage);
console.log("User flipped " + cards[cardId].rank);
console.log(cards[cardId].cardImage);
console.log(cards[cardId].suit);

if (cardsInPlay.length === 2) {
	checkForMatch();
} else if (cardsInPlay.length === 3) {
			resetBoard();
			};

};

function resetBoard() {

	alert("Sorry, no cheating!");
	document.getElementsByTagName('img')[0].setAttribute('src', "images/back.png");
};

function createBoard() {
	for (let i = 0; i < cards.length; i++) {
		let cardElement = document.createElement('img');
		cardElement.setAttribute('src', "images/back.png");
		cardElement.setAttribute('data-id', i);
		cardElement.addEventListener('click', flipCard);
		document.getElementById('game-board').appendChild(cardElement);
	
	}
};


createBoard();
