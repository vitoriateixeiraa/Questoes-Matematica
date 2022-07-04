<!DOCTYPE html>
<html lang="pt-br">
<head>
   <meta charset="UTF-8">
   <title>Olá Mundo</title>
</head>
<body>
   <h1>Apresente os números e faça as quatro operações</h1>
   <p>Digite o primeiro número:</p>
   <input id="num1">
   <p>Digite o segundo número:</p>
   <input id="num2">
   <button onclick="somar()">Somar</button>
   <button onclick="subtrair()">Subtrair</button>
   <button onclick="multiplicar()">Multiplicar</button>
   <button onclick="dividir()">Dividir</button>
   <p id="resposta"></p>
</body>
<script>
   function somar(){
       let num1 = parseInt(document.getElementById("num1").value);
       let num2 = parseInt(document.getElementById("num2").value);
 
       let somar = num1 + num2;
 
       document.getElementById("resposta").innerHTML = somar;
   }
 
   function subtrair(){
       let num1 = parseInt(document.getElementById("num1").value);
       let num2 = parseInt(document.getElementById("num2").value);
 
       let subtrair = num1 - num2;
 
       document.getElementById("resposta").innerHTML = subtrair;
   }
 
function multiplicar(){
       let num1 = parseInt(document.getElementById("num1").value);
       let num2 = parseInt(document.getElementById("num2").value);
 
       let multiplicar = num1 * num2;
 
       document.getElementById("resposta").innerHTML = multiplicar;
   }
 
    function dividir(){
       let num1 = parseInt(document.getElementById("num1").value);
       let num2 = parseInt(document.getElementById("num2").value);
 
       let dividir = num1 / num2;
 
       document.getElementById("resposta").innerHTML = dividir;
   }
</script>
</html>
