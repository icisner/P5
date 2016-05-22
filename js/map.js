     function initMap() {
        var mapDiv = document.getElementById('map');
        var map = new google.maps.Map(mapDiv, {
          center: {lat: 29, lng: -98},
          zoom: 6
        });
      }

      var gmurl="https://maps.googleapis.com/maps/api/place/textsearch/json?query=restaurants+in+78259&radius=1000&key=MYKEY&callback=?"
      //	var gmurl="https://maps.googleapis.com/maps/api/place/radarsearch/json?location=51.503186,-0.126446&radius=5000&type=museum&key=AIzaSyCBf_LgqHPFPxbBUk4Cv4AUaexm56EgyS8&callback=?"

      var listRes ={

      	 address : "",
         lat : 0,
         lng : 3,
         icon : "",
         id : "",
         name : "",
         place : "",
         price_level : 2,
         rating : 3.5,
         types : [ ]
      };


    //  $.getJSON(gmurl,function data(results, status){
      	
    //  });

    $.getJSON(gmurl, function data(results, status) {
        if (status === google.maps.places.PlacesServiceStatus.OK) {
          for (var i = 0; i < results.length; i++) {
            
            console.log(data);
            //createMarker(results[i]);

          }
        }
      });

  function createMarker(place) {
  var placeLoc = place.geometry.location;
  var marker = new google.maps.Marker({
    map: map,
    position: place.geometry.location
  })
};


