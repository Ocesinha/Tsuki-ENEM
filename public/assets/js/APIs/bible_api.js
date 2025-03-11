// pega os elementos do DOM ----------->
const versicle = document.querySelector('.versicle')
const text = document.querySelector('.text')
// <------------------

// busca os dados da API ----------->
const API_bible = async () => {
    const dataAPI = await fetch(`https://bible-api.com/data/almeida/random`)
    if(dataAPI){
    const dataAPIjs = await dataAPI.json()
    return dataAPIjs;
    }
}
// <------------------

// usa os dados adquiridos pela API e coloca no DOM ------------>
async function randVersicle(){
    const random = await API_bible()
    try{
    versicle.innerHTML = `${random['random_verse']['book']} ${random['random_verse']['chapter']}:${random['random_verse']['verse']}`
    text.innerHTML = random['random_verse']['text']
    }catch (error){
        versicle.innerHTML = 'Erro'
        text.innerHTML = 'Algo deu errado, peço perdão por isso.'
    }
}
// <--------------------
randVersicle()
