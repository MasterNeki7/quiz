let answerButton = document.querySelector(".points");
answerButton.addEventListener("click", handleForm);

function handleForm(){
    let points = 0;
    let answers = document.querySelectorAll("input:checked");
    for(let a = 0; a < answers.length; a++){
       points += parseInt(answers[a].value, 10);
    }
    console.log(points);
    alert(`You got ${points} / 10 points!`)
}

