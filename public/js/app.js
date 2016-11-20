var map;
function initMap() {
  map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: -34.397, lng: 150.644},
    zoom: 8
  });
}

var template = '<div class="contenedor-template">' +
            '<div class="row">' +
                '<a class="col s12 urlindeed" href="{{url}}" target="_blank">' +
                    '<div class="searchResult" id="{{id}}">' +
                        '<h2 class="titulo-deltrabajo">{{titulodeltrabajo}}</h2>' +
                        '<p class="compania">{{compania}}<span class="lugar-compania">-{{lugarCompania}}</span></p>' +
                        '<p class="requerimiento-deltrabajo">{{requerimientodeltrabajo}}</p>' +
                    '</div>' +
                '</a>' +
            '</div>' +
        '</div>'

$(document).ready(function(){
    $("#btn-resultado").click(function(){
        var indeedApiUrl = "http://api.indeed.com/ads/apisearch";
        var inputCiudadValor = $("#ciudad").val();
        var inputTrabajoValor = $("#trabajo").val();
        var data = {
            publisher: "8023780673544955",
            format: "json",
            q: inputTrabajoValor,
            l: inputCiudadValor,
            limit: "10",
            v:"2"
        }

        $.ajax({
            url: indeedApiUrl,
            type: 'GET',
            data: data,
            dataType: 'jsonp',
            success: function(response){
                console.log(response);
                var dataTotal = "";
                $.each(response.results, function(i, objetoInfoTrabajo){
                    console.log(objetoInfoTrabajo);
                    dataTotal += template
                                .replace("{{url}}", objetoInfoTrabajo.url)
                                .replace("{{id}}", objetoInfoTrabajo.jobkey)                        
                                .replace("{{titulodeltrabajo}}", objetoInfoTrabajo.jobtitle)
                                .replace("{{compania}}", objetoInfoTrabajo.company)
                                .replace("{{lugarCompania}}", objetoInfoTrabajo.formattedLocationFull)
                                .replace("{{requerimientodeltrabajo}}", objetoInfoTrabajo.snippet);
                });
                $("#informacion-indeed").addClass("contenedor-template");
                $("#info-template").html(dataTotal);

            }

        })
    });
    


});