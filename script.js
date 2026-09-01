/* =========================================
   MENU MOBILE
========================================= */

const menuBtn = document.getElementById("menuBtn");
const nav = document.querySelector(".nav");

menuBtn.addEventListener("click", () => {

    nav.classList.toggle("active");

});


/* Fecha o menu quando clicar em um link */

document.querySelectorAll(".nav a").forEach(link => {

    link.addEventListener("click", () => {

        nav.classList.remove("active");

    });

});


/* =========================================
   QUIZ
========================================= */

const questions = [

    {
        question:
            "Qual é um dos principais objetivos da agricultura sustentável?",

        answers: [
            "Aumentar a produção sem considerar os impactos ambientais.",
            "Produzir alimentos conciliando produção, conservação ambiental e aspectos sociais.",
            "Eliminar completamente o uso de tecnologia no campo.",
            "Utilizar a maior quantidade possível de água."
        ],

        correct: 1
    },

    {
        question:
            "Por que a conservação da água é importante para a agricultura?",

        answers: [
            "Porque a água não possui nenhuma relação com a produção agrícola.",
            "Porque apenas os animais precisam de água.",
            "Porque a água é um recurso essencial para as plantas, animais e atividades agrícolas.",
            "Porque a água deve ser utilizada sem nenhum tipo de planejamento."
        ],

        correct: 2
    },

    {
        question:
            "O que é biodiversidade?",

        answers: [
            "A variedade de seres vivos e ecossistemas existentes.",
            "A quantidade de máquinas existentes em uma fazenda.",
            "Apenas o número de espécies de plantas cultivadas.",
            "A quantidade de água disponível em uma região."
        ],

        correct: 0
    },

    {
        question:
            "Qual prática pode contribuir para a conservação do solo?",

        answers: [
            "Deixar o solo sempre exposto.",
            "Aumentar o revolvimento do solo sem planejamento.",
            "Eliminar toda a vegetação das áreas rurais.",
            "Utilizar práticas conservacionistas, como o plantio direto."
        ],

        correct: 3
    },

    {
        question:
            "Qual destas é uma fonte de energia renovável que pode ser utilizada no campo?",

        answers: [
            "Energia solar.",
            "Carvão mineral.",
            "Diesel.",
            "Gasolina."
        ],

        correct: 0
    },

    {
        question:
            "O que caracteriza a agricultura de precisão?",

        answers: [
            "A utilização de ferramentas tecnológicas para obter informações e tomar decisões mais precisas.",
            "A produção agrícola sem nenhum tipo de planejamento.",
            "O abandono de equipamentos tecnológicos.",
            "A utilização obrigatória da mesma quantidade de recursos em toda a propriedade."
        ],

        correct: 0
    },

    {
        question:
            "Qual é uma possível vantagem da rotação de culturas?",

        answers: [
            "Aumentar sempre o desgaste do solo.",
            "Contribuir para a conservação do solo e diversificar as culturas.",
            "Eliminar completamente a necessidade de planejamento.",
            "Impedir qualquer forma de produção agrícola."
        ],

        correct: 1
    },

    {
        question:
            "O que significa sustentabilidade no contexto agropecuário?",

        answers: [
            "Pensar apenas no lucro da propriedade.",
            "Produzir o máximo possível independentemente das consequências.",
            "Buscar equilíbrio entre aspectos ambientais, econômicos e sociais.",
            "Parar completamente a produção agrícola."
        ],

        correct: 2
    },

    {
        question:
            "Qual destas atitudes contribui para a preservação da biodiversidade?",

        answers: [
            "Destruir áreas de vegetação nativa.",
            "Eliminar habitats naturais.",
            "Manter áreas de vegetação e favorecer a existência de diferentes espécies.",
            "Reduzir a diversidade de plantas."
        ],

        correct: 2
    },

    {
        question:
            "Por que a tecnologia pode contribuir para um agro mais sustentável?",

        answers: [
            "Porque pode ajudar no monitoramento e no uso mais eficiente dos recursos.",
            "Porque elimina a necessidade de conhecimento técnico.",
            "Porque torna desnecessário qualquer planejamento.",
            "Porque sempre aumenta o consumo de recursos naturais."
        ],

        correct: 0
    }

];


/* =========================================
   ELEMENTOS DO QUIZ
========================================= */

const quizIntro = document.getElementById("quizIntro");

const quizBox = document.getElementById("quizBox");

const quizResult = document.getElementById("quizResult");

