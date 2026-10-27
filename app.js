// ================================================================
// APP STATE & CONFIGURATION
// ================================================================
function getQuestions(arrayRef, windowPropName) {
    if (typeof window !== 'undefined' && window[windowPropName] && Array.isArray(window[windowPropName]) && window[windowPropName].length > 0) {
        return window[windowPropName];
    }
    try {
        if (typeof arrayRef !== 'undefined' && Array.isArray(arrayRef) && arrayRef.length > 0) {
            return arrayRef;
        }
    } catch(e) {}
    return [];
}

const BANKS = {
    'all':      { name: 'Banco Completo (Ejemplo)', questions: () => getQuestions(typeof questions !== 'undefined' ? questions : null, 'questions') },
    'week1':    { name: 'Semana 1 - Ecosistema Móvil', questions: () => getQuestions(typeof questionsWeek1 !== 'undefined' ? questionsWeek1 : null, 'questionsWeek1') },
    'week2':    { name: 'Semana 2 - Kotlin Fundamentos', questions: () => getQuestions(typeof questionsWeek2 !== 'undefined' ? questionsWeek2 : null, 'questionsWeek2') },
    'week3':    { name: 'Semana 3 - Kotlin Avanzado', questions: () => getQuestions(typeof questionsWeek3 !== 'undefined' ? questionsWeek3 : null, 'questionsWeek3') },
    'allNew':   { name: 'Todo el Contenido (RDA1)', questions: () => [
        ...getQuestions(typeof questions !== 'undefined' ? questions : null, 'questions'),
        ...getQuestions(typeof questionsWeek1 !== 'undefined' ? questionsWeek1 : null, 'questionsWeek1'),
        ...getQuestions(typeof questionsWeek2 !== 'undefined' ? questionsWeek2 : null, 'questionsWeek2'),
        ...getQuestions(typeof questionsWeek3 !== 'undefined' ? questionsWeek3 : null, 'questionsWeek3')
    ]},
    'rda2t4':   { name: 'RDA2 – Tema 4: Ciclo de Vida y Arquitectura', questions: () => getQuestions(typeof questionsRDA2Tema4 !== 'undefined' ? questionsRDA2Tema4 : null, 'questionsRDA2Tema4') },
    'rda2t56':  { name: 'RDA2 – Temas 5-6: UI Declarativa y Compose', questions: () => getQuestions(typeof questionsRDA2Tema56 !== 'undefined' ? questionsRDA2Tema56 : null, 'questionsRDA2Tema56') },
    'rda2t78':  { name: 'RDA2 – Temas 7-8: Material You y Navegación', questions: () => getQuestions(typeof questionsRDA2Tema78 !== 'undefined' ? questionsRDA2Tema78 : null, 'questionsRDA2Tema78') },
    'rda2mega': { name: 'RDA2 – Mega Banco (Temas 4, 5-6, 7-8)', questions: () => [
        ...getQuestions(typeof questionsRDA2Tema4 !== 'undefined' ? questionsRDA2Tema4 : null, 'questionsRDA2Tema4'),
        ...getQuestions(typeof questionsRDA2Tema56 !== 'undefined' ? questionsRDA2Tema56 : null, 'questionsRDA2Tema56'),
        ...getQuestions(typeof questionsRDA2Tema78 !== 'undefined' ? questionsRDA2Tema78 : null, 'questionsRDA2Tema78')
    ]}
};

// Estado de la aplicación
let activeBank = null;
let activeQuestions = [];

const state = {
    currentIndex: 0,
    answers: {},   // "bankName_index" -> selectedOptionIndex
    bookmarks: {}, // "bankName_index" -> boolean
    reviewMode: false,
    currentBank: null,
    shuffleState: null
};

// ================================================================
// DOM Elements
// ================================================================
const screenSelection = document.getElementById('screen-selection');
const screenQuiz = document.getElementById('screen-quiz');

