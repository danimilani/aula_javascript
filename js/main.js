
function clicou(){
    document.getElementById("agradecimento").innerHTML = "<b>Obrigado por clicar!</b>"
    //console.log(document.getElementById)
    //alert("Obrigado por clicar");
}

function redirecionar(){
    window.open("https://www.google.com");
    //window.location.href = "https://www.google.com";
}

function trocar(){
    document.getElementById("mousemove").innerHTML = "Obrigado por passar o mouse";
    //alert("trocar texto");

}

function voltar(){
    document.getElementById("mousemove").innerHTML = "Passe o mouse aqui.";
}

function load(){
    alert("Pagina carregada.");
}

function funcaoChange(elemento){
    console.log(elemento.value)
}

/*function soma (n1, n2){
    return n1 + n2;
}

function validaIdade(idade){
    var validar = true;
    if(idade >=18){
        validar = true
    }else{
        validar=false
    }  
    return validar
}

var idade = prompt("Qual sua idade?");
console.log(validaIdade(idade));*/


/*var d = new Date();
alert(d.getMinutes());*/


/*var count;
for(count= 1; count <= 5; count++);{
    alert(count);
};*/

/*var count = 0;
while (count < 5){
    console.log(count);
    alert(count);
    count++;
}*/

/*var idade = prompt("Qual é a sua idade?");
if (idade >= 18){
    alert("maior de idade");
 }else{
    alert("menor de idade")
}*/

/*var frutas = [{nome:"maca", cor:"vermelha"}, {nome:"uva", cor:"roxa"}]
console.log(frutas);
alert(frutas[1].nome);*/



/*var fruta = {nome:"maca", cor: "vermelha"}
console.log(fruta.nome);
alert(fruta.cor);*/


/*var nome = "Daniella Milani";
var idade = 29;
var idade2 = 10;
var frase = "Japão é o melhor time do mundo";
alert(nome + " tem " + idade + " anos");
alert(idade + idade2)
console.log(nome);
console.log(idade + idade2);
console.log(frase.replace("Japão","Brasil"));
alert(frase.replace("Japão","Brasil"));*/

/*var lista = ["maca", "pera", "laranja"];
lista.push("uva");
//lista.pop();
console.log(lista);
console.log(lista.toString());
console.log(lista.join("-"));*/
