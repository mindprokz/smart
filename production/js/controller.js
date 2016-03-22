var app = angular.module('realty_app', ['ui.slider', 'ngAnimate']);

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
  // Объект с главной информацией
  $scope.mainObj = {
    header: {
      slogan: 'АГЕНТСТВО ЭЛИТНОЙ НЕДВИЖИМОСТИ В АСТАНЕ',
      number: 'Заказать звонок',
      menu1: 'Главная',
      menu2: 'Клиенты',
      menu3: 'Каталог',
      menu4: 'Рекомендации',
      menu5: 'Сервис',
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
        content: 'Английский, немецкий, японский язык'
      }, 
      icons2: {
        header: 'База квартир',
        content: 'Более 5000 вариантов в базе квартир'
      }, 
      icons3: {
        header: 'Help-line',
        content: 'Англоговорящий администратор Информация о любых товарах и услугах г.Астаны'
      }, 
      icons4: {
        header: 'Юридическая чистота',
        content: '— Скрининг документов ',
        content2: '— Полный пакет документов'
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
        content3: '— Решение правовых вопросов с арендаторами'
      }, 
    },
    recomendPage: {
      header: 'Рекомендации',
      header_director: 'Обращение директора',
      header_clients: 'Отзывы клиентов',
      main_content_part1: 'С помощью',
      main_content_part2: 'более 30 посольств и иностранных компаний нашли уютный и безопасный дом в Астане для своих сотрудников.',
      content: 'Разнообразный и богатый опыт начало повседневной работы по формированию позиции в значительной степени обуславливает создание системы обучения кадров, соответствует насущным потребностям. Идейные соображения высшего порядка, а также укрепление и развитие структуры требуют от нас анализа направлений прогрессивного развития. Задача организации, в особенности же постоянный количественный рост и сфера нашей активности позволяет оценить значение соответствующий условий активизации.Значимость этих проблем настолько очевидна, что рамки и место обучения кадров позволяет оценить значение модели развития.'
    },
    servicePage: {
      header: 'Сервис',
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
      adress2: 'Макетный проспект, 23 A',
      button: 'Написать нам' 
    },
    form: {
      headers: {
        header1: 'Получить бесплатную',
        header2: 'консультацию',
        header3: 'ОСТАВИТЬ ЗАЯВКУ',
      },
      placeholders: {
        name: 'Имя',
        password: 'Пароль',
        mail: 'Email',
        send: 'Отправить',
        comment: 'Комментарий',
        telephone: 'Телефон'
      }
    }
  };

  // Массив объектов для раздела спец предложения
  $scope.spec = [1,2,3,4];

  // Иконки в партнерах
  $scope.partner = [1,2,3,4,5,6,7,8];

  // Массив объектов для каталога квартир, каждый объект отдельная квартира
  $scope.catalog_search = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];

  // Переменные для фильтрации квартир
  $scope.dropDown1Filter = 'Все';
  $scope.dropDown2Filter = 'Все';
  $scope.dropDown3Filter = 'Любой комнатности';
  $scope.sliderExample9 = [0, 2000];
  // value - фильтр который меняет значение dropdowns
  $scope.changeValueFilter = function (value, dropDown) {
    switch (dropDown){
      case 1: 
        if (value.length < 7) {
          $scope.dropDown1Filter = value;
        } else {
          $scope.dropDown1Filter = value.slice(0,5)+ '..';
        }  
        break;

      case 2: 
        if (value.length < 7) {
          $scope.dropDown2Filter = value;
        } else {
          $scope.dropDown2Filter = value.slice(0,6)+ '..';
        }  
        break;

      case 3: 
        $scope.dropDown3Filter = value;
        break;

      default:  
        $scope.dropDown1Filter = 'Все';
        $scope.dropDown2Filter = 'Все';
        $scope.dropDown3Filter = 'Любой комнатности';
        break; 
    }     
  }


  $http.get('lang/ru.json')
    .then(function (value) {
      //$scope.mainObj = value.data;
      console.log(JSON.stringify($scope.mainObj));
    });

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

  $scope.auth = {
    show: false,
  };
  // Провека языка
  $scope.lang = {
    language: localStorage.getItem('language'), 
    show: false,
  };

  $scope.lang.setLang = function (arg) {
    if(arg === 'rus') {
        // формируем русский объект
        $http.get('lang/ru.json')
          .then(function (value) {
            $scope.mainObj = value.data;
            //console.log(JSON.stringify($scope.mainObj));
          });

        $scope.lang.show = false;
        window.localStorage.setItem('language', 'rus');
        changeLangIcon(arg);
    } else if (arg === 'eng') {
        // формируем английский объект
        $http.get('lang/en.json')
          .then(function (value) {
            $scope.mainObj = value.data;
            //console.log(JSON.stringify($scope.mainObj));
          });

        $scope.lang.show = false;
        window.localStorage.setItem('language', 'eng');
        changeLangIcon(arg);
    }
  };

  if ($scope.lang.language) {
    $scope.lang.setLang($scope.lang.language);
  } else {
    $scope.lang.show = true;
  }

});