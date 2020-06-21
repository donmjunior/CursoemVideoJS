function carregar() {
    var inter = document.querySelector('div#inter')
    var imagem = document.querySelector('img#imagem')
    var tmp = new Date()
    var hora = tmp.getHours()
    var min = tmp.getMinutes()
    var seg = tmp.getSeconds()
    var dia = tmp.getDate()
    var diaSem = tmp.getDay()
    var mes = tmp.getMonth()
    var ano = tmp.getFullYear()
    // Converte o dia da semana numeral para textual
    switch (diaSem) {
        case 0:
            diaSem = 'Domingo'
            break;
        case 1:
            diaSem = 'Segunda'
            break;
        case 2:
            diaSem = 'Terça'
            break;
        case 3:
            diaSem = 'Quarta'
            break;
        case 4:
            diaSem = 'Quinta'
            break;
        case 5:
            diaSem = 'Sexta'
            break;
        case 6:
            diaSem = 'Sábado'
            break;

        default:
            diaSem = 'Dia inexistente'
            break;
    }
    // Escrever o texto na página
    inter.innerHTML = `São exatamente ${hora}:${min}.${seg}. ${diaSem}, ${dia}/${mes}/${ano}`
    // Verificação da hora do dia
    if (hora < 12) {
        // Bom dia
        imagem.src = '/exercicio1/assets/manha.png'
        document.body.style.background = '#fcf6a3'
    } else if (hora < 18) {
        // Boa tarde
        imagem.src = '/exercicio1/assets/tarde.png'
        document.body.style.background = '#be6347'
    } else {
        // Boa noite
        imagem.src = '/exercicio1/assets/noite.png'
        document.body.style.background = '#143441'
    }
}

function redirectImc(){
    window.location.href = "/exercicio1/pages/calculadora-imc.html"
}
function redirectLoop(){
    window.location.href = "/exercicio1/pages/counter.html"
}
function redirectTab(){
    window.location.href = "/exercicio1/pages/tabuada.html"
}
function redirectFunct(){
    window.location.href = "/exercicio1/pages/armazena.html"
}