	a = document.getElementById("one");
	b = document.getElementById("two");
	c = document.getElementById("three");
	d = document.getElementById("arrow");
	
function nextImage(el){  
		el.src = "images/green.jpg";
		// if the image is a cherry, change it to a lemon!
}
		
function nextImage2(el){
	if (el.src.match("images/distopia_2.jpg")){  
		el.src = "images/green.jpg";
		// if the image is a cherry, change it to a lemon!
		}
}

function nextImage3(el){
	if (el.src.match("images/distopia_3.jfif")){  
		el.src = "images/green.jpg";
		// if the image is a cherry, change it to a lemon!
		}
}

function checkYes(el){
	if (a.src.match("green") && b.src.match("green") && c.src.match("green")){
		d.classList.toggle("opaque");
	} 
	else {
	
	} 
}