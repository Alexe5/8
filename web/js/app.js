$(document).ready(function () {
	// Definition of browser
	if (bowser.mac){
		$("html").addClass("mac-os");
	}

	if (bowser.windows){
		$("html").addClass("win-os");
	}

	if (bowser.safari){
		$("html").addClass("safari");
	}

	if (bowser.chrome){
		$("html").addClass("chrome");
	}

	if (bowser.msie){
		$("html").addClass("int-expl");
	}

	if (bowser.gecko){
		$("html").addClass("mozz");
	}
	// Definition of browser END


	$(".btn-dn").click(function () {
		$("html, body").animate({scrollTop:  $(this).parents(".one-page").next("div").offset().top - 0 }, 800);
	});


	// Button Up, Help Button
	$(".btn-top").click(function() {
		$("html, body").animate({ scrollTop: 0 }, "slow");
		return false;
	});

	$(window).scroll(function(){
		if ( $(document).scrollTop() > 200 ) {
			$('.btn-top').fadeIn('fast');
			$('.btn-top').addClass('on');

		} else {
			$('.btn-top').fadeOut('fast');
			$('.btn-top').removeClass('on');
		}
	});
	// Button Up END


	// Toggle menu
	$(".toggle-btn").click(function() {
		if ($(this).hasClass("on")) {
			$(this).removeClass("on");
		} else {
			$(this).addClass("on");
		}
	});




	if ($(window).width() >= 992) {
		// $(".user-wrap").hover(function () {
		// 	if ($(this).hasClass("hover")) {
		// 		$(this).removeClass("hover");
		// 	} else {
		// 		$(this).addClass("hover");
		// 	}
		// });

	} else {
		// $(".user-wrap").click(function () {
		// 	if ($(this).hasClass("hover")) {
		// 		$(this).removeClass("hover");
		// 	} else {
		// 		$(this).addClass("hover");
		// 	}
		// });

	}




    // Video Player
    $(".top-screen").each(function () {
        var controls = {
            video: $(".top-video"),
            playpause: $(".btn-play"),
            togglePlayback: function () {
                (video.paused) ? video.play() : video.pause();
            }
        };

        var video = controls.video[0];
        controls.playpause.click(function () {
            controls.togglePlayback();
            $(this).parents(".top-screen").toggleClass("play");
        });

    });
    // Video Player END





















































});
// Document ready END










$(document).mouseup(function (e) {
	// $(".user-wrap").each(function () {
	// 	var div = $(this);
	// 	if (!div.is(e.target)
	// 		&& div.has(e.target).length === 0) {
	// 		div.removeClass("hover");
	// 	}
	// });




});