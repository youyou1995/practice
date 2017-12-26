$(document).ready(function() {
	var $sliderbarboxp = $(".sliderbar-bottom-box p");
	console.log($sliderbarboxp)
	$(".oheard-mid-title .oheard-slae-box").hover(function() {
		$(".ohead-mid-shop-box").stop(true).slideDown();
	}, function() {
		$(".ohead-mid-shop-box").stop(true).slideUp();

	})

	function titleshow() {
		var　 $hiidetite = $(".heard-fixed-tip");
		if($(".oheard-bottom-dea").add(".heard-bottom").offset().top < 0) {
			$hiidetite.stop(true).fadeIn();
		} else {
			$hiidetite.stop(true).fadeOut();

		}
	}
	titleshow();
	$(document).mousemove(function(e) {
		var width = e.clientX;
		var xx = $(window).width() - 120;
		if(width >= xx) {
			$(".slidebar-fixed-right").stop(true, true).animate({
				right: 0
			}, 200);
		} else {
			$(".slidebar-fixed-right").stop(true, true).animate({
				right: "-40px"
			}, 200);
		}
	});
	$(".oheard-bottom-dea .all-goods").hover(function() {
		$(this).find(".ohead-goods-list").stop(true).slideDown();
	}, function() {
		$(this).find(".ohead-goods-list").stop(true).slideUp();

	})
	$(".heard-bottom-mian").hover(function() {
		$(".heard-bottom-mian-list").stop(true, true).fadeIn();
	}, function() {
		$(".heard-bottom-mian-list").stop(true, true).fadeOut();

	})
	$.each($sliderbarboxp, function(i) {
		$sliderbarboxp.eq(i).hover(function() {
			$(this).find(".sliderbar-small-box").stop(true, true).fadeIn();
		}, function() {
			$(this).find(".sliderbar-small-box").stop(true, true).fadeOut();

		})
	});
	$(".heard-user-mark").hover(function() {
		$(".my-center").stop(true, true).slideDown();
		$(".my-center").hover(function() {
			$(".my-center").stop(true, true).slideDown();
		}, function() {
			$(".my-center").stop(true, true).slideDown();
		})
	}, function() {
		$(".my-center").stop(true, true).slideUp();
	})
	var allnum = 0;
	allnum = $.cookie("allnum");
	$("#trolley-num").text(allnum);

	$(window).bind("scroll", function() {
		var top = $(this).scrollTop(); // 当前窗口的滚动距离
		console.log(top)
		if(top > 10) {
			$(".heard-fixed-tip").slideDown();
		}
		if(top == 0) {
			$(".heard-fixed-tip").slideUp();
		}

		if(top >= 1000 && top < 5000) {
			$("#index-slider").fadeIn(300);
		}
		if(top < 1000) {
			$("#index-slider").fadeOut(300)
		}
		if(top > 5000) {
			$("#index-slider").fadeOut(300)
		}
	});

})