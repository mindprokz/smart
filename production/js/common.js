$(document).ready(function() {

	//Цели для Яндекс.Метрики и Google Analytics
	$(".count_element").on("click", (function() {
		ga("send", "event", "goal", "goal");
		yaCounterXXXXXXXX.reachGoal("goal");
		return true;
	}));
	new WOW().init();
	//SVG Fallback
	if(!Modernizr.svg) {
		$("img[src*='svg']").attr("src", function() {
			return $(this).attr("src").replace(".svg", ".png");
		});
	};
	//$('#app').on('click',function() {
    //
	//});
	//Аякс отправка форм
	//Документация: http://api.jquery.com/jquery.ajax/
	$("#application").submit(function() {
		var data = {
			name : document.querySelector('input[name="name"]').value,
			email : document.querySelector('input[name="email"]').value,
			telephone : document.querySelector('input[name="telephone"]').value,
		}
		$.ajax({
			type: "POST",
			url: "mail.php",
			data: data,
		}).done(function( value ) {
			$('#mail')[0].innerHTML = value;
			$('#mail').removeClass('not_visible_mail');
			setTimeout(function() {
				$("#form").trigger("reset");
			}, 1000);
		});
		return false;
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

});
