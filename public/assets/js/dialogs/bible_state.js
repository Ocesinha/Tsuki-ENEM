
function bible(){

    let bible_phrases_on = 0;
    let bible_phrases = [`Hmmm...`, `${user_name}... você tá ocupado agora?`, 'Queria te mostrar um versículo novo que encontrei...',
        'Talvez você esteja precisando... não sei', 'Bom, espero que ajude!'
    ]

    let expressions_bible = ['../public/assets/imgs/how.png', '../public/assets/imgs/question.png', '../public/assets/imgs/onpaper.png', '../public/assets/imgs/how.png',
    '../public/assets/imgs/happy.png']


        expression = '../public/assets/imgs/how.png'
        dialog.style.visibility = 'visible'
        dialog.style.opacity = '1'
        tsuki.src = expression;
        text.innerHTML = bible_phrases[bible_phrases_on]
        state = 'Bible'
        clearInterval(intervalBible)

           btn_prox.addEventListener('click', e => {

        if(state === 'Bible'){
        if(bible_phrases_on <= bible_phrases.length - 1 ){
            bible_phrases_on += 1;
            text.innerHTML = bible_phrases[bible_phrases_on]
    
            if(bible_phrases.length > bible_phrases_on){
            expression = expressions_bible[bible_phrases_on];
            tsuki.src = expression;
            }
    
            if(bible_phrases_on === bible_phrases.length){                
                text.innerHTML = '...'
                dialog.style.visibility = 'hidden'
                dialog.style.opacity = '0'
                window.myAPI.open_bible()
                state = 'Neutral'
                
    intervalBible = setInterval(() => {
    if (state === 'Neutral') {
        bible();
    }
    }, rand(1800000 , 7200000));
                
            }

        }}})
    }


let intervalBible = setInterval(() => {
    if (state === 'Neutral') {
        bible();
    }
}, rand(1800000 , 7200000));