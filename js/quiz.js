// Dados do quiz
const quizData = [
    {
        question: "Qual é a tua maior habilidade?",
        options: [
            { text: "Trabalho manual e destreza", profession: "Ferreiro" },
            { text: "Liderança e estratégia", profession: "Cavaleiro" },
            { text: "Conhecimento e sabedoria", profession: "Escriba" },
            { text: "Devoção e espiritualidade", profession: "Monge" }
        ]
    },
    {
        question: "Como preferes passar o teu tempo?",
        options: [
            { text: "Criando e construindo coisas", profession: "Ferreiro" },
            { text: "Estudando e aprendendo", profession: "Escriba" },
            { text: "Rezando e contemplando", profession: "Monge" },
            { text: "Em atividades de ação", profession: "Cavaleiro" }
        ]
    },
    {
        question: "Qual é o teu estilo de vida ideal?",
        options: [
            { text: "Simples e contemplativo", profession: "Monge" },
            { text: "Ativo e aventureiro", profession: "Cavaleiro" },
            { text: "Produtivo e criativo", profession: "Ferreiro" },
            { text: "Intelectual e artístico", profession: "Escriba" }
        ]
    },
    {
        question: "Como lidas com desafios?",
        options: [
            { text: "Com criatividade e inovação", profession: "Ferreiro" },
            { text: "Com coragem e determinação", profession: "Cavaleiro" },
            { text: "Com análise e reflexão", profession: "Escriba" },
            { text: "Com paciência e fé", profession: "Monge" }
        ]
    },
    {
        question: "O que mais te motiva?",
        options: [
            { text: "Criar algo duradouro", profession: "Ferreiro" },
            { text: "Servir a comunidade", profession: "Monge" },
            { text: "Proteger os outros", profession: "Cavaleiro" },
            { text: "Preservar conhecimento", profession: "Escriba" }
        ]
    },
    {
        question: "Qual é o teu ambiente preferido?",
        options: [
            { text: "Uma oficina ou workshop", profession: "Ferreiro" },
            { text: "Uma biblioteca ou escritório", profession: "Escriba" },
            { text: "O campo ou cavalos", profession: "Cavaleiro" },
            { text: "Um mosteiro tranquilo", profession: "Monge" }
        ]
    },
    {
        question: "Como vês a tua responsabilidade?",
        options: [
            { text: "Defender e proteger", profession: "Cavaleiro" },
            { text: "Documentar a história", profession: "Escriba" },
            { text: "Desenvolver artesanato", profession: "Ferreiro" },
            { text: "Manter a fé viva", profession: "Monge" }
        ]
    },
    {
        question: "Qual é a tua visão do sucesso?",
        options: [
            { text: "Deixar um legado duradouro", profession: "Ferreiro" },
            { text: "Alcançar glória e honra", profession: "Cavaleiro" },
            { text: "Contribuir para o conhecimento", profession: "Escriba" },
            { text: "Encontrar paz interior", profession: "Monge" }
        ]
    }
];

// Dados das profissões
const professions = {
    "Ferreiro": {
        title: "🔨 Ferreiro",
        description: "O Ferreiro era um artesão essencial na Idade Média, responsável pela criação de ferramentas, armas e utensílios de ferro.",
        details: "Como ferreiro, tu és criativo, prático e apaixonado por construir coisas duradouras. A tua determinação e habilidades técnicas são notáveis. Trabalhas com precisão e não temes desafios!"
    },
    "Cavaleiro": {
        title: "⚔️ Cavaleiro",
        description: "O Cavaleiro era um guerreiro nobre, responsável pela defesa e proteção do reino, seguindo o código de honra medieval.",
        details: "Como cavaleiro, tu és corajoso, honrado e leal. A tua coragem e senso de justiça definem as tuas ações. Tens a capacidade de liderança e uma forte conexão com a lealdade!"
    },
    "Escriba": {
        title: "📜 Escriba",
        description: "O Escriba era um erudito responsável por copiar e preservar textos importantes, sendo fundamental para a manutenção do conhecimento.",
        details: "Como escriba, tu és inteligente, atencioso e apaixonado pelo conhecimento. A tua capacidade de aprendizagem é notável e tens um grande respeito pela preservação da história e da sabedoria!"
    },
    "Monge": {
        title: "🙏 Monge",
        description: "O Monge dedicava a sua vida ao serviço religioso, à contemplação espiritual e à vida comunitária em mosteiros.",
        details: "Como monge, tu és reflectivo, compassivo e espiritual. Tens uma profunda fé e um genuíno desejo de servir os outros. A tua serenidade e sabedoria inspiram aqueles ao teu redor!"
    }
};

