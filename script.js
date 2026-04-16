// Сұрақтар базасы (3 қиындық деңгейіне бөлінген)
const questionsData = {
    lexica: {
        1: [
            { q: "«Дөң басындағы қойшының айғайымен қатар ауылдағы кәрі-жас,аттылы-жаяу иттерді...» Сөйлемдегі антонимнің рөлі қандай?", a: "Антонимдер қарама-қарсы ұғымдарды қатар қойып, барлық адамдарды толық қамтитынын көрсетеді." },
            { q: "«...Көксерек екі бүйірі суалып ашыққан». Тұрақты тіркесті тап және мағынасын түсіндір.", a: "«Екі бүйірі суалып» - Қатты ашығу, нәр сызбау." },
            { q: "«Осыдан соң екеуінің жұбы жазылған жоқ.» Тұрақты тіркестің мағынасы қандай?", a: "«Жұбы жазылған жоқ» - әрдайым бірге болды, айырылысқан жоқ." },
            { q: "«Құрмаш қасында болғанда таяқ жемейді.» Мағынасы неде?", a: "Таяқ жемейді - ұрыс-керістен аман болу, соққы алмау." },
            { q: "«Жалғыз-ақ кісі көзі тайса болды,кәзір жоқ қылады.» Тұрақты тіркес мақсаты?", a: "«Көзі тайса» - назарын басқа жаққа аудару мағынасында." }
        ],
        2: [
            { q: "«Әбден қас қараюға айналған уақытта Көксерек баяулап басып ауылға келді.» Тұрақты тіркестің мағынасы қандай?", a: "«Қас қараю» — кеш батып, қараңғылық түсе бастаған уақыт." },
            { q: "«Бадырайып қараған көздердей болып,әр жерден төрт бұрышты қызыл оттар көрінеді» Теңеу мағынасы?", a: "Қауіпті, үрейлі, суық көңіл-күйді білдіру үшін." },
            { q: "«Сіркесі су көтермейтін долы, ызалы.» Тұрақты тіркес мағынасы?", a: "Өте ашуланшақ, ызақор, тез ашуланатын адам." },
            { q: "«Бірақ үлкейісі даладағыдай емес,бәсеңдеу.» Көркемдегіш құрал?", a: "Теңеу («даладағыдай») - салыстыру мақсатында." },
            { q: "«...бұдан иесі көз жазып қала берді.» Тұрақты тіркестің мағынасы?", a: "«Көз жазып қалу» — жоғалтып алу, көзден таса қылу." }
        ],
        3: [
            { q: "«...көзден таса қылмай,қия бастырмай-ақ сақайған болады» Тұрақты тіркестердің мағынасы?", a: "Көзден таса қылмай - бақылауда ұстау; қия бастырмай - зиян келтірмеу." },
            { q: "«...жылқының жалындай қайратты,қатты» Қандай көркемдегіш құрал қолданылған?", a: "Теңеу: «Жылқының жалындай». Эпитет: «Қайратты, қатты»." },
            { q: "«...қып-қызыл болған қасқырдың жасыл көздері от шашады.» Эпитет пен тұрақты тіркесті түсіндір.", a: "Эпитет: қып-қызыл, жасыл. Тұрақты тіркес: от шашады." },
            { q: "«Көксерек зіңгіттей көк шолақ қасқыр болып шықты.» Көркемдегіш құрал мақсаты?", a: "Теңеу («зіңгіттей»). Көксеректің тез өсіп, нағыз түз тағысына айналғанын елестету." },
            { q: "«Атылып келе жатқан садақ оғындай үзілген,сүйірленген бір бітімі бар.» Теңеудің мақсаты?", a: "Бейненің жылдамдығын және өткір пішінін әсерлі көрсету." }
        ]
    },
    morph: {
        1: [
            { q: "«Қапаш-құпаш қорқ-қорқ етіп қомағай қанды ауыздар асайды.» Сөздің жазылу ерекшелігі?", a: "Еліктеуіш, сөзбен «сурет салу» немесе «дыбыс жазу»." },
            { q: "«Оның есебіне,екінші,үшінші ауылдар...» Сан есімнің түрі?", a: "Реттік сан есім." },
            { q: "«Аққасқа ізбен әлі жүріп келеді.» Жалқы есімді анықта.", a: "Аққасқа." },
            { q: "«Алдына құйып қойған асты әлі күнге...» Мекен үстеуін тап.", a: "Алдына." },
            { q: "«Бауырында кішкентай көк күшіктері қыбырлайды.» Қандай сөз таптары бар?", a: "Зат есім (бауырында, күшіктері), сын есім (кішкентай, көк), етістік (қыбырлайды)." }
        ],
        2: [
            { q: "«...ағаштар сарт-сарт түсіп жатты.» Еліктеу сөздің қызметі?", a: "«Сарт-сарт». Заттың қимылын, күйін елестетіп, әсерлі етіп жеткізеді." },
            { q: "«Жылқының екеуі қашып...» Қарамен жазылған сөз қай сөз табы?", a: "Екеуі - жинақтық сан есім." },
            { q: "«...бес-алты жігітпен бірге Аққасқаны ертіп...» Сан есім түрі мен себебі?", a: "Болжалды сан есім. Нақты санды емес, жуық мөлшерді білдіреді." },
            { q: "«Аз күнде бір болыс елдің әңгімесі болған Аққасқаның арғы тегін тексерушілер де көп еді.» Жалпы және жалқы есім?", a: "Жалқы: Аққасқа. Жалпы: тексерушілер." },
            { q: "«Бір сайда үш-төрт ат жайылып жүр екен.» Сан есімнің қай түрі?", a: "Болжалды сан есім." }
        ],
        3: [
            { q: "«...бірі артынан бірі: Кө-ө-к-к-се-ре-к! - деп, шақырып айқайлап жүгірді.» Сөзді бұлай жазу себебі?", a: "Сезімді немесе ерік-жігерді (бұйрық, шақыру) білдіру үшін." },
            { q: "«...таңертеңі,түсі,түні-бәрібір.» Мезгіл үстеуін тап және түсіндір.", a: "Таңертеңі, түсі, түні. Оқиғаның болу уақытын білдіреді." },
            { q: "«Осқырып, қорқып тұрған атты алқымынан алып, бауыздап түсті.» Сын-қимыл үстеуінің рөлі?", a: "Сөйлемге нақтылық беріп, іс-әрекеттің бейнесін аша түседі." },
            { q: "«Жетілмей келе жатқан тісі ғана.» Көсемше мен есімше қызметтері?", a: "Жетілмей келе – көсемше (әрекет), жатқан – есімше (тісінің күйі)." },
            { q: "«Атылып келе жатқан садақ оғындай үңілген, сүйірленген бір бітімі бар.» Есімшелерді тап.", a: "Үңілген, сүйірленген." }
        ]
    },
    syntax: {
        1: [
            { q: "«Дөң аспай, иттің бәрі де, адам атаулы да тоқтап қалды.» Жай сөйлемнің қай түрі?", a: "Жайылма сөйлем." },
            { q: "«Ол екі қасқыр еді.» Жалаң сөйлемге тән қасиет?", a: "Тек бастауыш және баяндауыштан тұруы." },
            { q: "«Кәпір,қыры,тағы емес пе!» Айтылу мақсатына қарай сөйлем түрі?", a: "Лепті сөйлем." },
            { q: "«Қыс қатты.» Жай сөйлемнің қай түрі?", a: "Жалаң сөйлем." },
            { q: "«Алдыңғы жағы арыстан бейнесіне ұқсайды.» Жай сөйлемнің қай түрі?", a: "Жайылма сөйлем." }
        ],
        2: [
            { q: "«Осы кештен екі күн өткен соң, Көксерек бір түн ішінде жоқ болды.» Бағыныңқының сұрақтары?", a: "Қашан? Қашаннан кейін?" },
            { q: "«Қораға жақындайын деп еді, көп иттер шулап үріп, маңайлатпады.» Құрмалас сөйлем түрі?", a: "Қимыл-сын бағыныңқылы сабақтас." },
            { q: "«Қара ала төбеттің иесі Жұмаш бала.» Айқындауыш мүшені тап.", a: "Жұмаш бала." },
            { q: "«Қора жанындағы жотаны тарта бергенде, төбет соңдарына түсті.» Неліктен мезгіл бағыныңқылы?", a: "Бағыныңқысы басыңқының мезгілін білдіреді, «қашан?» сұрағына жауап береді." },
            { q: "«Бірақ Қараадыр елі екі қасқырды ұмытқан жоқ...» Мағынасы бойынша түрі?", a: "Хабарлы сөйлем." }
        ],
        3: [
            { q: "«...Көксерек жалғыз өзі баяулап басып ауылға келді, бірақ үйге кірген жоқ.» Қарсылықты салалас болу себебі?", a: "«Бірақ» шылауының көмегімен жай сөйлемдер мағынасы бір-біріне қарама-қарсы болып тұр." },
            { q: "«Көксерек қашып кетті деуге қимай, айналадағы ши-қарағанды... тегіс арылтты, таба алмады.» Құрмалас түрі?", a: "Ыңғайлас салалас сөйлем." },
            { q: "«Сондайда ақ қасқыр жүрістен талып келіп, тынығып жатса, Көксерек айналасына қар боратады.» Сөйлем түрі?", a: "Шартты бағыныңқылы сабақтас." },
            { q: "«Аққасқа өте қабаған, сондықтан ауылға келгенде шынжырдан босамайды.» Сөйлем түрі?", a: "Себеп-салдар салалас құрмалас." },
            { q: "«...өзі барып таласпайды, бірақ ауылдың көп иті алдынан шығып... құтырып кетеді.» Сөйлем түрі?", a: "Қарсылықты салалас құрмалас сөйлем." }
        ]
    }
};

