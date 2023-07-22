function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = window.document.getElementById('txtano')
    var res = window.document.querySelector('div#res')
    if (fano.value.length == 0 || Number(fano.value) > ano) {
        window.alert('[erro] Verifique os dados e tente novamente!')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var gernero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            genero = 'Homem'
            if (idade >= 0 || idade < 10) {
                //Criança
            } else if (idade < 21) {
                // jovem
            } else if (idade < 50) {
                // aduto
            } else {
                //idoso
            }
        } else {
            genero = 'Mulher'
            if (idade >= 0 || idade < 10) {
                //Criança
            } else if (idade < 21) {
                // jovem
            } else if (idade < 50) {
                // aduto
            } else {
                //idoso
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade}`

    }

}