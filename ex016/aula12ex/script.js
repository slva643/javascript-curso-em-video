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
            if (idade >= 0 && idade < 10) {
                //Criança
                img.setAttribute('src', 'fotoBebeHomem.png')
            } else if (idade < 21) {
                // jovem
                img.setAttribute('src', 'fotoJovemHomem.png')
            } else if (idade < 50) {
                // adulto
                img.setAttribute('src', 'fotoAdultoHomem.png')
            } else {
                //idoso
                img.setAttribute('src', 'fotoIdosoHomem.png')
            }
        } else if (fsex[1].checked) {
            genero = 'Mulher'
            if (idade >= 0 && idade < 10) {
                //Criança
                img.setAttribute('src', 'fotoBebeMulher.png')
            } else if (idade < 21) {
                // jovem
                img.setAttribute('src', 'fotoJovemMulher.png')
            } else if (idade < 50) {
                // aduto
                img.setAttribute('src','fotoAdultaMulher.png')
            } else {
                //idoso
                img.setAttribute('src', 'fotoIdosoMulher.png')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `<strong>Detectamos ${genero} com ${idade} anos</strong>`
        res.appendChild(img)
        img.style.padding = '77px'
    }

}