var app = angular.module('realty_app', ['ui.slider'/*, 'ngAnimate'*/]);

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

app.controller('main', function ($scope, $http) {
	$scope.preloader = true;
  // Объект с главной информацией
  $scope.mainObj = {
    header: {
      slogan: 'АГЕНТСТВО ЭЛИТНОЙ НЕДВИЖИМОСТИ В АСТАНЕ',
      number: 'Заказать звонок',
      menu1: 'Главная',
      menu2: 'Клиенты',
      menu3: 'Каталог',
      menu4: 'Рекомендации',
      menu5: 'Тех.поддрежка',
      menu6: 'Сотрудничество',
      menu7: 'Бонусы',
      menu8: 'Контакты'
    },
    mainPage: {
      mainButton: 'ПОСМОТРИТЕ ВИДЕО',
      header: 'Я хочу',
      button1: 'Купить',
      button2: 'Арендовать',
      button3: 'Продать',
      button4: 'Сдать'
    },
    specPage: {
      header: 'СПЕЦПРЕДЛОЖЕНИЯ',
      arend: 'Аренда',
      sale: 'Продажа',
      floor: 'Комнаты',
      square: 'Площадь',
      price: 'Цена',
      more: 'Подробнее'
    },
    clientPage: {
      header: 'Наши клиенты',
    },
    catalogPage: {
      header: 'Каталог квартир',
      menu1_1: 'Купить',
      menu1_2: 'Снять в аренду',
      menu1_3: 'Все',
      menu2_1: 'Квартиру',
      menu2_2: 'Дом',
      menu2_3: 'Офис',
      menu2_4: 'Земельный участок',
      menu3_1: 'Любой комнатности',
      menu3_2: '1-а комнатные',
      menu3_3: '2-х комнатные',
      menu3_4: '3-х комнатные',
      menu3_5: '4-х комнатные',
      menu3_6: 'Пентхаус',
      menu3_7: '5-и и более комнатные',
      menu3_8: 'Таунхаус',
      search: 'Найдено',
      search_content: 'объекта недвижимости',
      search_content_none: 'ничего не найдено',
      from: 'от',
      to: 'до'
    },
    qualityPage: {
      header: 'Преимущества',
      icons1: {
        header: 'Мультиязычные менеджеры',
        content: 'Английский, немецкий, испанский язык',
      }, 
      icons2: {
        header: 'База квартир',
        content: 'Более 5000 вариантов в базе квартир'
      }, 
      icons3: {
        header: 'Help-line оператор',
        content: 'Англоговорящий администратор Информация о любых товарах и услугах г.Астаны'
      }, 
      icons4: {
        header: 'Юридическая чистота',
        content: '— Скрининг документов ',
        content2: '— Полный пакет документов',
        content3: '— Решение правовых вопросов с арендаторами'
      }, 
      icons5: {
        header: 'Ознакомительные программы',
        content: '— Знакомство с городом',
        content2: '— Культурные и социальные экскурсии'
      }, 
      icons6: {
        header: 'Сервис служба',
        content: '— Решение бытовых проблем',
        content2: '— Оплата ком.услуг',
      }, 
    },
    recomendPage: {
      header: 'Рекомендации',
      header_director: 'Обращение директора',
      header_clients: 'Отзывы клиентов',
      main_content_part1: 'С помощью',
      main_content_part2: 'более 30 посольств и иностранных компаний нашли уютный и безопасный дом в Астане для своих сотрудников.',
      header_after_video: 'Инна Ухналь, Директор ТОО «Smart Realtor»',
      content: 'Дорогие друзья, мы рады приветствовать Вас на сайте нашей компании! Для начала представлюсь - меня зовут Инна Ухналь, я являюсь директором компании "Smart Realtor "! В Казахстане много успешных компаний, потому что у нас в стране живут прекрасные люди. Страна у нас многонациональная, и именно поэтому жить и работать в Казахстане большое счастье. Наша компания предоставляет услуги в сфере элитной недвижимости. Мы понимаем всю важность жилищного вопроса для наших дорогих клиентов и именно поэтому мы строим риэлторскую компанию нового типа — инновационные технологии для поиска и продвижения недвижимости и ответственность за свои действия -  это основные принципы нашей работы, наряду с доброжелательностью и человеческим отношением к каждому клиенту. В этом разделе Вы можете ознакомиться с отзывами наших клиентов, а также задать мне любые интересующие вопросы. Спасибо, что посетили наш сайт, надеюсь, он будет вам полезен.'
    },
    servicePage: {
      header: 'Тех.поддрежка',
      subHeader: 'Техническая поддержка компании',
      listHeader: 'У нас есть инструменты, навыки, и время для тех случайных работ которые Вы планировали сделать.',
      listElem1: 'Малярные работы',
      listElem2: 'Сантехнические работы',
      listElem3: 'Услуги плотника',
      listElem4: 'Услуги электрика',
      listElem5: 'Химчистка ковров и мягкой мебели',
      listElem6: 'Оплата ком. услуг',
      listElem7: 'Устранение плесени',
      listElem8: 'Замена лампочек',
      listElem9: 'Ремонт бытовой техники',
      listElem10: 'Ремонт окон',
      listElem11: 'Услуги садовника',
      listElem12: 'Сборка мебели',
      listElem13: 'Установка и настройка интернета',
      listElem14: 'Установка и ремонт спутникового ТВ',
      listElem15: 'Установка ролл-штор',
      sloganTop: 'Не бывает неважной работы.',
      sloganBot: 'Позвоните что бы получить бесплатную смету.',
      wordSlogan1: 'Восстановить.',
      wordSlogan2: 'Построить.',
      wordSlogan3: 'Починить.',
    },
    sotrPage: {
      header: 'Сотрудничество',
      subHeader: 'О компании',
      content1: 'Не следует, однако забывать, что постоянный количественный рост и сфера нашей активности представляет собой интересный эксперимент проверки форм развития.',
      content2: 'Значимость этих проблем настолько очевидна, что консультация с широким активом играет важную роль в формировании новых предложений',
      content3: 'Равным образом дальнейшее развитие различных форм деятельности представляет собой интересный эксперимент проверки систем массового участия.',
      planeHeader1: 'УЗНАЙ СКОЛЬКО СТОИТ ТВОЯ КВАРТИРА ',
      planeHeader2: 'БЕСПЛАТНО',
      planeHeader3: 'И',
      planeHeader4: 'БЫСТРО',
      button: 'УЗНАТЬ СТОИМОСТЬ',
    },
    bonus: {
      header: 'Бонусы',
      content1: '— Мы готовы предоставить вам любую полезную информацию, касающуюся проживания в г.Астана и Казахстане.',
      content2: '— Правовая, экономическая и информационная помощь для наших клиентов.',
      button1: 'ПОЛУЧИТЬ',
      button2: 'БОНУС!'
    },
    contacts: {
      adress1: 'Астана',
      adress2: 'пр. Кабанбай Батыра, 7/2',
      button: 'Написать нам' 
    },
    form: {
      headers: {
        header1: 'Получить бесплатную',
        header2: 'консультацию',
        header3: 'ОСТАВИТЬ ЗАЯВКУ',
        header4: 'Получить бонус',
        header5: 'Регистрация'
      },
      placeholders: {
        name: 'Имя',
        password: 'Пароль',
        mail: 'Email',
        send: 'Отправить',
        comment: 'Комментарий',
        telephone: 'Телефон',
        feed: 'Все ваши данные в безопасности',
        login: 'Логин',
        sname: 'Фамилия',
        register: ' Зарегистрироваться',
        write: 'Описание',
        textarea_value_sotr: 'Здравствуйте,  хочу (сдать / продать) _______ (квартиру, дом, офис). Краткое описание: Помогите установить правильную стоимость!'
      },
      errors: {
        error: 'Ошибка',
        error1: 'Обязательные поля пропущены',
        error2: 'Username слишком короткий.',
        error3: 'Извините, но пользователь с таким именем уже есть!',
        error4: 'Поле пользователь введено не корректно!',
        error5: 'Минимальная длина пароля 5 символов.',
        error6: 'Некорректный email',
        error7: 'Email уже используется',
        error8: 'Некорректный номер телефона',
      }
    },
    modal : {
      manager: ' Менеджер',
      number_sergey: '+77015301888'
    }
  };
  console.log(JSON.stringify($scope.mainObj));

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
          _object.thumbnail = element.thumbnail_images.medium.url;
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

          // Помещение объекта в массив
          $scope.spec[index] = _object;
        });
      });
  }   

  // Иконки в партнерах
  $scope.partner = [
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

  // Массив объектов для каталога квартир, каждый объект отдельная квартира
  $scope.catalog_search = [];
  // Запрос на файл квартир
  $scope.catalog_get = function () {
    $http.get('http://smartrealtor.kz/?json=get_category_posts&category_slug=catalog&post_type=catalog')
      .then(function (value) {
        var _array = value.data.posts,
            maxS = [],
            maxP = [];

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
          _object.thumbnail = element.thumbnail_images.medium.url;
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
            _object.type_sale = 'Снять в аренду';
          } else {
            _object.type_sale = 'Купить';
          }

          if ($scope.lang.language === 'rus') {
            _object.name_view = _object.name;
            _object.content_view = _object.content;
          } else if ($scope.lang.language === 'eng') {
            _object.name_view = _object.name_en;
            _object.content_view = _object.content_en;
          }

          // Помещение объекта в массив
          $scope.catalog_search[index] = _object;

          // Максимальное и минимальное значение в фильтре
          maxS[index] = _object.square;
          maxP[index] = _object.price;
        });

         $scope.sliderExample9[1] = Math.max.apply(null, maxS);
         $scope.sliderMax = Math.max.apply(null, maxS) + 1;
         $scope.sliderMaxForReset = Math.max.apply(null, maxS);
         
         $scope.price[1] = Math.max.apply(null, maxP);
         $scope.price[2] = Math.max.apply(null, maxP);
      });    
  };

  // Переменные для отображения в меню квартир, обрезаются в функции changeValueFilter если больше 7 символов
  $scope.dropDown1FilterView = 'Все';
  $scope.dropDown2FilterView = 'Все';
  $scope.dropDown3FilterView = 'Любой комнатности';

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
    check_auth_user : window.auth,
    open_res: 0,
    show: localStorage.getItem('reg') == 1 ? true : false,
    open: function () {
      $scope.auth.show = true;
    },
    close: function () {
      $scope.auth.show = false;
    },
    registration_show: localStorage.getItem('reg') == 1 ? true : false,
    open_reg: function () {
      $scope.auth.registration_show = true;
      localStorage.setItem('reg', '1');
    },
    close_reg: function () {
      $scope.auth.show = false;
      localStorage.removeItem('reg');  
    },
    return_auth: function () {
			$scope.auth.registration_show = false;	 
      localStorage.removeItem('reg');   
    }
  };


  // Провека языка
  $scope.lang = {
    language: localStorage.getItem('language'), 
    show: false,
    close: function () {
      $scope.lang.show = false;
    },
  };
  // Модальное окно с квартирами
  $scope.info = {
    show: false,
    name: '',
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
      if ($scope.auth.check_auth_user){
				// Если пользователь авторизирован то мы помещаем информацию
				// из нажатого массива в наше модальное окно 				 
        var _object = arr[index];

        this.name = _object.name;
        this.floor = _object.floor;
        this.square = _object.square;
        this.price = _object.price;
        this.content = _object.content;
        this.thumbnail = _object.thumbnail;
        this.images = _object.images;
        this.author = _object.author;

        if (show) this.show = true;
      } else {
        $scope.auth.open();
      }
    },
    close: function () {
      $scope.info.show = false;
    },
  };


  // Модальное окно обратной связи
  $scope.feedback = {
    show: false,
    header: $scope.mainObj.form.headers.header3,
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

           setTimeout(function() {
             $(id).trigger("reset");
           }, 1000);

           setTimeout(function() {
             $('#mail')[0].setAttribute('style', 'opacity: 0;');
             setTimeout(function() {
               $('#mail').addClass('not_visible_mail');
             }, 500);
           }, 5000);

          });
          return false;
        });
    }
  };
  $scope.feedback.submit('#service_form');

  // value - фильтр который меняет значение dropdowns
  $scope.changeValueFilter = function (value, dropDown) {
    switch (dropDown){

      case 1: 
        if (value.length < 7) {
          $scope.dropDown1FilterView = value;
          $scope.dropDown1Filter = value;
        } else {
          $scope.dropDown1FilterView = value.slice(0,5)+ '..';
          $scope.dropDown1Filter = value;
        }  
        break;

      case 2: 
        if (value.length < 7) {
          $scope.dropDown2FilterView = value;
          $scope.dropDown2Filter = value;
        } else {
          $scope.dropDown2FilterView = value.slice(0,6)+ '..';
          $scope.dropDown2Filter = value;
        }  
        break;

      case 3: 
        if (value === 'Все') {
          $scope.dropDown3FilterView = 'Любой комнатности';
          $scope.dropDown3Filter = value;
        } else if (value === 'Пентхаус') {
          $scope.dropDown3FilterView = value;
          $scope.dropDown3Filter = 6;
        } else if (value === 'Таунхаус') {
          $scope.dropDown3FilterView = value;
          $scope.dropDown3Filter = 7;
        } else {
          $scope.dropDown3FilterView = value;
          $scope.dropDown3Filter = value[0];
        }
        break;

      default:  
        $scope.dropDown1FilterView = 'Все';
        $scope.dropDown2FilterView = 'Все';
        $scope.dropDown3FilterView = 'Любой комнатности';
        $scope.dropDown1Filter = 'Все';
        $scope.dropDown2Filter = 'Все';
        $scope.dropDown3Filter = 'Любой комнатности';
        break; 
    }     
  }

	$scope.reset_filter = function () {
		$scope.changeValueFilter('Все', 1);
		$scope.changeValueFilter('Все', 2);
		$scope.changeValueFilter('Все', 3);
		
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
            //console.log(JSON.stringify($scope.mainObj));
          });

        $scope.lang.show = false;
        changeLangIcon(arg);
  };

// 	Картинка из раздела бонусы
  $scope.image_ = '';
  $http.get('http://smartrealtor.kz/?json=get_category_posts&category_slug=bonus&post_type=bonus&count=1')
  	.then(function (value) {
	  $scope.image_ = value.data.posts[0].thumbnail_images.full.url;
	  console.log($scope.image_);
  	});
  	
  if ($scope.lang.language) {
    $scope.lang.setLang($scope.lang.language); 
  } else {
    $scope.lang.show = true;
  }
  
	$scope.preloader = false;
	
});