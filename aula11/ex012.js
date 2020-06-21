function clicar(){
    var txtvel = document.querySelector('input#vel')
    var res = document.querySelector('div#result')
    var velocidade = Number(txtvel.value)
    res.innerHTML = `Sua velocidade é de <strong>${velocidade}km/h</strong>.`
    if (velocidade > 60) {
        res.innerHTML += `Você foi MULTADO!`
    }else{
        res.innerHTML += `Você está dentro do limite de velocidade.`
    }
    res.innerHTML += `Use cinto de segurança!`
}