
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
		questionText: "How often should I pump after leaving the hospital?",
		answers: ["A. Three times per day after nursing", "B. Three times per day before nursing", "C. After every nursing session", "D. Avoid the pump until two weeks before returning to work and just nurse on demand."],
		correctAnswersIndex: 3
	},
	{
		name: "Fourth question",
		questionText: "What equipment or supplements are necesary for succesful breastfeeding.",
		answers: ["A. A nursing chair and stool and a nursing pillow.",	"B. Probiotics, Omega 3's, oatmeal, fenugreek, brewer's yeast and Mother's Milk Tea.", "C. Your baby and your breasts.", "D. A breast-pump, tubing and bottles."],
		correctAnswersIndex: 2
	},
	{
		name: "Fifth question",
		questionText: "If I have an alchoholic beverage, when do I need to 'pump and dump'.",
		answers: ["A. Right away.", "B. Never, just wait one hour per drink for your liver to metabolize it out of your blood and milk.", "C. An hour after consumption.", "D. Right before nursing."],
		correctAnswersIndex: 1
	}
];
var currentQuestionIndex = 0;
console.log(currentQuestionIndex);

var currentQuestion = myQuestions[currentQuestionIndex];
console.log(currentQuestion);

function answersLoop() {
			for(var i = 0; i<currentQuestion.answers.length; i ++) {
				$('.current-answers').append("<input type='radio' name='A' value = '" + i + "'>" + currentQuestion.answers[i] + "<br>");
			}
		};

//var correctAnswer = [currentQuestion.answers.correctAnswersIndex];
//console.log(correctAnswer)
//render question to page
$("document").ready(function() {
	function correctOrNot(checked, correctAnswer) {
			if (checked == currentQuestionIndex) {
		 		$('.correct').html("You are correct!")
			} else {
				$('.correct').html("Incorrect<br> The correct answer is:<br>" + correctAnswer)
			};
		}
	$('.start-button').click(function(event) {
		event.preventDefault();
		$(".home").hide("slow");

		$('.current-question').append(currentQuestion.questionText);
		
		answersLoop();
		$(".home").hide("slow");
	})
	$(".current-answers").click(function() {
		
		//Get the value of the checked radio button.
		$(".current-question").hide("slow");
		$(".current-answers").hide("slow");
		var checked = $("input[name=A]:checked").val();
		console.log(checked);
		//Use the value to check if it's the same as "correctAnswer".
		var correctAnswer = currentQuestion.answers[currentQuestion.correctAnswersIndex];
		console.log("correctAnswer", correctAnswer);
		//If value of checked radio button is the same as "correct", display "correct".
		//Else, display ("Incorrect. The correct answer is" + correct);
		correctOrNot(checked, correctAnswer);
		//Show next button by toggling hidden class on click of .current-answers.
		$(".next").toggleClass("hidden");
	})
	$(".next").click(function () {
		$(".correct").hide("slow");
		currentQuestion = myQuestions[currentQuestionIndex +1];
		console.log(currentQuestion)
		$(".current-question").html(currentQuestion.questionText);
		$(".current-question").show("slow");
		console.log(currentQuestion);
		$('.current-answers').html(" ");
		answersLoop();
		$('.current-answers').show('slow');
	})
	$(".current-answers").click(function() {
		var checked = $("input[name=A]:checked").val();
		var correctAnswer = currentQuestion.answers[currentQuestion.correctAnswersIndex];
		correctOrNot(checked, correctAnswer);
		//Get the value of the checked radio button.
		$(".current-question").hide("slow");
		$(".current-answers").hide("slow");
	});
});

