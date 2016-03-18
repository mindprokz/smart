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

  $scope.sliderExample9 = [0, 2000];

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

app.controller('main', function ($scope) {
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
        $scope.lang.show = false;
        window.localStorage.setItem('language', 'rus');
        changeLangIcon(arg);
    } else if (arg === 'eng') {
        // формируем английский объект
        $scope.lang.show = false;
        window.localStorage.setItem('language', 'eng');
        changeLangIcon(arg);
    }
  };

  if ($scope.lang.language) {
  } else {
    $scope.lang.show = true;
  }

});