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

	window.addEventListener("beforeunload", function (e) {
		if (window.localStorage.getItem('afterReg') != 1) {
			window.localStorage.removeItem('submit');
		}
	});
});
