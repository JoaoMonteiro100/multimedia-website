jQuery(function($) {
	var supportsAudio = !!document.createElement('audio').canPlayType;
	
	if(supportsAudio) {
		var index = 0,
		playing = false;
		mediaPath = '/music/',
		extension = '',
		tracks = [
			{"track":1,"name":"Overture","length":"01:29","file":"Guild Wars 2 OST - 01. Overture"},
			{"track":2,"name":"Heritage of Humanity","length":"01:56","file":"Guild Wars 2 OST - 06. Heritage of Humanity"},
			{"track":3,"name":"The Saga of the Norn","length":"02:25","file":"Guild Wars 2 OST - 47. The Saga of the Norn"},
			{"track":4,"name":"The Charr Triumphant","length":"02:14","file":"Guild Wars 2 OST - 60. The Charr Triumphant"},
			{"track":5,"name":"The Tengu Wall","length":"02:11","file":"Guild Wars 2 OST - 23. The Tengu Wall"}
		],
		trackCount = tracks.length,
		npAction = $('#npAction'),
		npTitle = $('#npTitle'),
		audio = $('#audio1').bind('play', function() {
			playing = true;
			npAction.text('Now Playing:');
		}).bind('pause', function() {
			playing = false;
			npAction.text('Paused:');
		}).bind('ended', function() {
			npAction.text('Paused:');
			if((index + 1) < trackCount) {
				index++;
				loadTrack(index);
				audio.play();
			} else {
				audio.pause();
				index = 0;
				loadTrack(index);
			}
		}).get(0),
		btnPrev = $('#btnPrev').click(function() {
			if((index - 1) > -1) {
				index--;
				loadTrack(index);
				if(playing) {
					audio.play();
				}
			} else {
				audio.pause();
				index = 0;
				loadTrack(index);
			}
		}),
		btnNext = $('#btnNext').click(function() {
			if((index + 1) < trackCount) {
				index++;
				loadTrack(index);
				if(playing) {
					audio.play();
				}
			} else {
				audio.pause();
				index = 0;
				loadTrack(index);
			}
		}),
		li = $('#plUL li').click(function() {
			var id = parseInt($(this).index());
			if(id !== index) {
				playTrack(id);
			}
		}),
		loadTrack = function(id) {
			$('.plSel').removeClass('plSel');
			$('#plUL li:eq(' + id + ')').addClass('plSel');
			npTitle.text(tracks[id].name);
			index = id;
			audio.src = mediaPath + tracks[id].file + extension;
		},
		playTrack = function(id) {
			loadTrack(id);
			audio.play();
		};
		if(audio.canPlayType('audio/ogg')) {
			extension = '.ogg';
		}
		if(audio.canPlayType('audio/mpeg')) {
			extension = '.mp3';
		}
		loadTrack(index);
	}
});
