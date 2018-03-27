'use strict';

const QUESTIONS = [
	{question: "What kind of flour should you use for baking breads?",
	 answer1: "Soft wheat flour",
	 answer2: "Whole wheat flour",
	 answer3: "Hard wheat flour",
	 answer4: "Bleached flour",
	 correctanswer: "Hard wheat flour",
	},
	{question: "How do you measure your flour correctly?",
	 answer1: "Sift the flour",
	 answer2: "Use a spoon to transfer flour to measuring cup",
	 answer3: "Dip the measuring cup into flour",
	 answer4: "Eye-ball the measurement",
	 correctanswer: "Use a spoon to transfer flour to measuring cup",
	},
	{question: "Which of these is true?",
	 answer1: "A higher protein flour used in humid weather needs more flour",
	 answer2: "A lower protein flour used in humid weather needs more flour",
	 answer3: "A lower protein flour used in a less humid weather needs less flour",
	 answer4: "Flour that is stored near heat needs more flour",
	 correctanswer: "A lower protein flour used in humid weather needs more flour",
	},
	{question: "How should flour be stored?",
     answer1: "Somewhere that gets a lot of natural light",
     answer2: "In a breathable container",
     answer3: "In the freezer only",
     answer4: "In an airtight container, in a cool, dry place away from heat",
     correctanswer: "In an airtight container, in a cool, dry place away from heat",
 	}, 
    {question: "What is Gluten?",
     answer1: "A composite of storage proteins",
     answer2: "A chemical you add to your baked goods to make them taste better",
     answer3: "A dermatitis herpetiformis byproduct",
     answer4: "A chemical reaction between ataxia and saline",
     correctanswer: "A composite of storage proteins",
 	}

	]

