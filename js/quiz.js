// Dados do quiz - 7 profissões
const quizData = [
    {
        question: "Onde prefere trabalhar?",
        options: [
            { text: "Ao ar livre, sem me importar com o clima e a terra.", profession: "Terra/Servidão", flipIcon: "🌾", flipText: "Os camponeses trabalham diariamente nos campos, plantando e colhendo cereais. Estão ligados à terra e ao ciclo das estações." },
            { text: "Em fortalezas, campo de batalha ou na corte.", profession: "Poder/Honra", flipIcon: "⚔️", flipText: "Os guerreiros nobres treinam diariamente em fortalezas e castelos, sempre prontos para defender o reino e honra do Senhor." },
            { text: "Num escritório, câmara municipal ou na praça pública.", profession: "Lei/Burocracia", flipIcon: "📜", flipText: "Os oficiais fiscais trabalham nas cidades, registrando impostos, pesos e medidas para garantir a justiça nas transações." },
            { text: "Em feiras, portos e estradas de longa distância.", profession: "Comércio/Risco", flipIcon: "🛣️", flipText: "Os mercadores viajam constantemente entre cidades e portos, negociando especiarias, tecidos e bens valiosos, sempre em risco de assaltos." },
            { text: "Em mosteiros, boticas ou salas de estudo.", profession: "Saber/Cura", flipIcon: "📚", flipText: "Os monges e médicos dedicam-se ao estudo, copiando manuscritos e preparando ervas medicinais para cuidar dos enfermos." },
            { text: "Na minha oficina, perto do fogo ou do estaleiro.", profession: "Ofício Pesado", flipIcon: "🔨", flipText: "Os ferreiros e pedreiros trabalham em oficinas ruidosas, moldando metal e pedra com força bruta e precisão técnica." },
            { text: "Numa loja/oficina urbana, garantindo a venda direta.", profession: "Serviço/Artesanato", flipIcon: "🧵", flipText: "Os tecelões, padeiros e barbeiros trabalham em lojas urbanas, produzindo bens diários essenciais para a população." }
        ]
    },
    {
        question: "Qual é a sua prioridade?",
        options: [
            { text: "Garantir a subsistência anual após os impostos.", profession: "Terra/Servidão", flipIcon: "🌾", flipText: "A colheita é tudo. Após pagar tributos ao Senhor feudal, um camponês espera ter milho e grãos suficientes para alimentar a família." },
            { text: "Manter a honra e a eficácia militar do meu Senhor.", profession: "Poder/Honra", flipIcon: "⚔️", flipText: "Um cavaleiro jurou fidelidade. Sua honra e reputação militar são essenciais para manter o poder na hierarquia feudal." },
            { text: "Assegurar a ordem e a justiça nos pesos e medidas.", profession: "Lei/Burocracia", flipIcon: "⚖️", flipText: "Fiscais municipais verificam que nenhum comerciante engane o povo. A justiça nas transações mantém a ordem urbana." },
            { text: "Acumular lucro e gerir o risco das transações.", profession: "Comércio/Risco", flipIcon: "💰", flipText: "Um mercador investe em caravanas arriscadas. Se uma conseguir chegar com especiarias raras, o lucro é enorme mas o risco é real." },
            { text: "Preservar e aumentar o conhecimento ou a saúde.", profession: "Saber/Cura", flipIcon: "⚗️", flipText: "Monges preservam textos antigos enquanto médicos experimentam novas curas. O conhecimento é poder e salvação." },
            { text: "Criar algo duradouro usando a força e a técnica.", profession: "Ofício Pesado", flipIcon: "🔨", flipText: "Um ferreiro busca criar peças perfeitas que durem séculos. Sua destreza técnica é o que o define." },
            { text: "Fornecer um serviço essencial e diário à população.", profession: "Serviço/Artesanato", flipIcon: "🍞", flipText: "Um padeiro trabalha cada manhã para que o povo tenha pão fresco. Sua utilidade diária garante respeito na comunidade." }
        ]
    },
    {
        question: "Qual ferramenta prefere usar?",
        options: [
            { text: "Um arado, enxada ou foice.", profession: "Terra/Servidão", flipIcon: "🌾", flipText: "O arado é o símbolo do camponês. Com ele, o homem transforma a terra selvagem em campos produtivos, ano após ano." },
            { text: "Uma espada, lança ou armadura.", profession: "Poder/Honra", flipIcon: "⚔️", flipText: "A espada de um cavaleiro é sua identidade. Forjada com cuidado, ela representa sua dedicação e bravura em batalha." },
            { text: "Um rolo de pergaminho, pena ou balança de fiscalização.", profession: "Lei/Burocracia", flipIcon: "📜", flipText: "O fiscal carrega pergaminhos com registros cuidadosos. A balança garante que ninguém roube na medida do vinho ou trigo." },
            { text: "Moedas, crédito e a minha palavra.", profession: "Comércio/Risco", flipIcon: "💎", flipText: "Um comerciante negocia com moedas e crédito verbal. Sua reputação é mais valiosa que ouro; uma palavra quebrada o arruína." },
            { text: "Livros, tintas e pincéis, ou ervas medicinais.", profession: "Saber/Cura", flipIcon: "📖", flipText: "O monge copia manuscritos com tinta e pincel; o médico destila ervas. Ambos buscam preservar e expandir o saber antigo." },
            { text: "Um martelo pesado, bigorna ou serrote.", profession: "Ofício Pesado", flipIcon: "🔨", flipText: "O martelo bate sobre a bigorna com força ritmada. O serrote corta madeira com precisão. Ferramentas simples mas poderosas." },
            { text: "Um tear, fusos ou utensílios de cozinha/barbear.", profession: "Serviço/Artesanato", flipIcon: "🧵", flipText: "O tecelão trabalha horas no tear; o padeiro maneja fornos; o barbeiro afilia suas navalhas. Cada ferramenta é essencial." }
        ]
    },
    {
        question: "Qual é o seu estatuto social ou liberdade?",
        options: [
            { text: "Estou vinculado à terra e não posso sair livremente.", profession: "Terra/Servidão", flipIcon: "🌾", flipText: "Um servo está preso à terra do Senhor. Não pode sair sem permissão, mas tem direito a proteção em tempos de guerra." },
            { text: "Sou da Nobreza, e vivo da exploração da terra.", profession: "Poder/Honra", flipIcon: "👑", flipText: "A Nobreza possui terras e governam. Seu estatuto vem da linhagem e da capacidade de manter poder através da força militar." },
            { text: "Sou um funcionário municipal com autoridade sobre o Povo Miúdo.", profession: "Lei/Burocracia", flipIcon: "📜", flipText: "Fiscais e oficiais municipais têm autoridade delegada. Seu poder vem da lei escrita, não da força bruta." },
            { text: "Sou a classe mais móvel, rica e livre.", profession: "Comércio/Risco", flipIcon: "🛤️", flipText: "Mercadores podem viajar livremente. Apesar de não terem título nobre, sua riqueza os torna influentes e respeitados." },
            { text: "Dependo da minha vocação religiosa ou do meu conhecimento especializado.", profession: "Saber/Cura", flipIcon: "✝️", flipText: "Monges vivem sob votos de pobreza mas têm liberdade intelectual. Médicos ganham respeito pela expertise, não pelo nascimento." },
            { text: "Sou um Mestre de Ofício com autonomia na minha corporação.", profession: "Ofício Pesado", flipIcon: "⚒️", flipText: "Um Mestre ferreiro lidera sua corporação. Tem autonomia sobre produção e qualidade, e respeito entre seus aprendizes." },
            { text: "Sou um Mesteiral urbano que trabalha sob regras estritas de produção.", profession: "Serviço/Artesanato", flipIcon: "📋", flipText: "Mesteirais vivem em cidades sob rigorosas regras de corporação. Sua liberdade é limitada mas sua segurança garantida." }
        ]
    },
    {
        question: "Qual destas obrigações é a mais pesada?",
        options: [
            { text: "A Talha, a entrega de parte da minha colheita ao Senhor.", profession: "Terra/Servidão" },
            { text: "O serviço militar e o alto custo do meu equipamento.", profession: "Poder/Honra" },
            { text: "A fiscalização diária para evitar a fraude dos comerciantes.", profession: "Lei/Burocracia" },
            { text: "Gerir o risco de perder toda a mercadoria numa viagem.", profession: "Comércio/Risco" },
            { text: "A dedicação total ao estudo e o voto de pobreza (se aplicável).", profession: "Saber/Cura" },
            { text: "O cumprimento das regras rígidas de qualidade da Corporação.", profession: "Ofício Pesado" },
            { text: "A pressão para manter a produção diária de bens essenciais.", profession: "Serviço/Artesanato" }
        ]
    },
    {
        question: "Com quem ou onde se associa para trabalhar?",
        options: [
            { text: "Vivo e trabalho ligado a um Senhorio ou Feudo.", profession: "Terra/Servidão", flipIcon: "🌾", flipText: "Um camponês pertence a um feudo específico. Sua vida está entrelaçada com a do Senhor e os outros servos da terra." },
            { text: "Com a minha cavalaria e outros homens de armas.", profession: "Poder/Honra", flipIcon: "⚔️", flipText: "Um nobre comanda sua cavalaria. Juntos formam uma força militar leal, vinculada pela honra e pelo juramento." },
            { text: "Na Câmara Municipal ou nas ruas, representando a autoridade.", profession: "Lei/Burocracia", flipIcon: "📜", flipText: "Fiscais trabalham em conjunto na Câmara, aplicando as leis municipais de forma ordenada e imparcial." },
            { text: "Nas feiras, portos e rotas de longa distância.", profession: "Comércio/Risco", flipIcon: "🛤️", flipText: "Um mercador viaja com caravanas e outros negociantes. A solidariedade entre comerciantes pode ser crucial em viagens perigosas." },
            { text: "Com outros estudiosos, no meu scriptorium ou botica.", profession: "Saber/Cura", flipIcon: "📚", flipText: "Monges colaboram no scriptorium copiando textos; médicos trabalham com aprendizes aprendendo a preparar curas." },
            { text: "Na minha oficina sob a hierarquia de Aprendiz, Oficial e Mestre.", profession: "Ofício Pesado", flipIcon: "⚒️", flipText: "Um Mestre ferreiro lidera sua oficina com aprendizes e oficiais. A hierarquia garante transmissão de conhecimento." },
            { text: "Na minha loja com a ajuda familiar.", profession: "Serviço/Artesanato", flipIcon: "🧵", flipText: "Um mesteiral trabalha com membros da família na loja urbana. A unidade familiar garante produção e qualidade consistentes." }
        ]
    },
    {
        question: "O seu rendimento é baseado principalmente em quê?",
        options: [
            { text: "Na subsistência e no que resta após os deveres ao Senhor.", profession: "Terra/Servidão", flipIcon: "🌾", flipText: "Um servo recebe terras para cultivar e alimentar sua família. O resto pertence ao Senhor como taxa feudal." },
            { text: "Em rendas e impostos cobrados aos camponeses.", profession: "Poder/Honra", flipIcon: "👑", flipText: "A riqueza de um nobre vem das terras que possui. Os camponeses pagam-lhe em trabalho, bens e dinheiro." },
            { text: "No salário fixo pago pela autoridade da cidade ou do Rei.", profession: "Lei/Burocracia", flipIcon: "💰", flipText: "Um fiscal recebe um salário municipal. Sua sustentação vem dessa autoridade, não do comércio privado." },
            { text: "Na diferença de preço entre o local de compra e o de venda.", profession: "Comércio/Risco", flipIcon: "📊", flipText: "Um mercador compra barato em um porto e vende caro em outro. Seu lucro é a diferença, mas também seu risco." },
            { text: "Em donativos da Igreja ou em pagamentos por serviços de saúde/arte.", profession: "Saber/Cura", flipIcon: "✝️", flipText: "Monges vivem de donativos e a Igreja sustenta suas necessidades. Médicos cobram pelo atendimento aos enfermos." },
            { text: "No valor do trabalho manual e da mestria da transformação do material.", profession: "Ofício Pesado", flipIcon: "🔨", flipText: "Um ferreiro vende espadas, ferraduras, ferramentas. Seu preço reflete a qualidade de sua técnica." },
            { text: "Na venda direta de um produto ou na taxa por um serviço.", profession: "Serviço/Artesanato", flipIcon: "🍞", flipText: "Um padeiro vende pão; um barbeiro cobra por barbear; um tecelão vende tecido. Rendimento direto pela venda." }
        ]
    },
    {
        question: "Como a crise da Peste Negra o afetaria mais?",
        options: [
            { text: "Permitindo-me abandonar a terra e negociar melhores condições.", profession: "Terra/Servidão", flipIcon: "⚰️", flipText: "Com tantas mortes, a falta de mão de obra dá poder aos servos. Muitos abandonaram a terra, forçando melhorias nas condições." },
            { text: "Reduzindo o número de homens de armas disponíveis.", profession: "Poder/Honra", flipIcon: "⚔️", flipText: "A Peste dizima os exércitos. Um senhor perde seus homens de armas e capacidade militar, enfraquecendo-se perigosamente." },
            { text: "Desorganizando a administração da cidade e a cobrança de impostos.", profession: "Lei/Burocracia", flipIcon: "📜", flipText: "Cidades inteiras perdem seus funcionários. A administração colapsa e a justiça torna-se impossível de aplicar." },
            { text: "Colapsando o sistema de crédito e as rotas comerciais.", profession: "Comércio/Risco", flipIcon: "💔", flipText: "Mercadores morrem nas cidades. O crédito seca e as rotas comerciais fecham. Fortunas desaparecem da noite para o dia." },
            { text: "Aumentando a necessidade desesperada dos meus serviços.", profession: "Saber/Cura", flipIcon: "⚗️", flipText: "Médicos e monges são os últimos recursos. A Peste torna seus serviços desesperadamente procurados, dando-lhes poder raro." },
            { text: "Aumentando drasticamente o salário que posso exigir pelo meu ofício.", profession: "Ofício Pesado", flipIcon: "🔨", flipText: "Com tanta morte, há falta crítica de artesãos. Ferreiros podem exigir salários nunca vistos, adquirindo riqueza inesperada." },
            { text: "A escassez de mão de obra tornaria o meu produto muito mais caro.", profession: "Serviço/Artesanato", flipIcon: "🧵", flipText: "Sem aprendizes e ajudantes, a produção cai dramaticamente. O preço do pão sobe, beneficiando padeiros que sobrevivem." }
        ]
    },
    {
        question: "Que tipo de desafio enfrenta regularmente?",
        options: [
            { text: "Lutar contra a fome em anos de má colheita.", profession: "Terra/Servidão", flipIcon: "🌾", flipText: "Em anos ruins, a colheita falha. O servo enfrenta fome e morte, mesmo tendo que pagar impostos ao Senhor." },
            { text: "Lidar com a morte em batalha e manter a disciplina.", profession: "Poder/Honra", flipIcon: "⚔️", flipText: "Um cavaleiro vê companheiros caírem em batalha. Deve manter a coragem e disciplina apesar do medo constante." },
            { text: "Ter de fiscalizar um Mercador que tenta enganar o povo.", profession: "Lei/Burocracia", flipIcon: "⚖️", flipText: "Diariamente, fiscais enfrentam mercadores desonestos tentando fraude. A corrupção é tentadora mas a lei não permite." },
            { text: "Encontrar dinheiro para financiar a minha próxima expedição de bens.", profession: "Comércio/Risco", flipIcon: "💰", flipText: "Um mercador está constantemente sem fundos. Precisa encontrar crédito ou investidores para a próxima caravana valiosa." },
            { text: "Lidar com a falta de crença ou com a superstição do povo simples.", profession: "Saber/Cura", flipIcon: "📚", flipText: "Médicos lutam contra a superstição. O povo acredita em curas mágicas enquanto eles tentam ensinar medicina racional." },
            { text: "A dureza física do trabalho ou o risco de acidentes na oficina.", profession: "Ofício Pesado", flipIcon: "🔨", flipText: "Ferreiros enfrentam queimaduras, ferimentos por ferramentas pesadas e exaustão física diária sem parar." },
            { text: "Garantir a qualidade do meu produto sob o olhar da corporação.", profession: "Serviço/Artesanato", flipIcon: "📋", flipText: "A corporação fiscaliza constantemente. Um produto de má qualidade pode resultar em multas, vergonha pública ou banimento." }
        ]
    },
    {
        question: "Qual destes é o seu maior foco de atenção?",
        options: [
            { text: "A previsão do tempo e o estado da terra.", profession: "Terra/Servidão", flipIcon: "🌾", flipText: "Um camponês estuda o céu diariamente. Nuvens, vento, geada - cada sinal determina se haverá colheita ou fome." },
            { text: "A manutenção do meu cavalo e do meu equipamento de proteção.", profession: "Poder/Honra", flipIcon: "🐴", flipText: "Um cavaleiro dedica horas à manutenção de seu cavalo e armadura. Descuidado pode significar morte em batalha." },
            { text: "O registo da Lei das Sesmarias ou o controlo do preço do pão.", profession: "Lei/Burocracia", flipIcon: "📜", flipText: "Fiscais registram meticulosamente as leis que governam a distribuição de terras e controle de preços nos mercados." },
            { text: "A taxa de juro e a procura de especiarias no Mediterrâneo.", profession: "Comércio/Risco", flipIcon: "🧭", flipText: "Um mercador monitora constantemente as taxas de câmbio, o juro de crédito e a demanda de bens exóticos nos portos." },
            { text: "A descoberta de um novo remédio ou a perfeição da minha arte.", profession: "Saber/Cura", flipIcon: "⚗️", flipText: "Médicos e monges dedicam-se à experimentação. Um novo remédio ou iluminação pode trazer fama eterna." },
            { text: "O calor da forja ou a solidez da estrutura de uma ponte.", profession: "Ofício Pesado", flipIcon: "🏗️", flipText: "Um mestre ferreiro ou pedreiro foca-se em perfeição técnica. A qualidade de suas estruturas determinará sua legado." },
            { text: "O cliente que espera pelo meu produto ou serviço.", profession: "Serviço/Artesanato", flipIcon: "👥", flipText: "Um mesteiral pensa no cliente. O pão deve sair quente do forno, o tear deve produzir tecido perfeito todos os dias." }
        ]
    }
];

