/*var $cardColors = document.querySelectorAll('.card-colors');
var $cards = document.querySelectorAll('.card');

for (var index = 0; index < $cardColors.length; index++) {

	$cardColors[index].addEventListener('click', trocaCor, true);

}

for (var index = 0; index < $cards.length; index++) {

	$cards[index].addEventListener('click', removeActive, true);

}

function trocaCor() {

	var $card = this.parentNode.parentNode.parentNode;
	$card.dataset.color = this.dataset.color;

	this.classList.add('isActive');

}

function removeActive() {
	let balls = this.children[0].children[0].children;
	for(var k = 0; k < balls.length; k++){
		balls[k].classList.remove('isActive');
	}
}*/

var $cards = document.querySelectorAll('.card');

for (var i = 0; i < $cards.length; i++) {
	$cards[i].addEventListener('click', function(e) {
		var $this = e.target;

		if($this.classList.contains('card-colors')) {

			var $card = this;

			for (var i = 0; i < $this.parentNode.children.length; i++) {
				$this.parentNode.children[i].classList.remove('isActive');
			}

			$this.classList.add('isActive');

			$card.dataset.color = $this.dataset.color;

		}
	});
}