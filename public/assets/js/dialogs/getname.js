// declara um valor inicial do array / expressoes ---------------> 
let phrases_first;
let phrases_first_on = 0;
const expressions_first = [
    '../public/assets/imgs/how.png', '../public/assets/imgs/sad.png', '../public/assets/imgs/sad.png', '../public/assets/imgs/inmove.png',
    '../public/assets/imgs/happy.png', '../public/assets/imgs/admirate.png'
]


// obtem o nome e cria as frases segundo o nome obtido ---------->
form.addEventListener('submit', e => {
    e.preventDefault();
    user_name = `<b>${get_name.value}</b>`;
    form.style.visibility = 'hidden'
    form.style.opacity = '0'
    btn_close.style.visibility = 'visible'
    btn_move.style.visibility = 'visible'
    dialog.style.visibility = 'visible'
    dialog.style.opacity = '1'
    text.innerHTML = `${user_name} né... hm...`
    state = 'first_message';
    phrases_first = [`${user_name} né... hm...`, 'Bem, na verdade não me lembro desse nome...', 'Acho que o mestre não me falou sobre você...',
        'Ah, mas veja bem, isso não é um problema', 'Ainda espero poder te ajudar da melhor forma!', 'Então novamente, eu sou Tsuki!',
        `É um prazer enorme te conhecer ${user_name}!`, 'A partir de agora espero ficar um tempo com você...', 'Seja te mostrando questões... versículos... coisas assim',
        'Espero que goste!'
    ]
})

// <----------------

// atualiza o botão de "prox" para as frases atuais --------------------->
btn_prox.addEventListener('click', e => {
    if(state === 'first_message'){
    if(phrases_first_on <= phrases_first.length - 1 ){
        phrases_first_on += 1;
        text.innerHTML = phrases_first[phrases_first_on]

        if(expressions_first.length > phrases_first_on){
        expression = expressions_first[phrases_first_on]
        tsuki.src = expression;
        }
    if(phrases_first_on === phrases_first.length){
        setTimeout( () => {
        state = 'normal'
        if(time !== 'Boa madrugada') normal_day() 
        else normal_dawn()
        
        }, 5000)
        
        text.innerHTML = '...'
        dialog.style.visibility = 'hidden'
        dialog.style.opacity = '0'
        
    }

    }

}
})
// <---------------------