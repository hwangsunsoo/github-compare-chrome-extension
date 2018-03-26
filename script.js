$(function(){

	var watchRepository = $("#watchRepository");
	var startCompare = $("#startCompare");
	var endCompare = $("#endCompare");
	var createUrl;
	var viewUrl = $("#viewUrl");
	var resultUrl = $("#resultUrl");

	$("#createUrl").click(function(){
		createUrl = watchRepository.val() + '/compare/' + startCompare.val() + '...' + endCompare.val();
		resultUrl.val(createUrl);
		viewUrl.show();
		$(viewUrl).click(function(){
			window.open(createUrl);
		});
	});

});