// Javascript code for TIC TAC TOE 2017 Ruhull Alam

//Contents
		// Name Input Functions : This is for the name input upon load
		// Start Game Functions : This replaces the name/title screen with the actual game board screen
		// Turn functions : This holds the functions records the turns and so changes player icons, it also allows the functions that print the 'watermark' and remove if during/after hover
		// Game functions: These functions set the rules, so the computer knows what to look for if a player gets 3 in a row, it also sets the winner screen, and a new game function
		
		//Currently no CPU option;

//////////Name Input functions//////////
var ticTacToe  = (function game() {

		var playerInput = document.getElementById("nameEntry");
		var playerName = playerInput.value;
		var secondGame = false; //when set true by new game function, doesn't allow playerName to be duplicated. 

		function showName() {
			if (secondGame === false) {
				if (playerInput.value.length === 0) 	{ //if no name is entered, it is set to default "Player1"
					playerName = "Player1";
					
				} 	else 	{
					playerName = playerInput.value;
					
					}
					var nameLabel = document.createElement("label");
				$('#player1').append(nameLabel);
				nameLabel.innerHTML = playerName;
			}
		}

		//////////End of Name Input function//////////

		////////////////Start Game function////////////

		var startButton = document.getElementsByClassName("button")[0];
		startButton.addEventListener("click", startGame)

		function startGame() {
			showName() 
			document.getElementById("start").style.display = "none";
			document.getElementsByClassName("board")[0].style.display = "block";
			toggleClass((Math.floor(Math.random() * 2) + 1)); //random player to start initially
		};

		///////////End of Start Game function///////


		/////////////////Turn functions/////////////////

		function toggleClass(i) { //function that ensures the active class is set and removed alternating between turns. 
			var j;
			
			if (i === 1) { 
				j =2
			} else {
				j = 1;
			}
			$('#player'+i).toggleClass('active');
			
			
			if ($('#player'+i).hasClass('active')) {
				$('#player'+j).toggleClass('active', false);
				imageAssigner(j)
				}  
			
		};

		var turn;
		function imageAssigner(j){
			if (j === 2) {
				turn = "url(img/o.svg)";
			} else {
				 turn = "url(img/x.svg)";
				}
		}


		for (i = 0; i < 9; i++) { //adds an event listener for each box, and calls relevant function linked to whatever mouse event
			var boxes = document.getElementsByClassName("box")[i];
				boxes.addEventListener("mouseenter", mark); //'watermarks' the current player symbol on the square
				boxes.addEventListener("click", confirmMove);	
				boxes.addEventListener("mouseleave", removeMark); //removes the current player symbol 'watermark' on the square
		}


		function mark() {
			if (this.innerHTML === "") {
				this.style.backgroundImage = turn;
				this.style.color = "#EFEFEF";
			}
		}
			
		function removeMark() {
			if (this.innerHTML === "") {
				this.style.backgroundImage = "none";
				this.style.backgroundColor =  "#EFEFEF";
				} 
			} 
			
		function confirmMove() {
			if (this.innerHTML === "") {
				if (turn ==="url(img/o.svg)") {
					this.innerHTML = "o";
					this.style.backgroundImage = "url(img/o.svg)";
					this.style.backgroundColor = "#FFA000"
					
						maxTurns++;
						checkWin("o")
						toggleClass(2);
						
					
				} else {
					this.innerHTML = "x";
					this.style.backgroundImage = "url(img/x.svg)";
					this.style.backgroundColor = "#3688C3"
					
						maxTurns++;
						checkWin("x")
						toggleClass(1);
						
				}
			}
		};

		/////////////////End of Turn functions/////////////////

		///////////////////Game functions ///////////////////
		var maxTurns = 0;
		var listBoxes = document.getElementsByClassName("box");
		var winScreen = document.getElementById("finish");

		function showWinScreen(value) {
			document.getElementById("board").style.display = "none";
			document.getElementById("finish").style.display = "inline";
					 if (value === "o") {
						document.getElementById("finish").style.backgroundColor = "#FFA000";
						winScreen.style.backgroundImage = "url(img/o.svg)";
						document.getElementsByClassName("message")[0].innerHTML = playerName + " is winner!";
					} else if (value === "x") {
						winScreen.style.backgroundImage = "url(img/x.svg)";
						document.getElementById("finish").style.backgroundColor = "#3688C3";
						document.getElementsByClassName("message")[0].innerHTML = "Player2 is Winner!";
					} else {
					document.getElementById("finish").style.backgroundColor = "#54D17A";
					
					winScreen.style.backgroundImage = "none";
					document.getElementsByClassName("message")[0].innerHTML = "DRAW";
					
				} 
					
		}

		function checkWin(value) {
			//horizontal wins
			if (listBoxes[0].innerHTML === value && listBoxes[1].innerHTML === value && listBoxes[2].innerHTML === value ) {
				 showWinScreen(value);
			} else if (listBoxes[3].innerHTML === value && listBoxes[4].innerHTML === value && listBoxes[5].innerHTML === value ) {
			 showWinScreen(value);
				} else if (listBoxes[6].innerHTML === value && listBoxes[7].innerHTML === value && listBoxes[8].innerHTML === value ) {
			 showWinScreen(value);
			 
					} //vertical wins
			else if (listBoxes[0].innerHTML === value && listBoxes[3].innerHTML === value && listBoxes[6].innerHTML === value ) {
			 showWinScreen(value);
			}	else if (listBoxes[1].innerHTML === value && listBoxes[4].innerHTML === value && listBoxes[7].innerHTML === value ) {
			 showWinScreen(value);
			}	else if (listBoxes[2].innerHTML === value && listBoxes[5].innerHTML === value && listBoxes[8].innerHTML === value ) {
			 showWinScreen(value);
			 
			}	//diagonal wins	
			else if (listBoxes[0].innerHTML === value && listBoxes[4].innerHTML === value && listBoxes[8].innerHTML === value ) {
			 showWinScreen(value);
			}	else if (listBoxes[2].innerHTML === value && listBoxes[4].innerHTML === value && listBoxes[6].innerHTML === value ) {
			 showWinScreen(value);
			 
			 //tie situation
			} else if (maxTurns === 9) {
					showWinScreen();
			}; 
			
		}

		var newGameButton = document.getElementsByClassName("button")[1]
		newGameButton.addEventListener("click", newGame);
		
		function newGame() {
			for (i = 0; i < 9; i++) { 
				var boxes = document.getElementsByClassName("box")[i];
					boxes.innerHTML= ""; //resets each box, removes value from previous game
					boxes.style.backgroundImage = "none"; //resets the neccessary screens
					boxes.style.backgroundColor = "#EFEFEF";
					}
				document.getElementById("finish").style.display = "none";//resets the neccessary screens
				maxTurns = 0; //resets the number of turns played.
				secondGame = true;
				startGame()
					}
		
} ());