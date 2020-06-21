function contar() {
    let res = document.getElementById('result')
    let i = document.querySelector('input#inicio')
    let f = document.querySelector('input#fim')
    let p = document.querySelector('input#passo')
    let texto = document.getElementById('dialogo')

    if (i.value.length == 0 || f.value.length == 0 || p.value.length == 0) {
        texto.innerHTML = `IMPOSSÍVEL CONTAR`
        window.alert("Verifique os dados e tente novamente")
    } else {
        texto.innerHTML = `Contando:-`
        res.innerHTML = ``
        let inicio = Number(i.value)
        let fim = Number(f.value)
        let passo = Number(p.value)
        if (passo <= 0) {
            window.alert(`Passo inválido! Considerando Passo 1`)
            passo = 1
        }
        if (inicio < fim){
            for (let x = inicio; x <= fim; x += passo) {
                res.innerHTML += `${x} &#128073;&#127995`
            }
        } else {
            for (let x = inicio; x >= fim; x -= passo) {
                res.innerHTML += `${x} &#128073;&#127995`
            }
        }
        res.innerHTML += `&#9749`
    }
}