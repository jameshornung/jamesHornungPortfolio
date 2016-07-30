$(document).ready(function(){
	$('#intro-name').fadeIn(3000);
	setTimeout(displayTitle, 2500);
	$('#navigation-source').hover(showMenu, hideMenu);
});

function displayTitle(){
	$('#intro-title').fadeIn(300);
}

function showMenu(){
	$('#dropdown').show();
}

function hideMenu(){
	$('#dropdown').fadeOut(5000);
}
