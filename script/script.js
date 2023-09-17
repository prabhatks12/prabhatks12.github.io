var i = 0;
var txt = 'Training data today, shaping the future tomorrow ...'
var speed = 60;

// For typewriter effect on text
function typeWriter() {
    if (i < txt.length) {
        document.getElementById("typing_script_effect").innerHTML += txt.charAt(i);
        i++;
        setTimeout(typeWriter, speed);
    }
    /*
    else{
    	i=0;
    	document.getElementById("demo").innerHTML = "";
    	this.typeWriter();
    }
    */
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