let currentQuestion = 0;
let answers = [];

// Inicializar o quiz
function initQuiz() {
    answers = new Array(quizData.length).fill(null);
    currentQuestion = 0;
    document.getElementById('total-questions').textContent = quizData.length;
    renderQuestion();
}

// Renderizar a pergunta atual
function renderQuestion() {
    const questionCard = document.querySelector('.question-card');
    if (questionCard) {
        questionCard.remove();
    }

    const question = quizData[currentQuestion];
    const questionDiv = document.createElement('div');
    questionDiv.className = 'question-card active';
    
    let optionsHTML = '<div class="options">';
    question.options.forEach((option, index) => {
        const isChecked = answers[currentQuestion] === index ? 'checked' : '';
        optionsHTML += `
            <div class="option">
                <input type="radio" id="option${index}" name="answer" value="${index}" ${isChecked} 
                       onchange="selectAnswer(${index})">
                <label for="option${index}">${option.text}</label>
            </div>
        `;
    });
    optionsHTML += '</div>';

    questionDiv.innerHTML = `
        <div class="question-number">Pergunta ${currentQuestion + 1} de ${quizData.length}</div>
        <h3>${question.question}</h3>
        ${optionsHTML}
    `;

    document.getElementById('quiz-questions').appendChild(questionDiv);
    
    // Atualizar barra de progresso
    const progress = ((currentQuestion + 1) / quizData.length) * 100;
    document.getElementById('progress-fill').style.width = progress + '%';
    document.getElementById('current-question').textContent = currentQuestion + 1;

    // Atualizar botões
    document.getElementById('prev-btn').disabled = currentQuestion === 0;
    
    const nextBtn = document.getElementById('next-btn');
    const submitBtn = document.getElementById('submit-btn');
    
    if (currentQuestion === quizData.length - 1) {
        nextBtn.style.display = 'none';
        submitBtn.style.display = 'block';
    } else {
        nextBtn.style.display = 'block';
        submitBtn.style.display = 'none';
    }
}

// Selecionar resposta
function selectAnswer(index) {
    answers[currentQuestion] = index;
}

// Ir para pergunta anterior
function previousQuestion() {
    if (currentQuestion > 0) {
        currentQuestion--;
        renderQuestion();
    }
}

// Ir para próxima pergunta
function nextQuestion() {
    if (answers[currentQuestion] !== null) {
        if (currentQuestion < quizData.length - 1) {
            currentQuestion++;
            renderQuestion();
        }
    } else {
        alert('Por favor, seleciona uma resposta antes de continuar!');
    }
}

// Enviar quiz
function submitQuiz() {
    if (answers.some(answer => answer === null)) {
        alert('Por favor, responde a todas as perguntas!');
        return;
    }

    // Calcular resultado
    const scores = {};
    const professionNames = ['Ferreiro', 'Cavaleiro', 'Escriba', 'Monge'];
    
    professionNames.forEach(prof => {
        scores[prof] = 0;
    });

    answers.forEach((answerIndex, questionIndex) => {
        const selectedOption = quizData[questionIndex].options[answerIndex];
        scores[selectedOption.profession]++;
    });

    // Encontrar profissão com maior pontuação
    let maxScore = 0;
    let resultProfession = '';
    for (let prof in scores) {
        if (scores[prof] > maxScore) {
            maxScore = scores[prof];
            resultProfession = prof;
        }
    }

    showResult(resultProfession);
}

// Mostrar resultado
function showResult(profession) {
    const profData = professions[profession];
    
    const resultContent = document.getElementById('result-content');
    resultContent.innerHTML = `
        <div class="result-title">${profData.title}</div>
        <div class="result-content">
            <h2>Parabéns! 🎉</h2>
            <p><strong>${profData.description}</strong></p>
            <p>${profData.details}</p>
        </div>
    `;

    document.getElementById('quiz-content').style.display = 'none';
    document.getElementById('result-container').classList.add('show');
}

// Reiniciar quiz
function restartQuiz() {
    document.getElementById('quiz-content').style.display = 'block';
    document.getElementById('result-container').classList.remove('show');
    initQuiz();
}

// Iniciar quando a página carregar
document.addEventListener('DOMContentLoaded', initQuiz);