let score=0
let itemIndex=0;
let questionNumber=1


	function generateOpeningElement(item, itemindex, template) {
		return`<div class= "openingpage js-opening-page">
					<h1 class="openmessage">Can You Take The Heat?</h1>
					<form action="" method="post" class="js-take-quiz-form">
						<button class= "js-take-quiz-button button" type="submit"><span>Take Quiz</span></button>
					</form>
				</div>`;
	}
	function openingPage() {
		console.log('opening page should open');
		$(`.js-container`).html(generateOpeningElement)
	}


	function generateQuestionElement(item, itemindex) {

		
		return `<div class= "questions" id=divQuestions>
					<form action="" method="post" class ="js-questionclass questionclass">
						<label for="breadQuestion1" class="labelBreadQ">${QUESTIONS[itemIndex].question}</label><br>
							<label><input type="radio" name="breadQuestion" id="a1" value="${QUESTIONS[itemIndex].answer1}" required = "required">${QUESTIONS[itemIndex].answer1}</label><br>
							<label><input type="radio" name="breadQuestion" id="a2" value="${QUESTIONS[itemIndex].answer2}" required = "required">${QUESTIONS[itemIndex].answer2}</lable><br>
							<label><input type="radio" name="breadQuestion" id="a3" value="${QUESTIONS[itemIndex].answer3}" required = "required">${QUESTIONS[itemIndex].answer3}</lable><br>
							<label><input type="radio" name="breadQuestion" id="a4" value="${QUESTIONS[itemIndex].answer4}" required = "required">${QUESTIONS[itemIndex].answer4}</lable><br>
							<input type="submit" value="Submit" class= "js-questioninput button">
					</form>
				<div>`;
	}

	function generateQuestion() {
		console.log("question page should open")
		$('.js-container').on('submit', '.js-take-quiz-form', function(event) {
			event.preventDefault();
		$('.js-container').html(generateQuestionElement)
		$('.js-questionNum').html(currentQuestion)
		$('.js-currScore').html(calcScore)
		})
			
	}


	function getCheckedRadio() {

		return $(`input:checked`).val();
		
	
	}


	function feedbackPopUp () {
	if (questionNumber !== QUESTIONS.length) {
		if (getCheckedRadio()==QUESTIONS[itemIndex].correctanswer) {
			score++;
			return `<div class="congrats">
						<h2 class="congratscss"><i class="fa fa-thumbs-up"></i> Congratulations!</h2><p> You answered correctly!</p>
						<form action="" method="post" class="js-nextQForm">
							<button class="js-nextQuestion button" input="submit">Next Question</button>
						</form>
					</div>`;
			
			}
				
		else {
					
			return `<div class="sorry">
						<h2 class="sorrycss"><i class="fa fa-thumbs-down"></i> Sorry! That was not the correct answer.</h2><p> The correct answer is ${QUESTIONS[itemIndex].correctanswer}</p>
						<form action="" method="post" class="js-nextQForm">
							<button class="js-nextQuestion button" input="submit">Next Question</button>
						</form>
					</div>`;
			}
	}
	else {
		if (getCheckedRadio()==QUESTIONS[itemIndex].correctanswer) {
			score++;
			return `<div class="congrats">
						<h2 class="congratscss"><i class="fa fa-thumbs-up"></i> Congratulations!</h2><p> You answered correctly!</p>
						<form action="" method="post" class="js-finishQForm">
							<button class="js-finishquiz button" input="submit">Finish Quiz</button>
						</form>
					</div>`;
			
			}
				
		else {
					
			return `<div class="sorry">
						<h2 class="sorrycss"><i class="fa fa-thumbs-down"></i> Sorry! That was not the correct answer.</h2><p> The correct answer is ${QUESTIONS[itemIndex].correctanswer}</p>
						<form action="" method="post" class="js-finishQForm">
							<button class="js-finishquiz button" input="submit">Finish Quiz</button>
						</form>
					</div>`;
			}
	}
}
	
	function generateFeedback() {
		console.log("feedback page should open")
		$('.js-container').on ('submit', '.js-questionclass', function(event) {
			event.preventDefault();
		$('.js-container').html(feedbackPopUp)
		})
	}

	function calcScore() {
		return `Score ${score}/${QUESTIONS.length}`;
}

	function generateScore() {
		console.log ("score should update")
		$('.js-container').on ('submit', '.js-questionclass', function(event) {
			event.preventDefault();
		$('.js-currScore').html(calcScore)
	})
}

	

	function currentQuestion () {
		return `Question ${questionNumber}/${QUESTIONS.length}`
	}
	function generateNextQuestions() {
			itemIndex++
			questionNumber++
			return generateQuestionElement;
	}

	function showNextQuestion() {
		console.log("next question should show up")
		$('.js-container').on ('submit', '.js-nextQForm', function() {
			event.preventDefault();
			$('.js-container').html(generateNextQuestions)
			$('.js-questionNum').html(currentQuestion)
		})
	}

	function finalScore () {
		if ((score/QUESTIONS.length)>=4/5) {
			return `<div class="goodscore">
						<h2>Contratulations! You scored ${score}/${QUESTIONS.length}.</h2><p>"You are the boss of that dough" - Julia Child</p>
						<form action="" method="post" class="js-takeAgainForm">
							<button class= "js-takeAgain button" input="submit">Take Quiz Again</button>
						</form>
					</div>`
		}
		else {
			return `<div class="badscore">
						<h2>Oops! Try Better!</h2><p> You Scored ${score}/${QUESTIONS.length}.</p>
						<form action="" method="post" class="js-takeAgainForm">
							<button class= "js-takeAgain button" input="submit">Take Quiz Again</button>
						</form>
					</div>`
		}
	}

	function finalscorePage () {
		console.log("final score page should open")
		$('.js-container').on('submit', '.js-finishQForm', function() {
			event.preventDefault();
			$('.js-container').html(finalScore)
		})
	}

	function generateTakeAgain () {
		$(`.js-container`).on ('submit', `.js-takeAgainForm`, function () {
			event.preventDefault();
			score=0
			itemIndex=0;
			questionNumber=1
			$(`.js-container`).html(generateOpeningElement)
		})
	}

	function renderApp () {
		openingPage();
		generateQuestion();
		generateFeedback();
		generateScore();
		showNextQuestion();
		finalscorePage();
		generateTakeAgain();


		
	}

	$(renderApp);