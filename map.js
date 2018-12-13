var myLat = 42.4059833;
var myLng = -71.1193659;
var me, map, marker;

// ADD CUSTOM STYLE TO MAP
var styledMapType = new google.maps.StyledMapType(
[
  {
    "elementType": "geometry",
    "stylers": [{"color": "#f5f5f5"}]
  },
  {
    "elementType": "labels",
    "stylers": [{"visibility": "off"}]
  },
  {
    "elementType": "labels.icon",
    "stylers": [{"visibility": "off"}]
  },
  {
    "elementType": "labels.text.fill",
    "stylers": [{"color": "#616161"}]
  },
  {
    "elementType": "labels.text.stroke",
    "stylers": [{"color": "#f5f5f5"}]
  },
  {
    "featureType": "administrative.land_parcel",
    "stylers": [{"visibility": "off"}]
  },
  {
    "featureType": "administrative.land_parcel",
    "elementType": "labels.text.fill",
    "stylers": [{"color": "#bdbdbd"}]
  },
  {
    "featureType": "administrative.neighborhood",
    "stylers": [{"visibility": "off"}]
  },
  {
    "featureType": "poi",
    "elementType": "geometry",
    "stylers": [{"color": "#eeeeee"}]
  },
  {
    "featureType": "poi",
    "elementType": "labels.text.fill",
    "stylers": [{"color": "#757575"}]
  },
  {
    "featureType": "poi.business",
    "stylers": [{"visibility": "off"}]
  },
  {
    "featureType": "poi.park",
    "elementType": "geometry",
    "stylers": [{"color": "#e5e5e5"}]
  },
  {
    "featureType": "poi.park",
    "elementType": "labels.text",
    "stylers": [{"visibility": "off"}]
  },
  {
    "featureType": "poi.park",
    "elementType": "labels.text.fill",
    "stylers": [{"color": "#9e9e9e"}]
  },
  {
    "featureType": "road",
    "elementType": "geometry",
    "stylers": [{"color": "#ffffff"}]
  },
  {
    "featureType": "road.arterial",
    "elementType": "labels.text.fill",
    "stylers": [{"color": "#757575"}]
  },
  {
    "featureType": "road.highway",
    "elementType": "geometry",
    "stylers": [{"color": "#dadada"}]
  },
  {
    "featureType": "road.highway",
    "elementType": "labels.text.fill",
    "stylers": [{"color": "#616161"}]
  },
  {
    "featureType": "road.local",
    "elementType": "labels.text.fill",
    "stylers": [{"color": "#9e9e9e"}]
  },
  {
    "featureType": "transit.line",
    "elementType": "geometry",
    "stylers": [{"color": "#e5e5e5"}]
  },
  {
    "featureType": "transit.station",
    "elementType": "geometry",
    "stylers": [{"color": "#eeeeee"}]
  },
  {
    "featureType": "water",
    "elementType": "geometry",
    "stylers": [{"color": "#c9c9c9"}]
  },
  {
    "featureType": "water",
    "elementType": "labels.text.fill",
    "stylers": [{"color": "#9e9e9e"}]
  }
], {name: 'Styled'});

function off() {
  document.getElementById("overlay").style.display = "none";
  document.getElementById("title").style.display = "block";
}

function initMap() {
  me = new google.maps.LatLng(myLat, myLng);
  var myOptions = {
    zoom: 18,
    center: me,
    mapTypeControlOptions: {
      mapTypeIds: ['roadmap','satellite','styled_map']
    }
  };
  map = new google.maps.Map(document.getElementById('map'), myOptions);
  map.mapTypes.set('styled_map', styledMapType);
  map.setMapTypeId('styled_map');

  addMarkers();
}

