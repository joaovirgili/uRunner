var map;
var markers = [];

function initMap() {
	map = new google.maps.Map(document.getElementById('map'), {
          center: {lat:-12.998514, lng:-38.451004},
          zoom: 13
		});
	

	function criaMarker(grupo) {

		var infowindow = new google.maps.InfoWindow({content: grupo.conteudo});
		var centro = {
			lat: grupo.latitude,
			lng: grupo.longitude
		}

		var marker = new google.maps.Marker({
			position: centro,
			map: map,
			title: grupo.nome
		})
		markers.push(marker);
		marker.addListener('click', function() {
			infowindow.open(map, marker);
		});
	}

	var grupos;
	var xhr = new XMLHttpRequest();
	xhr.open("GET", "https://raw.githubusercontent.com/joaovirgili/uRunner/master/grupos.json", true);
	xhr.addEventListener("load", function(e, grupos) {
		var resposta = xhr.responseText;
		if (xhr.status == 200) {
			grupos = JSON.parse(resposta);

			//criar os marcadores
			for (let i=0; i<grupos.length; i++) {
				grupo = grupos[i];
				criaMarker(grupo);
			}

			//adicionar os botoes na pagina que mostra os grupos
			for (var i=0;i<grupos.length;i++) {
				var li = document.createElement("li");
				var ul = document.querySelector("#lista");
		
				li.classList.add("grupos");
				li.classList.add("botao");
				li.textContent = grupos[i].nome;
				ul.appendChild(li);
			}
			
			function getContent (botao) {
				for (var i=0;i<grupos.length;i++) {
					if (botao.textContent == grupos[i].nome) 
						return grupos[i].conteudo;
				}
			}

			var ul = document.querySelector("#lista");
			ul.addEventListener("click", function (event) {
				event.preventDefault();
				if (event.target.nodeName == "LI") {
					botao = event.target;
					conteudo = getContent(botao);
					for (var i=0; i<markers.length;i++) {
						marker = markers[i];
						markerName = markers[i].title;
						if (botao.textContent == markerName) {
							var infowindow = new google.maps.InfoWindow({content: conteudo});
							infowindow.close();
							infowindow.open(map, markers[i]);
						}
							
					}
				}
			});
			
		}
	});
	xhr.send();
}





















