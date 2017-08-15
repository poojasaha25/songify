           
    $(document).ready(function(){                   // this is like window.onload function in javascript
	    $('#divDisplay').hide();
	});

	var songs=[
	    {
	        'name': 'A Thousand Years ',
	        'artist': 'Christina Perri',
	        'album': 'Atlantic Records',
	        'duration': '4:45',
	        'fileName': 'AThousandYears.mp3',
	        'image': 'http://spintheblackdisc.com/wp-content/uploads/2014/03/AThousand_Years.jpg'
	    },
	    {
	        'name': 'Baby',
	        'artist': 'Justin Bieber,Ludacris,Terius Nash',
	        'album': 'Ultimate R&B Love 2012',
	        'duration': '3:36',
	        'fileName': 'Baby.mp3',
	        'image': 'http://cps-static.rovicorp.com/3/JPG_500/MI0003/506/MI0003506033.jpg?partner=allrovi.com'
	    },
	    {
	        'name': 'Cheap Thrills',
	        'artist': 'Sia,Sean Paul',
	        'album': 'Cheap Thrills',
	        'duration': '3:44',
	        'fileName': 'CheapThrills.mp3',
	        'image': 'https://upload.wikimedia.org/wikipedia/en/f/fc/Sia_Cheap_Thrills.png'
	    },
	    {
	        'name': 'Closer',
	        'artist': 'The Chainsmokers,Halsey',
	        'album': 'Closer',
	        'duration': '4:05',
	        'fileName': 'Closer.mp3',
	        'image': 'https://www.directlyrics.com/img/upload/0ae20266.jpg'
	    },
	    {
	        'name': 'Let Me Love You',
	        'artist': 'DJ Snake,Zedd,Justin Bieber',
	        'album': 'Let Me Love You-Zedd Remix',
	        'duration': '3:26',
	        'fileName': 'LetMeLoveYou.mp3',
	        'image': 'https://i.ytimg.com/vi/aXHv6tHJgQs/hqdefault.jpg'
	    },
	    {
	        'name': 'Shape of You',
	        'artist': 'Ed Sheeran',
	        'album': 'Atlantic Records UK',
	        'duration': '3:53',
	        'fileName': 'ShapeofYou.mp3',
	        'image': 'https://i.scdn.co/image/621d2909bcc2c26cd0b274aab0414c9d422a1576'
	    },
	    {
	        'name': 'Sorry',
	        'artist': 'Justin Bieber',
	        'album': 'Purpose-Deluxe',
	        'duration': '3:20',
	        'fileName': 'Sorry.mp3',
	        'image': 'https://www.directlyrics.com/img/upload/0c8c0264.jpg'
	    }

    ]

	function addClickEventToSong(i){				
		var position=i;
		var songID='#song'+position;
        	$(songID).on('click',function(){
            $('#audioID')[0].src=songs[i-1].fileName;
            toggleSong();
            changeCurrentSongDetails(position);
        });
      
	}


	// song = $('#')
	function toggleSong(){
		if ($('#audioID')[0].paused) {					
	        $('#audioID')[0].play();
            $('i').removeClass('fa-play').addClass('fa-pause');
        } 
        else {
        	$('#audioID')[0].pause();
            $('i').removeClass('fa-pause').addClass('fa-play');
	    }
	}

	function startingSong(){
		$('#audioID')[0].src=songs[0].fileName;
		$('img')[0].src=songs[0].image;
		$('#songName').text(songs[0].name);
		$('#songAlbum').text(songs[0].artist);
	}

	function changeCurrentSongDetails(position){
		var songID2=position;
		$('img')[0].src=songs[songID2-1].image;
		$('#songName').text(songs[songID2-1].name);
		$('#songAlbum').text(songs[songID2-1].artist);
	}
    
    function updateCurrentTime(i){
    	var songValue=i;
    	$('#showSongDuration').text($('#audioID')[0].duration);
		$('#showCurrentTime').text($('#audioID')[0].currentTime);

    }
	$('#btGo').on('click',function(){

		// loop is filling the details in table raws 

        for(var i=1;i<=songs.length;i++){
	    var songID3='#song'+i;
	    var songNameID3=$(songID3);
        songNameDetailsID=songNameID3.find('.song-name');
        songNameDetailsID.text(songs[i-1].name);
        songArtistDetailsID=songNameID3.find('.song-artist');
        songArtistDetailsID.text(songs[i-1].artist);
        songAlbumDetailsID=songNameID3.find('.song-album');
        songAlbumDetailsID.text(songs[i-1].album);
        songDurationDetailsID=songNameID3.find('.song-duration');
        songDurationDetailsID.text(songs[i-1].duration);
        }

		var userName=$('#inpID').val();

		if(userName.length<3){
			$('#invdName').text('name must have atleast three characters');
		}
		else {
			$('#divWelcome').hide();
			$('#divDisplay').show();
			$('.fa-pause').hide();
			$('#prWelcome').text("Welcome."+userName);
			
			startingSong();
			
            $('i').on('click',function(){
            	toggleSong();
            });

           
            for(var i=1;i<=songs.length;i++){
            	addClickEventToSong(i);                    	
            }
            $('body').on('keypress',function(event){
            	if(event.keyCode==32){
            		toggleSong();
            	}

            	else if(event.keyCode==13){

                }
            });
            	
		}
	});	