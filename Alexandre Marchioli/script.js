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