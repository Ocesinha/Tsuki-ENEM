// Elementos iniciais da TSUKI 
const tsuki = document.getElementById('tsuki')
const dialog = document.getElementById('dialog')
const text = document.querySelector('.text')
const bot = document.getElementById('bot')

// Botões de Menu / Avanço
const close_menu = document.getElementById('close_menu')
const btn_move = document.getElementById('btn_move')
const btn_prox = document.getElementById('btn_prox')
const btn_close = document.getElementById('btn_close')
const close_true = document.querySelector('.close_true')
const close_false = document.querySelector('.close_false')

// Constantes do GetName
const form = document.getElementById('form_name')
const get_name = document.getElementById('name')

// Variavéis de estado

let state = 'init' // init / normal / neutral / question_enem / bible 
let user_name = 'Seu Nome!';
let expression = '../public/assets/imgs/normal.png';
let time;

// função de randomizar numeros ------------>
function rand(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
// <------------------

// função que pega o horário do dia ----------------->

function getDate(){
    const ac_date = new Date;
    const hours = ac_date.getHours();

    if(hours >= 0 && hours <= 5){
        time = 'Boa madrugada'
    }else if(hours > 5 && hours <= 12 ){
        time = 'Bom dia'
    }else if(hours > 12 && hours <= 18){
        time = 'Boa tarde'
    }else if(hours > 18 && hours <= 23){
        time = 'Boa noite'
    }
    return;
}

getDate()

// <-----------------------------------

