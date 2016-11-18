var map;
function initMap() {
  map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: -34.397, lng: 150.644},
    zoom: 8
  });
}

var template =  '<div class="row">' + 
            '<div class="col s12">' +
                '<span class="trabajo-general">{{trabajogeneral}}</span>' +
                '<span class="lugar-general">{{lugargeneral}}</span>' +
           ' </div>' +
        '</div>' +
        '<div class="row">' +
            '<div class="col s12">' + 
                '<div class="titulo-deltrabajo">{{titulodeltrabajo}}</div>' +
            '</div>' + 
        '</div>' +
        '<div class="row">' + 
            '<div class="col s12">' +
                '<div class="lugar-deltrabajo">{{lugardeltrabajo}}</div>' +
            '</div>' +
        '</div>' +
        '<div class="row">' +
            '<div class="col s12">' +
                '<div class="requerimiento-deltrabajo">{{requerimientodeltrabajo}}</div>' +
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
                $("#informacion-indeed").html(template.replace("{{trabajogeneral}}",response.results[0].city))

            }

        })
    });
    


});