const quizData = [
    {
        question: 'Who is the captain of team india?',
        a: 'virat kohli',
        b: 'sachin',
        c: 'sehwag,',
        d: 'bumrah',
        correct: 'a'
    }, {
        question: 'Who is the strongest country of 2020?',
        a: 'china',
        b: 'USA',
        c: 'india',
        d: 'UK',
        correct: 'c'
    }, {
        question: 'who is the president of USA?',
        a: 'Donald trump',
        b:'doland',
        c: 'Joe',
        d: 'joe biden',
        correct: 'd'
    }, {
        question: 'What does JS stands for?',
        a: 'javaSport',
        b: 'javascript',
        c: 'JVscript',
        d: 'javajava',
        correct: 'b'
    }, {
        question: 'Who is the vice-captain of team india?',
        a: 'virat kohli',
        b: 'sachin',
        c: 'sehwag,',
        d: 'rahul',
        correct: 'd'
    }
];
const quiz = document.getElementById('quiz');
const answerEls = document.querySelectorAll(".answer");
const questionEl = document.getElementById('question');
const a_text = document.getElementById('a_text');
const b_text = document.getElementById('b_text');
const c_text = document.getElementById('c_text');
const d_text = document.getElementById('d_text');
const submitBtn = document.getElementById('submit');
let currentQuiz = 0;
let score = 0;
loadQuiz();


function loadQuiz(){

    deselectorAnswers();

    const currentQuizData = quizData[currentQuiz];
    questionEl.innerText = currentQuizData.question; 
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;
}

function gotSelected(){
    
    let answer = undefined;
    answerEls.forEach((answerEl)=>{
        if(answerEl.checked){
            answer = answerEl.id;
        }
    });

    return answer;
}


function deselectorAnswers(){
    answerEls.forEach((answerEl)=>{
        answerEl.checked = false;
    });
}

submitBtn.addEventListener('click', ()=>{
    const answer = gotSelected();
    console.log(answer);

    if(answer){
        if (answer === quizData[currentQuiz].correct){
            score++;
        }
        currentQuiz++;
        if(currentQuiz < quizData.length){
            loadQuiz();
        } else{
            quiz.innerHTML = `<h2>You answered correctly in ${score}/${quizData.length} questions </h2><button onclick="location.reload()">Reload</button>`;
        }
    }

});


