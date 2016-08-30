var app = angular.module('realty_app', ['ui.slider', 'ymaps'/*, 'ngAnimate'*/]);

app.factory('colorpicker', function () {
  function hexFromRGB(r, g, b) {
    var hex = [r.toString(16), g.toString(16), b.toString(16)];

    angular.forEach(hex, function(value, key) {
    if (value.length === 1)
      hex[key] = "0" + value;
    });
    return hex.join('').toUpperCase();
  }

  return {
    refreshSwatch: function(r, g, b) {
      var color = '#' + hexFromRGB(r, g, b);
      angular.element('#swatch').css('background-color', color);
    }
  };

});

app.controller('sliderDemoCtrl', function ($scope, $log, colorpicker) {
  function refreshSwatch(ev, ui) {
    var red = $scope.colorpicker.red,
        green = $scope.colorpicker.green,
        blue = $scope.colorpicker.blue;

    colorpicker.refreshSwatch(red, green, blue);
  }
  // Slider options with event handlers
  $scope.slider = {
    'options': {
      start: function (event, ui) {
        $log.info('Event: Slider start - set with slider options', event);
      },
      stop: function (event, ui) {
        $log.info('Event: Slider stop - set with slider options', event);
      }
    }
  };


  $scope.colorpicker = {
    red: 255,
    green: 140,
    blue: 60,
    options: {
      orientation: 'horizontal',
      min: 0,
      max: 255,
      range: 'min',
      change: refreshSwatch,
      slide: refreshSwatch
    }
  };
});

