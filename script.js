const quizData = [
    {
        question: 'A quel écrivain doit-on le personnage de Boule-de-Suif ?',
        a: 'Emile Zola',
        b: 'Stendhal',
        c: 'Guy de Maupassant',
        d: 'Gustave Flaubert',
        correct: 'c',
    }, {
        question: 'De quel groupe Jim Morrison était-il le chanteur ?',
        a: 'The Doors',
        b: 'The Who',
        c: 'Muse',
        d: 'Nirvana',
        correct: 'a',
    }, {
        question: 'Quel nom porte le bateau dont Théodore Géricault peint le radeau ?',
        a: 'Le Black Pearl',
        b: 'La Méduse',
        c: 'Valentino e Giovanni',
        d: 'Le Titanic',
        correct: 'b',
    }, {
        question: 'Si ce n\'est pas un fruit, qu\'est-ce qu\'un kiwi ?',
        a: 'Un oiseau',
        b: 'Un chien',
        c: 'Un singe',
        d: 'Un insecte',
        correct: 'a',
    }, {
        question: 'Quel rôle a fait la gloire de Rowan Atkinson à la télévision ?',
        a: 'Bozo le clown',
        b: 'Mr Bean',
        c: 'Benny Hill',
        d: 'JR',
        correct: 'b',
    }
];

const quiz = document.getElementById("quiz");
const answerEls = document.querySelectorAll(".answer");
const questionEl = document.getElementById("question");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const submitBtn = document.getElementById("submit");

let currentQuiz = 0;
let score = 0;

loadQuiz();

function loadQuiz() {
    deselectAnswers();

    const currentQuizData = quizData[currentQuiz];

    questionEl.innerText = currentQuizData.question;
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;
}

function getSelected() {
    let answer = undefined;

    answerEls.forEach(answerEl => {
        if(answerEl.checked) {
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

submitBtn.addEventListener("click", () => {
    // Check to see the answer
    const answer = getSelected();

    if(answer) {
        if(answer === quizData[currentQuiz].correct) {
            score++;
        }

        currentQuiz++;
        if(currentQuiz < quizData.length) {
            loadQuiz();
        } else {
            quiz.innerHTML = `
                <h2>Vous avez répondu correctement à ${score} questions sur ${quizData.length}.</h2>
                
                <button onclick="location.reload();">Recharger</button>
            `;
        }
    }
});