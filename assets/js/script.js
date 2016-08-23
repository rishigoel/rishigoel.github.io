function renderBlur() {
	var blurHeader = document.getElementById('blurHeader-container');
	var pageContent = document.getElementById("content");
}

$(window).resize(function() {
  renderBlur();
});

function scrollToSection(sec) {
	var scroll = $('#'+sec+'Sec').offset().top;
	$('body').animate({
		scrollTop: scroll - 80
	}, 500, 'swing');
}