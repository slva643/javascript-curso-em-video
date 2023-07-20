function carregar() {
    var msg = window.document.getElementById('msg');
    var img = window.document.getElementById('imagem');
    var data = new Date();
    var hora = data.getHours();
    var min = data.getMinutes()
    var seg = data.getSeconds()
    var mes = data.getUTCDate()

    setTimeout('carregar()', 500)
    // var hora = 18
    msg.innerHTML = `<strong>Agora são ${hora}:${min}:${seg} horas.<br>Dia do mês ${mes}.</strong>`

    if (hora >= 0 && hora < 12) {
        //Bom dia
        img.src = 'fotomanhã.png'
        document.body.style.background = '#596448'
    } else if (hora >= 12 && hora < 18) {
        //Boa tarde
        img.src = 'fototarde.png'
        document.body.style.background = '#fcec55'
    } else {
        //Boa noite
        img.src = 'fotonoite.png'
        document.body.style.background = '#001d43'
    }

}