const boardPlan = [
    'start', 'lexica', 'morph', 'syntax', 'surprise', 'lexica', 'morph', 'syntax', 'random', 'lexica', 'morph', 
    'syntax', 'random', 'lexica', 'morph', 'surprise', 'syntax', 'lexica', 'morph', 'random',                  
    'syntax', 'lexica', 'morph', 'surprise', 'syntax', 'lexica', 'morph', 'random', 'syntax', 'lexica', 'morph',
    'syntax', 'random', 'lexica', 'morph', 'surprise', 'syntax', 'lexica', 'morph', 'syntax'                    
];

const totalCells = 40;
let teams = [
    { name: "🐺 Көксерек", pos: 0, points: 0, icon: "🐺" },
    { name: "🐕 Аққасқа", pos: 0, points: 0, icon: "🐕" },
    { name: "🐎 Құла бие", pos: 0, points: 0, icon: "🐎" },
    { name: "🦅 Қыран", pos: 0, points: 0, icon: "🦅" }
];
let currentTurn = 0;

function initBoard() {
    const board = document.getElementById('board');
    board.innerHTML = '';
    
    for (let i = 0; i < totalCells; i++) {
        const cell = document.createElement('div');
        cell.className = `cell cell-${boardPlan[i]}`;
        
        let label = "";
        if(boardPlan[i] === 'start') label = "БАСТАУ";
        if(boardPlan[i] === 'lexica') label = "Лексика";
        if(boardPlan[i] === 'morph') label = "Морфология";
        if(boardPlan[i] === 'syntax') label = "Синтаксис";
        if(boardPlan[i] === 'surprise') label = "🎁 Сыйлық";
        if(boardPlan[i] === 'random') label = "❓ Кездейсоқ";
        
        cell.innerHTML = `<span>${label}</span><div class="token-container" id="cell-tokens-${i}"></div>`;
        
        let row, col;
        if (i < 11) { row = 1; col = i + 1; }
        else if (i < 20) { row = (i - 11) + 2; col = 11; }
        else if (i < 31) { row = 11; col = 11 - (i - 20); }
        else { row = 11 - (i - 30); col = 1; }
        
        cell.style.gridRow = row;
        cell.style.gridColumn = col;
        board.appendChild(cell);
    }
    drawTokens();
}

