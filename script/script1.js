
var jogador = 'x';
var jogada = 0;

function verificarJogo(id) {


    var enderoSRC_Resumido = enderecoSRC_Resumido(id);
    
    if (enderoSRC_Resumido == 'branco.png') {
        document.getElementById(id).src = jogador + ".png";
        jogada++;
        if (verificarVitoria()) {
            var audio = document.querySelector('#vitoria')
            audio.play();
            msg.hidden = false;
            msg.innerHTML = `O vencedor é o jogador (${jogador})`
            enderecoSRC_Resumido = "branco.png"

           
            
        }

        if(jogada >=9){
            var falha = document.querySelector('#falha')
            falha.play();
            msg.hidden = false;
            msg.innerHTML = `EMPATE!!!`
            enderecoSRC_Resumido = "branco.png"
        }
        

        if (jogador == 'x') {
            jogador = 'o'
        } else {
            jogador = 'x'
        }







    }

}

function enderecoSRC_Resumido(id) {

    var src = document.getElementById(id).src;


    return src.substring(src.length - 10, src.length);

}

function reiniciar() {
    window.location.reload(true);

}

function esconderMsg() {
    var msg = window.document.getElementById('msg')
    msg.hidden = true;
}

function verificarVitoria() {
    if (enderecoSRC_Resumido('c1') == enderecoSRC_Resumido('c2') && enderecoSRC_Resumido('c1') == enderecoSRC_Resumido('c3') && enderecoSRC_Resumido('c1') != "branco.png") {
        return true;
    }

    if (enderecoSRC_Resumido('c4') == enderecoSRC_Resumido('c5') && enderecoSRC_Resumido('c4') == enderecoSRC_Resumido('c6') && enderecoSRC_Resumido('c4') != "branco.png") {
        return true;
    }

    if (enderecoSRC_Resumido('c7') == enderecoSRC_Resumido('c8') && enderecoSRC_Resumido('c7') == enderecoSRC_Resumido('c9') && enderecoSRC_Resumido('c7') != "branco.png") {
        return true;
    }

    if (enderecoSRC_Resumido('c1') == enderecoSRC_Resumido('c4') && enderecoSRC_Resumido('c1') == enderecoSRC_Resumido('c7') && enderecoSRC_Resumido('c1') != "branco.png") {
        return true;
    }

    if (enderecoSRC_Resumido('c2') == enderecoSRC_Resumido('c5') && enderecoSRC_Resumido('c2') == enderecoSRC_Resumido('c8') && enderecoSRC_Resumido('c2') != "branco.png") {
        return true;
    }

    if (enderecoSRC_Resumido('c3') == enderecoSRC_Resumido('c6') && enderecoSRC_Resumido('c3') == enderecoSRC_Resumido('c9') && enderecoSRC_Resumido('c3') != "branco.png") {
        return true;
    }

    if (enderecoSRC_Resumido('c1') == enderecoSRC_Resumido('c5') && enderecoSRC_Resumido('c1') == enderecoSRC_Resumido('c9') && enderecoSRC_Resumido('c1') != "branco.png") {
        return true;
    }

    if (enderecoSRC_Resumido('c3') == enderecoSRC_Resumido('c5') && enderecoSRC_Resumido('c3') == enderecoSRC_Resumido('c7') && enderecoSRC_Resumido('c3') != "branco.png") {
        return true;
    }
    return false;
}

function empate(){
    
}