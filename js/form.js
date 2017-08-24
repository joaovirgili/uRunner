var botaoAdicionar = document.querySelector("#cadastrar");

botaoAdicionar.addEventListener("click", function (event) {
    event.preventDefault();
    
    var form = document.querySelector("#form-adiciona");
    
    var user = {
        nome: form.nome.value,
        peso: form.peso.value,
        altura: form.altura.value,
        email: form.email.value
    };
    
    var usuarioCadastrado = document.createElement("p");
    usuarioCadastrado.innerHTML = user.nome;
    
    var section = document.querySelector("#cadastrados");
    section.appendChild(usuarioCadastrado);
    
});