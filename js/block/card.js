
var $cards = document.querySelectorAll('.card');

for (var i = 0; i < $cards.length; i++) {
	$cards[i].addEventListener('click', function(e) {
		var $this = e.target;
		var $card = this;
		var $cardContent = $card.querySelector('.card-content');

		if($this.dataset.color) {

			for (var i = 0; i < $this.parentNode.children.length; i++) {
				$this.parentNode.children[i].classList.remove('isActive');
			}

			$this.classList.add('isActive');

			$card.dataset.color = $this.dataset.color;

		}

		if($this.classList.contains('card_delete')) {
			$card.remove();
		}

		if($this.classList.contains('card_edit')){
			if($cardContent.getAttribute('contenteditable') === 'false'){
				$cardContent.setAttribute('contenteditable', 'true');
				$cardContent.focus();
				$this.classList.add('isActive');
			}
			else {
				$cardContent.setAttribute('contenteditable', 'false');
				$cardContent.blur();
				$this.classList.remove('isActive');
			}
		}
	});
}