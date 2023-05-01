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

		if ($(this).scrollTop() >= 60) {
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
		progressBarScroll();
	};

});



