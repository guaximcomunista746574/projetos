async function Buscar() {
    var cidade = document.getElementById("cidade").value
    var  chave ='18587d07f084a24d9cf7c99b0e6edf41';
    var  url = 'https://api.openweathermap.org/data/2.5/weather?q='+cidade+'&appid='+chave+'&unis=metric';


try{
    var resposta = await fetch(url);
    var dado = await resposta.json();
    var resultado= document.getElementById("resultado");
    resultado.innerHTML=
    '<h2> previsão de tempo para'+dado.name+'</h2>'
    +'<p> temperatura:' +dado.main.temp+'C°'
    +'<p>temperatura máxima'+dado.main.temp_max+'C°'
    +'<p>temperatura minima:'+dado.main.temp_min+'C°'
    +'<p> temperatura ambiente:'+ dado.main.feels_like+'C°'
    +'<p> humidade:'+dado.main.humidt+'%'
    +'<p> velocidade do vento:'+dado.wind.speed+'km/h'
    +'<p> nuvens:'+dado.clouds.all+'% </p>'
    +'<p> condição:'+dado.weather[0].description+'</p>'
    +'<img src="https://openweathermap.org/img/wn/'+dado.weather[0].icon+'@4x.png"> '

}catch(error){
    var resultado=document.getElementById("resultado");
    resultado.innerHTML="<p> erro ao buscar o clima:"+error;

}
}
function limpar(){
    window.location.reload();

}
