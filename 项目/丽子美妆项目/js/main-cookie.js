$(document).ready(function() {
	var allnum = 0;

	function arrayToJson(o) {
		var r = [];
		if(typeof o == "string") return "\"" + o.replace(/([\'\"\\])/g, "\\$1").replace(/(\n)/g, "\\n").replace(/(\r)/g, "\\r").replace(/(\t)/g, "\\t") + "\"";
		if(typeof o == "object") {
			if(!o.sort) {
				for(var i in o)
					r.push(i + ":" + arrayToJson(o[i]));
				if(!!document.all && !/^\n?function\s*toString\(\)\s*\{\n?\s*\[native code\]\n?\s*\}\n?\s*$/.test(o.toString)) {
					r.push("toString:" + o.toString.toString());
				}
				r = "{" + r.join() + "}";
			} else {
				for(var i = 0; i < o.length; i++) {
					r.push(arrayToJson(o[i]));
				}
				r = "[" + r.join() + "]";
			}
			return r;
		}
		return o.toString();
	}
	
	
	var $tollery=[];
	
	$('#add-shop').click(function() {
//		var str1 = $.cookie("tollery");
		var oo = {
			store: $(".cookie-store").attr("title"),
			gInfo: $(".cookie-ginfo").text(),
			gSplic: $(".cookie-splic").text(),
			gOpirc: $(".cookie-oprice").text(),
			gNpirc: $(".cookie-nprice").text(),
			gNum: parseInt($(".cookie-gnum").text())
		};
	   
	   if($.cookie("tollery")!=null){
	   	
	   	var flag=false;
	   	var str= $.cookie("tollery");
	       $tollery =  eval(str);
	       for (var i = 0; i < $tollery.length; i++) {
	       if($tollery[i].gInfo==oo.gInfo&&$tollery[i].store==oo.store){
	       	$tollery[i].gNum++;
	       	flag=true;
	       }
	       }
	      
	   }
	   console.log($tollery);
	   if(flag==false){
	   	$tollery.push(oo);
	   }
	       
	    var oCCC = arrayToJson($tollery);
		$.cookie("tollery", oCCC, {　　
			path: "/",
			expiress: 7
		});
		
		
		
		allnum += parseInt(oo.gNum);
		  $.cookie('allnum',allnum,{
						expires: 7,
						path: "/",});

	})
	// 
	//	$.cookie("tollery", oCCC, {　　
	//			path: "/",
	//			expiress: 7
	//		});

})