function drawTokens() {
    for (let i = 0; i < totalCells; i++) {
        document.getElementById(`cell-tokens-${i}`).innerHTML = '';
    }
    teams.forEach((team) => {
        const span = document.createElement('span');
        span.className = 'token';
        span.innerText = team.icon;
        document.getElementById(`cell-tokens-${team.pos}`).appendChild(span);
    });
}

const modal = document.getElementById('modal');
const modalTitle = document.getElementById('modal-title');
const modalText = document.getElementById('modal-text');
const modalActions = document.getElementById('modal-actions');

function showModal(title, htmlContent, btns) {
    modalTitle.innerText = title;
    modalText.innerHTML = htmlContent;
    modalActions.innerHTML = '';
    btns.forEach(b => {
        const btn = document.createElement('button');
        btn.className = `glass-btn ${b.danger ? 'danger' : ''}`;
        btn.innerText = b.text;
        btn.onclick = b.action;
        modalActions.appendChild(btn);
    });
    modal.classList.remove('hidden');
}

function handleCell(team) {
    const type = boardPlan[team.pos];
    
    if (type === 'start') {
        showModal("Бастау", "Сіз бастапқы нүктедесіз.", [{ text: "Жалғастыру", action: nextTurn }]);
    } else if (type === 'surprise') {
        team.points += 2;
        document.getElementById(`score-${currentTurn}`).innerText = team.points;
        showModal("Сыйлық! 🎁", "Құттықтаймыз! Топқа тегін 2 ұпай берілді.", [{ text: "Рақмет!", action: nextTurn }]);
    } else {
        let category = type;
        let typeName = type === 'lexica' ? 'Лексика' : type === 'morph' ? 'Морфология' : 'Синтаксис';
        
        if (type === 'random') {
            typeName = "Кездейсоқ";
            const keys = ['lexica', 'morph', 'syntax'];
            category = keys[Math.floor(Math.random() * keys.length)];
        }
        
        showModal(
            `Тақырып: ${typeName}`, 
            `Қанша ұпайлық сұрақ таңдайсыз?`, 
            [
                { text: "1 ұпай (Жеңіл)", action: () => showQuestion(category, 1, typeName) },
                { text: "2 ұпай (Орташа)", action: () => showQuestion(category, 2, typeName) },
                { text: "3 ұпай (Қиын)", action: () => showQuestion(category, 3, typeName) }
            ]
        );
    }
}

