$(document).ready(initPage);

function initPage(){



  $('#bt').click(get_color);



  function get_color(){

    $.ajax({
      type: 'GET',
      url: 'https://api.tisseo.fr/v1/lines.json?key=a3732a1074e2403ce364ad6e71eb998cb',
      data: true,
      dataType:"json",
      success: function(data){
      $("#showliste").append("<ul>");
      $(data.lines.line).each(function(){
          $("#showliste ul").append($("<li>"+this.shortName + " - " + this.name + "</li>").css("color", this.bgXmlColor).click(()=>get_arret(this.id,this.name,this.bgXmlColor)));
      })
      },
      error: function(xhr, type, exception) {
        alert("ajax error response type "+type);
      },

    });

  }
}

function get_arret(id,nom,couleur){
  $.ajax({
    type : "GET",
    url : "https://api.tisseo.fr/v1/stop_points.json?key=a3732a1074e2403ce364ad6e71eb998cb&displayCoordXY=1&lineId="+id,
    data: true,
    dataType : "json",
    success: function(data){
    let arrets = data.physicalStops.physicalStop;
    $("#showstop").empty();
    let markers = {
        color: this.bgXmlColor,
        stops: []
      }
    $(arrets).each(function(){
      let cetArret={
        lat: this.x,
        long: this.y,
        name: this.name
      }

        markers.stops.push(cetArret);
    });

    //ajout de la map dans la div mapLigne
    init_map($("#mapLigne").attr("id"), markers);
  },
      error: function(xhr, type, exception) {
        alert("ajax error response type "+type);
      },

    });
}
