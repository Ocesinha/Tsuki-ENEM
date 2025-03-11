
function enem(){

    let enem_phrases_on = 0;
    let enem_phrases = [`Eii ${user_name}!`, 'Vamos fazer uma questão do ENEM vamos vamos!',
        'Por favorrrr, prometo que vai ser rápido!', 'E você ainda vai aprender muita coisa!', 
        'Vamosss, você não tem nada a perder', 'Vamos? Ebaaaaaa', 'Então lá vai hein', 
        'Escolhi essa com muito carinho!', 'Tenho certeza que você consegue resolver!', 'Boa sorteeee!'
    ]

    let expressions_enem = ['../public/assets/imgs/normal.png', '../public/assets/imgs/admirate.png', '../public/assets/imgs/admirate.png', '../public/assets/imgs/onpaper.png',
    '../public/assets/imgs/normal.png', '../public/assets/imgs/happy.png', '../public/assets/imgs/onpaper.png', '../public/assets/imgs/onpaper.png',
'../public/assets/imgs/admirate.png', '../public/assets/imgs/happy.png']


        expression = '../public/assets/imgs/normal.png'
        dialog.style.visibility = 'visible'
        dialog.style.opacity = '1'
        tsuki.src = expression;
        text.innerHTML = enem_phrases[enem_phrases_on]
        state = 'Enem'
        clearInterval(intervalEnem)

           btn_prox.addEventListener('click', e => {

        if(state === 'Enem'){
        if(enem_phrases_on <= enem_phrases.length - 1 ){
            enem_phrases_on += 1;
            text.innerHTML = enem_phrases[enem_phrases_on]
    
            if(enem_phrases.length > enem_phrases_on){
            expression = expressions_enem[enem_phrases_on];
            tsuki.src = expression;
            }
    
            if(enem_phrases_on === enem_phrases.length){                
                text.innerHTML = '...'
                dialog.style.visibility = 'hidden'
                dialog.style.opacity = '0'
                window.myAPI.open_enem()
                state = 'Neutral'
                
    intervalEnem = setInterval(() => {
    if (state === 'Neutral') {
        enem();
    }
    }, rand(1800000 , 3600000));
                
            }

        }}})
    }


let intervalEnem = setInterval(() => {
    if (state === 'Neutral') {
        enem();
    }
    }, rand(1800000 , 3600000));