const elements = {
    appTitle: document.getElementById('app-title'),
    questionText: document.getElementById('question-text'),
    optionsContainer: document.getElementById('options-container'),
    feedbackContainer: document.getElementById('feedback-container'),
    feedbackTitle: document.getElementById('feedback-title'),
    feedbackText: document.getElementById('feedback-text'),
    feedbackIcon: document.getElementById('feedback-icon'),
    btnPrev: document.getElementById('btn-prev'),
    btnNext: document.getElementById('btn-next'),
    btnBookmark: document.getElementById('btn-bookmark'),
    btnReset: document.getElementById('btn-reset'),
    btnFilter: document.getElementById('btn-filter'),
    btnExitFilter: document.getElementById('btn-exit-filter'),
    btnHome: document.getElementById('btn-home'),
    badgeStatus: document.getElementById('badge-status'),
    progressBar: document.getElementById('progress-bar'),
    questionCounter: document.getElementById('question-counter'),
    scoreCounter: document.getElementById('score-counter'),
    filterModeBanner: document.getElementById('filter-mode-banner'),
    btnShuffle: document.getElementById('btn-shuffle'),
    btnResetReview: document.getElementById('btn-reset-review'),
    btnSync: document.getElementById('btn-sync')
};

// ================================================================
// BANK KEY HELPERS (para separar el progreso por banco)
// ================================================================
function makeKey(index) {
    const q = activeQuestions[index];
    const origId = q ? q.originalIndex : index;
    return `${state.currentBank}_${origId}`;
}

// ================================================================
// INITIALIZATION
// ================================================================
function init() {
    try {
        if (typeof lucide !== 'undefined' && lucide.createIcons) {
            lucide.createIcons();
        }
    } catch (e) {
        console.warn('Advertencia al renderizar iconos Lucide:', e);
    }
    loadState();
    setupEventListeners();
    checkUrlSync();

    // Si había un banco activo, volver al quiz directamente
    if (state.currentBank && BANKS[state.currentBank]) {
        startQuiz(state.currentBank, false);
    }
}

function loadState() {
    const saved = localStorage.getItem('rda1_quiz_state_v2');
    if (saved) {
        try {
            const parsed = JSON.parse(saved);
            state.currentIndex = parsed.currentIndex || 0;
            state.answers = parsed.answers || {};
            state.bookmarks = parsed.bookmarks || {};
            state.reviewMode = parsed.reviewMode || false;
            state.currentBank = parsed.currentBank || null;
            state.shuffleState = parsed.shuffleState || null;
        } catch (e) {
            console.error('Error parsing state', e);
        }
    }
}

function saveState() {
    localStorage.setItem('rda1_quiz_state_v2', JSON.stringify(state));
}

// ================================================================
// BANK SELECTION
// ================================================================
let isSelectingBank = false;
function selectBank(bankName) {
    if (isSelectingBank) return;
    isSelectingBank = true;
    setTimeout(() => { isSelectingBank = false; }, 250);
    startQuiz(bankName, true);
}
if (typeof window !== 'undefined') {
    window.selectBank = selectBank;
}

function startQuiz(bankName, reset) {
    if (!BANKS[bankName]) {
        console.error('[Repaso Quiz] Banco desconocido:', bankName, 'Bancos disponibles:', Object.keys(BANKS));
        alert('No se encontró el banco seleccionado: "' + bankName + '". Por favor recarga con Ctrl+Shift+R.');
        return;
    }

    const bank = BANKS[bankName];
    const rawQuestions = bank.questions();

    if (!rawQuestions || !Array.isArray(rawQuestions) || rawQuestions.length === 0) {
        console.error('[Repaso Quiz] Preguntas vacías para el banco:', bankName);
        alert('Las preguntas de "' + bank.name + '" no se han cargado todavía. Presiona Ctrl+Shift+R para refrescar la página.');
        return;
    }

    state.currentBank = bankName;
    
    // Clonar las preguntas y asignarles un originalIndex
    let questions = rawQuestions.map((q, i) => ({
        ...q,
        originalIndex: i
    }));

    // Restaurar orden mezclado si existe
    if (state.shuffleState && state.shuffleState.bank === bankName && state.shuffleState.order) {
        const order = state.shuffleState.order;
        if (order.length === questions.length) {
            questions = order.map(origIdx => questions.find(q => q.originalIndex === origIdx));
        }
    }
    
    activeQuestions = questions;

    if (reset) {
        state.currentIndex = 0;
        state.reviewMode = false;
    }

    // Asegurarse de que el índice es válido
    if (state.currentIndex >= activeQuestions.length) {
        state.currentIndex = 0;
    }

    elements.appTitle.textContent = BANKS[bankName].name;

    screenSelection.classList.add('hidden');
    screenQuiz.classList.remove('hidden');

    saveState();
    renderQuestion();
}

