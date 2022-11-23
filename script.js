let quizForm = document.querySelector("form");
let resultsBox = document.querySelector(".results");
let answerButton = document.querySelector(".points");
answerButton.addEventListener("click", handleForm);

function handleForm(){
    let points = 0;
    let answers = document.querySelectorAll("input:checked");
    for(let a = 0; a < answers.length; a++){
       points += parseInt(answers[a].value, 10);
    }
    console.log(points);

    //alert(`You got ${points} / 10 points!`)
    if(points > 10){
    quizForm.classList.toggle("hidden");
    document.querySelector(".point-label").innerHTML = points;
    resultsBox.classList.toggle("hidden");
    }

    else if(points == 0|| points < 10 || points < 0){
        quizForm.classList.toggle("hidden2");
    document.querySelector(".point-label").innerHTML = points;
    resultsBox.classList.toggle("hidden2");
    }
}

