var botao = document.querySelector("#buscar");
botao.addEventListener("click", function(e) {
   var xhr = new XMLHttpRequest();
    xhr.open("GET", "https://raw.githubusercontent.com/galdir/matc8220171/master/pacientes", true);
    xhr.addEventListener("load", function(e) {
       var resposta = xhr.responseText;
        console.log(resposta);
    });
    
    xhr.send();
    
});