// Dados das profissões (7)
const professions = {
    "Terra/Servidão": {
        title: "🌾 Camponês/Servo",
        description: "Ligado à terra, trabalha arduamente para garantir a subsistência da comunidade e do senhorio.",
        details: "A tua ligação à terra é profunda. És resiliente, trabalhador e fundamental para a sobrevivência de todos.",
        flipText: "Trabalha na terra, cultiva cereais e legumes. Paga impostos ao Senhor feudal.",
        flipIcon: "🌾"
    },
    "Poder/Honra": {
        title: "🛡️ Nobre/Cavaleiro",
        description: "Defensor do reino, vive para a honra, a guerra e a proteção dos seus.",
        details: "A tua vida é guiada pela honra, coragem e liderança. És respeitado e temido em igual medida.",
        flipText: "Guerreiro da nobreza. Defende o reino e cumpre o código de cavalaria medieval.",
        flipIcon: "⚔️"
    },
    "Lei/Burocracia": {
        title: "📜 Funcionário/Burocrata",
        description: "Responsável pela ordem, justiça e administração das cidades e vilas.",
        details: "Tens um papel vital na organização social, garantindo que as regras são cumpridas e a justiça é feita.",
        flipText: "Guarda da ordem. Regula pesos, medidas, e justiça nas cidades medievais.",
        flipIcon: "⚖️"
    },
    "Comércio/Risco": {
        title: "💰 Mercador/Burguês",
        description: "Aventureiro do comércio, arrisca tudo para prosperar nas feiras e rotas comerciais.",
        details: "És destemido, perspicaz e sempre em busca de novas oportunidades e lucros.",
        flipText: "Comerciante viajante. Traz especiarias, sedas e ouro de terras distantes.",
        flipIcon: "💰"
    },
    "Saber/Cura": {
        title: "⚗️ Sábio/Curandeiro",
        description: "Dedicado ao conhecimento, à cura e ao progresso espiritual ou científico.",
        details: "A tua mente curiosa e o desejo de ajudar fazem de ti um pilar de sabedoria e esperança.",
        flipText: "Monge ou médico. Preserva conhecimento e cura os doentes com ervas e fé.",
        flipIcon: "⚗️"
    },
    "Ofício Pesado": {
        title: "🔨 Mestre de Ofício",
        description: "Especialista em trabalhos pesados, constrói, repara e transforma o mundo físico.",
        details: "A tua força, técnica e dedicação são essenciais para o desenvolvimento da sociedade.",
        flipText: "Ferreiro ou pedreiro. Cria ferramentas, armas e estruturas que duram séculos.",
        flipIcon: "🔨"
    },
    "Serviço/Artesanato": {
        title: "🧵 Artesão/Serviço Urbano",
        description: "Garante o funcionamento diário da cidade com serviços e produtos essenciais.",
        details: "és prático, habilidoso e indispensável para a vida urbana e o bem-estar coletivo.",
        flipText: "Tecelão, padeiro ou barbeiro. Fornece bens e serviços diários à população urbana.",
        flipIcon: "🧵"
    }
};

