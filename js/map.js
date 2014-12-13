function init(){
	var location = new google.maps.LatLng(41.8351083,-87.6271943);

	var mapOptions = {
			center: location,
			zoom: 18,
			mapTypeControl: false,
			mapTypeId: google.maps.MapTypeId.SATELLITE
	};

	var mapElement = document.getElementById("map-canvas");
	var map = new google.maps.Map(mapElement, mapOptions);

	var marker = new google.maps.Marker({
		position: location,
		map: map,
		icon: 'IIT-Icon.png',
		title: 'IIT Main Campus',
		animation: google.maps.Animation.DROP
	});

	var windowContent = '<div id="campus-info"><h1>IIT Main Campus</h1><p>3300 South Federal Street<br>Chicago, IL 60616<br>Phone: 312.567.3175</p></div>';

	var infowindow = new google.maps.InfoWindow({
        content: windowContent
    });

    google.maps.event.addListener(marker, 'click', function(){
        infowindow.open(map, marker);
    });
}

google.maps.event.addDomListener(window, 'load', init);