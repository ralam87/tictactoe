// Javascript code for TIC TAC TOE 2017 Ruhull Alam
//Currently no CPU option;

var ticTacToe = (function game() {
	var playerInput = document.getElementById("nameEntry")
	var playerInput2 = document.getElementById("nameEntry2")
	var playerName = playerInput.value
	var playerName2 = playerInput2.value
	var secondGame = false
	var turn

	function showName() {
		if (!secondGame) {

			if (!playerInput.value) {
				playerName = "Player1"
			}	else {
				playerName = playerInput.value;
			}

			if (!playerInput2.value) {
				playerName2 = "Player2"
			}	else {
				playerName2 = playerInput2.value
			}

		var nameLabel = document.createElement("label")
		var nameLabel2 = document.createElement("label")

		$('#player1').append(nameLabel)
		$('#player2').append(nameLabel2)

		nameLabel2.innerHTML = playerName2
		nameLabel.innerHTML = playerName
		}
	}

	var startButton = document.querySelector(".button")
	startButton.addEventListener("click", startGame)

	function startGame() {
		showName()
		document.querySelector("#start").style.display = "none"
		document.querySelector(".board").style.display = "block"
		toggleClass((Math.floor(Math.random() * 2) + 1))
	};

	function toggleClass(i) {
		var j;

		if (i === 1) {
			j = 2
		} else {
			j = 1
		}
		$('#player'+i).toggleClass('active')

		if ($('#player'+i).hasClass('active')) {
			$('#player'+j).toggleClass('active', false)
			imageAssigner(j)
		}
	}

	function imageAssigner(j) {
		if (j === 2) {
			turn = "url(img/o.svg)"
		} else {
			turn = "url(img/x.svg)"
		}
	}

	for (i = 0; i < 9; i++) {
		var boxes = document.getElementsByClassName("box")[i]
		boxes.addEventListener("mouseenter", mark)
		boxes.addEventListener("click", confirmMove)
		boxes.addEventListener("mouseleave", removeMark)
	}

	function mark() {
		if (this.innerHTML === "") {
			this.style.backgroundImage = turn
			this.style.color = "#EFEFEF"
		}
	}

	function removeMark() {
		if (this.innerHTML === "") {
			this.style.backgroundImage = "none"
			this.style.backgroundColor = "#EFEFEF"
		}
	}

	function confirmMove() {
		if (this.innerHTML === "") {
			if (turn ==="url(img/o.svg)") {
				this.innerHTML = "o"
				this.style.backgroundImage = "url(img/o.svg)"
				this.style.backgroundColor = "#FFA000"

				maxTurns++;
				checkWin("o")
				toggleClass(2)
			} else {
				this.innerHTML = "x"
				this.style.backgroundImage = "url(img/x.svg)"
				this.style.backgroundColor = "#3688C3"

				maxTurns++
				checkWin("x")
				toggleClass(1)
			}
		}
	}

		var maxTurns = 0
		var listBoxes = document.getElementsByClassName("box")
		var winScreen = document.getElementById("finish")

		function showWinScreen(value) {
			document.querySelector("#board").style.display = "none"
			document.querySelector("#finish").style.display = "inline"

			if (value === "o") {
				document.querySelector("#finish").style.backgroundColor = "#FFA000"
				winScreen.style.backgroundImage = "url(img/o.svg)"
				document.querySelector(".message").innerHTML = playerName + " is winner!"
			} else if (value === "x") {
				winScreen.style.backgroundImage = "url(img/x.svg)"
				document.querySelector("#finish").style.backgroundColor = "#3688C3"
				document.querySelector(".message").innerHTML = "Player2 is Winner!"
			} else {
				document.querySelector("#finish").style.backgroundColor = "#54D17A"
				winScreen.style.backgroundImage = "none"
				document.querySelector(".message").innerHTML = "DRAW"
		}
	}

	function checkWin(value) {
		//horizontal wins
		if (listBoxes[0].innerHTML === value && listBoxes[1].innerHTML === value && listBoxes[2].innerHTML === value ) {
		 showWinScreen(value)
		} else if (listBoxes[3].innerHTML === value && listBoxes[4].innerHTML === value && listBoxes[5].innerHTML === value ) {
		 showWinScreen(value)
		} else if (listBoxes[6].innerHTML === value && listBoxes[7].innerHTML === value && listBoxes[8].innerHTML === value ) {
		 showWinScreen(value)
		}
		//vertical wins
		else if (listBoxes[0].innerHTML === value && listBoxes[3].innerHTML === value && listBoxes[6].innerHTML === value ) {
		 showWinScreen(value)
		}	else if (listBoxes[1].innerHTML === value && listBoxes[4].innerHTML === value && listBoxes[7].innerHTML === value ) {
		 showWinScreen(value)
		}	else if (listBoxes[2].innerHTML === value && listBoxes[5].innerHTML === value && listBoxes[8].innerHTML === value ) {
		 showWinScreen(value)
		}
		//diagonal wins
		else if (listBoxes[0].innerHTML === value && listBoxes[4].innerHTML === value && listBoxes[8].innerHTML === value ) {
		 showWinScreen(value)
		}	else if (listBoxes[2].innerHTML === value && listBoxes[4].innerHTML === value && listBoxes[6].innerHTML === value ) {
		 showWinScreen(value)
	 	}
		//tie situation
		else if (maxTurns === 9) {
			showWinScreen()
		}
	}

	var newGameButton = document.querySelectorAll(".button")[1]
	newGameButton.addEventListener("click", newGame)

	function newGame() {
		for (i = 0; i < 9; i++) {
			var boxes = document.querySelectorAll(".box")[i]
			boxes.innerHTML= ""
			boxes.style.backgroundImage = "none"
			boxes.style.backgroundColor = "#EFEFEF"
		}
		document.querySelector("#finish").style.display = "none"
		maxTurns = 0
		secondGame = true
		startGame()
	}
}())
