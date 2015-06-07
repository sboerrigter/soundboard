$(document).ready(function(){

	/**
	 * Play sounds on button click
	 */
	$('#rimshot button').click(function(){
		var audio = $('#rimshot').find('audio').get(0);
		if (audio.paused) {
			audio.play();
		}else{
			audio.currentTime = 0;
		}
	});
	$('#sad-trombone button').click(function(){
		var audio = $('#sad-trombone').find('audio').get(0);
		if (audio.paused) {
			audio.play();
		}else{
			audio.currentTime = 0;
		}
	});
	$('#fart button').click(function(){
		var audio = $('#fart').find('audio').get(0);
		if (audio.paused) {
			audio.play();
		}else{
			audio.currentTime = 0;
		}
	});
	$('#dancehall-horn button').click(function(){
		var audio = $('#dancehall-horn').find('audio').get(0);
		if (audio.paused) {
			audio.play();
		}else{
			audio.currentTime = 0;
		}
	});
	$('#gayyy button').click(function(){
		var audio = $('#gayyy').find('audio').get(0);
		if (audio.paused) {
			audio.play();
		}else{
			audio.currentTime = 0;
		}
	});
	$('#dramatic button').click(function(){
		var audio = $('#dramatic').find('audio').get(0);
		if (audio.paused) {
			audio.play();
		}else{
			audio.currentTime = 0;
		}
	});
	$('#best-cry-ever button').click(function(){
		var audio = $('#best-cry-ever').find('audio').get(0);
		if (audio.paused) {
			audio.play();
		}else{
			audio.currentTime = 0;
		}
	});
	$('#trololol button').click(function(){
		var audio = $('#trololol').find('audio').get(0);
		if (audio.paused) {
			audio.play();
		}else{
			audio.currentTime = 0;
		}
	});

});