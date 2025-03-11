// FRASES - ALEATORIAS (OBJETO)
// TEMPORIZADOR - ENEM (30min)
function remember_water(){

    let water_phrases_on = 0;
    let water_phrases = [`Eii ${user_name}!`,  'Desculpa por interromper...',
'Na verdade estou um pouco preocupada', 'Você já tomou água?', 'Só queria te lembrar de tomar viu',
'A água é algo muito importante para o seu corpo', 'Ela deve ser tomada de 1 em 1 hora!', 
'Obrigado por me entender tá!'
]
    let expressions_water = ['../public/assets/imgs/normal.png', '../public/assets/imgs/sad.png', '../public/assets/imgs/surprise.png', '../public/assets/imgs/how.png',
    '../public/assets/imgs/happy.png', '../public/assets/imgs/onpaper.png', '../public/assets/imgs/onpaper.png', '../public/assets/imgs/happy.png'
 ]


        expression = '../public/assets/imgs/normal.png'
        dialog.style.visibility = 'visible'
        dialog.style.opacity = '1'
        tsuki.src = expression;
        text.innerHTML = water_phrases[water_phrases_on]
        state = 'Water'
        clearInterval(intervalWater)

           btn_prox.addEventListener('click', e => {

        if(state === 'Water'){
        if(water_phrases_on <= water_phrases.length - 1 ){
            water_phrases_on += 1;
            text.innerHTML = water_phrases[water_phrases_on]
    
            if(water_phrases.length > water_phrases_on){
            expression = expressions_water[water_phrases_on];
            tsuki.src = expression;
            }
    
            if(water_phrases_on === water_phrases.length){                
                text.innerHTML = '...'
                dialog.style.visibility = 'hidden'
                dialog.style.opacity = '0'
                state = 'Neutral'
                
    intervalWater = setInterval(() => {
    if (state === 'Neutral') {
        remember_water();
    }
    }, 3600000);
                
            }

        }}})
    }
let intervalWater = setInterval(() => {
        if (state === 'Neutral') {
            remember_water();
        }
    }, 3600000);