// ADD MARKER DATA
function addMarkers() {

   icons = {
      poor: {
        icon: 'icons/red.png'
      },
      good: {
        icon: 'icons/yellow.png'
      },
      great: {
        icon: 'icons/green.png'
      }
  };
  var places = [
    {
      position: new google.maps.LatLng(42.405945, -71.116917),
      name: 'Kitchen',
      building: 'SEC',
      loudness: 26.389,
      crowdedness: 11,
      study: 5,
      img: 'locations/Kitchen.jpeg',
      type: 'good'
    }, {
      position: new google.maps.LatLng(42.405979, -71.116989),
      name: 'EPDC',
      building: 'SEC',
      loudness: 19.522,
      crowdedness: 17,
      study: 4,
      img: 'locations/EPDC.jpeg',
      type: 'poor'
    }, {
      position: new google.maps.LatLng(42.405891, -71.116936),
      name: 'Section 1',
      building: 'SEC',
      loudness: 22.857,
      crowdedness: 14,
      study: 5,
      img: 'locations/Section1.jpeg',
      type: 'good'
    }, {
      position: new google.maps.LatLng(42.405857, -71.116887),
      name: 'Section 2',
      building: 'SEC',
      loudness: 18.125,
      crowdedness: 14,
      study: 6,
      img: 'locations/Section2.jpeg',
      type: 'good'
    }, {
      position: new google.maps.LatLng(42.405834, -71.116931),
      name: 'Section 3',
      building: 'SEC',
      loudness: 18.327,
      crowdedness: 17,
      study: 5,
      img: 'locations/Section3.jpeg',
      type: 'good'
    }, {
      position: new google.maps.LatLng(42.405549, -71.120153),
      name: 'Hotung',
      building: 'Campus Center',
      loudness: 14.667,
      crowdedness: 10,
      study: 8,
      img: 'locations/Hotung.jpeg',
      type: 'great'
    }, {
      position: new google.maps.LatLng(42.405532, -71.119813),
      name: 'Commons',
      building: 'Campus Center',
      loudness: 25.727,
      crowdedness: 12,
      study: 5,
      img: 'locations/Commons.jpeg',
      type: 'good'
    }, {
      position: new google.maps.LatLng(42.405388, -71.119738),
      name: 'The Rez',
      building: 'Campus Center',
      loudness: 20.429,
      crowdedness: 14,
      study: 5,
      img: 'locations/Rez.jpeg',
      type: 'good'
    }, {
      position: new google.maps.LatLng(42.405577, -71.120003),
      name: 'Ping Pong',
      building: 'Campus Center',
      loudness: 17.356,
      crowdedness: 10,
      study: 7,
      img: 'locations/PingPong.jpeg',
      type: 'great'
    }, {
      position: new google.maps.LatLng(42.405587, -71.119880),
      name: '3rd Floor',
      building: 'Campus Center',
      loudness: 13.188,
      crowdedness: 16,
      study: 6,
      img: 'locations/3rdFloor.jpeg',
      type: 'good'
    }, {
      position: new google.maps.LatLng(42.406228, -71.119093),
      name: 'Reading Room',
      building: 'Tisch Library',
      loudness: 16.458,
      crowdedness: 13,
      study: 6,
      img: 'locations/ReadingRoom.png',
      type: 'good'
    }, {
      position: new google.maps.LatLng(42.406086, -71.119153),
      name: 'Tower',
      building: 'Tisch Library',
      loudness: 16.875,
      crowdedness: 16,
      study: 6,
      img: 'locations/Tower.png',
      type: 'good'
    }, {
      position: new google.maps.LatLng(42.405992, -71.118912),
      name: 'Tables',
      building: 'Tisch Library',
      loudness: 16.544,
      crowdedness: 18,
      study: 5,
      img: 'locations/Tables.png',
      type: 'good'
    }, {
      position: new google.maps.LatLng(42.405946, -71.118376),
      name: 'Quiet Study',
      building: 'Tisch Library',
      loudness: 6.571,
      crowdedness: 11,
      study: 9,
      img: 'locations/QuietStudy.png',
      type: 'great'
    }, {
      position: new google.maps.LatLng(42.406179, -71.118961),
      name: 'Lobby',
      building: 'Tisch Library',
      loudness: 16.760,
      crowdedness: 14,
      study: 6,
      img: 'locations/Lobby.png',
      type: 'good'
    }
  ];

  // ADD MARKERS AND INFO WINDOWS TO MAP
  places.forEach(function(place) {
    var marker = new google.maps.Marker({
      map: map,
      position : place.position,
      icon: icons[place.type].icon
    });
    var infowindow = new SnazzyInfoWindow({
      marker: marker,
      content: `<h1>${place.name}</h1>`+
      `<h3>${place.building}</h3>`+
      `<p>Loudness: ${place.loudness}  |  Crowdedness: ${place.crowdedness}/20</p>`+
      `<div class="container"><img src=${place.img}>`+
      `<div class="overlay"><h2>${place.study}/10</h2><h3>studiability</h3>`+
      `</div></div>`,
      closeOnMapClick: true,
      showCloseButton: false,
      closeWhenOthersOpen: true,
      maxWidth: 350
    });
  });
}
