//move (botão de mover a TSUKI) -------------------->

let is_move = false;

btn_move.addEventListener('click', e =>{
    if (is_move === true) {
        btn_move.innerHTML = 'Mover'
        bot.style.webkitAppRegion = 'no-drag'; 
        is_move = false;
        tsuki.src = expression;
        btn_prox.style.visibility = 'visible'
        btn_close.style.visibility = 'visible'
        return;
    }
        bot.style.webkitAppRegion = 'drag';
        btn_move.innerHTML = 'Parar'
        btn_prox.style.visibility = 'hidden'
        btn_close.style.visibility = 'hidden'
        tsuki.src = '../public/assets/imgs/inmove.png'
        is_move = true;
        

})

//<-----------------------

// close (botão de fechar a TSUKI) ---------------->

btn_close.addEventListener('click', e =>{
    close_menu.style.visibility = 'visible'
    close_menu.style.opacity = '1'
    tsuki.src = '../public/assets/imgs/cry.png'
    btn_move.style.visibility = 'hidden'
    dialog.style.visibility = 'hidden'
    dialog.style.opacity = '0'
})

close_false.addEventListener('click', e => {
    close_menu.style.visibility = 'hidden'
    close_menu.style.opacity = '0'
    dialog.style.visibility = 'visible'
    dialog.style.opacity = '1'
    tsuki.src = expression
    btn_move.style.visibility = 'visible'
})

close_true.addEventListener('click', e => {
    window.myAPI.close_app()
})



// <--------------------