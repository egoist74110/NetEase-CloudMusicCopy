var width = document.documentElement.clientWidth;
document.documentElement.style.fontSize = width/7.5+'px';

window.onresize = function(){
  var width = document.documentElement.clientWidth;
  document.documentElement.style.fontSize = width/7.5+'px';
}
