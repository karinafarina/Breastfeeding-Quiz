
var myQuestions = [
{
	name: "First question",
	questionText: "During the first six weeks after birth, about how many times per 24 hours should baby nurse?",
	answers: ["A. About 8-12 times per 24 hours/on demand.", "B. 2-3 times per 24 hour period.", "C. 20-30 times per 24 hour period", "D. 6-8 times per 24 hour period."],
	correct: 0
},

{
	name: "Second question",
	questionText: "What should I do if baby seems hungry right after nursing?",
	answers: ["A. 'Top them up' with a bottle of formula.", "B. Check that all other needs are met and then nurse the baby again.", "C. Give them a bottle of pumped milk.", "D. Let them cry until they fall asleep."],
	correct: "B. Check that all other needs are met and then nurse the baby again.",
},
{
	name: "Third question",
	questionText: "How often should I pump after leaving the hospital?",
	answers: ["A. Three times per day after nursing", "B. Three times per day before nursing", "C. After every nursing session", "D. Avoid the pump until two weeks before returning to work and just nurse on demand."],
	correct: 3
},
{
	name: "Fourth question",
	questionText: "What equipment or supplements are necesary for succesful breastfeeding.",
	answers: ["A. A nursing chair and stool and a nursing pillow.",	"B. Probiotics, Omega 3's, oatmeal, fenugreek, brewer's yeast and Mother's Milk Tea.", "C. Your baby and your breasts.", "D. A breast-pump, tubing and bottles."],
	correct: 2
},
{
	name: "Fifth question",
	questionText: "If I have an alchoholic beverage, when do I need to 'pump and dump'.",
	answers: ["A. Right away.", "B. Never, just wait one hour per drink for your liver to metabolize it out of your blood and milk.", "C. An hour after consumption.", "D. Right before nursing."],
	correct: 1
}
];
var myCurrentQuestion = 0;
console.log(myCurrentQuestion);


var currentQuestion = myQuestions[myCurrentQuestion];
console.log(currentQuestion);
//render question to page
$("document").ready(function() {
	$('.start-button').click(function(event) {
		event.preventDefault();
		
		console.log("I'm here");
		console.log(currentQuestion);
		console.log("I'm there");
		$('.current-question').append(currentQuestion.questionText);
		$('.current-answers').append("<input type='radio' name='A'>" + currentQuestion.answers[0] + "<br>");
		$('.current-answers').append("<input type='radio' name='A'>" + currentQuestion.answers[1] + "<br>");
		$('.current-answers').append("<input type='radio' name='A'>" + currentQuestion.answers[2] + "<br>");
		$('.current-answers').append("<input type='radio' name='A'>" + currentQuestion.answers[3] + "<br>");

		$(".home").hide("slow");
	});
	
	//Get the value of the checked radio button.
	var checked = $("form input[type='radio' name='.current-answers']:checked").val();
	console.log("checked", checked);
	/*
	//Use the value to check if it's the same as "correct".
	var correct = currentQuestion.correct;
	console.log(correct);
	//If value of checked radio button is the same as "correct", display "correct".
	//Else, display ("Incorrect. The correct answer is" + correct);
	$('.checked').click(function() {
		if (checked === currentQuestion.correct)
		{
		 	$('.correct').append("You are correct!")
		} else {
			$('.correct').append("Incorrect. The correct answer is " + correct + ".")
		};
		console.log(checked, currentQuestion.correct);
		//$('form').hide("slow");
	})*/
});

