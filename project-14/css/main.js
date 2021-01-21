/*global console, alert, prompt*/
//function for sumation of two number
function conver(){
    "use stract";
    var nm1 = Number(document.getElementById("num1").value),
	    nm2 = Number(document.getElementById("num2").value),
		myTest = document.getElementById("test"),
		result = nm1 + nm2;
    
	 myTest.innerHTML = " this is the sumation  " + result; 
	
	if(isNaN(nm1) || isNaN(nm2))
	{
	 alert("wrong number");
	}
}
//function to type names
function uName(){
	"use stract";
	var yourName = prompt("what your name");
	document.getElementById("apper").innerHTML = yourName;
}
//function to type some data 
function typeDate()
{
	var theDate = new Date();
	document.getElementById("time").innerHTML = theDate;
	console.log(theDate);
}
// function to type the length of character
function typeLength()
{
	var theLength = document.getElementById("lin").value.length;
	document.getElementById("type").innerHTML = theLength;
	console.log(theLength);
}
// function to type array
function typeArry(ind) {
	var ones = new Array('', ' one', ' two', ' three', ' four', ' five', ' six'
	, ' seven', ' eight', ' nine', ' ten', ' eleven', ' twelve', ' thirteen', ' fourteen', 
	' fifteen', ' sixteen', ' seventeen', ' eighteen', ' nineteen'),
     arry = new Array(),
	 index;

     if(ind >=19){
		 alert("overfull arry");
	 }
    for (index = 0; index < ind; index++) {
        arry[index] = prompt('type element number ' + (index + 1));
    }

    for (index = 0; index < arry.length; index++) {
        document.getElementById("ele").innerHTML += '<div> ' + ones[index + 1] + ' name is :' + arry[index] + ' </div>'
    }
}
