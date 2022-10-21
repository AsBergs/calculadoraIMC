
function calcula_imc(){
    const valorA = document.getElementById("peso").value;
    const valorB = document.getElementById("altura").value;
    
 
    const calcula_Imc = valorA / (valorB * valorB);

    if(calcula_Imc < 15.99){
        document.getElementById("resultado").innerHTML = `O seu IMC é (${calcula_Imc.toFixed(0)}):  magreza grave`;
        document.getElementById("resultado").style.color = "Red";
    }else if(calcula_Imc >= 16 && calcula_Imc <= 16.99){
        document.getElementById("resultado").innerHTML = `O seu Imc é (${calcula_Imc.toFixed(0)}) magreza leve`;
        document.getElementById("resultado").style.color = "Orange";
    }else if(calcula_Imc >= 18.5 && calcula_Imc <= 24.9){
        document.getElementById("resultado").innerHTML =  `O seu Imc é (${calcula_Imc.toFixed(0)}): Saudável`
        document.getElementById("resultado").style.color = "Yellow";
    }else if(calcula_Imc >= 25 && calcula_Imc <= 29.9){
        document.getElementById("resultado").innerHTML =  `O seu Imc é (${calcula_Imc.toFixed(0)}): Sobrepeso`
        document.getElementById("resultado").style.color = "Green";
    }else if(calcula_Imc >= 30 && calcula_Imc <= 34.9){
        document.getElementById("resultado").innerHTML =  `O seu Imc é (${calcula_Imc.toFixed(0)}): Obesidade grau 1`
        document.getElementById("resultado").style.color = "Light Blue";
    }else if(calcula_Imc >= 35 && calcula_Imc <= 39.9){
        document.getElementById("resultado").innerHTML =  `O seu Imc é (${calcula_Imc.toFixed(0)}): Obesidade grau 2 (Severa)`
        document.getElementById("resultado").style.color = "Dark Blue";
    }else if(calcula_Imc >= 40 ){
        document.getElementById("resultado").innerHTML =  `O seu Imc é (${calcula_Imc.toFixed(0)}): Obesidade grau 3 (Mórbida)`
        document.getElementById("resultado").style.color = "Purple";
    }else{
        document.getElementById("resultado").innerHTML =  `Valor Inválido`
    }
   


}
    
