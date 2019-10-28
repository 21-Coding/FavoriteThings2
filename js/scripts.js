$(document).ready(function(){
  $("form#favoritethings").submit(function(event){
    var answer1 = $('input#answer1').val();
    var answer2 = $('input#answer2').val();
    var answer3 = $('input#answer3').val();
    var answer4 = $('input#answer4').val();
    var answer5 = $('input#answer5').val();

    var answers = [answer1, answer2, answer3, answer4, answer5]
    event.preventDefault();
    console.log(answers)
  });
})
