$(document).ready(function () {

	// slider

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

	// toTop

	$('body,html').scroll(function () {
		if ($(this).scrollTop() >= 3000) {
			$('.toTop').addClass('show');
		} else {
			$('.toTop').removeClass('show');
		}
	});
	$('.toTop').click(function () {
		$('body,html').animate({ scrollTop: 0 }, 2000);
	});

});

