let num = document.getElementById('txtn')
let tab = document.getElementById('seltab')
function multiplicação() {
    if (num.value.length == 0) {
        window.alert('Por favor, digite um número!')
    } else {
        let n = Number(num.value)
        let c = 1
        tab.innerHTML = ''
        while (c <= 10) {
            let item = document.createElement('option')
            item.text = `${n} x ${c} = ${n * c}`
            item.value = `${c}`
            tab.appendChild(item)
            c++
        }
    }
}

function adição() {
    if (num == 0) {
        window.alert('Por favor, digite um número!')
    } else {
        let n = Number(num.value)
        let c = 1
        tab.innerHTML = ''
        while (c <= 10) {
            let item = document.createElement('option')
            item.text = `${n} + ${c} = ${n + c}`
            item.value = `${c}`
            tab.appendChild(item)
            c++
        }
    }

}

function subtração() {
    if (num == 0) {
        document.alert('Por faor, digite um número!')
    } else {
        let n = Number(num.value)
        let c = 1
        tab.innerHTML = ''
        while (c <= 10) {
            let item = document.createElement('option')
            item.text = `${n} - ${c} = ${n - c}`
            item.value = `${c}`
            tab.appendChild(item)
            c++
        }
    }
}

function divição() {
    if (num == 0) {
        document.alert('Por favor, digite um número!')
    } else {
        let n = Number(num.value)
        let c = 1
        tab.innerHTML = ''
        while (c <= 10) {
            let item = document.createElement('option')
            item.text = `${n} / ${c} = ${n/c}`
            item.value = `${c}`
            tab.appendChild(item)
            c++
        }
    }
}