const startQuiz = document.getElementById("startQuiz");

const restartQuiz = document.getElementById("restartQuiz");

const questionNumber = document.getElementById("questionNumber");

const scoreDisplay = document.getElementById("scoreDisplay");

const progressBar = document.getElementById("progressBar");

const questionElement = document.getElementById("question");

const answersElement = document.getElementById("answers");

const nextQuestion = document.getElementById("nextQuestion");

const finalScore = document.getElementById("finalScore");

const resultTitle = document.getElementById("resultTitle");

const resultText = document.getElementById("resultText");

const resultIcon = document.getElementById("resultIcon");


/* =========================================
   VARIÁVEIS
========================================= */

let currentQuestion = 0;

let score = 0;

let selectedAnswer = false;


/* =========================================
   COMEÇAR
========================================= */

startQuiz.addEventListener("click", () => {

    currentQuestion = 0;

    score = 0;

    quizIntro.classList.add("hidden");

    quizResult.classList.add("hidden");

    quizBox.classList.remove("hidden");

    showQuestion();

});


/* =========================================
   MOSTRAR PERGUNTA
========================================= */

function showQuestion() {

    selectedAnswer = false;

    nextQuestion.disabled = true;

    answersElement.innerHTML = "";

    const question = questions[currentQuestion];

    questionNumber.textContent =
        `Pergunta ${currentQuestion + 1} de ${questions.length}`;

    scoreDisplay.textContent =
        `Pontos: ${score}`;

    questionElement.textContent =
        question.question;

    progressBar.style.width =
        `${((currentQuestion + 1) / questions.length) * 100}%`;


    question.answers.forEach((answer, index) => {

        const button = document.createElement("button");

        button.classList.add("answer");

        button.textContent = answer;

        button.addEventListener("click", () => {

            selectAnswer(button, index);

        });

        answersElement.appendChild(button);

    });

}


/* =========================================
   SELECIONAR RESPOSTA
========================================= */

function selectAnswer(button, index) {

    if (selectedAnswer) return;

    selectedAnswer = true;

    const question = questions[currentQuestion];

    const allAnswers =
        document.querySelectorAll(".answer");


    allAnswers.forEach(answer => {

        answer.disabled = true;

    });


    if (index === question.correct) {

        button.classList.add("correct");

        score++;

        scoreDisplay.textContent =
            `Pontos: ${score}`;

    } else {

        button.classList.add("wrong");

        allAnswers[question.correct]
            .classList.add("correct");

    }

    nextQuestion.disabled = false;

}


/* =========================================
   PRÓXIMA PERGUNTA
========================================= */

nextQuestion.addEventListener("click", () => {

    currentQuestion++;

    if (currentQuestion < questions.length) {

        showQuestion();

    } else {

        showResult();

    }

});


/* =========================================
   RESULTADO
========================================= */

function showResult() {

    quizBox.classList.add("hidden");

    quizResult.classList.remove("hidden");

    finalScore.textContent =
        `${score}/${questions.length}`;


    if (score <= 3) {

        resultIcon.textContent = "🌱";

        resultTitle.textContent =
            "Você está começando!";

        resultText.textContent =
            "Você já teve contato com alguns conceitos do agro sustentável, mas ainda pode aprender bastante. Que tal voltar ao conteúdo do site e tentar novamente?";

    }

    else if (score <= 6) {

        resultIcon.textContent = "🌿";

        resultTitle.textContent =
            "Bom trabalho!";

        resultText.textContent =
            "Você conhece vários conceitos importantes sobre sustentabilidade no campo. Continue aprendendo para aprofundar seus conhecimentos.";

    }

    else if (score <= 8) {

        resultIcon.textContent = "🌾";

        resultTitle.textContent =
            "Muito bem!";

        resultText.textContent =
            "Seu conhecimento sobre agro sustentável está muito bom. Você entende a importância de equilibrar produção, economia e preservação ambiental.";

    }

    else {

        resultIcon.textContent = "🌎";

        resultTitle.textContent =
            "Excelente!";

        resultText.textContent =
            "Parabéns! Você demonstrou um excelente conhecimento sobre práticas, tecnologias e princípios relacionados ao agro sustentável.";

    }

}


/* =========================================
   REFAZER
========================================= */

restartQuiz.addEventListener("click", () => {

    currentQuestion = 0;

    score = 0;

    quizResult.classList.add("hidden");

    quizBox.classList.remove("hidden");

    showQuestion();

});
