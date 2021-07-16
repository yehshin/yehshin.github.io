


// =======
// Fade In
// =======

// window.addEventListener('load', function() {

//     var body = document.querySelector('body');

//     body.style.opacity = 1;

// }, false)


// ================
// Hover Thumbnails
// ================

var nextProject = document.querySelectorAll(`a.next-project`);
var nextProjectThumbnail = document.querySelectorAll(`img.next-project-thumbnail`);

nextProject[0].addEventListener(`mouseenter`, function() {

  nextProjectThumbnail[0].style.filter = "brightness(0)";
  nextProjectThumbnail[0].style.WebkitFilter = "brightness(0)";


}, false);

nextProject[0].addEventListener(`mouseleave`, function() {

  nextProjectThumbnail[0].style.filter = "brightness(0.4)";
  nextProjectThumbnail[0].style.WebkitFilter = "brightness(0.4)";


}, false);