function goHome() {
    screenQuiz.classList.add('hidden');
    screenSelection.classList.remove('hidden');
    // Reset feedback container
    if (elements.feedbackContainer) {
        elements.feedbackContainer.classList.add('hidden');
    }
    lucide.createIcons();
}

// ================================================================
// FILTER / REVIEW MODE
// ================================================================
function getFilteredIndices() {
    if (!state.reviewMode) {
        return activeQuestions.map((_, i) => i);
    }

    return activeQuestions.map((_, i) => i).filter(i => {
        const key = makeKey(i);
        const isBookmarked = state.bookmarks[key];
        const isAnsweredIncorrectly = state.answers[key] !== undefined &&
            state.answers[key] !== activeQuestions[i].correctIndex;
        return isBookmarked || isAnsweredIncorrectly;
    });
}

// ================================================================
// RENDERING
// ================================================================
function renderQuestion() {
    const validIndices = getFilteredIndices();

    if (validIndices.length === 0) {
        if (state.reviewMode) {
            elements.questionText.textContent = "¡Felicidades! No tienes preguntas marcadas ni incorrectas para repasar en este banco.";
            elements.optionsContainer.innerHTML = '';
            elements.feedbackContainer.classList.add('hidden');
            elements.badgeStatus.textContent = "Sin pendientes";
            elements.badgeStatus.className = "badge correct";
            updateControls(validIndices);
            updateProgress();
            return;
        }
    }

    // NO forzar state.currentIndex aquí. Esto permite que si el usuario responde bien 
    // o desmarca la pregunta en modo repaso, siga viéndola hasta que navegue manualmente.

    const globalIndex = state.currentIndex;
    const question = activeQuestions[globalIndex];
    if (!question) return;

    const key = makeKey(globalIndex);

    // Texto de la pregunta
    elements.questionText.textContent = question.question;

    // Estado del Bookmark
    const isBookmarked = !!state.bookmarks[key];
    elements.btnBookmark.classList.toggle('bookmarked', isBookmarked);

    // Renderizar opciones
    elements.optionsContainer.innerHTML = '';
    const letters = ['A', 'B', 'C', 'D'];
    const hasAnswered = state.answers[key] !== undefined;
    const selectedAnswer = state.answers[key];

    question.options.forEach((opt, idx) => {
        const btn = document.createElement('button');
        btn.className = 'option';

        if (hasAnswered) {
            btn.classList.add('disabled');
            if (idx === question.correctIndex) btn.classList.add('correct');
            else if (idx === selectedAnswer) btn.classList.add('incorrect');
        } else {
            btn.addEventListener('click', () => handleOptionClick(idx));
        }

        btn.innerHTML = `<span class="option-letter">${letters[idx]}.</span><span class="option-text">${opt}</span>`;
        elements.optionsContainer.appendChild(btn);
    });

    // Badge de estado
    if (!hasAnswered) {
        elements.badgeStatus.textContent = "Sin responder";
        elements.badgeStatus.className = "badge";
        elements.feedbackContainer.classList.add('hidden');
    } else {
        const isCorrect = selectedAnswer === question.correctIndex;
        elements.badgeStatus.textContent = isCorrect ? "✓ Correcto" : "✗ Incorrecto";
        elements.badgeStatus.className = `badge ${isCorrect ? 'correct' : 'incorrect'}`;

        elements.feedbackContainer.classList.remove('hidden', 'correct', 'incorrect');
        elements.feedbackContainer.classList.add(isCorrect ? 'correct' : 'incorrect');
        elements.feedbackTitle.textContent = isCorrect ? "¡Excelente!" : "Respuesta Incorrecta";
        elements.feedbackIcon.setAttribute('data-lucide', isCorrect ? 'check-circle' : 'x-circle');
        elements.feedbackText.textContent = question.feedback;
        lucide.createIcons();
    }

    // Banner de modo repaso
    const showBanner = state.reviewMode;
    elements.filterModeBanner.classList.toggle('hidden', !showBanner);
    elements.btnFilter.classList.toggle('active', state.reviewMode);

    updateControls(validIndices);
    updateProgress();
}

