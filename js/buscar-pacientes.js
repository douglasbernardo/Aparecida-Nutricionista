//Buscar pacientes de uma api
var botaoAdicionar = document.querySelector("#buscar-pacientes");

botaoAdicionar.addEventListener("click", function(){
    //console.log("Buscando Pacientes de uma api");

    var xhr = new XMLHttpRequest();

    xhr.open("GET","http://api-pacientes.herokuapp.com/pacientes"); // Especifica o tipo de requisição a ser feita, no caso, GET. Também indicaremos para onde queremos fazê-la:
    
    xhr.addEventListener("load", function(){
        var erroajax = document.querySelector("#erro-ajax"); //Pegando o id do botão
        if(xhr.status == 200){
            erroajax.classList.add("naoMostrar");
            var resposta = xhr.responseText;

            var pacientes = JSON.parse(resposta); //Transforma o json em um array de pacientes
    
            pacientes.forEach( function(paciente){
                adicionaPacientesDaApi(paciente);
            });
        }else{
            console.log(xhr.status);
            console.log(xhr.responseText);
            erroajax.classList.remove("naoMostrar");
        }
    });

    xhr.send();
});