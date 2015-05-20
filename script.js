$(document).ready(function(){

	/**
	 * Play sounds on button click
	 */
	$('#badum-tss button').click(function(){
		var audio = $('#badum-tss').find('audio').get(0);
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
	$('#dancehall-horn button').click(function(){
		var audio = $('#dancehall-horn').find('audio').get(0);
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

});