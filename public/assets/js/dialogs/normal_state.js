// falas usando durante a manhã/tarde/noite ----------->
let phrases_normal_init_day_on;
let phrases_normal_init_day;
let expressions_normal_init_day;

let phrases_normal_init_dawn_on;
let phrases_normal_init_dawn;
let expressions_normal_init_dawn;

// <----------------------

// Função quando a TSUKI é aberta durante dia/tarde/noite ----------->
function normal_day(){
    phrases_normal_init_day_on = 0;
    phrases_normal_init_day = [`${time} ${user_name}! Está tudo bem?`,  'Bom, eu espero que sim!',
    'Independente de qualquer coisa que aconteça...', 'Espero que hoje seja um dia muito divertido!'
    ]
    expressions_normal_init_day = ['../public/assets/imgs/normal.png', '../public/assets/imgs/happy.png', '../public/assets/imgs/normal.png', '../public/assets/imgs/admirate.png' ]

        expression = '../public/assets/imgs/happy.png'
        dialog.style.visibility = 'visible'
        dialog.style.opacity = '1'
        tsuki.src = expression;
        text.innerHTML = phrases_normal_init_day[phrases_normal_init_day_on]
    }

    btn_prox.addEventListener('click', e => {

        if(state === 'normal' && time !== 'Boa madrugada'){
        if(phrases_normal_init_day_on <= phrases_normal_init_day.length - 1 ){
            phrases_normal_init_day_on += 1;
            text.innerHTML = phrases_normal_init_day[phrases_normal_init_day_on]
    
            if(expressions_normal_init_day.length > phrases_normal_init_day_on){
            expression = expressions_normal_init_day[phrases_normal_init_day_on]
            tsuki.src = expression;
            }
    
            if(phrases_normal_init_day_on === phrases_normal_init_day.length){                
                text.innerHTML = '...'
                dialog.style.visibility = 'hidden'
                dialog.style.opacity = '0'
                state = 'Neutral'
                
            }

        }}})

// <--------------------

// função quando a TSUKI é aberta de madrugada -------------->
function normal_dawn(){
phrases_normal_init_dawn_on = 0;
phrases_normal_init_dawn = [`Huaaaa... caramba hein ${user_name}...`, 'Já está bem tarde né?', 'O que você faz acordado essas horas?',
    'Está tudo bem?', 'Precisa de alguém pra conversar?', 'Queria poder te ajudar com isso...', 'Bem... independente do que esteja fazendo',
    'Permita-me te acompanhar nessa madrugada!', 'Te farei companhia até que durma!'
]

expressions_normal_init_dawn = ['../public/assets/imgs/sleep.png', '../public/assets/imgs/wow.png', '../public/assets/imgs/how.png', '../public/assets/imgs/how.png',
    '../public/assets/imgs/how.png', '../public/assets/imgs/sad.png', '../public/assets/imgs/sad.png', '../public/assets/imgs/onpaper.png', '../public/assets/imgs/happy.png'
 ]

 expression = '../public/assets/imgs/sleep.png'
 dialog.style.visibility = 'visible'
 dialog.style.opacity = '1'
 tsuki.src = expression;
 text.innerHTML = phrases_normal_init_dawn[phrases_normal_init_dawn_on]

}

btn_prox.addEventListener('click', e => {

    if(state === 'normal' && time === 'Boa madrugada'){
    if(phrases_normal_init_dawn_on <= phrases_normal_init_dawn.length - 1 ){
        phrases_normal_init_dawn_on += 1;
        text.innerHTML = phrases_normal_init_dawn[phrases_normal_init_dawn_on]

        if(expressions_normal_init_dawn.length > phrases_normal_init_dawn_on){
        expression = expressions_normal_init_dawn[phrases_normal_init_dawn_on]
        tsuki.src = expression;
        }

        if(phrases_normal_init_dawn_on === phrases_normal_init_dawn.length){                
            text.innerHTML = '...'
            dialog.style.visibility = 'hidden'
            dialog.style.opacity = '0'
            state = 'Neutral'
            
        }

    }}})
// <----------------