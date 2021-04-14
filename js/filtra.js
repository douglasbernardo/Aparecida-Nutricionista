var campoFiltro = document.querySelector("#filtrar-tabela");

campoFiltro.addEventListener("input", function(){
    var pacientes = document.querySelectorAll(".paciente");

    if(this.value.length > 0){
        for (var i = 0; i < pacientes.length; i++) {
            var paciente = pacientes[i];
            var tdNome = paciente.querySelector(".info-nome");
            var nome = tdNome.textContent;

            var expressao = new RegExp(this.value,"i");/* As expressões regulares são um tipo especial de texto, que nos auxilia a buscarmos por strings,
            facilitando quando o termo for maior.
            A letra i é usado para para indicar a opção case insensitive

            */
    
            if(!expressao.test(nome)){
                paciente.classList.add("naoMostrar");
            }else{
                paciente.classList.remove("naoMostrar");
            }
        }
    }else{
        for(var i =0; i < pacientes.length;i++){
            var paciente = pacientes[i];
            paciente.classList.remove("naoMostrar"); 
        }
    }
});