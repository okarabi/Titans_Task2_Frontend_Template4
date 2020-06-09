
var coll = document.getElementsByClassName('collapsible');
var slideIndex = [1,1];
var slideId = ["mySlides1", "mySlides2"];

showSlides(1, 0);
showSlides(1, 1);
var i;

for (i=0; i<coll.length; i++){
    coll[i].addEventListener('click', function(){
        this.classList.toggle('active');
        var content = this.nextElementSibling;
        if(content.style.display === 'block'){
            content.style.display = 'none';
        }
        else{
            content.style.display = 'block';
        }
    });
}

function plusSlides(n, no) {
  showSlides(slideIndex[no] += n, no);
}
function currentSlide(n, no) {
    showSlides(slideIndex[no] = n, no);
  }

function showSlides(n, no) {
  var i;
  var x = document.getElementsByClassName(slideId[no]);
  var dots = document.getElementsByClassName("dot");
  if (n > x.length) {slideIndex[no] = 1}    
  if (n < 1) {slideIndex[no] = x.length}
  for (i = 0; i < x.length; i++) {
     x[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
 }
  x[slideIndex[no]-1].style.display = "block";  
  dots[slideIndex[no]-1].className += " active";
}