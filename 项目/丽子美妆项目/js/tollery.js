$(document).ready(function() {
	$("#obottom").load("obottom.html");
	$(".heard-user-mark").hover(function() {
		$(".my-center").stop().slideDown();
	}, function() {
		$(".my-center").stop().slideUp();

	})
	var $checkedonly = $(".checkbox-only");
	var $checkall = $(".store-checked-all");
	var $checkadllgoods = $(".checked-all-goods");
	var $checkbox = $(".checkbox");
	var $pice = $(".price_sum");
	var $del = $(".tollery-del");
	var $tollerylist = $(".tollery-store-list");
	var $piceall = $("#total_price");
	var $allpice = 0;
	$checkbox.attr("title", "false");
   var $allgoodsnum=$("#trolley-num");
   $allgoodsnum.text($checkedonly.length);
	//判断反选多选
	function isall(item, allnum) {
		var num = 0;
		$.each(item, function(i) {
			if(item.eq(i).attr("title") == "true") {
				num++;
			}
		});

		if(num == allnum) {
			return true;
		}
	}
	//商品总数计算
	function goodsnum() {

		var $num = 0;
		$checkedonly = $(".checkbox-only");
		$.each($checkedonly, function(i) {
			if($checkedonly.eq(i).attr("title") == "true") {
				var $goodsnum = parseInt($(this).parents("ul").find("li .num_val").val());
				$num += $goodsnum;
			}
		});

		$("#total_num").text($num);
	}
	//判断全部多选
	function isallcheced() {
		if($checkadllgoods.attr("title") == "true") {
			$.each($checkedonly, function(i) {
				if($checkedonly.eq(i).attr("title") == "false") {
					$checkadllgoods.attr("title", "false");
					return false;
				}
			});
		}

	}
	//店铺多选
	//点击添加属性
	function ischecbox() {
		$.each($checkbox, function(i) {
			if($checkbox.eq(i).attr("title") == "true") {
				$checkbox.eq(i).addClass("checkboxischecked");
				$("#topay").css("background-color", "#FF666B");
			} else {
				$checkbox.eq(i).removeClass("checkboxischecked");
			}
		});

	}
	//总价计算
	function isallprice() {
		$allpice = 0;

		$pice = $(".price_sum");
		$.each($checkedonly, function(i) {
			if($checkedonly.eq(i).attr("title") == "true") {
				var num = $(this).parents("ul").find("li .num_val");
				console.dir(num);
				$allpice += parseFloat($pice.eq(i).text() * num.val());
			}

		});
		$piceall.text($allpice.toFixed(2));
	}
	//点击判定
	$checkbox.click(function() {
		if($(this).attr("title") == "false") {
			$(this).attr("title", "true");
		} else {
			$(this).attr("title", "false");
		}

		ischecbox();
		goodsnum();
		isallprice();

	});
	//全选框点击
	$checkadllgoods.click(function() {
		$checkbox.attr("title", $(this).attr("title"));
		ischecbox();
		goodsnum();

		isallprice();
	});
	//店名点击
	$.each($checkall, function(i) {
		$checkall.eq(i).click(function() {
			$(this).parents(".store-list-box").find(".checkbox-only").attr("title", $(this).attr("title"));
			if(isall($checkedonly, $checkedonly.length)) {
				$checkadllgoods.attr("title", "true");
			};
			isallcheced();
			ischecbox();
			goodsnum();
			isallprice();

		});
	});

	//单选框点击
	$.each($checkedonly, function(i) {
		$checkedonly.eq(i).click(function() {
			var $bb = $(this).parents(".store-list-box").find(".store-checked-all");
			var $cc = $bb.parents(".store-list-box").find(".checkbox-only");
			if(isall($cc, $cc.length)) {

				$bb.attr("title", "true");

			};
			if($bb.attr("title") == "true") {
				$.each($cc, function(i) {
					if($cc.eq(i).attr("title") == "false") {
						$bb.attr("title", "false");
						return false;
					}
				});
			}
			isallcheced();
			ischecbox();

		});
	});

	//数量改变
	var $numval = $(".num_val");
	$(".add").click(function() {
		$numval = $(this).siblings(".num_val");
		var i = parseInt($numval.val()) + 1;
		$numval.val(i);
		goodsnum();
		isallprice();
	});
	$(".minus").click(function() {
		$numval = $(this).siblings(".num_val");
		if(parseInt($numval.val()) > 1) {
			var i = parseInt($numval.val()) - 1;
			$numval.val(i);
		} else {
			return false;
		}
		goodsnum();
		isallprice();
	});

	//删除
	$.each($del, function(i) {
		$del.eq(i).click(function() {
			var leg=$(this).parents(".store-list-box").find(".all-store-info")
			console.log(leg);
			console.log(leg.length);
			if(leg.length<2){
				$(this).parents(".all-store-info").siblings(".store-info").remove();
			}
			$(this).parents(".all-store-info").remove();
			goodsnum();
			
			isallprice();
			$checkadllgoods.removeClass("checkboxischecked");
		});
	});
	//商品总量
	
	
	//支付页面
	
	
	var $mraddress;
	$(".newad-box").click(function () {
		
		$(".useradd").css("display","block");
	})
	$(".user_hid_add_btn").click(function () {
		$(".useradd").css("display","none");
	})
	$(".user_hid_tfood_btnf").click(function () {
		$(".useradd").css("display","none");
	})
	$(".user_hid_tfood_btnt").on("click", function() {
		var $newbox=$(".user-newsd-box2");
		console.log($newbox);
		$(".useradd").css("display","none");
				$(".useradd").removeClass("useradd_bg")
				//取值
				//姓名
				var userName = $(".user_hid_form_cle_ip ").val();
				//地址
				var userArea = $(".user_hid_form_area option:selected").text();
				//街道
				var userLoand = $(".userLoand_are").val();
				//手机号
				var userTel = $(".userTel").val();
		 if($(".user-newsd-box2").length>0){
		 	
		 		var $newdiv=$('<div class="user-newsd-box1 fl relative"><div class="newad-box"><a href="#"><p class="user-newsd-box2-p">姓名：'+userName+'</p><p class="user-newsd-box2-p">地址：'+userArea+userLoand+'</p><p class="user-newsd-box2-p">手机号：'+userTel +'</p></a><div class="clearfix user-newsd-box2-a"><span class="mr-address fr">设为默认地址</span></div></div></div>')
			$newdiv.insertBefore(".use-box-address");
		    $mraddress=$(".mr-address");
			
		 }
		 else{
		 	var $newdiv=$('<div class="user-newsd-box2 fl relative"><div class="newad-box"><a href="#"><p class="user-newsd-box2-p">姓名：'+userName+'</p><p class="user-newsd-box2-p">地址：'+userArea+userLoand+'</p><p class="user-newsd-box2-p">手机号：'+userTel +'</p></a><div class="clearfix user-newsd-box2-a"><span class="mr-address fr">设为默认地址</span></div></div></div>')
			$newdiv.insertBefore(".use-box-address");
		    $mraddress=$(".mr-address");
		 	
		 }
	      console.log($mraddress)	
	$mraddress.click(function () {
		$mraddress.parents(".user-newsd-box2").removeClass("user-newsd-box2").addClass("user-newsd-box1");
		$(this).parents(".user-newsd-box1").removeClass("user-newsd-box1").addClass("user-newsd-box2");
	})	
})
  var $tollerytitle=$(".tolley-full-mid-title a");
  var $tline=$(".red-under-line");
  $.each($tollerytitle, function(i) {
  	
  	$tollerytitle.eq(i).click(function () {
  		$tollerytitle.css("color","#34495E")
  		$(this).css("color","#F66368");
  		if(i==0){
  			$tline.stop(true).animate({
  				left:0
  			})
  		}
  		else if(i==1){
  			$tline.stop(true).animate({
  				left: "150px"
  			})
  		}
  		else if(i==2){
  			$tline.stop(true).animate({
  				left:"310px"
  			})
  		}
  	})
  });
});