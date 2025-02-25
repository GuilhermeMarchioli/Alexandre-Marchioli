const itens = document.getElementById("itens");

function mudouTamanho() {
    if (window.innerWidth >= 992) {
        itens.style.display = 'block';
    } else {
        itens.style.display = 'none';
    }
}

function clickMenu() {
    if (itens.style.display == 'block') {
        itens.style.display = 'none';
    } else {
        itens.style.display = 'block';
    }
}


// Modal
const buttonClose = document.querySelector('button')
const botao01 = document.getElementById('btn1')
const modal01 = document.getElementById('modal01')

botao01.onclick = function () {
    modal01.showModal()
}

buttonClose.onclick = function () {
    modal01.close()
}