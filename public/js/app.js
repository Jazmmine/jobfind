var map;
function initMap() {
  map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: -34.397, lng: 150.644},
    zoom: 8
  });
}

var clientId = "581403453733193";

var template = '<div class="contenedor-informacion">' +
        '<div class="row">' + 
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
        '</div>' +
    '</div>'

var pedirMuestra = function(response){
    console.log(response);
    var informacion = "";

}

$(document).ready(function(){
    var indeedApi = "http://api.indeed.com/ads/apisearch?publisher=581403453733193&q=java&l=austin%2C+tx&sort=&radius=&st=&jt=&start=&limit=&fromage=&filter=&latlong=1&co = nosotros y CHNL = & userip = 1.2.3.4 y useragent = Mozilla / 2F4.0%%% 29 28Firefox & v = 2";
    var inputCiudad = $("#ciudad").val();
    var inputTrabajo = $("#trabajo").val();
    $("#btn-resultado").click(function(e){
        e.preventDefault();
        
    });
    $.getJSON(indeedApi, )

});