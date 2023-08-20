// so we have created a vairable question contain diffrent questoins
const questions =[
    {
        question: "National bird of india is?",
        answers:[
            {text : "Peacock", correct: true},
            {text : "Parrot", correct: flase},
            {text : "Sparrow", correct: flase},
            {text : "peigen", correct: flase},
        ]
    },
    {
        question: "National Animal of India is?",
        answers:[
            {text : "Dear", correct: false},
            {text : "Lion", correct: flase},
            {text : "Tiger", correct: true},
            {text : "Zebra", correct: flase},
        ]
    },
    {
        question: "National Capital of India is?",
        answers:[
            {text : "UP", correct: flase},
            {text : "New Delhi", correct: true},
            {text : "Haryana", correct: flase},
            {text : "Rajasthan", correct: flase},
        ]
    },
    {
        question: "National Game of india is?",
        answers:[
            {text : "Jevlien", correct: false},
            {text : "Tenis", correct: flase},
            {text : "Cricket", correct: flase},
            {text : "Hockey", correct: true},
        ]
    }
]; 
//questions
const ques= document.getElementById("question");
const answerButton = document.getElementById("answer-buttons");
const nextButton = document.getElementById