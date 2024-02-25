const questions = [
    {
        question : "Which is largest animal in the World ?",
        ans : [
            {text : "Shark" , correct:false},
            {text : "Blue Whale" , correct:true},
            {text : "Elephant" , correct:false},
            {text : "Girafee" , correct:false},
        ]
    },
    {
        question : "Which is largest animal in the World ?",
        ans : [
            {text : "Shark" , correct:false},
            {text : "Blue Whale" , correct:true},
            {text : "Elephant" , correct:false},
            {text : "Girafee" , correct:false},
        ]
    },
    {
        question : "Which is largest animal in the World ?",
        ans : [
            {text : "Shark" , correct:false},
            {text : "Blue Whale" , correct:true},
            {text : "Elephant" , correct:false},
            {text : "Girafee" , correct:false},
        ]
    },
    {
        question : "Which is smallest continent in the World ?",
        ans : [
            {text : "Asia" , correct:false},
            {text : "Australia" , correct:true},
            {text : "Arctic" , correct:false},
            {text : "Africa" , correct:false},
        ]
    }
];

const questionele = document.getElementById("ques");
const ansbtn = document.getElementById("ans-buttn");
const next = document.getElementById("next-bttn");

let currentindex = 0;
let score = 0;

function startquiz(){
    currentindex = 0;
    score = 0;
    next.innerHTML = "Next";
    showQuestion();
}

function showQuestion(){
    reset();
    let currques = questions[currentindex];
    let quesnum = currentindex+1;
    questionele.innerHTML = quesnum + ". " + currques.question;

    currques.ans.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        ansbtn.appendChild(button);
        if(answer.correct){
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click",selectans);
    });
     

}
function reset(){
    next.style.display = "none";
    while(ansbtn.firstChild){
        ansbtn.removeChild(ansbtn.firstChild);
    }
}
function selectans(e){
      const selectbtn = e.target;
      const iscorrect = selectbtn.dataset.correct === "true";
      if(iscorrect){
        selectbtn.classList.add("correct");
        score++;
      }
      else{
        selectbtn.classList.add("incorrect");
      }
      Array.from(ansbtn.children).forEach(button=> {
        if(button.dataset.correct === "true"){
            button.classList.add("correct");
        }
        button.disabled = true;
      });
      next.style.display = "block";

}
function showscore(){
    reset();
    questionele.innerHTML = `You scored ${score} out of ${questions.length}!`;
    next.innerHTML = "Play Again";
    next.style.display = "block";
}
function handNextButton(){
    currentindex++;
    if(currentindex < questions.length){
        showQuestion();
    }
    else{
        showscore();
    }
}
next.addEventListener("click",()=>{
      if(currentindex < questions.length){
        handNextButton();
      }
      else{
        startquiz();
      }
});
startquiz();