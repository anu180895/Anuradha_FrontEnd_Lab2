const questionEl = document.querySelector("#question");
const choiceBtns = document.querySelectorAll(".buttons > button");
const choiceSpans = document.querySelectorAll(".buttons > button > span");
const progress = document.querySelector("#progress");

var qno = 0;
var correct = 0;

const questions = [
    {
        statement: "Which city called as orange city?",
        choices : {
            a : "Pune",
            b : "Banglore",
            c : "Nagpur",
            d : "Delhi",
        },
        answer: "c"
    },
    {
        statement: "Which statement is true?",
        choices : {
            a : "India is a state",
            b : "India is a country",
            c : "India is a mountain ",
            d : "India is name of a boy",
        },
        answer: "b"
    },
    {
        statement: "Which among these is a odd man out?",
        choices : {
            a : "Water",
            b : "Silver",
            c : "Copper",
            d : "Metal",
        },
        answer: "a"
    },
    {
        statement: "Which is one of the cardinal directions?",
        choices : {
            a : "Left Center",
            b : "North West",
            c : "Top right",
            d : "Bottom center",
        },
        answer: "b"
    },
    {
        statement: "Which among these is a city?",
        choices : {
            a : "India",
            b : "Paris",
            c : "Mumbai",
            d : "China",
        },
        answer: "c"
    },
];

function nextQ() {
    if( qno < questions.length ) {
        qno += 1;
    } 
}

function declareAnswer() {
    const quizArea = document.querySelector("#quiz");
    const percent = ( correct * 100 ) / questions.length;
    quizArea.innerHTML = `<h1>Result</h1><h2 id="score">Your Score: ${correct} / ${questions.length} <br />( ${percent}% )</h2>`;
}

function checkAnswer(selected) {

    switch( selected ) {
        case 'btn0':
        case 'choice0': if( questions[qno].answer == 'a' ){
                            correct += 1;
                        }
                        break;

        case 'btn1':
        case 'choice1': if( questions[qno].answer == 'b' ){
                            correct += 1;
                        }
                        break;

        case 'btn2':
        case 'choice2': if( questions[qno].answer == 'c' ){
                            correct += 1;
                        }
                        break;

        case 'btn3':
        case 'choice3': if( questions[qno].answer == 'd' ){
                            correct += 1;
                        }
                        break;

        default: alert('Error! Please click on the choices only');
    }

}

function setQuiz() {
    questionEl.innerText = "Q" + (qno+1) + ". " + questions[qno].statement;
    choiceSpans[0].innerText = questions[qno].choices.a;
    choiceSpans[1].innerText = questions[qno].choices.b;
    choiceSpans[2].innerText = questions[qno].choices.c;
    choiceSpans[3].innerText = questions[qno].choices.d;
    progress.innerText = `Question ${(qno+1)} of ${questions.length}`;
}

window.addEventListener( 'load', setQuiz );

choiceBtns.forEach(element => {
    element.addEventListener( 'click', e => {
        checkAnswer( e.target.id );
        nextQ();
        if( qno == questions.length ) {
            declareAnswer();
            return;
        }
        setQuiz();
    } );
});