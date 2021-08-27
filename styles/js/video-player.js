


// ==========
// Play Video
// ==========



// Global Variables

var playButton = document.querySelectorAll(`button.play-button`);
var pauseButton = document.querySelectorAll(`button.pause-button`);
var video = document.querySelectorAll(`video`);
var overlay = document.querySelectorAll(`div.video-overlay`);



// Functions - Video Opacity

for(var i=0; i<overlay.length; i++){
  overlay[i].addEventListener("mouseenter",mouseEnter(i));
}

for(var i=0; i<playButton.length; i++){
  playButton[i].addEventListener("mouseenter",mouseEnter(i));
}

function mouseEnter(i) {

  return function() {

    overlay[i].style.opacity = "0.4";

    if (video[i].paused == true) {
    
      playButton[i].style.opacity = "1";
  
      } else {
  
      playButton[i].style.opacity = "0";
      pauseButton[i].style.opacity = "1";
  
      }

 };
  
}

for(var i=0; i<overlay.length; i++){
  overlay[i].addEventListener("mouseleave",mouseLeave(i));
}

function mouseLeave(i) {

  return function() {

    overlay[i].style.opacity = "0";

    if (video[i].paused == true) {
    
      playButton[i].style.opacity = "1";
  
      } else {

      playButton[i].style.opacity = "0";
      pauseButton[i].style.opacity = "0";
  
      }

 };

}

// Functions - Play / Pause

for(var i=0; i<overlay.length; i++){
  overlay[i].addEventListener("click",clickPlay(i));
}

for(var i=0; i<playButton.length; i++){
  playButton[i].addEventListener("click",clickPlay(i));
}

function clickPlay(i) {

  return function() {

    if (video[i].paused == true) {
    
    playButton[i].style.opacity = "0";
    pauseButton[i].style.opacity = "1";
    video[i].play()

    } else {

    playButton[i].style.opacity = "1";
    pauseButton[i].style.opacity = "0";
    video[i].pause()

    }

 };

}




