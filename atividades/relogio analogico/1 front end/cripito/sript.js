
function buscar() {
    var seletor = document.getElementById('moeda').value;
    var resultado = document.getElementById('resultado');
    fetch('https://api.coingecko.com/api/v3/simple/price?ids='+seletor+'&vs_currencies=brl')
        .then(response => response.json())
        .then(data => {
            var preço = data[seletor].brl;

            resultado.textContent =formatar(preço);
            mudarImagem(seletor);


        }).catha(error => resultado.textContent = error);

        

}
function formatar(valor){
    valor=Number(valor).toFixed(2).replace('.',',');
   valor='R$'+valor;
   return valor;

 }
function mudarImagem(seletor){
    var moeda= document.getElementById('imagem');
    if(seletor=="bitcoin"){  
    
    moeda.innerHTML='<img width="200" src="https://media.tenor.com/Mfvl4UTuR2kAAAAM/bitcoin.gif">'
}else if(seletor =="ethereum") {
    moeda.innerHTML='<img width="200" src="https://cdn.pixabay.com/photo/2022/02/17/18/08/nft-7019248_640.png">'
}else if (seletor=="litecoin") {
    moeda.innerHTML='<img width="200" src="https://cdn.pixabay.com/photo/2018/01/14/23/31/cryptocurrency-3082876_640.jpg">'
    
}else if (seletor=="dogecoin") {
    moeda.innerHTML='<img width="200" src="https://cdn.pixabay.com/photo/2021/06/13/04/29/coins-6332138_1280.jpg">'
}

}
function limpar(){
window.location.reload();
}


