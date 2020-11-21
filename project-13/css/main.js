/*global console, alert, prompt*/

// this sumation op two number 
function conver(){
    "use stract";
    var nm1 = Number(document.getElementById("num1").value),
	    nm2 = Number(document.getElementById("num2").value),
		myTest = document.getElementById("test"),
		result = nm1 + nm2;
    
	 myTest.innerHTML = " this is the sumation  " + result; 
	
	if(isNaN(nm1) || isNaN(nm2))
	{
	 myTest.innerHTML = " only write number ";
	}
}
/*  this is the main photo apper when open  */
 document.getElementById("pic").innerHTML = '<img src="imgs/back3.jpg" style="width:450px;height:300px">';
 
/* those photo apper when you chose  */
function img(){
	"use stract";
	var pict = document.getElementById("pho").value ;
    console.log(pict);
	
    switch (pict) {
        case 'image1':
            document.getElementById("pic").innerHTML = '<img src="imgs/back5.jpg" style="width:450px;height:300px">';
            console.log(pict);
            break;
        
        case 'image2':
            document.getElementById("pic").innerHTML = '<img src="imgs/back1.jpg" style="width:450px;height:300px">';
            console.log(pict);
            break;

        case 'image3':
            document.getElementById("pic").innerHTML = '<img src="imgs/back6.png" style="width:450px;height:300px">';
            console.log(pict);
            break;

        case 'image4':
            document.getElementById("pic").innerHTML = '<img src="imgs/back4.jpg" style="width:450px;height:300px">';
            console.log(pict);
            break;

        case 'image5':
            document.getElementById("pic").innerHTML = '<img src="imgs/back3.jpg" style="width:450px;height:300px">';
            console.log(pict);
            break;
         default:
            document.getElementById("pic").innerText = "sorry the photo is not found";
            console.log(pict);
            break;
	}
}

	