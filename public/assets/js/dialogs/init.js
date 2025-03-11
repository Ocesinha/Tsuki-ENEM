// FRASES INICIAIS ---------------------->

let phrases_init_on = 0;
const phrases_init = 
['Olá, tudo bem?', 'Espera... Você não é o mestre...', 'Bem... me chamo Tsuki, é um prazer!', 'Você pode me falar qual é o seu nome?', 
'O mestre me falou sobre alguns amigos dele...', 'Mas preciso que você me conte seu nome verdadeiro!',
'Então sem brincadeirinhas viu!'
]

const expressions_init = ['../public/assets/imgs/normal.png', '../public/assets/imgs/question.png', '../public/assets/imgs/happy.png', '../public/assets/imgs/onpaper.png', '../public/assets/imgs/admirate.png', '../public/assets/imgs/normal.png', '../public/assets/imgs/onpaper.png'  ]

if(state === 'init'){
setTimeout(() => {
    expression = '../public/assets/imgs/happy.png'
    dialog.style.visibility = 'visible'
    dialog.style.opacity = '1'
    tsuki.src = expression;
    text.innerHTML = phrases_init[phrases_init_on]
  }, 1000);
}

// <------------------------------

// Avançar frases e pegar Nome (INICIO) --------------->


btn_prox.addEventListener('click', e => {
    if(state === 'init'){
    if(phrases_init_on < phrases_init.length - 1 ){
        phrases_init_on += 1;
        text.innerHTML = phrases_init[phrases_init_on]

        if(expressions_init.length > phrases_init_on){
        expression = expressions_init[phrases_init_on]
        tsuki.src = expression;
        }

    }

    if(phrases_init_on === phrases_init.length - 1 ){
        form.style.visibility = 'visible'
        form.style.opacity = '1'
        dialog.style.visibility = 'hidden'
        btn_close.style.visibility = 'hidden'
        btn_move.style.visibility = 'hidden'
        dialog.style.opacity = '0'

    }
}
})



// <-------------------------------





