// pega os elementos do DOM ---------------->

const question_enem = document.querySelector('.question_enem');
const title = document.querySelector('.title_year');
const discipline = document.querySelector('.discipline');
const context = document.querySelector('.context');
const alternatives_context = document.querySelector('.alternatives_context');
const alternatives = document.querySelector('.alternatives');
const show_answer = document.querySelector('.show_answer');
let correctAlternative;

// <-----------------------

// função que randomiza as questões -------->

function rand(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// <-----------------

// função para substituir links de imagem por imagens ---------->

function linktoimg(text) {
    const regex = /!\[\]\((https?:\/\/[^\s]+(?:\.(?:jpg|jpeg|png|gif|webp|svg)))\)/g;
    return text.replace(regex, (match, url) => {
        return `<br> <img src="${url}" alt="Imagem" style="max-width: 100%; height: auto;" /> <br>`;
    });
}

// <--------------------


// API ------------>

const API_enem = async (year, question) => {
    const apiDATA = await fetch(`https://api.enem.dev/v1/exams/${year}/questions/${question}`);
    if (apiDATA.ok) {
        const apiDATAjs = await apiDATA.json();
        return apiDATAjs;
    } else {
        console.error('Falha ao buscar dados da API');
    }
};

// <-----------------

// Pega as questões e mostra ao úsuario -------->

async function ENEM() {
    const question = await API_enem(rand(2009, 2023), rand(1, 180));
    

    if (question) {
        title.innerHTML = linktoimg(`${question.title} <br>`);
        discipline.innerHTML = `${question.discipline} <br>`;
        context.innerHTML = linktoimg(`<br> ${question.context} <br>`);

        alternatives_context.innerHTML = `<br> <b>${question.alternativesIntroduction}</b><br>`;

        alternatives.innerHTML = question.alternatives.map(alt => {
            if (alt.text) {
                return `<br> <b>${alt.letter})</b> ${linktoimg(alt.text)} <br>`;
            } else if (alt.file) {
                return `<br> <b>${alt.letter})</b> <img src="${alt.file}" alt="Alternativa ${alt.letter}" style="max-width: 100%; height: auto;" /> <br>`;
            }
        }).join('');

        correctAlternative = question.correctAlternative;
    }
}

ENEM();

// <----------------------


// Mostra a alternativa correta ----------->

show_answer.addEventListener('click', e => {
    e.preventDefault();
    

    if (!question_enem.querySelector('.answer')) {
        const p = document.createElement('p');
        p.classList.add('answer');
        question_enem.appendChild(p);

        if (correctAlternative !== undefined) {
            p.innerHTML = `Alternativa Correta: <b>${correctAlternative}</b>`;
        }
    }
});
// <----------------------