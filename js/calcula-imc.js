
var pacientes = document.querySelectorAll(".paciente");//pega os pacientes da tabela

for(var i = 0; i < pacientes.length; i++){

    var paciente = pacientes[i];
    var peso = paciente.querySelector(".info-peso").textContent;
    var altura = paciente.querySelector(".info-altura").textContent;
    var imc = paciente.querySelector(".info-imc");
    var faixa = paciente.querySelector(".info-faixa")

    pesoValido = validaPeso(peso);
    alturaValida = validaAltura(altura);

    if(!pesoValido){
        let peso = paciente.querySelector(".info-peso");
        pesoValido = false;
        peso.textContent = "Peso Invalido";
        imc.textContent = "Erro ao calcular Imc";
        paciente.classList.add("paciente-invalido");

    }

    if(!alturaValida){
        let altura = paciente.querySelector(".info-altura");
        alturaValida = false;
        altura.textContent = "Altura Inválida";
        imc.textContent = "Erro ao calcular Imc";
        paciente.classList.add("paciente-invalido");

    }

    if(alturaValida && pesoValido){
        let resultadoImc = calculaImc(peso,altura);
        imc.textContent = resultadoImc;
        exibeFaixas(resultadoImc)
    }
}

function validaAltura(altura){
    if(altura > 0  && altura <= 2.80){
        return true;
    }else{
        return false;
    }
}

function validaPeso(peso){
    if(peso >= 0 && peso < 400){
        return true;
    }else{
        return false;
    }
}

function calculaImc(peso,altura){
    let imc =0;
    imc = peso / (altura * altura);

    return imc.toFixed(2);
}

function exibeFaixas(imc){
    let faixa = paciente.querySelector("[data-classificacao]");

    if(imc < 18.5){
        console.log("Muito magro");
        faixa.textContent = "Muito magro"
    }else if(imc >= 18.5 && imc <= 24.9){
        console.log("Peso Normal");
        faixa.textContent = "Peso Normal"
    }else if(imc >= 25 && imc <= 29.9){
        console.log("Sobrepeso")
    }else if(imc >= 30 && imc <= 34.9){
        console.log("Obesidade grau I")
        faixa.textContent = "Obesidade grau I"
    }
    else if(imc >= 35 && imc <= 39.9){
        console.log("Obesidade grau II")
        faixa.textContent = "Obesidade grau II"
    }
    else if(imc >= 40){
        console.log("Obesidade grau III")
        faixa.textContent = "Obesidade grau III"
    }

    return faixa;
}