var app = angular.module('realty_app', ['ui.slider', 'ymaps'/*, 'ngAnimate'*/]);

app.filter('length_arr', function () {
  return function (items) {
    return items.length;
  };
});

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
      url: 'http://smartrealtor.kz/wp-content/themes/smart/img/chehia.gif'
    },
    {
      name: 'Посольство Пакистана',
      url: 'http://smartrealtor.kz/wp-content/themes/smart/img/Pakistan.jpg'
    },
    {
      name: 'Посольство Словакии',
      url: 'http://smartrealtor.kz/wp-content/themes/smart/img/slovackiy.gif'
    },
    {
      name: 'Посольство Французской Республики',
      url: 'http://smartrealtor.kz/wp-content/themes/smart/img/franc.jpg'
    },
    {
      name: 'Посольство Бельгии',
      url: 'http://smartrealtor.kz/wp-content/themes/smart/img/belg.jpg'
    },
    {
      name: 'Посольство Швейцарии',
      url: 'http://smartrealtor.kz/wp-content/themes/smart/img/shec.jpg'
    },
    {
      name: 'Посольство Великобритании',
      url: 'http://smartrealtor.kz/wp-content/themes/smart/img/velikobritaniia_enl.jpg'
    },
    {
      name: 'Посольство Америки',
      url: 'http://smartrealtor.kz/wp-content/themes/smart/img/usa-flag.jpg'
    },
    {
      name: 'Компания «Total»',
      url: 'http://smartrealtor.kz/wp-content/themes/smart/img/logo-total.png'
    },
    {
      name: 'Компания «Dow»',
      url: 'http://smartrealtor.kz/wp-content/themes/smart/img/DOW-logo.jpg'
    },
    {
      name: 'Хоккеисты ХК "Барыс"',
      url: 'https://upload.wikimedia.org/wikipedia/ru/thumb/f/fd/%D0%9B%D0%BE%D0%B3%D0%BE%D1%82%D0%B8%D0%BF_%D0%A5%D0%9A_%C2%AB%D0%91%D0%B0%D1%80%D1%8B%D1%81%C2%BB.svg/1280px-%D0%9B%D0%BE%D0%B3%D0%BE%D1%82%D0%B8%D0%BF_%D0%A5%D0%9A_%C2%AB%D0%91%D0%B0%D1%80%D1%8B%D1%81%C2%BB.svg.png'
    },
    {
      name: 'Компания «Thales»',
      url: 'http://smartrealtor.kz/wp-content/themes/smart/img/full_174.jpg'
    },
  ];

  // Иконки в партнерах eng
  $scope.partner_en = [
    {
      name: 'Embassy of the Czech Republic',
      url: 'http://smartrealtor.kz/wp-content/themes/smart/img/chehia.gif'
    },
    {
      name: 'Embassy of Pakistan',
      url: 'http://smartrealtor.kz/wp-content/themes/smart/img/Pakistan.jpg'
    },
    {
      name: 'Embassy of Slovakia',
      url: 'http://smartrealtor.kz/wp-content/themes/smart/img/slovackiy.gif'
    },
    {
      name: 'Embassy of the French Republic',
      url: 'http://smartrealtor.kz/wp-content/themes/smart/img/franc.jpg'
    },
    {
      name: 'Embassy of Belgium',
      url: 'http://smartrealtor.kz/wp-content/themes/smart/img/belg.jpg'
    },
    {
      name: 'Embassy of Switzerland',
      url: 'http://smartrealtor.kz/wp-content/themes/smart/img/shec.jpg'
    },
    {
      name: 'The British Embassy',
      url: 'http://smartrealtor.kz/wp-content/themes/smart/img/velikobritaniia_enl.jpg'
    },
    {
      name: 'Embassy of the United States of America',
      url: 'http://smartrealtor.kz/wp-content/themes/smart/img/usa-flag.jpg'
    },
    {
      name: '«Total» Company',
      url: 'http://smartrealtor.kz/wp-content/themes/smart/img/logo-total.png'
    },
    {
      name: '«Dow» Company',
      url: 'http://smartrealtor.kz/wp-content/themes/smart/img/DOW-logo.jpg'
    },
    {
      name: 'Hockey Players of "Barys"',
      url: 'https://upload.wikimedia.org/wikipedia/ru/thumb/f/fd/%D0%9B%D0%BE%D0%B3%D0%BE%D1%82%D0%B8%D0%BF_%D0%A5%D0%9A_%C2%AB%D0%91%D0%B0%D1%80%D1%8B%D1%81%C2%BB.svg/1280px-%D0%9B%D0%BE%D0%B3%D0%BE%D1%82%D0%B8%D0%BF_%D0%A5%D0%9A_%C2%AB%D0%91%D0%B0%D1%80%D1%8B%D1%81%C2%BB.svg.png'
    },
    {
      name: '«Thales» Company',
      url: 'http://smartrealtor.kz/wp-content/themes/smart/img/full_174.jpg'
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
          console.log(element);
          var _object = {};
					// Сформированный объект квартиры
          _object.count = index;
          _object.name = element.custom_fields['wpcf-header'][0];
          _object.content = element.custom_fields['wpcf-content'][0];
          _object.name_en = element.custom_fields['wpcf-header_en'][0];
          _object.content_en = element.custom_fields['wpcf-content_en'][0];
          _object.price = element.custom_fields['wpcf-price'][0];
          _object.id_floor = element.id;
          _object.thumbnail = element.thumbnail_images.full.url;
          _object.type = element.custom_fields['wpcf-type'][0];
          _object.square = element.custom_fields['wpcf-square'][0];
          _object.author = {
            name: element.author.first_name,
            telephone: element.author.last_name,
            email: element.author.description.split(',')[1],
            image: element.author.description.split(',')[0]
          };
          _object.images = [];

          // Добавление картинок в объект
          if ('wpcf-photo_object' in element.custom_fields) {
            _object.images = element.custom_fields['wpcf-photo_object']
          } else {
            element.attachments.forEach(function (element, index, array) {
              _object.images.push(element.url);
            });
          }

					// Узнаем тип сдачи квартиры
          if ( element.custom_fields['wpcf-type_sale'][0] === '1' ){
            _object.type_sale = 'Снять в аренду';
          } else {
            _object.type_sale = 'Купить';
          }

          // формируем объект для определенного типа
          if (_object.type == 'Квартира') {
            _object.raion = element.custom_fields['wpcf-raion_cat'][0];
            _object.year = element.custom_fields['wpcf-year_build'][0];
            _object.floor = element.custom_fields['wpcf-floor'][0];
            _object.etazh = element.custom_fields['wpcf-etazh'][0];
            _object.su_kom = element.custom_fields['wpcf-su_kom'][0];
            _object.mebel = element.custom_fields['wpcf-mebel'][0];
            _object.repair = element.custom_fields['wpcf-repair'][0];
            _object.parking = element.custom_fields['wpcf-parking'][0];
          } else if (_object.type == 'Дом') {
            _object.raion = element.custom_fields['wpcf-raion_cat'][0];
            _object.year = element.custom_fields['wpcf-year_build'][0];
            _object.square_mesto = element.custom_fields['wpcf-square_mesto'][0];
            _object.etazh = element.custom_fields['wpcf-etazh'][0];
            _object.kol_spal = element.custom_fields['wpcf-kol_spal'][0];
            _object.san_uzel_kol = element.custom_fields['wpcf-san_uzel_kol'][0];
            _object.bassein = element.custom_fields['wpcf-bassein'][0];
            _object.garage = element.custom_fields['wpcf-garage'][0];
            _object.otoplenie = element.custom_fields['wpcf-otoplenie'][0];
            _object.haswater = element.custom_fields['wpcf-haswater'][0];
          } else if (_object.type == 'Офис') {
            _object.raion = element.custom_fields['wpcf-raion_cat'][0];
            _object.type_office = element.custom_fields['wpcf-type_office'][0];
            _object.enter_group = element.custom_fields['wpcf-enter_group'][0];
            _object.etazh = element.custom_fields['wpcf-etazh'][0];
            _object.plans = element.custom_fields['wpcf-plans'][0];
            _object.repair = element.custom_fields['wpcf-repair'][0];
            _object.mebel = element.custom_fields['wpcf-mebel'][0];
            _object.su_kom = element.custom_fields['wpcf-su_kom'][0];
            _object.telephonia = element.custom_fields['wpcf-telephonia'][0];
            _object.parking = element.custom_fields['wpcf-parking'][0];
          } else if (_object.type == 'Земельный участок') {
            _object.raion = element.custom_fields['wpcf-raion_cat'][0];
            _object.communication = element.custom_fields['wpcf-communication'][0];
            _object.chel_naz = element.custom_fields['wpcf-chel_naz'][0];
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
            maxS[maxS.length] = _object.square;
            maxP[maxP.length] = _object.price;
        });

				// получение максимальных значений для вставки в ui и сравнения
        $scope.sliderExample9[1] = Math.max.apply(null, maxS);
        $scope.sliderMax = Math.max.apply(null, maxS) + 3;
        $scope.sliderMaxForReset = Math.max.apply(null, maxS) + 3;

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
      this.type = _object.type;

      if (this.type == 'Квартира') {
        this.raion = _object.raion;
        this.year = _object.year;
        this.floor = _object.floor;
        this.square = _object.square;
        this.etazh = _object.etazh;
        this.su_kom = _object.su_kom;
        this.mebel = _object.mebel;
        this.repair = _object.repair;
        this.parking = _object.parking;
      } else if (_object.type == 'Дом') {
        this.raion = _object.raion;
        this.year = _object.year;
        this.square = _object.square;
        this.square_mesto = _object.square_mesto;
        this.etazh = _object.etazh;
        this.kol_spal = _object.kol_spal;
        this.san_uzel_kol = _object.san_uzel_kol;
        this.bassein = _object.bassein;
        this.garage = _object.garage;
        this.otoplenie = _object.otoplenie;
        this.haswater = _object.haswater;
      } else if (_object.type == 'Офис') {
        this.raion = _object.raion;
        this.type_office = _object.type_office;
        this.square = _object.square;
        this.enter_group = _object.enter_group;
        this.etazh = _object.etazh;
        this.plans = _object.plans;
        this.repair = _object.repair;
        this.mebel = _object.mebel;
        this.su_kom = _object.su_kom;
        this.telephonia = _object.telephonia;
        this.parking = _object.parking;
      } else if (_object.type == 'Земельный участок') {
        this.raion = _object.raion;
        this.communication = _object.communication;
        this.chel_naz = _object.chel_naz;
      }

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
          console.log(data);

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
    if (elem.type == 'Дом' || elem.type == 'Офис') return true;

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
