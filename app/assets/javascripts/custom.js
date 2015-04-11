$(document).ready(function() {
	
	/* wow ======================================= */

	new WOW().init({
		offset: 20 
	});

	/* Hero slider ======================================= */

	$('#hero-slides').superslides({
		play: 4000,
		animation: 'fade'
	});

	/* Navbar colapse ======================================= */
	$(document).on('click.nav','.navbar-collapse.in',function(e) {
		if( $(e.target).is('a') || $(e.target).is('button')) {
			$(this).collapse('hide');
		}
	});

	/* show about more  ======================================= */
	$("#show-btn").click(function() {
		$('#showme').slideDown("slow");
		$(this).hide();
		return false;
	});

	/* testimonial ======================================= */
	$('.carousel').carousel();
	
	/* One Page Navigation Setup ======================================= */
	$('#main-nav').singlePageNav({
		offset: $('.navbar').height(),
		speed: 750,
		currentClass: 'active',
		filter: ':not(.external)',
		beforeStart: function() {},
		onComplete: function() {}
	});
	
	/* Bootstrap Affix ======================================= */		
	$('#modal-bar').affix({
		offset: {
			top: 10,
		}
	});


	/* countdown ======================================= */	
	var days = 3;
	var date = new Date();
	var res = date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
	
	$('#countdown').countdown(res, function(event) {
	  $(this).text(
		event.strftime('%-d days %H:%M:%S')
	  );
	});

	/* Smooth Hash Link Scroll ======================================= */	
	$('.smooth-scroll').click(function() {
		if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
			var target = $(this.hash);
			target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
			if (target.length) {
				// console.log(offset());
				$('html,body').animate({
						scrollTop: target.offset().top - 60
				}, 1000);
				return false;
			}
		}
	});
		
	/* Project Preview	==============================================*/
	$('.img-box').click(function(e) {
		e.preventDefault();
		var elem = $(this).parent(),
			title = elem.find('.project-title').text(),
			price = elem.find('.project-price').text(),
			descr = elem.find('.project-description').html(),
			slidesHtml = '<div class="slides-container">',
			elemDataCont = elem.find('.project-description');
			slides = elem.find('.project-description').data('images').split(',');
		for (var i = 0; i < slides.length; ++i) {
			slidesHtml = slidesHtml + '<img src=' + slides[i] + ' alt="">';
		}
		slidesHtml = slidesHtml + '</div><nav class="slides-navigation"><a href="#" class="next"><i class="icon-arrow-right"></i></a><a href="#" class="prev"><i class="icon-arrow-left"></i></a></nav>';
		$('#project-modal').on('show.bs.modal', function() {
			$(this).find('#sdbr-title').text(title);
			$(this).find('#sdbr-price').text(price);
			$(this).find('#project-content').html(descr).append('<a id="btn-order" class="btn btn-store btn-right"  href="#">Order now</a>');
			$(this).find('.screen').addClass('slides').html(slidesHtml);
			if (elemDataCont.data('oldprice')) {
				$(this).find('#sdbr-oldprice').show().text(elemDataCont.data('oldprice'))
			} else {
				$(this).find('#sdbr-oldprice').hide();
			}
			if (elemDataCont.data('descr')) {
				$(this).find('#sdbr-descr').show().text(elemDataCont.data('descr'))
			} else {
				$(this).find('#sdbr-descr').hide();
			}
			setTimeout(function() {
				$('.slides').superslides({
					inherit_height_from: '.modal-header'
				});
				$('#project-modal .screen').addClass('done').prev('.loader').fadeOut();
			}, 1000);
		}).modal();
	});

	$('#project-modal').on('hidden.bs.modal', function() {
		$(this).find('.loader').show();
		$(this).find('.screen').removeClass('slides').removeClass('done').html('').superslides('destroy');
	});

	$('#project-modal').on( 'click', '#btn-order',function () {
		$('#project-modal').modal('hide');
		$(this).find('.loader').show();
		$(this).find('.screen').removeClass('slides').removeClass('done').html('').superslides('destroy');
		var aTag = $("section[id='orderform']");
		$('html,body').animate({scrollTop: aTag.offset().top},'slow');
	});

	/* style switch	==============================================*/
	$('#style-switcher h2 a').click(function(){
		$('#style-switcher').toggleClass('open');
		return false;
	});

	$('#style-switcher li').click(function(e){
		e.preventDefault();
		var m = $(this);
		$('.colors').attr('href', 'css/' + m.attr('id') + '.css');
		$('#logo').attr('src', 'img/logo-' + m.attr('id') + '.png');
		$('#navlogo').attr('src', 'img/navlogo-' + m.attr('id') + '.png');
		$('#style-switcher').removeClass('open');
		return false; 
	});	


});

// for portfolio

/* ========================================================================= */
/*	Preloader
/* ========================================================================= */

jQuery(window).load(function(){

	$("#preloader").fadeOut("slow");

});


$(document).ready(function(){

	/* ========================================================================= */
	/*	Menu item highlighting
	/* ========================================================================= */

	jQuery('#nav').singlePageNav({
		offset: jQuery('#nav').outerHeight(),
		filter: ':not(.external)',
		speed: 1200,
		currentClass: 'current',
		easing: 'easeInOutExpo',
		updateHash: true,
		beforeStart: function() {
			console.log('begin scrolling');
		},
		onComplete: function() {
			console.log('done scrolling');
		}
	});
	
    $(window).scroll(function () {
        if ($(window).scrollTop() > 400) {
            $("#navigation").css("background-color","#0EB493");
        } else {
            $("#navigation").css("background-color","rgba(16, 22, 54, 0.2)");
        }
    });
	
	/* ========================================================================= */
	/*	Fix Slider Height
	/* ========================================================================= */	

	var slideHeight = $(window).height();
	
	$('#slider, .carousel.slide, .carousel-inner, .carousel-inner .item').css('height',slideHeight);

	$(window).resize(function(){'use strict',
		$('#slider, .carousel.slide, .carousel-inner, .carousel-inner .item').css('height',slideHeight);
	});
	
	
	/* ========================================================================= */
	/*	Portfolio Filtering
	/* ========================================================================= */	
	
	
    // portfolio filtering

    $(".project-wrapper").mixItUp();
	
	
	$(".fancybox").fancybox({
		padding: 0,

		openEffect : 'elastic',
		openSpeed  : 650,

		closeEffect : 'elastic',
		closeSpeed  : 550,

		closeClick : true,
	});
	
	/* ========================================================================= */
	/*	Parallax
	/* ========================================================================= */	
	
	$('#facts').parallax("50%", 0.3);
	
	/* ========================================================================= */
	/*	Timer count
	/* ========================================================================= */

	"use strict";
    $(".number-counters").appear(function () {
        $(".number-counters [data-to]").each(function () {
            var e = $(this).attr("data-to");
            $(this).delay(6e3).countTo({
                from: 50,
                to: e,
                speed: 3e3,
                refreshInterval: 50
            })
        })
    });
	
	/* ========================================================================= */
	/*	Back to Top
	/* ========================================================================= */
	
	
    $(window).scroll(function () {
        if ($(window).scrollTop() > 400) {
            $("#back-top").fadeIn(200)
        } else {
            $("#back-top").fadeOut(200)
        }
    });
    $("#back-top").click(function () {
        $("html, body").stop().animate({
            scrollTop: 0
        }, 1500, "easeInOutExpo")
    });
	
});