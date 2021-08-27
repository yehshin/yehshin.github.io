


// ==========
// Play Video
// ==========



// var videoPlayButton,
// 	videoWrapper = document.getElementsByClassName('col-1-video')[0],
//     video = document.getElementsByTagName('video')[0],
//     videoMethods = {
//         renderVideoPlayButton: function() {
//             if (videoWrapper.contains(video)) {
// 				this.formatVideoPlayButton()
//                 video.classList.add('has-media-controls-hidden')
//                 videoPlayButton = document.getElementsByClassName('video-overlay-play-button')[0]
//                 videoPlayButton.addEventListener('click', this.hideVideoPlayButton)
//             }
//         },

//         formatVideoPlayButton: function() {
//             videoWrapper.insertAdjacentHTML('beforeend', '\
//                 <svg class="video-overlay-play-button" viewBox="0 0 200 200" alt="Play video">\
//                     <circle cx="100" cy="100" r="90" fill="none" stroke-width="15" stroke="#fff"/>\
//                     <polygon points="70, 55 70, 145 145, 100" fill="#fff"/>\
//                 </svg>\
//             ')
//         },

//         hideVideoPlayButton: function() {
//             video.play()
//             videoPlayButton.classList.add('is-hidden')
//             video.classList.remove('has-media-controls-hidden')
//             video.setAttribute('controls', 'controls')
//         }
// 	}

// videoMethods.renderVideoPlayButton()










var playButton = document.getElementById("play-button");
// var video = document.getElementById("video-1")

// Event listener for the play/pause button
playButton.addEventListener("click", function() {

  if (video.paused == true) {
    
    // Play the video
    video.play();

    // Update the button text to 'Pause'
    playButton.innerHTML = "Pause";

  } else {

    // Pause the video
    video.pause();

    // Update the button text to 'Play'
    playButton.innerHTML = "Play";

  }

});







// $( document ).ready(function() {
//     var ctrlVideo = document.getElementById("video"); 
     
//     $('button').click(function(){
//       if ($('button').hasClass("play-button")){
        
//             ctrlVideo.play();
        
//         $('button').html("Pause");
//         $('button').toggleClass("play-button");
//       } else {
        
//             ctrlVideo.pause();
        
//         $('button').html("play");
//         $('button').toggleClass("play-button");
//       }
//     });
     
// });