
//this is a front-end part
var answers=[]
var quizs=[1,2,3,4,5]
var scoes=[]
var average=0
var output
$(document).ready(function(){
  $("#buttonAns").click(function(quiz){
    for(i=0;i<quizs.length;i++){
      var choice=parseInt($("form input[name='"+ i + "']:checked").val());
      if(isNaN(choice)){
        alert("Please ensure you fill all questions")
        break;
      }
      else {
        scores.push(choice)
      }
    }
    // this is the business logic
    if(answers[0]===2){
      scres.push(3)

       if(answers[1]===3){
        scores.push(5)

        if(answers[2]===1){
          scores.push(2)

          if(answers[3]===2){
            scores.push(5)
            if(answers[4]===1){
              scores.push(5)
            }
            else {
              scores.push(0)
            }
          }
          else {
            scores.push(0)
          }
        }
        else {
          scores.push(0)
        }

        }
        else {
          scores.push(0)
        }

      }
    else {
      scores.push(0)
    }
    // Front end for posting answers
    average=scores.reduce((a,b)=>a+b,0)*5
      $("#hresult").text("scores:"+average+"%")
        $("#form").hide()
        $("#result").show()
      $("#prev").click(function(){
          $("#result").hide()
          window.location.reload();
          $("#form").show()

      // $("#form").show()
    })

  })

  $("#next").click(function(){
    $("#page").hide()
    $("#page1").show();
  });



})
