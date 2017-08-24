var xhr = new XMLHttpRequest();
var cep = "41810750";
var linkCEP = "http://viacep.com.br/ws/" +cep+"/json/";
console.log(linkCEP);

xhr.open("GET", linkCEP, true);
xhr.addEventListener("load", function(e, grupos) {
var resposta = xhr.responseText;
	if (xhr.status == 200) {
		dadosCEP = JSON.parse(resposta);
		console.log(dadosCEP.logradouro);
		console.log(dadosCEP.bairro);
		console.log(dadosCEP.localidade);
		console.log(dadosCEP.uf);
	}
});
xhr.send();