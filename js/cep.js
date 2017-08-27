var buscaCep = document.querySelector("#buscaCep");
buscaCep.addEventListener("click", function (){
	var xhr = new XMLHttpRequest();

	var cep = document.querySelector("#cep");
	console.log(cep.value);

	var linkCEP = "http://viacep.com.br/ws/" +cep.value+"/json/";
	console.log(linkCEP);
	
	xhr.open("GET", linkCEP, true);
	xhr.addEventListener("load", function(e, grupos) {
	var resposta = xhr.responseText;
		if (xhr.status == 200) {
			dadosCEP = JSON.parse(resposta);
			var rua = document.getElementById("rua");
			rua.value = dadosCEP.logradouro;
			var bairro = document.getElementById("bairro");
			bairro.value = dadosCEP.bairro;
			var cidade = document.getElementById("cidade");
			cidade.value = dadosCEP.localidade;
		}
	});
	xhr.send();
});

