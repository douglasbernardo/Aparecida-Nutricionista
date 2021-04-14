
var tabela = document.querySelector("table");

tabela.addEventListener("dblclick",function(event){
    var evento = event.target.parentNode.classList.add("fadeOut");

    setTimeout(function(){
        event.target.parentNode.remove();
    }, 500);
});
