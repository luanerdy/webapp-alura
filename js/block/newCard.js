var $newCard = document.querySelector('.newCard');
var $newCardContent = document.querySelector('.newCard-content');
var $newCardAction = document.querySelector('newCard-action');

$newCard.addEventListener('submit', function (e) {

	e.preventDefault();

	var $wrapCard = document.querySelector('.wrap-card');
	var $card = document.querySelector('.card');
	var $copyCard = $card.cloneNode(true);
	var $content = $copyCard.querySelector('.card-content');
	
	$content.innerText = $newCardContent.value;

	$wrapCard.insertBefore($copyCard, $card);

	evento();

});