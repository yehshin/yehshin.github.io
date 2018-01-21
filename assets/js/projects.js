


// ==================
// Next Project Links
// ==================

var projectCard = document.querySelectorAll('a.project-card');
var overlay = document.querySelectorAll('span.overlay');
var thumbnailImg = document.querySelectorAll('div.thumbnail-bg img');

var initialBoxShadow = "0px 30px 60px -10px rgba(17, 17, 17, 0.15)";
var hoveredBoxShadow = "0px 50px 80px -20px rgba(17, 17, 17, 0.1)";

var initialTop = "0px";
var hoveredTop = "-20px"

var hidden = "0";
var fade = "0.05";
var visible = "1";

projectCard[0].addEventListener('mouseenter', function() {

  this.style.top = hoveredTop;
  this.style.boxShadow = hoveredBoxShadow;
  overlay[0].style.opacity = visible;
  thumbnailImg[0].style.opacity = fade;

}, false);

projectCard[0].addEventListener('mouseleave', function() {

  this.style.top = initialTop;
  this.style.boxShadow = initialBoxShadow;
  overlay[0].style.opacity = hidden;
  thumbnailImg[0].style.opacity = visible;

}, false);

projectCard[1].addEventListener('mouseenter', function() {

  this.style.top = hoveredTop;
  this.style.boxShadow = hoveredBoxShadow;
  overlay[1].style.opacity = visible;
  thumbnailImg[1].style.opacity = fade;

}, false);

projectCard[1].addEventListener('mouseleave', function() {

  this.style.top = initialTop;
  this.style.boxShadow = initialBoxShadow;
  overlay[1].style.opacity = hidden;
  thumbnailImg[1].style.opacity = visible;

}, false);