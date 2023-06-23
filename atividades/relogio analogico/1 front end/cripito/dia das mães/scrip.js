var frase ="Mãe, todos os dias agradeço pela vida que você me deu, mas hoje quero agradecer pelo exemplo que você é! Com toda a gratidão e amor que aprendi com você, quero desejar um Feliz Dia das Mães!";
function gerarFrase(){
    var texto =document.getElementById("frase");
    texto.innerHTML=frase;
}

function lerFrase(){
var som =window.speechSynthesis;
var dirscurso = new SpeechSynthesisUtterance(frase);
som.speak(dirscurso);
}
