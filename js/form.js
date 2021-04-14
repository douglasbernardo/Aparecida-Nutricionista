var botaoAdicionar = document.querySelector("#adicionar-paciente");

 botaoAdicionar.addEventListener("click", function(event){
    event.preventDefault();

    const form = document.getElementById("form-adiciona");    
    const paciente = obtemPacienteDoFormulario(form);
    const erros = validaPaciente(paciente);
    //console.log(erros);
    if(erros.length > 0){
        exibeMensagensdeErro(erros);
        return;
    }

    adicionaPacientesDaApi(paciente);

    form.reset();
    document.querySelector("#mensagens-erros").innerHTML = ""; //Apagando mensagens de erro quando adiciona o cliente
 });


 function obtemPacienteDoFormulario(form){

    const paciente = { // valores do formulario
        nome: form.nome.value,
        peso: form.peso.value,
        altura: form.altura.value,
        imc: calculaImc(form.peso.value, form.altura.value),
        faixa: exibeFaixas(imc).innerHTML
    }

    console.log(JSON.stringify(paciente))
    return paciente;
}

function montarTr(paciente){
    let pacienteTr = document.createElement("tr");
    pacienteTr.classList.add("paciente");

    pacienteTr.appendChild(montarTd(paciente.nome, "info-nome")); //cria um novo Tr e adiciona na tabela
    pacienteTr.appendChild(montarTd(paciente.peso, "info-peso"));
    pacienteTr.appendChild(montarTd(paciente.altura, "info-altura"));
    pacienteTr.appendChild(montarTd(paciente.imc, "info-imc"));
    pacienteTr.appendChild(montarTd(paciente.faixa,"info-faixa"));

    return pacienteTr;
}
function montarTd(dado,classe){
    let td = document.createElement("td"); 
    td.textContent = dado;
    td.classList.add(classe);

    return td;
}

function validaPaciente(paciente){
   
    let erros = [];

    if(paciente.nome.length == 0){
        erros.push("O campo nome deve ser preenchido"); // Coloca os erros dentro do array
    }
    if(!validaPeso(paciente.peso) || paciente.peso.length == "" ){
        erros.push("Peso inválido"); //coloca a mensagem dentro do array
    }
    if(!validaAltura(paciente.altura) || paciente.altura.length == ""){
        erros.push("Altura inválida");
    }

    return erros;
}

function adicionaPacientesDaApi(paciente){
    let pacienteTr = montarTr(paciente);
    let tabela = document.querySelector("#tabela-pacientes");

     //adiciona pacientes na tabela

    tabela.appendChild(pacienteTr);
    return pacienteTr;
}

function exibeMensagensdeErro(erros){
    let ul = document.querySelector("#mensagens-erros");
    ul.innerHTML = ""; //Apagar mensagens anteriores e colocar as novas

    erros.forEach(function(erro){
        let li = document.createElement("li");
        li.textContent = erro;
        ul.appendChild(li);
    });
}