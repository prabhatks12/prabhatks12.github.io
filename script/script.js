var i = 0;
var txt = 'An aspiring data scientist and software developer , preferably working with startups !'
var speed = 50;

// For typewriter effect on text
function typeWriter() {
    if (i < txt.length) {
        document.getElementById("demo").innerHTML += txt.charAt(i);
        i++;
        setTimeout(typeWriter, speed);
    }
}

// For generating cricles on skills percentage
function setPercentageCircle(num,id){
	number = this.calculatePercentageCircle(num);
	var element = document.getElementById(id);
	element.children[1].style.strokeDashoffset = number;
}

// Calculation for skills percentage
function calculatePercentageCircle(num) {
	return (440 - (440*num)/100);
}