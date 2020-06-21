// Tentar fazer com que as linhas fiquem de cores de fundo diferentes (impar - cinza / par - branco)
function calcular() {
    let num = document.getElementById('num')
    let soma = document.getElementById('tab-som')
    let sub = document.getElementById('tab-sub')
    let mult = document.getElementById('tab-mult')
    let div = document.getElementById('tab-div')
    if (num.value.length == 0){
        window.alert('Insira um número antes de prosseguir!')
    } else {
        let n = Number(num.value)
        let c = 1
        soma.innerHTML = ''
        sub.innerHTML = ''
        mult.innerHTML = ''
        div.innerHTML = ''
        while (c <= 10){
            let optsom = document.createElement('option')
            let optsub = document.createElement('option')
            let optmult = document.createElement('option')
            let optdiv = document.createElement('option')
            optsom.text = `${c} + ${n} = ${c+n}`
            optsom.value = `tabsom${c}`
            optsom.id = `tabsom${c}`
            optsom.onclick = `clicou()`
            soma.appendChild(optsom)
            optsub.text = `${c} - ${n} = ${c-n}`
            optsub.value = `tabsub${c}`
            optsub.id = `tabsub${c}`
            optsub.onclick = `clicou()`
            sub.appendChild(optsub)
            optmult.text = `${c} x ${n} = ${c*n}`
            optmult.value = `tabmult${c}`
            optmult.id = `tabmult${c}`
            optmult.onclick = `clicou()`
            mult.appendChild(optmult)
            optdiv.text = `${c} / ${n} = ${c/n}`
            optdiv.value = `tabdiv${c}`
            optdiv.id = `tabdiv${c}`
            optdiv.onclick = `clicou()`
            div.appendChild(optdiv)
            c++
        }
    }
}
let res = document.getElementById('res')
let elemento = document.getElementById('tab-som')
elemento.addEventListener('click', function(e){
    alert(e.target.id);
    res.innerHTML = `${e.target.id.text}`
});

// function clicou(){
//     let res = document.getElementsByClassName('res')
//     let amplia = document.getElementById(this.id)
//     res.innerHTML = `${amplia.text}`
// }
// var el = document.getElementById('fora');
// el.addEventListener('click', function(e) {
//     alert(e.target.id);
// });