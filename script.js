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

function mostrarModal01() {
    let modal01 = document.getElementById('modal01')
    modal01.showModal()
}

function mostrarModal02() {
    let modal02 = document.getElementById('modal02')
    modal02.showModal()
}

function mostrarModal03() {
    let modal03 = document.getElementById('modal03')
    modal03.showModal()
}

function mostrarModal04() {
    let modal04 = document.getElementById('modal04')
    modal04.showModal()
}

function mostrarModal05() {
    let modal05 = document.getElementById('modal05')
    modal05.showModal()
}

function mostrarModal06() {
    let modal06 = document.getElementById('modal06')
    modal06.showModal()
}


function fecharModal() {
    modal01.close()
    modal02.close()
    modal03.close()
    modal04.close()
    modal05.close()
    modal06.close()
}