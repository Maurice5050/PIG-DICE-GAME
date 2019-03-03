// $(document).ready(function(){
//   $("#button").click(function(){
//     var question1 = parseInt($("input:radio[name=gender]:checked")).val();
//     var("#button").click(function())
//   });
// });
// $(document).ready(function(){
// var("#button").click(function(){
//  var question2 = parseInt($("input:radio[name=gender1]:checked")).val();
// });
// });
// $(document).ready(function(){
//   $("#button").click(function(){
//     var question3 = parseInt($("input:radio[name=gender2]:checked")).val();
//     var("#button").click(function());
//   });
// });
// $(document).ready(function({
// $("#button").click(function(){
//   var question4 = parseTnt($("input:radio[name=gender2]:checked". val());
//   var("#button").click(function());
// });
// });
// $(document).ready(function({
// $("#button").click(function(){
//   var question5 = parseTnt($("input:radio[name=gender4]:checked". val());
//   var("#button").click(function());
// });
// });
//   var total = question1 + question2 + question3 + question4 + question5;
//   $(document).getElementById("output").inneHTML = "you have scored" = total;
// });
// });
function check(){
  var question  = document.questions.gender.value;
  var question1 = document.questions.gender1.value;
  var question2 = document.questions.gender2.value;
  var question3 = document.questions.gender3.value;
  var question4 = document.questions.gender4.value;
  var right=0;

  if (question == "javascript"){
     right+=20;
  }
  if (question1 == "reverse"){
    right+=20;
  }
  if (question2 == "forEach"){
    right+=20;
  }
  if (question3 == "Initialization takes place on a variable"){
    right+=20;
  }
  if (question4 == "once"){
    right+=20;
  }
  document.getElementById("output").innerHTML="Your score is " +  right  + "% ";
}
