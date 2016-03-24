// define globals
var weekly_quakes_endpoint = "http://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/4.5_week.geojson";
var $quakesList;
var map;
var template;

console.log("sanity check");

// $(document).on("ready", function() {
//    findQuakes();
// });

$(document).on("ready", findQuakes);

function findQuakes(){
  console.log("hello");
  $.ajax({
    method: "GET",
    url: weekly_quakes_endpoint,
    // data: $("form").serialize(),
    success: onSuccess,
    error: onError
  });
}
function onSuccess(json){
  console.log(json);
  // console.log(json.features[i].properties.place);
  // console.log(json.features[i].geometry.coordinates);
  for (var i=0;i<70;i++){
    $("#quakes").append($("<li class='quake'>" + json.features[i].properties.place + " " + json.features[i].geometry.coordinates + "</li>"));
  }
  console.log("hi there");
}
function onError(xhs, status, errorThrown){
  console.log(error);
  }
  // json.features[0].properties.title,
  // json.features[0].properties.coordinates
