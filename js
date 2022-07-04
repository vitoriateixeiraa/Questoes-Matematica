<!DOCTYPE html>
<html lang="pt-br">
<head>
   <meta charset="UTF-8">
   <title>Olá Mundo</title>
</head>
<body>
   <h1>Soma de dois números</h1>
   <p>Digite a base:</p>
   <input id="lado1">
   <p>Digite a altura:</p>
   <input id="lado2">
   <button onclick="multiplicar()">Multiplicar</button>
   <p id="resposta"></p>
</body>
<script>
   function multiplicar(){
       let lado1 = parseInt(document.getElementById("lado1").value);
       let lado2 = parseInt(document.getElementById("lado2").value);
 
       let multiplicar = lado1 * lado2;
 
       document.getElementById("resposta").innerHTML = multiplicar;
   }
</script>
</html>