// ================================================================
// USER ACTIONS
// ================================================================
function handleOptionClick(optionIndex) {
    const key = makeKey(state.currentIndex);
    state.answers[key] = optionIndex;
    saveState();
    renderQuestion();
}

function nextQuestion() {
    const validIndices = getFilteredIndices();
    let nextIndex = -1;
    for (let idx of validIndices) {
        if (idx > state.currentIndex) {
            nextIndex = idx;
            break;
        }
    }

    if (nextIndex !== -1) {
        state.currentIndex = nextIndex;
        saveState();
        renderQuestion();
        window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
        alert('🎉 ¡Has llegado al final de este banco de preguntas!\nRevisa tu puntuación en el contador superior.');
    }
}

function prevQuestion() {
    const validIndices = getFilteredIndices();
    let prevIndex = -1;
    for (let i = validIndices.length - 1; i >= 0; i--) {
        if (validIndices[i] < state.currentIndex) {
            prevIndex = validIndices[i];
            break;
        }
    }

    if (prevIndex !== -1) {
        state.currentIndex = prevIndex;
        saveState();
        renderQuestion();
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }
}

function toggleBookmark() {
    const key = makeKey(state.currentIndex);
    if (state.bookmarks[key]) {
        delete state.bookmarks[key];
    } else {
        state.bookmarks[key] = true;
    }
    saveState();
    renderQuestion();
}

function resetReviewProgress() {
    if (confirm("¿Seguro que quieres borrar tus respuestas de las preguntas que estás repasando para volver a intentarlas? (Asegúrate de marcarlas con 📌 para que no desaparezcan del repaso)")) {
        const validIndices = getFilteredIndices();
        validIndices.forEach(idx => {
            const key = makeKey(idx);
            delete state.answers[key];
        });
        saveState();
        renderQuestion();
    }
}

function shuffleQuestions() {
    for (let i = activeQuestions.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [activeQuestions[i], activeQuestions[j]] = [activeQuestions[j], activeQuestions[i]];
    }
    
    state.shuffleState = {
        bank: state.currentBank,
        order: activeQuestions.map(q => q.originalIndex)
    };
    
    const valid = getFilteredIndices();
    if (valid.length > 0) {
        state.currentIndex = valid[0];
    } else {
        state.currentIndex = 0;
    }
    
    saveState();
    renderQuestion();
    
    if (elements.btnShuffle) {
        elements.btnShuffle.style.color = 'var(--primary-color)';
        setTimeout(() => elements.btnShuffle.style.color = '', 500);
    }
}

function toggleReviewMode() {
    state.reviewMode = !state.reviewMode;
    const valid = getFilteredIndices();
    if (state.reviewMode && valid.length > 0 && !valid.includes(state.currentIndex)) {
        state.currentIndex = valid[0];
    }
    saveState();
    renderQuestion();
}

function resetProgress() {
    if (confirm(`¿Seguro que quieres reiniciar las respuestas del banco "${BANKS[state.currentBank].name}"? Las preguntas marcadas con 📌 NO se desmarcarán.`)) {
        // Borrar solo las claves de este banco
        const prefix = `${state.currentBank}_`;
        Object.keys(state.answers).forEach(k => { if (k.startsWith(prefix)) delete state.answers[k]; });
        // Se elimina la limpieza de bookmarks para que persistan a menos que el usuario las desmarque manualmente
        
        state.currentIndex = 0;
        state.reviewMode = false;
        state.shuffleState = null;
        
        // Reload questions to original order
        activeQuestions = BANKS[state.currentBank].questions().map((q, i) => ({
            ...q,
            originalIndex: i
        }));

        saveState();
        renderQuestion();
    }
}

// ================================================================
// UI UPDATES
// ================================================================
function updateControls(validIndices) {
    if (validIndices.length === 0) {
        elements.btnPrev.disabled = true;
        elements.btnNext.disabled = true;
        return;
    }

    const hasPrev = validIndices.some(idx => idx < state.currentIndex);
    const hasNext = validIndices.some(idx => idx > state.currentIndex);

    elements.btnPrev.disabled = !hasPrev;

    elements.btnNext.innerHTML = !hasNext
        ? 'Finalizar <i data-lucide="flag"></i>'
        : 'Siguiente <i data-lucide="arrow-right"></i>';
    elements.btnNext.disabled = false;

    lucide.createIcons();
}

