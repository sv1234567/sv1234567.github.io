var count = 0;
function onClick() {
  var cookie = document.getElementById("cookie");
  var counter = document.getElementById("counter");
  var x = Math.floor(Math.random()*300);
  var y = Math.floor(Math.random()*300);
  cookie.style.top = x + 'px';
  cookie.style.left = y + 'px';
  count++; 
  counter.innerText = count;
  
}
