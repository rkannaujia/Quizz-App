const quizData = [
    {
        question : 'What is the most used programming language in 2021 ?',
        a : 'Java',
        b : 'Python',
        c : 'Javascript',
        d : 'C++',
        correct : 'd'
    }, {
        question : 'Which type of JavaScript language is ?',
        a : 'Object-Oriented',
        b : 'Object-Based',
        c : 'Assembly-language',
        d : 'High-level',
        correct : 'b'
    }, {
        question : 'Which one of the following also known as Conditional Expression ?',
        a : 'Alternative to if-else',
        b : 'Switch statement',
        c : 'If-then-else statement',
        d : 'immediate if',
        correct : 'd'
    }, {
        question : 'When interpreter encounters an empty statements, what it will do ?',
         a : 'Shows a warning',
         b : 'Prompts to complete the statement',
         c : 'Throws an error',
         d : 'Ignores the statements',
        correct : 'd'
    }, {
        question : 'The "function" and " var" are known as?',

        a : 'Keywords',
        b : 'Data types',
        c : 'Declaration statements',
        d : 'Prototypes',
        correct : 'c'
    },
];

const quiz =document.getElementById('quiz');
const answerEls = document.querySelectorAll(".answer");
const questionE1 = document.getElementById('question');
const a_text =document.getElementById('a_text');
const b_text =document.getElementById('b_text');
const c_text =document.getElementById('c_text');
const d_text =document.getElementById('d_text');
const submitBtn = document.getElementById('submit');

let currentQuiz = 0;
let score = 0;

loadQuiz();

function loadQuiz() {
    deselectAnswers();
    const currentQuizData = quizData[currentQuiz];
     
     questionE1.innerText = currentQuizData.question;
     a_text.innerText = currentQuizData.a;
     b_text.innerText = currentQuizData.b;
     c_text.innerText = currentQuizData.c;
     d_text.innerText = currentQuizData.d;
     
     
}
function getSelected () {
    let answer = undefined;

    answerEls.forEach((answerEl) => {
        if(answerEl.checked){
            answer = answerEl.id;
        }
    });

    return answer;
    
}

function deselectAnswers() {
    answerEls.forEach((answerEl) => {
        answerEl.checked = false;
    });
}

submitBtn.addEventListener('click', () => {
    //check to see the answer
    const answer = getSelected();

    if(answer) {
        if(answer === quizData[currentQuiz].correct){
            score++;
        }
        currentQuiz++;
        if(currentQuiz < quizData.length){
            loadQuiz();
        } else {
            quiz.innerHTML = `<h2>You answered correctly at ${score}/${quizData.length} questions.</h2> <button class="btn btn-success" onclick="location.reload()">Reload</button>`;
        }

       
    }
});