function updateProgress() {
    const total = activeQuestions.length;
    const prefix = `${state.currentBank}_`;

    let correctCount = 0;
    let answeredCount = 0;

    Object.keys(state.answers).forEach(key => {
        if (!key.startsWith(prefix)) return;
        const originalIdx = parseInt(key.replace(prefix, ''));
        if (isNaN(originalIdx)) return;
        
        const q = activeQuestions.find(q => q.originalIndex === originalIdx);
        if (!q) return;

        answeredCount++;
        if (state.answers[key] === q.correctIndex) {
            correctCount++;
        }
    });

    const progressPercent = total > 0 ? (answeredCount / total) * 100 : 0;
    elements.progressBar.style.width = `${progressPercent}%`;

    const validIndices = getFilteredIndices();
    const displayTotal = state.reviewMode ? validIndices.length : total;
    let currentPos = validIndices.indexOf(state.currentIndex) + 1;
    if (currentPos === 0 && state.reviewMode) {
        // Si la pregunta actual ya no está en validIndices, aproximamos su posición
        currentPos = validIndices.filter(idx => idx < state.currentIndex).length + 1;
    }
    const displayPos = currentPos;

    elements.questionCounter.textContent = `Pregunta ${displayPos} de ${displayTotal}`;
    elements.scoreCounter.textContent = `✓ ${correctCount} / ${total}`;
}

// ================================================================
// EVENT LISTENERS
// ================================================================
function setupEventListeners() {
    elements.btnPrev.addEventListener('click', prevQuestion);
    elements.btnNext.addEventListener('click', nextQuestion);
    elements.btnBookmark.addEventListener('click', toggleBookmark);
    elements.btnReset.addEventListener('click', resetProgress);
    elements.btnFilter.addEventListener('click', toggleReviewMode);
    elements.btnHome.addEventListener('click', goHome);
    if (elements.btnExitFilter) {
        elements.btnExitFilter.addEventListener('click', () => {
            state.reviewMode = false;
            saveState();
            renderQuestion();
        });
    }

    // Event listener de respaldo para tarjetas de banco
    document.querySelectorAll('.bank-card').forEach(btn => {
        btn.addEventListener('click', () => {
            const onclickAttr = btn.getAttribute('onclick') || '';
            const match = onclickAttr.match(/selectBank\(['"]([^'"]+)['"]\)/);
            if (match && match[1]) {
                selectBank(match[1]);
            }
        });
    });

    if (elements.btnShuffle) elements.btnShuffle.addEventListener('click', shuffleQuestions);
    if (elements.btnResetReview) elements.btnResetReview.addEventListener('click', resetReviewProgress);
    if (elements.btnSync) elements.btnSync.addEventListener('click', openSyncModal);
}

// ================================================================

// ================================================================
// SINCRONIZACIÓN MULTI-DISPOSITIVO (LZ-String & Hash URL)
// ================================================================
function openSyncModal() {
    const modal = document.getElementById('sync-modal');
    if (!modal) return;

    // Calcular estadísticas globales
    const totalAns = Object.keys(state.answers || {}).length;
    const totalBookmarks = Object.keys(state.bookmarks || {}).length;

    const statsElem = document.getElementById('sync-stats-summary');
    if (statsElem) {
        statsElem.textContent = `${totalAns} respuestas guardadas · ${totalBookmarks} preguntas marcadas 🔖`;
    }

    // Generar código V3 comprimido
    try {
        const payload = {
            v: 3,
            answers: state.answers || {},
            bookmarks: state.bookmarks || {},
            currentBank: state.currentBank || null,
            currentIndex: state.currentIndex || 0,
            ts: Date.now()
        };
        const json = JSON.stringify(payload);
        const lz = (typeof LZString !== 'undefined') ? LZString.compressToEncodedURIComponent(json) : null;
        const code = lz ? ('V3_' + lz) : btoa(unescape(encodeURIComponent(json)));

        const baseUrl = window.location.origin + window.location.pathname;
        const magicUrl = baseUrl + '#sync=' + code;

        const magicInput = document.getElementById('sync-magic-url');
        if (magicInput) magicInput.value = magicUrl;

        window._currentSyncCode = code;
    } catch (e) {
        console.error('Error generando sincronización:', e);
    }

    const banner = document.getElementById('sync-result-banner');
    if (banner) banner.classList.add('hidden');

    const inputArea = document.getElementById('sync-direct-input');
    if (inputArea) inputArea.value = '';

    modal.classList.remove('hidden');
    switchSyncTab('code');
    if (typeof lucide !== 'undefined' && lucide.createIcons) lucide.createIcons();
}

