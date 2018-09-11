// the quiz begins, no answers correct, then +1 for each correct answer
var correct = 0;

// ask questions
var answer1  = prompt("Name a programming language that is also a gem");
if (answer1.toUpperCase()==='RUBY'){
  correct+=1;
}
var answer2 = prompt("Name a programming language that is also a snake");
if (answer2.toUpperCase()==='PYTHON'){
  correct+=1;
}
var answer3 = prompt("Name a language to style web pages");
if (answer3.toUpperCase()==='CSS'){
  correct+=1;
}
var answer4 = prompt("What language do you use to structure web pages");
if (answer4.toUpperCase()==='HTML'){
  correct+=1;
}
var answer5 = prompt("What language do you use to add interactivity to web pages");
if (answer5.toUpperCase()==='JAVASCRIPT'){
  correct+=1;
}

// Output results
document.write("<p>You got " + correct + " out of 5 questions correct.</p>");

// Output rank
if (correct === 5 ){
  document.write("<p><strong>You earned a gold crown!</strong></p>");
} else if (correct >= 3){
  document.write("<p><strong>You earned a silver crown.</strong></p>");
} else {
  document.write("<p><strong>No prize this time.</strong></p>");
}
