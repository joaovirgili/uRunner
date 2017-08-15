var map;

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
			for (let i=0; i<grupos.length; i++) {
				grupo = grupos[i];
				console.log(grupo);
				criaMarker(grupo);
			}
		}
	});
	xhr.send();
}





















