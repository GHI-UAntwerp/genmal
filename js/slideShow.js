var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
  showDivs(slideIndex += n);
}

function showDivs(n) {
  var i;
  var x = document.getElementsByClassName("mySlide");
  if (n > x.length) {slideIndex = 1}
  if (n < 1) {slideIndex = x.length}
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  x[slideIndex-1].style.display = "block";  
}

if (window.matchMedia) {
    var mq = window.matchMedia('(max-width:960px)'),
        viewport = document.querySelector('meta[name=viewport]');
    mq.addListener(checkViewPort);
    checkViewPort(mq);
    }
function checkViewPort(mq) {
    mq.matches ? viewport.setAttribute('content', 'width=960') : viewport.setAttribute('content', 'width=device-width');
    }