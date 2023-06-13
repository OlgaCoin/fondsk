$(document).ready(function () {

	// slick slider

	$('.top-slider--for').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: false,
		dots: false,
		fade: true,
		asNavFor: '.top-slider--nav'
	});

	$('.top-slider--nav').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		asNavFor: '.top-slider--for',
		dots: true,
		arrows: true,
		// autoplay: true,
		// autoplaySpeed: 3500,
		speed: 800,
		prevArrow: '<button type="button" class="slick-prev"><img src="icons/slider/arrow_left.svg" alt="назад"></button>',
		nextArrow: '<button type="button" class="slick-next"><img src="icons/slider/arrow_right.svg" alt="вперед"></button>',
	});

	$(".top-slider--nav").on('afterChange', function (event, slick, currentSlide) {
		$(".num").text(currentSlide + 1);
	});

	// sticky menu + toTop

	$(window).scroll(function () {

		if ($(this).scrollTop() >= 155) {
			$('.header__nav').addClass('fixed');
		} else {
			$('.header__nav').removeClass('fixed');
		}

		if ($(this).scrollTop() >= 3000) {
			$('.toTop').addClass('show');
		} else {
			$('.toTop').removeClass('show');
		}
	});

	$('.toTop').click(function () {
		$('html').animate({ scrollTop: 0 }, 2000);
	});

	// burger

	$(".btn-menu ").click(function () {
		$(this).toggleClass("active");
		$(".mobile-nav").toggleClass("active");
	});

	// mobile submenu

	$('nav.mobile-nav ul li > a').on('click', function (e) {
		var li = $(this).closest('li');
		if (li.find('ul.mobile__submenu').length) {
			if (!li.hasClass('active')) {
				e.preventDefault();
			}
			li.toggleClass('active');
		}
	});
	$(document).mouseup(function (e) {
		var div = $('nav ul li.active');
		if (!div.is(e.target) && div.has(e.target).length === 0) {
			div.removeClass('active');
		}
	});

	// aos - flip animation

	AOS.init();

	// progress bar

	function progressBarScroll() {
		let winScroll = document.body.scrollTop || document.documentElement.scrollTop,
			height =
				document.documentElement.scrollHeight -
				document.documentElement.clientHeight,
			scrolled = (winScroll / height) * 100;
		document.getElementById("progressBar").style.width = scrolled + "%";
	}

	window.onscroll = function () {
		if (document.getElementById("progressBar") !== null) {
			progressBarScroll();
		}
	};

	// font size switcher

	function change_size(element, size) {
		var current = parseInt(element.css('font-size'));
		if (size == 'minus') {
			var new_size = current - 2;
			console.log(new_size);
		} else if (size == 'plus') {
			var new_size = current + 2;
			console.log(new_size);
		}
		element.css('font-size', new_size + 'px');
	}

	var par = $('.article__content > p, .article__content li');
	$('a.minus').click(function (e) {
		e.preventDefault();
		change_size(par, 'minus');
	});

	var par = $('.article__content > p, .article__content li');
	$('a.plus').click(function (e) {
		e.preventDefault();
		change_size(par, 'plus');
	});


	//  Локализация datepicker 

	$.datepicker.regional['ru'] = {
		closeText: 'Закрыть',
		prevText: 'Назад',
		nextText: 'Вперед',
		currentText: 'Сегодня',
		monthNames: ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'],
		monthNamesShort: ['Янв', 'Фев', 'Мар', 'Апр', 'Май', 'Июн', 'Июл', 'Авг', 'Сен', 'Окт', 'Ноя', 'Дек'],
		dayNames: ['воскресенье', 'понедельник', 'вторник', 'среда', 'четверг', 'пятница', 'суббота'],
		dayNamesShort: ['вск', 'пнд', 'втр', 'срд', 'чтв', 'птн', 'сбт'],
		dayNamesMin: ['Вс', 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб'],
		weekHeader: 'Не',
		dateFormat: 'dd.mm.yy',
		firstDay: 1,
		isRTL: false,
		showMonthAfterYear: false,
		yearSuffix: ''
	};
	$.datepicker.setDefaults($.datepicker.regional['ru']);


	$(".datepick-from").datepicker({
		showOn: "button",
		buttonImage: "icons/category/calendar.svg",
		buttonImageOnly: true,
		buttonText: "Выбрать дату",
		maxDate: new Date,
		onSelect: function (dateText, inst) {
			var theDate = new Date(Date.parse($(this).datepicker('getDate')));
			var dateFormatted = $.datepicker.formatDate('dd.mm.yy', theDate);
			$(".date-from").text(dateFormatted);
		},
	});
	$(".datepick-to").datepicker({
		showOn: "button",
		buttonImage: "icons/category/calendar.svg",
		buttonImageOnly: true,
		buttonText: "Выбрать дату",
		maxDate: new Date,
		onSelect: function (dateText, inst) {
			var theDate = new Date(Date.parse($(this).datepicker('getDate')));
			var dateFormatted = $.datepicker.formatDate('dd.mm.yy', theDate);
			$(".date-to").text(dateFormatted);
		},
	});

});



