function votos(){
    var idade = 66
    console.log(`Você tem ${idade} anos.`)
    if (idade < 16) {
        console.log(`Não VOTA!`)
    } else if (idade < 18 || idade > 65) {
        console.log('Voto OPCIONAL')
    } else {
        console.log('Voto OBRIGATÓRIO')
    }
}

function horario(){
    var agora = new Date()
    var hora = agora.getHours()
    if (hora <= 1){
        console.log(`Agora é exatamente ${hora} hora e poco`)
    } else {
        console.log(`Agora são exatamente ${hora} horas e poco`)
    }
    if (hora < 6){
        console.log(`Boa madrugada!`)
    } else if (hora < 12 ){
        console.log('Bom dia!')
    } else if (hora < 18){
        console.log('Boa tarde!')
    }else {
        console.log('Boa noite!')
    }
}
// votos()
horario()