function closeSyncModal() {
    const modal = document.getElementById('sync-modal');
    if (modal) modal.classList.add('hidden');
}

function switchSyncTab(tab) {
    const tabCode = document.getElementById('tab-btn-code');
    const tabFile = document.getElementById('tab-btn-file');
    const contentCode = document.getElementById('tab-content-code');
    const contentFile = document.getElementById('tab-content-file');

    if (tab === 'code') {
        if (tabCode) tabCode.classList.add('active');
        if (tabFile) tabFile.classList.remove('active');
        if (contentCode) contentCode.classList.remove('hidden');
        if (contentFile) contentFile.classList.add('hidden');
    } else {
        if (tabCode) tabCode.classList.remove('active');
        if (tabFile) tabFile.classList.add('active');
        if (contentCode) contentCode.classList.add('hidden');
        if (contentFile) contentFile.classList.remove('hidden');
    }
}

function copySyncUrl() {
    const input = document.getElementById('sync-magic-url');
    if (!input) return;
    navigator.clipboard.writeText(input.value).then(() => {
        const btn = document.getElementById('btn-copy-sync-url');
        if (btn) {
            const orig = btn.innerHTML;
            btn.innerHTML = '✓ ¡Copiado!';
            setTimeout(() => { btn.innerHTML = orig; if (typeof lucide !== 'undefined') lucide.createIcons(); }, 2000);
        }
    }).catch(err => {
        input.select();
        document.execCommand('copy');
        alert('Enlace copiado al portapapeles');
    });
}

function copySyncCode() {
    const code = window._currentSyncCode || '';
    if (!code) return;
    navigator.clipboard.writeText(code).then(() => {
        const btn = document.getElementById('btn-copy-sync-code');
        if (btn) {
            const orig = btn.innerHTML;
            btn.innerHTML = '✓ Código Copiado';
            setTimeout(() => { btn.innerHTML = orig; if (typeof lucide !== 'undefined') lucide.createIcons(); }, 2000);
        }
    }).catch(err => {
        prompt('Copia tu código de sincronización:', code);
    });
}

function decodeSyncString(inputStr) {
    let clean = (inputStr || '').trim();
    if (clean.includes('sync=')) {
        clean = clean.split('sync=')[1].split('&')[0].split('#')[0].split(/\s+/)[0];
    }

    let jsonStr = null;

    // 1. Intentar V3 LZ-String
    if (clean.startsWith('V3_') && typeof LZString !== 'undefined') {
        const rawLz = clean.substring(3);
        jsonStr = LZString.decompressFromEncodedURIComponent(rawLz) ||
                  LZString.decompressFromBase64(rawLz) ||
                  LZString.decompress(rawLz);
    }

    // 2. Intentar lz: prefix
    if (!jsonStr && clean.startsWith('lz:') && typeof LZString !== 'undefined') {
        const rawLz = clean.substring(3);
        jsonStr = LZString.decompressFromEncodedURIComponent(rawLz) ||
                  LZString.decompressFromBase64(rawLz) ||
                  LZString.decompress(rawLz);
    }

    // 3. Intentar decompressFromEncodedURIComponent directo
    if (!jsonStr && typeof LZString !== 'undefined') {
        jsonStr = LZString.decompressFromEncodedURIComponent(clean);
    }

    // 4. Intentar Base64
    if (!jsonStr) {
        try {
            jsonStr = decodeURIComponent(escape(atob(clean)));
        } catch (e) {}
    }

    // 5. Intentar JSON plano
    if (!jsonStr && clean.startsWith('{')) {
        jsonStr = clean;
    }

    if (!jsonStr) {
        throw new Error('El código o enlace no pudo ser procesado. Verifica haber copiado el texto completo.');
    }

    return JSON.parse(jsonStr);
}

