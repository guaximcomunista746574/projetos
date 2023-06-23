alert('ola mundo');

var numero=25;

if(numero> 10 && numero < 20){
    //alert('mumero maior que 10')
}else if(numero < 0){
    //alert('numero invalido');

}else{ 
 //alert('numero menor que 10') 
}
var contador= 0;
//enquanto contador for menor que 5 executa
while(contador < 5){
    alert('numero: '+ contador);
    contador= contador + 1;
}
//criação de lista -fulano 0,ciclano 1,deltrano 2
var nomes=['fulano','ciclano','deltrano'];
alert(nomes[0]);

//nomes.length=3
for(contador=0; contador < nomes.length; contador++ ){
    alert(nomes[contador]);

    if(nomes[contador]==='ciclano'){
    alert('pessoa encontrada!');
    }
}
//função
function baixarEstoque(){
    alert("Baixou  Estoque!");
}
function movimentarCaixa() {
    alert("Caixa movimentado");
}
function fazerVenda(){
    baixarEstoque();
    movimentarCaixa();

//imagna um botao na tela que chama o fazer venda
fazerVenda();
var titulu=document.getElementById('titulo');
titulo.inneHTML="novo texto"
}
//DOM object Document