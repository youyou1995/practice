$("#userform").Validform({
	btnSubmit: "#user_hid_tfood_btn",
	tiptype: 3,
	ajaxPost: true,
	ignoreHidden: false,
	dragonfly: false,
	tipSweep: false,
	label: ".label",
	showAllError: false,
	postonce: true,
	ajaxPost: true,
	callback: function(data) {
		if(data.status) {
			$.Hidemsg()
		} else {
			$.Showmsg(data.message);
		}
	}
})