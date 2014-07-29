var el = document.querySelectorAll("video");

[].forEach.call(el, function(value) {
	pauseOnStart(value);
});

function pauseOnStart(vid) {
	//If the video is already playing when this script is loaded, simply pause it and return.
	if(!vid.paused) {
		vid.pause();
	//If the video is not playing, we need to stop it as soon as it is played for the first time
	} else {
		vid.addEventListener("play", (function() {
			var times = 0;
			var target = vid;
			return function() {
				if(times == 0)
				{
					vid.pause();
					console.log('stfu!', times);
				}

				times++;
			}
		})());
	}
}