let currentQuestion = 0;
let answers = [];
let questionOrder = []; // Array com a ordem aleatória das perguntas

// Função para embaralhar array
function shuffleArray(array) {
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
}

// Inicializar o quiz
function initQuiz() {
    // Criar array com índices das perguntas (0 a 9)
    const allQuestionIndices = Array.from({ length: quizData.length }, (_, i) => i);
    // Embaralhar a ordem
    questionOrder = shuffleArray(allQuestionIndices);
    
    answers = new Array(quizData.length).fill(null);
    currentQuestion = 0;
    document.getElementById('total-questions').textContent = quizData.length;
    renderQuestion();
}

// Renderizar a pergunta atual
function renderQuestion() {
    window.isReadingFlip = false; // Resetar flag
    const questionCard = document.querySelector('.question-card');
    if (questionCard) {
        questionCard.remove();
    }

    // Obter o índice real da pergunta baseado na ordem aleatória
    const realQuestionIndex = questionOrder[currentQuestion];
    const question = quizData[realQuestionIndex];
    const questionDiv = document.createElement('div');
    questionDiv.className = 'question-card active';
    
    let optionsHTML = '<div class="options">';
    question.options.forEach((option, index) => {
        const isChecked = answers[currentQuestion] === index ? 'checked' : '';
        // Usar flipText/flipIcon da opção se existir, senão da profissão
        const flipIcon = option.flipIcon || professions[option.profession]?.flipIcon || '🏰';
        const flipText = option.flipText || professions[option.profession]?.flipText || 'Descrição não disponível';
        optionsHTML += `
            <div class="option" data-flip-icon="${flipIcon}" data-flip-text="${flipText.replace(/"/g, '&quot;')}">
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
    const continueBtn = document.getElementById('continue-btn');
    const submitBtn = document.getElementById('submit-btn');
    
    // Mostrar botão "Próximo" e esconder "Continuar"
    nextBtn.disabled = false;
    nextBtn.textContent = 'Próximo →';
    nextBtn.style.display = 'block';
    continueBtn.style.display = 'none';
    
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

// Animar flip da carta selecionada
function flipSelectedCard() {
    const selectedAnswer = answers[currentQuestion];
    const options = document.querySelectorAll('.option');
    const selectedElement = options[selectedAnswer];
    
    if (!selectedElement) return;

    const flipIcon = selectedElement.dataset.flipIcon || '🏰';
    const flipText = selectedElement.dataset.flipText || 'Descrição não disponível';

    // Adicionar classe para virar a carta
    selectedElement.classList.add('flip-selected');
    
    // Mostrar o conteúdo do flip
    selectedElement.innerHTML = `
        <div class="flip-content">
            <div class="flip-icon">${flipIcon}</div>
            <div class="flip-text">${flipText}</div>
        </div>
    `;

    // Esconder botão "Próximo" e mostrar botão "Continuar"
    document.getElementById('next-btn').style.display = 'none';
    document.getElementById('continue-btn').style.display = 'block';
    
    // Mudar estado de leitura
    window.isReadingFlip = true;
}

// Função para continuar após ler o flip
function continueFromFlip() {
    if (window.isReadingFlip) {
        window.isReadingFlip = false;
        currentQuestion++;
        renderQuestion();
    }
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
    // Se está lendo o flip, não faz nada (esperando clicar em Continuar)
    if (window.isReadingFlip) {
        return;
    }
    
    if (answers[currentQuestion] !== null) {
        if (currentQuestion < quizData.length - 1) {
            // Animar flip da carta selecionada
            flipSelectedCard();
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
    Object.keys(professions).forEach(prof => { scores[prof] = 0; });

    answers.forEach((answerIndex, posicao) => {
        // Obter o índice real da pergunta
        const realQuestionIndex = questionOrder[posicao];
        const selectedOption = quizData[realQuestionIndex].options[answerIndex];
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
    // lançar confetti quando o resultado aparecer
    try { launchConfetti(); } catch (e) { /* confetti optional */ }
}

// efeito confetti simples
function launchConfetti() {
    const wrapper = document.createElement('div');
    wrapper.className = 'confetti-wrap';
    document.body.appendChild(wrapper);

    const colors = ['#f94144','#f3722c','#f9c74f','#90be6d','#577590','#277da1'];

    for (let i = 0; i < 40; i++) {
        const c = document.createElement('div');
        c.className = 'confetti';
        c.style.left = Math.random() * 100 + '%';
        c.style.background = colors[Math.floor(Math.random() * colors.length)];
        c.style.width = (6 + Math.random() * 12) + 'px';
        c.style.height = (8 + Math.random() * 16) + 'px';
        c.style.top = (-20 - Math.random() * 30) + 'vh';
        c.style.opacity = 0.95;
        c.style.transform = `rotate(${Math.random() * 360}deg)`;
        c.style.animation = `confetti-fall ${3 + Math.random() * 3}s linear ${Math.random()*0.6}s forwards`;
        wrapper.appendChild(c);
    }

    // remover depois
    setTimeout(() => { wrapper.remove(); }, 7000);
}

// Reiniciar quiz
function restartQuiz() {
    document.getElementById('quiz-content').style.display = 'block';
    document.getElementById('result-container').classList.remove('show');
    initQuiz();
}

// Iniciar quando a página carregar
document.addEventListener('DOMContentLoaded', initQuiz);
