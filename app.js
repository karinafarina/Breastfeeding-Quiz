

var myQuestions = [
	{
		name: "First question",
		questionText: "During the first six weeks after birth, about how many times per 24 hours should baby nurse?",
		answers: ["A. About 8-12 times per 24 hours/on demand.", "B. 2-3 times per 24 hour period.", "C. 20-30 times per 24 hour period", "D. 6-8 times per 24 hour period."],
		correctAnswersIndex: 0
	},

	{
		name: "Second question",
		questionText: "What should I do if baby seems hungry right after nursing?",
		answers: ["A. 'Top them up' with a bottle of formula.", "B. Check that all other needs are met and then nurse the baby again.", "C. Give them a bottle of pumped milk.", "D. Let them cry until they fall asleep."],
		correctAnswersIndex: 1
	},
	{
		name: "Third question",
		questionText: "Do I need to pump after baby is born and if so how often?",
		answers: ["A. Yes. Three times per day after nursing", "B. Yes. Three times per day before nursing", "C. Yes. After every nursing session", "D. No. Pumping is not normally necessary until two weeks before returning to work. Just nurse on demand."],
		correctAnswersIndex: 3
	},
	{
		name: "Fourth question",
		questionText: "What equipment or supplements if any are necessary for successful breastfeeding.",
		answers: ["A. A nursing chair and stool and a nursing pillow.",	"B. Probiotics, Omega 3's, oatmeal, fenugreek, brewer's yeast and Mother's Milk Tea.", "C. All you need are your baby and your breasts.", "D. A breast-pump, tubing and bottles."],
		correctAnswersIndex: 2
	},
	{
		name: "Fifth question",
		questionText: "If I have an alcoholic beverage, when do I need to 'pump and dump'.",
		answers: ["A. Right away.", "B. Never, just wait one hour per drink for your liver to metabolize it out of your blood and milk.", "C. An hour after consumption.", "D. Right before nursing."],
		correctAnswersIndex: 1
	}
];
var currentQuestionIndex = 0;

var runningScore = 0;


//render question to page
$("document").ready(function() {
	var checked = "";

	function isNotfinished(currentQuestionIndex, myQuestions) {

		return currentQuestionIndex < myQuestions.length;

	}
	
	
	function answersLoop(currentQuestion) {
		for(var i = 0; i<currentQuestion.answers.length; i++) {
			$('.current-answers').append("<li><input type='radio' name='A' value = '" + i + "'>" + currentQuestion.answers[i] + "</li>");
			
		}
	}

	function correctOrNot(checked, correctAnswer, currentQuestion) {
		if (checked == correctAnswer) {
		 	$('.correct').html("You are correct!");
		 	
		} else {
			$('.correct').html("Incorrect<br> The correct answer is:<br>" + currentQuestion.answers[correctAnswer]);


		}
	}

	function currentScore(correctAnswer, checked) {
		if(correctAnswer == checked) {
		 	runningScore++;
		 	console.log(runningScore);
			$(".running").html("<h2>" + "Running Score: " + runningScore +" correct out of 5" + "</h2>");
		} else {
			$(".running").html("<h2>" + "Running Score: " + runningScore + " correct out of 5" + "</h2>");
		}
	}
		
	
	$('.start-button').click(function(event) {
		$('.finished').html(' ');
		runningScore = 0;
		$(".running").html("<h2>" + "Running Score: " + runningScore +" correct out of 5" + "</h2>");
		$('.what-number').html(' ');
		$('.what-number').show('fast');
		$('.current-question').html(' ');
		$('.current-question').show('fast');
		$('.current-answers').html(' ');
		$('.current-answers').show('fast');
		console.log("starting")
		event.preventDefault();
		$('.what-number').append("Number 1 of 5");
		$(".home").hide("slow");
		var currentQuestion = myQuestions[currentQuestionIndex];
		$('.current-question').append(currentQuestion.questionText);
		answersLoop(currentQuestion);
		$(".home").hide("slow");
		

	});
	
	
	$('.current-answers').on("click", "input[name=A]:checked", function() {
		//Get the value of the checked radio button.
		checked = $("input[name=A]:checked").val();
		var currentQuestion = myQuestions[currentQuestionIndex];
		var correctAnswer = currentQuestion.correctAnswersIndex;
		$(this).closest('li');

		$(".current-question").hide("slow");
		$(".current-answers").hide("slow");
		//Use the value to check if it's the same as "correctAnswer".
		console.log(checked, correctAnswer, currentQuestion);
		correctOrNot(checked, correctAnswer, currentQuestion);
		currentScore(correctAnswer, checked);
		$(".correct").show("slow");
		
		if(currentQuestionIndex === myQuestions.length-1) {
			$('.end-button').show('slow');

		} else { 
			$(".next").show("slow");
		}
	});


	$(".next").click(function() {
		
		$(".correct").hide("slow");
		$(".next").hide("slow");
		currentQuestionIndex++;

		if(isNotfinished(currentQuestionIndex, myQuestions)) {

			console.log(currentQuestionIndex, "currentQuestionIndex");
			$(".what-number").html("Number " +(currentQuestionIndex + 1) + " of 5");
			var currentQuestion = myQuestions[currentQuestionIndex];
			var correctAnswer = currentQuestion.answers[currentQuestion.correctAnswersIndex];
			console.log(correctAnswer);
			var currentQuestionElement = $('.current-question');
			currentQuestionElement.html(currentQuestion.questionText);
			currentQuestionElement.show("slow");
			$('.current-answers').html(" ");
			answersLoop(currentQuestion);
			$('.current-answers').show('slow');

		} else {
			console.log('end-button');
			$('.what-number').hide("fast");
			$('.end-button').show("slow");

		}
	});

	$('.end-button').click(function() {
		$('.finished').append("You finished! Your final score is " + runningScore + " out of 5. Press start button to play again.");
		$('.what-number').hide('fast');
		$('.correct').hide('fast');
		$('.end-button').hide('slow');
		
		$('.home').show('slow');
		currentQuestionIndex = 0;
	

	});


		
});