function showQuestion(category, level, typeName) {
    const qList = questionsData[category][level];
    const randomQObj = qList[Math.floor(Math.random() * qList.length)];
    
    showModal(
        `${typeName} (${level} ұпай)`, 
        `<b>Сұрақ:</b><br>${randomQObj.q}`, 
        [{ text: "Жауапты шығару", action: () => showAnswer(randomQObj, level, typeName) }]
    );
}

function showAnswer(qObj, level, typeName) {
    showModal(
        `${typeName} (Тексеру)`, 
        `<b>Сұрақ:</b><br>${qObj.q}<br><br><b style="color: #2a5298;">Дұрыс жауап:</b><br>${qObj.a}`, 
        [
            { text: `✅ Дұрыс (+${level} ұпай)`, action: () => { teams[currentTurn].points += level; nextTurn(); } },
            { text: "❌ Қате (0 ұпай)", danger: true, action: nextTurn }
        ]
    );
}

function nextTurn() {
    modal.classList.add('hidden');
    document.getElementById(`score-${currentTurn}`).innerText = teams[currentTurn].points;
    document.getElementById(`team-${currentTurn}`).classList.remove('active');
    
    currentTurn = (currentTurn + 1) % 4;
    
    document.getElementById(`team-${currentTurn}`).classList.add('active');
    document.getElementById('current-team-name').innerText = teams[currentTurn].name;
    document.getElementById('roll-btn').disabled = false;
}

document.getElementById('roll-btn').onclick = function() {
    this.disabled = true;
    const roll = Math.floor(Math.random() * 6) + 1; // 1-ден 6-ға дейінгі сан
    document.getElementById('dice-value').innerText = roll;
    
    const team = teams[currentTurn];
    const oldPos = team.pos;
    
    // Жаңа орынды есептеу
    team.pos = team.pos + roll;

    // ЕГЕР ОЙЫНШЫ БІР АЙНАЛЫМДЫ АЯҚТАСА (40-тан асса немесе 40-қа жетсе)
    if (team.pos >= totalCells) {
        team.pos = 0; // Бастапқы нүктеге қою
        drawTokens();
        
        // Ойынды бірден аяқтау терезесін шығару
        setTimeout(() => {
            const winner = [...teams].sort((a,b) => b.points - a.points)[0];
            showModal(
                "Ойын аяқталды! 🏁", 
                `<b>${team.name}</b> мәреге жетіп, ойынды аяқтады!<br><br>` +
                `Жеңімпаз: <b>${winner.name}</b> (${winner.points} ұпай жинады).`, 
                [{ text: "Жаңа ойын", action: () => location.reload() }]
            );
        }, 600);
        return; // Функцияны осы жерден тоқтату
    }
    
    drawTokens();
    setTimeout(() => handleCell(team), 500);
};


document.getElementById('end-game-btn').onclick = function() {
    const winner = [...teams].sort((a,b) => b.points - a.points)[0];
    showModal("Ойын аяқталды! 🏆", `Ең көп ұпай жинаған:<br><b>${winner.name}</b> (${winner.points} ұпай)!`, [
        { text: "Қайта бастау", action: () => location.reload() }
    ]);
};

window.onload = initBoard;
