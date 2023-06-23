function mostrarHora(){

    let dia = new Date();
    let hora = dia.getHours();
    let minutos = dia.getMinutes();
    let segundos = dia.getSeconds();
    let formatoHora = convertaFormato(hora);
    hora = verificaHora(hora);

    hora = addZero(hora);
    minutos = addZero(minutos);
    segundos = addZero(segundos);

    document.getElementById('clock').innerHTML = `${hora}:${minutos}:${segundos}${formatoHora}`
}

function convertaFormato(time){
    let formato = "AM";
    if(time >= 12){
        formato = "PM";
    }
    return formato;
}

function verificaHora(time){
    if(time>12){
        time = time - 12;
    }
    if (time === 0){
        time = 12;
    }
    return time;
}

function addZero(time){
    if(time<10){
        time = "0" + time;
    }
    return time;
}

mostrarHora()
setInterval(mostrarHora,1000);
const hoursHand = document.querySelector(".hand.hours");
const minutesHand = document.querySelector(".hand.minutes");
const secondsHand = document.querySelector(".hand.seconds");

const setRotation = (element, rotationPercentage) => {
  element.style.setProperty("--rotation", rotationPercentage * 360);
};

const setClock = () => {
  const currentDate = new Date();

  const secondsPercentage = currentDate.getSeconds() / 60;
  const minutesPercentage = (secondsPercentage + currentDate.getMinutes()) / 60;
  const hoursPercentage = (minutesPercentage + currentDate.getHours()) / 12;

  setRotation(secondsHand, secondsPercentage);
  setRotation(minutesHand, minutesPercentage);
  setRotation(hoursHand, hoursPercentage);
};

setClock();

setInterval(setClock, 1000);