function applyDirectSync(optionalStr) {
    const banner = document.getElementById('sync-result-banner');
    try {
        const str = optionalStr || document.getElementById('sync-direct-input')?.value;
        if (!str || str.trim().length === 0) {
            alert('Por favor pega el enlace o código que copiaste de tu otro dispositivo.');
            return;
        }

        const data = decodeSyncString(str);
        const importedAnswers = data.answers || (data.state ? data.state.answers : {}) || {};
        const importedBookmarks = data.bookmarks || (data.state ? data.state.bookmarks : {}) || {};

        const beforeAnsCount = Object.keys(state.answers).length;
        const beforeBookCount = Object.keys(state.bookmarks).length;

        // Fusión inteligente: preservar respuestas existentes y añadir las importadas
        Object.assign(state.answers, importedAnswers);

        // Fusión de marcadores (unión)
        Object.assign(state.bookmarks, importedBookmarks);

        // Si incluye banco válido, seleccionarlo
        if (data.currentBank && BANKS[data.currentBank]) {
            state.currentBank = data.currentBank;
            if (typeof data.currentIndex === 'number') {
                state.currentIndex = data.currentIndex;
            }
        }

        saveState();

        const afterAnsCount = Object.keys(state.answers).length;
        const afterBookCount = Object.keys(state.bookmarks).length;
        const addedAnswers = afterAnsCount - beforeAnsCount;

        if (banner) {
            banner.className = 'sync-banner success';
            banner.innerHTML = `
                <strong>🎉 ¡Sincronización Exitosa!</strong><br>
                Total actual: <strong>${afterAnsCount}</strong> respuestas registradas (${addedAnswers >= 0 ? '+' + addedAnswers : ''} nuevas) y <strong>${afterBookCount}</strong> preguntas marcadas 🔖.
            `;
            banner.classList.remove('hidden');
        }

        // Si el quiz está visible y activo, recargar preguntas
        if (state.currentBank && BANKS[state.currentBank] && screenQuiz && !screenQuiz.classList.contains('hidden')) {
            startQuiz(state.currentBank, false);
        }

        if (typeof lucide !== 'undefined' && lucide.createIcons) lucide.createIcons();
    } catch (err) {
        console.error('Error aplicando sincronización:', err);
        if (banner) {
            banner.className = 'sync-banner error';
            banner.innerHTML = `<strong>⚠️ Error al sincronizar:</strong> ${err.message || 'Código inválido'}`;
            banner.classList.remove('hidden');
        } else {
            alert('Error al sincronizar: ' + err.message);
        }
    }
}

function checkUrlSync() {
    if (window.location.hash && window.location.hash.includes('sync=')) {
        try {
            applyDirectSync(window.location.hash);
            history.replaceState(null, '', window.location.pathname);
            openSyncModal();
        } catch (e) {
            console.warn('Auto-sync hash notice:', e);
        }
    }
}

function downloadBackup() {
    const payload = {
        app: 'RepasoPrograMovilRDA',
        version: '3.0',
        exportedAt: new Date().toISOString(),
        state: state
    };
    const blob = new Blob([JSON.stringify(payload, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `repaso_movil_backup_${new Date().toISOString().slice(0,10)}.json`;
    a.click();
    URL.revokeObjectURL(url);
}

function uploadBackup(event) {
    const file = event.target.files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = function(e) {
        try {
            const data = JSON.parse(e.target.result);
            const imported = data.state || data;
            if (imported.answers) Object.assign(state.answers, imported.answers);
            if (imported.bookmarks) Object.assign(state.bookmarks, imported.bookmarks);
            if (imported.currentBank && BANKS[imported.currentBank]) {
                state.currentBank = imported.currentBank;
            }
            saveState();
            alert('¡Respaldo importado exitosamente!');
            closeSyncModal();
            if (state.currentBank && BANKS[state.currentBank]) {
                startQuiz(state.currentBank, false);
            }
        } catch (err) {
            alert('Error al leer el archivo JSON: ' + err.message);
        }
    };
    reader.readAsText(file);
}

if (typeof window !== 'undefined') {
    window.openSyncModal = openSyncModal;
    window.closeSyncModal = closeSyncModal;
    window.switchSyncTab = switchSyncTab;
    window.copySyncUrl = copySyncUrl;
    window.copySyncCode = copySyncCode;
    window.applyDirectSync = applyDirectSync;
    window.downloadBackup = downloadBackup;
    window.uploadBackup = uploadBackup;
}

// START
// ================================================================
document.addEventListener('DOMContentLoaded', init);