app.controller('main', function ($scope, $http, $timeout) {
	$scope.preloader = true;
  // Объект с главной информацией

    // Объект языка
  $scope.lang = {
    language: localStorage.getItem('language'),
    show: false,
    close: function () {
      $scope.lang.show = false;
    },
  };

  $scope.backImage = $scope.lang.language === 'rus' ? '/img/background/service.png' : '/img/background/service.png';
  $scope.obrVid = $scope.lang.language === 'rus' ? 'https://www.youtube.com/embed/0xx8PpNBeD8?autoplay=1' : 'https://www.youtube.com/embed/N6KFC94Zs-U?autoplay=1';
  $scope.mainVid = $scope.lang.language === 'rus' ? 'https://www.youtube.com/embed/Z82cvIB9U9o?autoplay=1' : 'https://www.youtube.com/embed/YFjJOfofxwU?autoplay=1';
  $scope.uarcLogo =  $scope.lang.language === 'rus' ? '/img/UARk_logo.png' : 'img/UARk_logo_en.png';


  // Массив объектов для раздела спец предложения
  $scope.spec = [];
  // Запрос на получение спецпредложений
  $scope.get_spec = function () {
    $http.get('http://smartrealtor.kz/?json=get_category_posts&category_slug=spec&post_type=spec&count=4')
      .then(function (value) {
        var _array = value.data.posts;

        // Распределяем пришедшие данные
        _array.forEach( function (element, index, array) {
          // Промежуточный объект для составления объекта который будет помещен в массив
          var _object = {};

          _object.name = element.custom_fields['wpcf-header'][0];
          _object.content = element.custom_fields['wpcf-content'][0];
          _object.name_en = element.custom_fields['wpcf-header_en'][0];
          _object.content_en = element.custom_fields['wpcf-content_en'][0];
          _object.floor = element.custom_fields['wpcf-floor'][0];
          _object.square = element.custom_fields['wpcf-square'][0];
          _object.price = element.custom_fields['wpcf-price'][0];
          _object.id_floor = element.id;
          _object.thumbnail = element.thumbnail_images.full.url;
          _object.author = {
            name: element.author.first_name,
            telephone: element.author.last_name,
            email: element.author.description.split(',')[1],
            image: element.author.description.split(',')[0]
          };
          _object.images = [];
          element.attachments.forEach(function (element, index, array) {
            _object.images.push(element.url);
          });

          if ( element.custom_fields['wpcf-type_sale'][0] === '1' ){
            _object.type_sale = 'Аренда';
          } else {
            _object.type_sale = 'Продажа';
          }

          if ($scope.lang.language === 'rus') {
            _object.name_view = _object.name;
            _object.content_view = _object.content;
          } else if ($scope.lang.language === 'eng') {
            _object.name_view = _object.name_en;
            _object.content_view = _object.content_en;
          }

					// Координаты карты квартиры
					_object.coords = element.custom_fields['wpcf-coords'][0];

          // Помещение объекта в массив
          $scope.spec[index] = _object;
        });
      });
  }

  // Иконки в партнерах rus
  $scope.partner_ru = [
    {
      name: 'Посольство Чешской Республики',
      url: 'http://smartrealtor.kz/wp-content/uploads/2016/04/chehia.gif'
    },
    {
      name: 'Посольство Пакистана',
      url: 'http://smartrealtor.kz/wp-content/uploads/2016/04/Pakistan.jpg'
    },
    {
      name: 'Посольство Словакии',
      url: 'http://smartrealtor.kz/wp-content/uploads/2016/04/slovackiy.gif'
    },
    {
      name: 'Посольство Французской Республики',
      url: 'http://smartrealtor.kz/wp-content/uploads/2016/04/франция.png'
    },
    {
      name: 'Посольство Бельгии',
      url: 'http://smartrealtor.kz/wp-content/uploads/2016/04/бельгия.jpg'
    },
    {
      name: 'Посольство Швейцарии',
      url: 'http://smartrealtor.kz/wp-content/uploads/2016/04/прав-флаг-швейцарии.png'
    },
    {
      name: 'Посольство Великобритании',
      url: 'http://smartrealtor.kz/wp-content/uploads/2016/04/velikobritaniia_enl.jpg'
    },
    {
      name: 'Посольство Америки',
      url: 'http://smartrealtor.kz/wp-content/uploads/2016/04/usa-flag.jpg'
    },
    {
      name: 'Компания «Total»',
      url: 'http://smartrealtor.kz/wp-content/uploads/2016/04/logo-total.png'
    },
    {
      name: 'Компания «Dow»',
      url: 'http://smartrealtor.kz/wp-content/uploads/2016/04/DOW-logo.jpg'
    },
    {
      name: 'Хоккеисты ХК "Барыс"',
      url: 'http://smartrealtor.kz/wp-content/uploads/2016/04/Логотип_ХК_«Барыс».svg_.png'
    },
    {
      name: 'Компания «Thales»',
      url: 'http://smartrealtor.kz/wp-content/uploads/2016/04/full_174.jpg'
    },
  ];

  // Иконки в партнерах eng
  $scope.partner_en = [
    {
      name: 'Embassy of the Czech Republic',
      url: 'http://smartrealtor.kz/wp-content/uploads/2016/04/chehia.gif'
    },
    {
      name: 'Embassy of Pakistan',
      url: 'http://smartrealtor.kz/wp-content/uploads/2016/04/Pakistan.jpg'
    },
    {
      name: 'Embassy of Slovakia',
      url: 'http://smartrealtor.kz/wp-content/uploads/2016/04/slovackiy.gif'
    },
    {
      name: 'Embassy of the French Republic',
      url: 'http://smartrealtor.kz/wp-content/uploads/2016/04/франция.png'
    },
    {
      name: 'Embassy of Belgium',
      url: 'http://smartrealtor.kz/wp-content/uploads/2016/04/бельгия.jpg'
    },
    {
      name: 'Embassy of Switzerland',
      url: 'http://smartrealtor.kz/wp-content/uploads/2016/04/прав-флаг-швейцарии.png'
    },
    {
      name: 'The British Embassy',
      url: 'http://smartrealtor.kz/wp-content/uploads/2016/04/velikobritaniia_enl.jpg'
    },
    {
      name: 'Embassy of the United States of America',
      url: 'http://smartrealtor.kz/wp-content/uploads/2016/04/usa-flag.jpg'
    },
    {
      name: '«Total» Company',
      url: 'http://smartrealtor.kz/wp-content/uploads/2016/04/logo-total.png'
    },
    {
      name: '«Dow» Company',
      url: 'http://smartrealtor.kz/wp-content/uploads/2016/04/DOW-logo.jpg'
    },
    {
      name: 'Hockey Players of "Barys"',
      url: 'http://smartrealtor.kz/wp-content/uploads/2016/04/Логотип_ХК_«Барыс».svg_.png'
    },
    {
      name: '«Thales» Company',
      url: 'http://smartrealtor.kz/wp-content/uploads/2016/04/full_174.jpg'
    },
  ];


  // Массив объектов для каталога квартир, каждый объект отдельная квартира
  $scope.catalog_search = [];
  // Запрос на файл квартир
  $scope.catalog_get = function () {
    $http.get('http://smartrealtor.kz/?json=get_category_posts&category_slug=catalog&post_type=catalog&count=-1')
      .then(function (value) {
        var _array = value.data.posts,
            maxS = [],
            maxP = [];
        // Распределяем пришедший массив в нужный нам массив объектов
        _array.forEach( function (element, index, array) {
          // Промежуточный объект для составления объекта который будет помещен в массив
          var _object = {};
					// Сформированный объект квартиры
          _object.name = element.custom_fields['wpcf-header'][0];
          _object.content = element.custom_fields['wpcf-content'][0];
          _object.name_en = element.custom_fields['wpcf-header_en'][0];
          _object.content_en = element.custom_fields['wpcf-content_en'][0];
          _object.floor = element.custom_fields['wpcf-floor'][0];
          _object.square = element.custom_fields['wpcf-square'][0];
          _object.price = element.custom_fields['wpcf-price'][0];
          _object.id_floor = element.id;
          _object.thumbnail = element.thumbnail_images.full.url;
          _object.type = element.custom_fields['wpcf-type'][0];
          _object.author = {
            name: element.author.first_name,
            telephone: element.author.last_name,
            email: element.author.description.split(',')[1],
            image: element.author.description.split(',')[0]
          };
          _object.images = [];

          // Добавление картинок в объект
          element.attachments.forEach(function (element, index, array) {
            _object.images.push(element.url);
          });

					// Узнаем тип квартиры
          if ( element.custom_fields['wpcf-type_sale'][0] === '1' ){
            _object.type_sale = 'Снять в аренду';
          } else {
            _object.type_sale = 'Купить';
          }

					// В зависимости от языка выбираем нужные нам поля
          if ($scope.lang.language === 'rus') {
            _object.name_view = _object.name;
            _object.content_view = _object.content;
          } else if ($scope.lang.language === 'eng') {
            _object.name_view = _object.name_en;
            _object.content_view = _object.content_en;
          }

					// Координаты карты квартиры
					_object.coords = element.custom_fields['wpcf-coords'][0];


          // Помещение объекта в массив
          $scope.catalog_search[index] = _object;

          // Помещаем площадь и цену в отдельные массивы для будущего сравнения
          maxS[index] = _object.square;
          maxP[index] = _object.price;
        });

				// получение максимальных значений для вставки в ui и сравнения
        $scope.sliderExample9[1] = Math.max.apply(null, maxS);
        $scope.sliderMax = Math.max.apply(null, maxS) + 1;
        $scope.sliderMaxForReset = Math.max.apply(null, maxS);

        $scope.price[1] = Math.max.apply(null, maxP);
        $scope.price[2] = Math.max.apply(null, maxP);
      });
  };

  // Переменные для отображения в меню квартир, обрезаются в функции changeValueFilter если больше 7 символов
  $scope.dropDown1FilterView = $scope.lang.language === 'rus' ? 'Все' : 'Any';
  $scope.dropDown2FilterView = $scope.lang.language === 'rus' ? 'Все' : 'Any';
  $scope.dropDown3FilterView = $scope.lang.language === 'rus' ? 'Любой комнатности' : 'Any';

  // Переменный для фильтрации квартир
  $scope.dropDown1Filter = 'Все';
  $scope.dropDown2Filter = 'Все';
  $scope.dropDown3Filter = 'Все';

  $scope.sliderMax = '';
  $scope.sliderExample9 = [0, $scope.sliderMax];
  $scope.sliderValues = [0, $scope.sliderMax];

  $scope.price = [0];
  $scope.price[3] = ''

  // Коэффициент для пересчета валюты
  $scope.coef = {
    active: 1,
    coef_dol: '',
    cur: 'тг'
  };
  // Запрос на сервер для получения курса
  $http.get('http://smartrealtor.kz/?json=get_category_posts&category_slug=curs&post_type=cursdol&count=1')
    .then(function (value) {
      $scope.coef.coef_dol = value.data.posts[0].title;
    });


  // Модальное окно авторизации
  $scope.auth = {
    check_auth_user : window.localStorage.getItem('submit') == 1 ? true : false,
    open_res: 0,
    show: window.localStorage.getItem('reg') == 1 && window.localStorage.getItem('lastTime') != 1? true : false,
    return_auth: function () {
      window.localStorage.removeItem('reg')
      $scope.auth.show = window.localStorage.getItem('reg') == 1 ? true : false;
      window.localStorage.setItem('submit', 1);
      $scope.auth.check_auth_user = window.localStorage.getItem('submit') == 1 ? true : false;
    },
    submit : function () {
      window.localStorage.setItem('submit', 1);
    },
    return_main: function () {
      window.localStorage.removeItem('reg')
      $scope.auth.show = window.localStorage.getItem('reg') == 1 ? true : false;
      window.localStorage.setItem('submit', 1);
      $scope.auth.check_auth_user = window.localStorage.getItem('submit') == 1 ? true : false;
      window.localStorage.setItem('lastTime', 1);
    },
  };


  // Модальное окно с квартирами
  $scope.info = {
    show: false,
    name: '',
    id_floor : '',
    floor: '',
    square: '',
    price: '',
    content: '',
    thumbnail: '',
    images: [],
    author: {
      name: '',
      telephone: '',
      email: '',
      image: '',
    },
    change: function (index, arr, show) {
      if (!$scope.auth.check_auth_user){
        window.localStorage.setItem('reg', 1);
        $scope.auth.show = window.localStorage.getItem('reg') == 1 ? true : false;
      }

      var _object = arr[index];

      this.name = _object.name_view;
      this.id_floor = _object.id_floor;
      this.floor = _object.floor;
      this.square = _object.square;
      this.price = _object.price;
      this.content = _object.content;
      this.thumbnail = _object.thumbnail;
      this.images = _object.images;
      this.author = _object.author;

      if (show) this.show = true;
      $scope.map.center = _object.coords.split(',');
      $scope.map.marker = _object.coords.split(',');
      $scope.map.index.balloonContent = _object.name;
    },
    close: function () {
      $scope.info.show = false;
    },
  };


  // Модальное окно обратной связи
  $scope.feedback = {
    show: false,
    header: ' ',
    input_header: '',
    textarea_show: false,
    close: function () {
      this.show = false;
    },
    open: function (head, textarea) {
      this.show = true;
      this.header = head;
      this.textarea_show = textarea;
      $scope.feedback.input_header = head;
    },
    submit: function (id) {
        $(id).submit(function(e) {
          e.preventDefault();
          var data = {
          	name: document.querySelector( id + ' input[name="name"]').value,
            theme: document.querySelector( id + ' input[name="theme"]') ? document.querySelector( id + ' input[name="theme"]').value : 'null',
						email: document.querySelector( id + ' input[name="emailFrom"]').value,
						emailTo: document.querySelector( id + ' input[name="emailTo"]').value,
						phone: document.querySelector( id + ' input[name="phone"]').value,
						header: document.querySelector( id + ' h4').textContent
          }

          if (document.querySelector( id + ' textarea[name="message"]')) {
	        	data.message = document.querySelector( id + ' textarea[name="message"]').value;
          }

          $.ajax({
          	type: "POST",
						url: "http://smartrealtor.kz/wp-content/themes/smart/mail.php",
						data: data,
          }).done(function( value ) {
          	$('#mail')[0].innerHTML = value;
						$('#mail').removeClass('not_visible_mail');
            $('#mail')[0].removeAttribute('style');

						setTimeout(function() {
            	$(id).trigger("reset");
						}, 1000);

						setTimeout(function() {
            	$('#mail')[0].setAttribute('style', 'opacity: 0;');
							setTimeout(function() {
              	$('#mail').addClass('not_visible_mail');
								$('#mail')[0].innerHTML = ' ';
								}, 500);
						}, 5000);

          });
          return false;
        });
    }
  };
  $scope.feedback.submit('#service_form');
	$scope.submitWithFile = function (e) {
		e.preventDefault();
		var form = document.forms.resume;
    var formData = new FormData(form);
    var xhr = new XMLHttpRequest();
      xhr.open("POST", "http://smartrealtor.kz/wp-content/themes/smart/mailWithFile.php");
      xhr.onreadystatechange = function() {
        if (xhr.readyState == 4) {
          if(xhr.status == 200) {
	          $('#mail')[0].innerHTML = xhr.responseText;
            $('#mail').removeClass('not_visible_mail');
            $('#mail')[0].removeAttribute('style');

            setTimeout(function() {
              $(id).trigger("reset");
            }, 1000);

            setTimeout(function() {
              $('#mail')[0].setAttribute('style', 'opacity: 0;');
              setTimeout(function() {
                $('#mail').addClass('not_visible_mail');
								$('#mail')[0].innerHTML = ' ';
              }, 500);
            }, 5000);


          }
        }
      };
    xhr.send(formData);
	};
	document.forms.resume.addEventListener('submit', $scope.submitWithFile);
  // value - фильтр который меняет значение dropdowns
  $scope.changeValueFilter = function (value, dropDown, eng_value) {
    switch (dropDown){

      case 1:
        if (value.length < 7) {
          $scope.dropDown1FilterView = $scope.lang.language === 'rus' ? value : eng_value;
          $scope.dropDown1Filter = value;
        } else {
          $scope.dropDown1FilterView = value.slice(0,5)+ '..';
          $scope.dropDown1Filter = value;
        }
        break;

      case 2:
        if (value.length < 7) {
          $scope.dropDown2FilterView = $scope.lang.language === 'rus' ? value : eng_value;
          $scope.dropDown2Filter = value;
        } else {
          $scope.dropDown2FilterView = value.slice(0,6)+ '..';
          $scope.dropDown2Filter = value;
        }
        break;

      case 3:
        if (value === 'Все') {
          $scope.dropDown3FilterView = $scope.lang.language === 'rus' ? 'Любой комнатности' : eng_value;
          $scope.dropDown3Filter = value;
        } else if (value === 'Пентхаус') {
          $scope.dropDown3FilterView = $scope.lang.language === 'rus' ? value : eng_value;
          $scope.dropDown3Filter = 6;
        } else if (value === 'Таунхаус') {
          $scope.dropDown3FilterView = $scope.lang.language === 'rus' ? value : eng_value;
          $scope.dropDown3Filter = 7;
        } else {
          $scope.dropDown3FilterView = $scope.lang.language === 'rus' ? value : eng_value;
          $scope.dropDown3Filter = value[0];
        }
        break;

      default:
        $scope.dropDown1FilterView = $scope.lang.language === 'rus' ? 'Все' : 'Any';
        $scope.dropDown2FilterView = $scope.lang.language === 'rus' ? 'Все' : 'Any';
        $scope.dropDown3FilterView = $scope.lang.language === 'rus' ? 'Любой комнатности' : 'Any';
        $scope.dropDown1Filter = 'Все';
        $scope.dropDown2Filter = 'Все';
        $scope.dropDown3Filter = 'Любой комнатности';
        break;
    }
  }

	$scope.reset_filter = function () {
		$scope.changeValueFilter('Все', 1, 'Any');
		$scope.changeValueFilter('Все', 2, 'Any');
		$scope.changeValueFilter('Все', 3, 'Any');

		//$scope.sliderExample9[0] = 10;
		//$scope.sliderExample9[1] = $scope.sliderMaxForReset;

		$scope.price[3] = '';
		$scope.changeFilterPrice();
		$scope.price[0] = 0;
	}

  // Фильтры для фильтрации в каталоге
  $scope.typeView = function (elem) {
    if ($scope.dropDown1Filter === 'Все') return true;

    if ($scope.dropDown1Filter === elem.type_sale) return true;

    return false;
  }
  $scope.type = function (elem) {
    if ($scope.dropDown2Filter === 'Все') return true;

    if ($scope.dropDown2Filter === elem.type) return true;

    return false;
  }
  $scope.quantityRoom = function (elem) {
    if ($scope.dropDown3Filter === 'Все') return true;

    if ($scope.dropDown3Filter === elem.floor.toString()) return true;

    return false;
  }
  $scope.squareRange = function (elem) {
    $scope.sliderValues[0] = document.querySelector('#sliderFrom').value;
    $scope.sliderValues[1] = document.querySelector('#sliderTo').value;
    if (+elem.square >= $scope.sliderValues[0] && +elem.square <= $scope.sliderValues[1]){
      return true;
    }
    return false;
  }
  $scope.priceRange = function (elem) {
	  if (+elem.price >= $scope.price[0] && +elem.price <= +$scope.price[1]) {
		  return true;
		}
		  return false;
  }
  $scope.coefChange = function (elemId, coef, cur) {
    document.querySelector('#catalog .configure .price .val.active').classList.remove('active');
    document.querySelector(elemId).classList.add('active');
    $scope.coef.active = coef;
    $scope.coef.cur = cur;
  }
	$scope.changeFilterPrice = function () {
		if ($scope.price[3]){
			$scope.price[1] = $scope.price[3];
		} else {
			$scope.price[1] = $scope.price[2];
		}
	}

  // переключатель для языков в меню
  var changeLangIcon = function (argum) {
    if (argum === 'rus'){
      document.querySelector('.lang_wrap .ru').classList.add('active');
      document.querySelector('.lang_wrap .en').classList.remove('active');
    } else if (argum === 'eng') {
      document.querySelector('.lang_wrap .en').classList.add('active');
      document.querySelector('.lang_wrap .ru').classList.remove('active');
    }
  };

  $scope.lang.setLang = function (arg) {
    var _lang = arg === 'rus' ? 'ru' : arg === 'eng' ? 'en' : '';

    window.localStorage.setItem('language', arg);
    $scope.lang.language = localStorage.getItem('language');

    // формируем спецпредложения
    $scope.get_spec();
    // Формируем каталог квартир
    $scope.catalog_get();

    $http.get('wp-content/themes/smart/lang/'+ _lang +'.json')
          .then(function (value) {
            $scope.mainObj = value.data;
            $scope.feedback.header = $scope.mainObj.form.headers.header3
          });

    $scope.lang.show = false;
    changeLangIcon(arg);
    $scope.backImage = $scope.lang.language === 'rus' ? '/img/background/service.png' : '/img/background/service_eng.png';
		$scope.obrVid = $scope.lang.language === 'rus' ? 'https://www.youtube.com/embed/0xx8PpNBeD8?autoplay=1' : 'https://www.youtube.com/embed/N6KFC94Zs-U?autoplay=1';
		$scope.uarcLogo =  $scope.lang.language === 'rus' ? '/img/UARk_logo.png' : '/img/UARk_logo_en.png';

    $scope.dropDown1FilterView = $scope.lang.language === 'rus' ? 'Все' : 'Any';
    $scope.dropDown2FilterView = $scope.lang.language === 'rus' ? 'Все' : 'Any';
    $scope.dropDown3FilterView = $scope.lang.language === 'rus' ? 'Любой комнатности' : 'Any';
  };

// 	Картинка из раздела бонусы
  $scope.image_ = '';
  $http.get('http://smartrealtor.kz/?json=get_category_posts&category_slug=bonus&post_type=bonus&count=1')
  	.then(function (value) {
	  $scope.image_ = value.data.posts[0].thumbnail_images.full.url;
  	});

  if ($scope.lang.language) {
    $scope.lang.setLang($scope.lang.language);
  } else {
    $scope.lang.show = true;
  }

// Карта для каждой квартиры
	$scope.map = {
		show: false,
		center: [56.27, 34.33],
		zoom: 12,
		marker: [56.27, 34.33],
		index: {
			balloonContent: ''
		}
	};

	$scope.map.open = function () {
		$scope.map.show = true;
	};

	$scope.preloader = false;

	$timeout(function () {
		$scope.auth.open_res = 1;
	}, 10000)
});
