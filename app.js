var questions = [
    {
        question: "What does HTML stand for?",
        answer: "Hyper Text Markup Language",
        options: [
            "Hyper Text Preprocessor",
            "Hyper Text Markup Language",
            "Hyper Text Multiple Language",
            "Hyper Tool Multi Language",
        ],
    },
    {
        question: "What does CSS stand for?",
        answer: "Cascading Style Sheet",
        options: [
            "Common Style Sheet",
            "Colorful Style Sheet",
            "Computer Style Sheet",
            "Cascading Style Sheet",
        ],
    },
    {
        question: "Is HTML a programming language?",
        answer: "NO",
        options: [
            "YES",
            "NO",
        ],
    },
    {
        question: "What does SQL stand for?",
        answer: "Structured Query Language",
        options: [
            "Stylish Question Language",
            "Stylesheet Query Language",
            "Statement Question Language",
            "Structured Query Language",
        ],
    },
    {
        question: "What does XML stand for?",
        answer: "eXtensible Markup Language",
        options: [
            "eXtensible Markup Language",
            "eXecutable Multiple Language",
            "eXTra Multi-Program Language",
            "eXamine Multiple Language",
        ],
    },

];


var displayque =  document.getElementById("displayquestion");
var CurrentQueNumber =  document.getElementById("currentQuestionNumber");
var TotalQueNumber =  document.getElementById("TotalQuestionNumber");
var OptionsParent = document.getElementById("optionsParent");

var indexVal = 0;
var marks = 0;

function renderQuestion(){
    var que = questions[indexVal];
    displayque.innerHTML = que.question;
    TotalQueNumber.innerHTML = questions.length;
    CurrentQueNumber.innerHTML = indexVal + 1;

    OptionsParent.innerHTML = " ";
    for(var i = 0; i<que.options.length; i++){
        OptionsParent.innerHTML += `<div class="col-md-6 mb-3  ">
        <button onclick = "CheckAns('${que.answer}','${que.options[i]}')" class="bg-info-subtle w-100 p-3  a">
        ${que.options[i]}
        </button>
    </div>`
    }
}
renderQuestion();

function nextQues(){
    indexVal++;
    renderQuestion();
}
function CheckAns(a,b){
    console.log(a,b);
    if(a == b){
        marks = marks + 1;
    }
    console.log(marks); 
    nextQues();

}
renderQuestion();