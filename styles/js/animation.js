


// ================
// Hover Thumbnails
// ================



// Variables

var projectThumbnail = document.querySelectorAll(`article.project-thumbnail`);

var projectThumbnailText = document.querySelectorAll(`div.text`);

var projectThumbnailImage = document.querySelectorAll(`img.thumbnail-image`);



// Functions

for(var i=0; i<projectThumbnail.length; i++){
  projectThumbnail[i].addEventListener("mouseenter",mouseEnter(i));
}

function mouseEnter(i) {

  return function() {

    projectThumbnailImage[i].style.opacity = "0.2";
    projectThumbnailText[i].style.opacity = "1";

 };
  
}

for(var i=0; i<projectThumbnail.length; i++){
  projectThumbnail[i].addEventListener("mouseleave",mouseLeave(i));
}

function mouseLeave(i) {

  return function() {

    projectThumbnailImage[i].style.opacity = "1";
    projectThumbnailText[i].style.opacity = "0";

 };

}















// projectThumbnail[0].addEventListener(`mouseenter`, function() {

//   // nextProjectThumbnail[0].style.filter = "brightness(0)";
//   // nextProjectThumbnail[0].style.WebkitFilter = "brightness(0)";
//   console.log("MOUSE ENTER")


// }, false);

// projectThumbnail[0].addEventListener(`mouseleave`, function() {

//   // nextProjectThumbnail[0].style.filter = "brightness(0.4)";
//   // nextProjectThumbnail[0].style.WebkitFilter = "brightness(0.4)";

//   console.log("MOUSE LEAVE")

// }, false);







