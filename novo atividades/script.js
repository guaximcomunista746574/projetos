
var canvas = document.getElementById("gameCanvas");
var desenho = canvas.getContext("2d");


var raqueteAltura = 10;
var raqueteLargura = 70;
var raqueteX = (canvas.width - raqueteLargura) / 2;
var velocidadedaRaquete = 7;

var bolaRadius = 10;
var bolaX = canvas.width / 2;
var bolaY = canvas.height - 30;
var bolaDX = 2;
var bolaDY = -2;

var tijolosPorLinha = 3;
var tijolosPorColuna = 9;
var tijolosLargura = 75;
var tijolosAltura = 30;
var espacamento = 20;
var espacamentoSuperior = 30;
var espacamentoEsquerdoQuadro = 30;
var tijolos = [];
var totalPontuação=tijolosPorLinha*tijolosPorColuna*10;
var pontuacao=0;

for (var coluna = 0; coluna < tijolosPorColuna; coluna++) {
    tijolos[coluna] = []

    for (var linha = 0; linha < tijolosPorLinha; linha++) {


        tijolos[coluna][linha] = { x: 0, y: 0, ativo: 1 }

    }
}





var setaDireita = false;
var setaEsquerda = false;
//movimentação daraquete -descertecla e subir da tecla
document.addEventListener("keydown", descerDaTecla);
document.addEventListener("keyup", subirDaTecla);
function descerDaTecla(tecla) {
    if (tecla.key === "Right" || tecla.key === "ArrowRight") {
        setaDireita = true;

    } else if (tecla.key === "Left" || tecla.key === "ArrowLeft") {
        setaEsquerda = true;

    }
}
function subirDaTecla(tecla) {
    if (tecla.key === "Right" || tecla.key === "ArrowRight") {
        setaDireita = false;

    } else if (tecla.key === "Left" || tecla.key === "ArrowLeft") {
        setaEsquerda = false;
    }
}

function desenharRaquete() {
    desenho.beginPath();
    desenho.rect(raqueteX, canvas.height - raqueteAltura, raqueteLargura, raqueteAltura);
    desenho.fillStyle = "black";
    desenho.fill();
    desenho.closePath();
}
function desenharBola() {
    desenho.beginPath();
    desenho.arc(bolaX, bolaY, bolaRadius, 0, Math.PI * 2)
    desenho.fillStyle = "black";
    desenho.fill();
    desenho.closePath
}

function desenharTijolos() {
    for (var coluna = 0; coluna < tijolosPorColuna; coluna++) {
        for (var linha = 0; linha < tijolosPorLinha; linha++) {

            if (tijolos[coluna][linha].ativo == 1) {

                var tijoloX = (coluna * (tijolosLargura + espacamento) + espacamentoEsquerdoQuadro);
                var tijoloY = (linha * (tijolosAltura + espacamento) + espacamentoSuperior);
                tijolos[coluna][linha].x = tijoloX;
                tijolos[coluna][linha].y = tijoloY;
                desenho.beginPath();
                desenho.rect(tijoloX, tijoloY, tijolosLargura, tijolosAltura);
                desenho.fillStyle = "red";
                desenho.fill();
                desenho.closePath();
            }

        }

    }
}
function detectarColisao() {
    for (var coluna = 0; coluna < tijolosPorColuna; coluna++)
        for (var linha = 0; linha < tijolosPorLinha; linha++) {
            var tijolo = tijolos[coluna][linha];
            if (tijolo.ativo === 1) {
                if (bolaX + bolaRadius > tijolo.x
                    && bolaX - bolaRadius < tijolo.x + tijolosLargura
                    && bolaY +bolaRadius > tijolo.y
                    && bolaY - bolaRadius < tijolo.y + tijolosAltura) {
                    bolaDY = -bolaDY;
                    tijolo.ativo = 0;
                    tela=document.getElementById("ponto");
                    pontuacao=pontuacao+100;
                    tela.innerHTML="score: "+pontuacao;
                    if (pontuacao===totalPontuação) {
                        Window.location.reload();
                        
                    }
                }
            }

        }
}
function gameover() {
    var gameover=document.getElementById("game-over-container");
    gameover.style.display="block";
}
function reiniciar() {
//     document.location.reload();
//    var gameover=document.getElementById("game-over-container");
//     gameover.style.display="none";
window.open('index.html');
}
function desenhar() {
    desenho.clearRect(0, 0, canvas.width, canvas.height);
    desenharRaquete();
    desenharBola();
    desenharTijolos();
    detectarColisao();

    if (bolaX + bolaDX > canvas.width - bolaRadius || bolaX + bolaDX < bolaRadius) {
        bolaDX = -bolaDX;
    }
    if (bolaY + bolaDY < bolaRadius) {
        bolaDY = -bolaDY;
    } else if (bolaY + bolaRadius > canvas.height - bolaRadius) {
        if (bolaX > raqueteX && bolaX < raqueteX + raqueteLargura) {
            bolaDY = -bolaDY;

        } else {
            //document.location.reload();//reinicia
            gameover();
        }

    }
    if (setaDireita === true && raqueteX < canvas.width - raqueteLargura) {
        raqueteX = raqueteX + velocidadedaRaquete;

    } else if (setaEsquerda && raqueteX > 0) {
        raqueteX = raqueteX - velocidadedaRaquete;
    }
    bolaX = bolaX + bolaDX;
    bolaY = bolaY + bolaDY;
    requestAnimationFrame(desenhar)
}



desenhar();






