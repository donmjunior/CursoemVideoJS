// const { text } = require("express")

function calculadora() {
    //----------------------------------------------------------
    // Bloco para entrada de ano e sexo
    var data = new Date()
    var ano = data.getFullYear()
    var anoUser = document.getElementById('nascimento')
    var res = document.getElementById('res')
    // Inserir elemento HTML através do Javascript, neste caso, uma 'img'
    // var img = document.createElement('img')
    // img.setAttribute('id', 'foto')
    // Este arquivo foi baseado no exercício 3 do módulo D do curso de Javascript do curso em vídeo
    //----------------------------------------------------------
    // Bloco para cálculo de IMC
    var p = document.querySelector('input#peso')
    var peso = Number(p.value)
    var a = document.querySelector('input#altura')
    var altura = Number(a.value)
    var imc = ((1.72 * peso) / (altura ** 3.06)).toFixed(3)
    var pesoMin = (18.5 * (altura ** 3.06) / 1.72).toFixed(3)
    var pesoMax = (24.9 * (altura ** 3.06) / 1.72).toFixed(3)
    if (anoUser.value.length == 0 || anoUser.value > ano || peso == 0 || altura == 0){
        window.alert('Verifique os dados e tente novamente!')
    } else {
        //----------------------------------------------------------
        // Tratamento da idade e sexo
        var radSex = document.getElementsByName('sexo')
        var idade = ano - Number(anoUser.value)
        var genero = ''
        if (radSex[0].checked){
            genero = 'Homem'
        } else {
            genero = 'Mulher'
        }
        res.innerHTML = `${genero} com ${idade} anos.`
        //----------------------------------------------------------
        // Tratamento do cálculo de IMC
        var texto = document.querySelector(`p#texto`)
        texto.innerHTML = `IMC = <strong>${imc}</strong></br>`
        if (imc < 18.5) {
            texto.innerHTML += `<strong>Abaixo do peso!</strong></br>
                O seu peso ideal é entre ${pesoMin}Kg e ${pesoMax}Kg`
        } else if (imc < 24.9) {
            texto.innerHTML += `<strong>Peso normal</strong></br>
                Conserve seu peso entre ${pesoMin}Kg e ${pesoMax}Kg`
        } else if (imc < 29.9) {
            texto.innerHTML += `<strong>Sobrepeso</strong></br>
                O seu peso ideal é entre ${pesoMin}Kg e ${pesoMax}Kg`
        } else if (imc < 34.9) {
            texto.innerHTML += `<strong>Obesidade Grau 1</strong></br>
                O seu peso ideal é entre ${pesoMin}Kg e ${pesoMax}Kg`
        } else if (imc < 39.9) {
            texto.innerHTML += `<strong>Obesidade Grau 2</strong></br>
                O seu peso ideal é entre ${pesoMin}Kg e ${pesoMax}Kg`
        } else {
            texto.innerHTML += `<strong>Obesidade Grau 3</strong></br>
                O seu peso ideal é entre ${pesoMin}Kg e ${pesoMax}Kg`
        }
    }
}
// IMC = Peso / (Altura ** 2)
// Tabela IMC
// Menos de 18.5 => Abaixo do peso
// Entre 18.5 e 24.9 => Peso normal
// Entre 25 e 29.9 => Sobrepeso
// Entre 30 e 34.9 => Obesidade grau 1
// Entre 35 e 39.9 => Obesidade grau 2
// Mais do que 40 => Obesidade grau 3