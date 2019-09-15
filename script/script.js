var i = 0;
var txt = 'I want to work with the maximum potential in a dynamic and challenging environment to touch the zenith of career';
var speed = 50;

function typeWriter() {
    if (i < txt.length) {
    document.getElementById("demo").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}
