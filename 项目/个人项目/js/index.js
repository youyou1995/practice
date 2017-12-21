//头部隐藏出现
$(document).ready(function() {
	var sum = 0;

	$(".gy").hover(function() {
		$(this).find("ul").stop(true).slideDown("slow");
	}, function() {
		$(this).find("ul").stop(true).slideUp("slow");
	})
	//字体下面红线
	var arr = [];
	$(".fix-li").each(function(i) {
		arr.push($(this).innerWidth());

	})
	var sum = 0;

	function a(t) {
		sum = 0;
		for(var i = 0; i < t; i++) {
			sum += arr[i];
		}
	}
	$(".fix-li").hover(function() {
		var topindex = $(this).index();
		a(topindex);
		console.log(arr);
		if($(this).index() == 4) {
			$(".fix-line").css({
				width: $(this).find("ul li").outerWidth(),
				left: sum
			})
		} else {
			$(".fix-line").css({
				width: $(this).outerWidth(),
				left: sum
			})
		}

	}, function() {
		$(".fix-line").css({
			width: '84px',
			left: 0
		})
	});

	<!--banner轮播图-->

	jQuery(".focusBox").hover(function() {
		jQuery(this).find(".banner-arrow-box").find(".prev,.next").stop(true, true).fadeTo("show", 0.2)
	}, function() {
		jQuery(this).find(".banner-arrow-box").find(".prev,.next").fadeOut()
	});
	jQuery(".banner-bg").slide({
		mainCell: ".banner-bd ul",
		effect: "leftLoop",
		prevCell: ".banner-prev",
		nextCell: ".banner-next",
		scroll: 1,
		autoPlay: true,
		delayTime: 1000,
		trigger: "mouseover"
	});
	//	jQuery(".qunar").slide({
	//		mainCell: ".e_pic_wrap ul",
	//		effect: "leftLoop",
	//		autoPlay: false,
	//		delayTime: 400
	//	});
	//箭头隐藏
	$(".banner-bd").add(".banner-arrow-box").hover(function() {
		$(".banner-arrow-box").find(".prev").add(".next").css("display", "block");
	}, function() {
		$(".banner-arrow-box").find(".prev").add(".next").css("display", "none");
	});
	$(".banner-arrow-box").find(".prev").add(".next").hover(function() {
		$(".banner-arrow-box").find(".prev").add(".next").css("display", "block");
		$(this).css("opacity", 1);
	}, function() {
		$(this).css("opacity", 0.3);
	})
	//第二屏
	jQuery(".page2-pic").slide({
		titCell: ".page2-dot ul li",
		mainCell: ".page2-pic-bd ul",
		prevCell: ".page2-prev",
		nextCell: ".page2-next",
		effect: "leftLoop",
		vis: 4,
		scroll: 4,
		interTime: 800,
		trigger: "click",
		easing: "swing",
		autplay: true

	});
	//第二屏箭头消失动画
	$(".page2-pic").hover(function() {
		$(".page2-next").stop(true, true).animate({
			right: -40 + "px",
			opacity: 1

		}, 800);
		$(".page2-prev").stop(true, true).animate({
			left: -35 + "px",
			opacity: 1
		}, 800);
	}, function() {
		$(".page2-next").stop(true, true).animate({
			right: -74 + "px",
			opacity: 0,

		}, 800);
		$(".page2-prev").stop(true, true).animate({
			left: -74 + "px",
			opacity: 0,

		}, 800);
	})
	//第五屏
	jQuery(".page5-box").slide({
		//		titCell: ".page5-title ul li",
		mainCell: ".page5-title ul",
		prevCell: ".page5-prev",
		nextCell: ".page5-next",
		effect: "leftLoop",
		vis: 5,
		scroll: 1,
		interTime: 800,
		trigger: "click",
		easing: "swing",
		//		autplay: true

	});
	//第六屏
	jQuery(".page6-title-box").slide({
		titCell: ".page6-dot .page6-list .page6-list-li",
		mainCell: ".page6-title-bd ul",
		prevCell: ".page6-title-prev",
		nextCell: ".page6-title-next",
		effect: "leftLoop",
		vis: 4,
		scroll: 4,
		interTime: 800,
		trigger: "click",
		easing: "swing",
		autplay: true

	});
	//第七屏
	jQuery(".page7-pic").slide({
		mainCell: ".page7-bd ul",
		prevCell: ".page7-prev",
		nextCell: ".page7-next",
		effect: "leftLoop",
		scroll: 1,
		//		autoPlay: true,
		delayTime: 600,
		trigger: "mouseover"
	});
	//第十屏
	jQuery(".page10-pic-box").slide({
		titCell: ".page2-dot ul li",
		mainCell: ".page10-bd ul",
		prevCell: ".page10-prev",
		nextCell: ".page10-next",
		effect: "leftLoop",
		vis: 4,
		scroll: 4,
		interTime: 800,
		trigger: "click",
		easing: "swing",
		autplay: true

	});
	//第十屏箭头消失动画
	$(".page10-pic-box").hover(function() {
		$(".page10-next").stop(true, true).animate({
			right: -5 + "px",
			opacity: 1

		}, 800);
		$(".page10-prev").stop(true, true).animate({
			left: -30 + "px",
			opacity: 1
		}, 800);
	}, function() {
		$(".page10-next").stop(true, true).animate({
			right: -74 + "px",
			opacity: 0,

		}, 800);
		$(".page10-prev").stop(true, true).animate({
			left: -74 + "px",
			opacity: 0,

		}, 800);
	});
	$(window).scroll(function() {
		var distance = parseInt($(window).scrollTop());
		//		console.log(distance);
		var i = 1
		var time1 = null;
		//第一屏上去
		if(distance > 1) {
			$(".banner-cp").css('top', -parseInt(distance / 4) + 'px');
		}
		if(distance >= 150) {
			$(".page2-bg-pic").css("top", 4 / 7 * (distance - 150) - 300 + 'px');

		}
		if(distance >= 1600) {
			$(".page4-bg-pic").css("top", 1.15 * (distance - 2050) + 'px');
		}

		function num() {

			console.log(i);
			i = i * 2;
			if(5 * i <= 1992) {
				$("#page9-burnyear").html(i);
			} else if(5 * i > 1992) {
				$("#page9-burnyear").html(1992);
			}
			if(5 * i <= 5829) {
				$("#page9-range").html(5 * i);
			} else if(5 * i > 5829) {
				$("#page9-range").html(5829);
				clearInterval(time1);
			}
			if(5 * i <= 3600) {
				$("#page9-city").html(5 * i);
			} else if(5 * i > 3600) {
				$("#page9-city").html(3600);
			}
			if(5 * i <= 4570) {
				$("#page9-result").html(5 * i);
			} else if(5 * i > 4570) {
				$("#page9-result").html(4570);
			}
		}

		if(distance >= 4800 && distance <= 5800 && sum == 0) {
			sum++;
//			if(i < 5829 / 5) {
				time1 = setInterval(num, 90);
//			}

		}
		if(distance > 100) {
			$(".right-return").css("opacity", 1);
		} else {
			$(".right-return").css("opacity", 0);
		}
	});
	//返回顶部
	$(".right-return").click(function() {
		$(".banner-cp").css('top', 0);
		$('html, body').animate({
			scrollTop: 0
		}, 2000);
	})
});