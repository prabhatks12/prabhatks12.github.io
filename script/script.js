var i = 0;
var txt = 'An aspiring data scientist and software developer , preferably working with startups !'
var speed = 50;

function typeWriter() {
    if (i < txt.length) {
        document.getElementById("demo").innerHTML += txt.charAt(i);
        i++;
        setTimeout(typeWriter, speed);
    }
}
