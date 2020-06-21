let pilha = []
let num = document.getElementById('num')
let seletor = document.getElementById('banco')
let total = document.getElementById('total-num')
let maior = document.getElementById('maior')
let menor = document.getElementById('menor')
let soma = document.getElementById('soma')
let media = document.getElementById('media')

function isNumber(n) {
    if (Number(n) >= 1 && Number(n) <= 100)
        return true
    else
        return false
}

function inList(n, l) {
    if (l.indexOf(Number(n)) != -1)
        return true
    else
        return false
}

function add() {
    if (isNumber(num.value) && !inList(num.value, pilha)) {
        let valor = Number(num.value)
        pilha.push(valor)
        let opt = document.createElement('option')
        opt.text = `${valor} adicionado`
        seletor.appendChild(opt)    
        total.innerHTML = ''
        maior.innerHTML = ''
        soma.innerHTML = ''
        media.innerHTML = ''
    } else {
        window.alert('Valor inválido ou já encontrado na lista!')
    }
    // apaga o número que foi digitado pelo usuário no input
    num.value = ''
    // mantém o cursor do mouse ativo neste input
    num.focus()
}
function finaliza(obj) {
    if (pilha.length == 0){
        window.alert('adicione valores antes de finalizar!')
    } else {
        let result = pilha.length
        let ma = pilha[0]
        let me = pilha[0]
        let som = 0
        for (let pos in pilha){
            som += pilha[pos]
            if (pilha[pos] > ma){
                ma = pilha[pos]
            }
            if (pilha[pos] < me){
                me = pilha[pos]
            }
        }
        let med = som / result
        total.innerHTML = `O total de números inseridos foi ${result}`
        maior.innerHTML = `O mairo número é ${ma}`
        menor.innerHTML = `O menor número é ${me}`
        soma.innerHTML = `A soma total dá ${som}`
        media.innerHTML = `A média desses valores é ${med}`
    }
}



// --------------------------------------------------------------------------------------------
// Daqui para baixo foi uma tentativa de resolver o problema sozinho
// --------------------------------------------------------------------------------------------
// // o array
// let pilha = []
// function add() {
//     // input 'number'
//     let num = document.getElementById('num')
//     let valor = Number(num.value)
//     // select => onde mostrarão os elementos do array
//     let seletor = document.getElementById('banco')
//     if (num.value.length == 0) {
//         window.alert('Por favor, insira algum número')
//     } else if (num.value <= 0 || num.value > 100) {
//         window.alert('Número fora da relação. Verifique e tente novamente')
//     } else {
//         let verif = pilha.indexOf(valor)
//         if (verif == -1) {
//             pilha.push(valor)
//             let opt = document.createElement('option')
//             opt.text = `${valor} adicionado`
//             seletor.appendChild(opt)
//         } else
//             window.alert('Número existente. Adicione outro número ou finalize.')
//     }

// }