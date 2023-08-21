// so we have created a vairable question contain diffrent questoins
const questions =[
    {
        question: "National bird of india is?",
        answers:[
            {text : "Peacock", correct: true},
            {text : "Parrot", correct: false},
            {text : "Sparrow", correct: false},
            {text : "peigen", correct: false},
        ]
    },
    {
        question: "National Animal of India is?",
        answers:[
            {text : "Dear", correct: false},
            {text : "Lion", correct: false},
            {text : "Tiger", correct: true},
            {text : "Zebra", correct: false},
        ]
    },
    {
        question: "National Capital of India is?",
        answers:[
            {text : "UP", correct: false},
            {text : "New Delhi", correct: true},
            {text : "Haryana", correct: false},
            {text : "Rajasthan", correct: false},
        ]
    },
    {
        question: "National Game of india is?",
        answers:[
            {text : "Jevlien", correct: false},
            {text : "Tenis", correct: false},
            {text : "Cricket", correct: false},
            {text : "Hockey", correct: true},
        ]
    }
]; 
//questions
const questionElement= document.getElementById("question");
const answerButton = document.getElementById("answer-buttons");
const nextButton = document.getElementById("button1");

let currentQuestionIndex= 0;
let score = 0;

function startquiz(){  
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion();
}

function showQuestion(){
    // to reset the state so function is:
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    // the +1 add to index so that question changes
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.
    question;

    // to display answers
    currentQuestion.answers.forEach(answer =>{
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButton.appendChild(button);
        if(answer.correct){
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click",selectAnswer);
    });

}

function resetState(){
    nextButton.style.display = "none";
    while(answerButton.firstChild){
        answerButton.removeChild(answerButton.firstChild);
    }
}

//to select the which answer here in this function
function selectAnswer(e){
    //when we click on the button it get selected SELECTEDBTN
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    // if the 'iscorrect' then it add in class CORRECT and it print INCORRECT in class.
    if(isCorrect){
        selectedBtn.classList.add("correct");
        //to increase the score
        score++;
    }else{
        selectedBtn.classList.add("incorrect");
    }
    //from array list so we took single element from array and check for "TRUE";
    Array.from(answerButton.children).forEach(button =>{
        if(button.dataset.correct === "true"){
            button.classList.add("correct");
        }
        //here you have to disabled the button so no-one. 
        button.disabled = true;
    });
    //it will display the button
    nextButton.style.display = "block";
}
function showScore(){
    resetState();
    questionElement.innerHTML = `You scored ${score} out of ${questions.length}!`;
    nextButton.innerHTML = "Play Again";
    nextButton.style.display = "block";
}

//HANDLE NEXT BUTTON
function handleNextButton(){
    currentQuestionIndex++;
    if(currentQuestionIndex < questions.length){
        showQuestion();
    }else{
        showScore();
    }
}

nextButton.addEventListener("click" ,()=>{
    // it will check for that and it will restart the quiz
    if(currentQuestionIndex < questions.length){
        handleNextButton();
    }else{
        startquiz();
    }
})
startquiz();