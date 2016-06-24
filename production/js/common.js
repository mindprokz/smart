$(document).ready(function() {
	$('a[href^="#"]').on('click', function () {
		$('html, body').animate({ scrollTop:  $('a[name="'+this.hash.slice(1)+'"]').offset().top - 93 }, 1000 );
		return false;
	});
	$(".fancybox").fancybox({
		maxWidth	: 700,
		maxHeight	: 500,		
		openEffect	: 'none',
		closeEffect	: 'none'
	});	

	//Chrome Smooth Scroll
	try {
		$.browserSelector();
		if($("html").hasClass("chrome")) {
			$.smoothScroll();
		}
	} catch(err) {

	};

	$("img, a").on("dragstart", function(event) { event.preventDefault(); });

	// Инициализация плавающего меню
	new FloatMenu({ 
		elem : document.querySelector('.nav'), 
		height : 200,
		first_class : 'top_style',
		second_class : 'margin_style'
	}).init();

	document.querySelector('input[type="file"]').addEventListener('change', function () {
		var _sost = this.value.split('\\')[this.value.split('\\').length - 1];
		document.getElementById('sost').textContent = _sost;
		document.forms.resume.filename.value = _sost;
	});

//	var map;
	// координаты карты
//	var oz = new google.maps.LatLng(51.145469, 71.388221);
//	var MY_MAPTYPE_ID = 'custom_style';
//	function initialize() {
		// стили 
/*
		var featureOpts = [
		    {
		        "featureType": "all",
		        "elementType": "labels.text.fill",
		        "stylers": [
		            {
		                "saturation": 36
		            },
		            {
		                "color": "#333333"
		            },
		            {
		                "lightness": 40
		            }
		        ]
		    },
		    {
		        "featureType": "all",
		        "elementType": "labels.text.stroke",
		        "stylers": [
		            {
		                "visibility": "on"
		            },
		            {
		                "color": "#ffffff"
		            },
		            {
		                "lightness": 16
		            }
		        ]
		    },
		    {
		        "featureType": "all",
		        "elementType": "labels.icon",
		        "stylers": [
		            {
		                "visibility": "off"
		            }
		        ]
		    },
		    {
		        "featureType": "administrative",
		        "elementType": "geometry.fill",
		        "stylers": [
		            {
		                "color": "#fefefe"
		            },
		            {
		                "lightness": 20
		            }
		        ]
		    },
		    {
		        "featureType": "administrative",
		        "elementType": "geometry.stroke",
		        "stylers": [
		            {
		                "color": "#fefefe"
		            },
		            {
		                "lightness": 17
		            },
		            {
		                "weight": 1.2
		            }
		        ]
		    },
		    {
		        "featureType": "landscape",
		        "elementType": "geometry",
		        "stylers": [
		            {
		                "color": "#f5f5f5"
		            },
		            {
		                "lightness": 20
		            }
		        ]
		    },
		    {
		        "featureType": "poi",
		        "elementType": "geometry",
		        "stylers": [
		            {
		                "color": "#f5f5f5"
		            },
		            {
		                "lightness": 21
		            }
		        ]
		    },
		    {
		        "featureType": "poi.park",
		        "elementType": "geometry",
		        "stylers": [
		            {
		                "color": "#dedede"
		            },
		            {
		                "lightness": 21
		            }
		        ]
		    },
		    {
		        "featureType": "road.highway",
		        "elementType": "geometry.fill",
		        "stylers": [
		            {
		                "color": "#ffffff"
		            },
		            {
		                "lightness": 17
		            }
		        ]
		    },
		    {
		        "featureType": "road.highway",
		        "elementType": "geometry.stroke",
		        "stylers": [
		            {
		                "color": "#ffffff"
		            },
		            {
		                "lightness": 29
		            },
		            {
		                "weight": 0.2
		            }
		        ]
		    },
		    {
		        "featureType": "road.arterial",
		        "elementType": "geometry",
		        "stylers": [
		            {
		                "color": "#ffffff"
		            },
		            {
		                "lightness": 18
		            }
		        ]
		    },
		    {
		        "featureType": "road.local",
		        "elementType": "geometry",
		        "stylers": [
		            {
		                "color": "#ffffff"
		            },
		            {
		                "lightness": 16
		            }
		        ]
		    },
		    {
		        "featureType": "transit",
		        "elementType": "geometry",
		        "stylers": [
		            {
		                "color": "#f2f2f2"
		            },
		            {
		                "lightness": 19
		            }
		        ]
		    },
		    {
		        "featureType": "water",
		        "elementType": "geometry",
		        "stylers": [
		            {
		                "color": "#e9e9e9"
		            },
		            {
		                "lightness": 17
		            }
		        ]
		    }
		];
*/
		// Опции карты
/*
		var mapOptions = {
				zoom: 14,
				center: oz,
				disableDefaultUI: true,
//				mapTypeControlOptions: {
//					mapTypeIds: [google.maps.MapTypeId.ROADMAP, MY_MAPTYPE_ID]
//				},
//				mapTypeId: MY_MAPTYPE_ID
			};

	 
		map = new google.maps.Map(document.getElementById('map_canvas'), mapOptions);
/*		var styledMapOptions = {
				name: 'Custom Style'
			};
		//var customMapType = new google.maps.StyledMapType(featureOpts, styledMapOptions);
		//map.mapTypes.set(MY_MAPTYPE_ID, customMapType);

		var marker = new google.maps.Marker({
				position: new google.maps.LatLng(51.143833, 71.415786),
				map: map,
				title: 'Филиал в Астане',
				icon : 'wp-content/themes/smart/img/marker.png',
		});
		};
	initialize();*/
});
