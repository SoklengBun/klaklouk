
function addkla(){
	var money = parseFloat(document.getElementById("m").innerHTML);	
	var a = parseFloat(document.getElementById("kla").innerHTML);
	document.getElementById("m").innerHTML = money - 100;
	document.getElementById("kla").innerHTML = a + 100;
}
function addklouk(){
	var money = parseFloat(document.getElementById("m").innerHTML);	
	var a = parseFloat(document.getElementById("klouk").innerHTML);
	document.getElementById("m").innerHTML = money - 100;
	document.getElementById("klouk").innerHTML = a + 100;
}
function addchicken(){
	var money = parseFloat(document.getElementById("m").innerHTML);	
	var a = parseFloat(document.getElementById("chicken").innerHTML);
	document.getElementById("m").innerHTML = money - 100;
	document.getElementById("chicken").innerHTML = a + 100;
}
function addlobster(){
	var money = parseFloat(document.getElementById("m").innerHTML);	
	var a = parseFloat(document.getElementById("lobster").innerHTML);
	document.getElementById("m").innerHTML = money - 100;
	document.getElementById("lobster").innerHTML = a + 100;
}
function addcrab(){
	var money = parseFloat(document.getElementById("m").innerHTML);	
	var a = parseFloat(document.getElementById("crab").innerHTML);
	document.getElementById("m").innerHTML = money - 100;
	document.getElementById("crab").innerHTML = a + 100;
}
function addfish(){
	var money = parseFloat(document.getElementById("m").innerHTML);	
	var a = parseFloat(document.getElementById("fish").innerHTML);
	document.getElementById("m").innerHTML = money - 100;
	document.getElementById("fish").innerHTML = a + 100;
}
var ran1;
var ran2;
var ran3;
function starts(){
	ran1 = Math.floor(Math.random() * 6) + 1;
	document.getElementById("myimage1").src = "image/" + ran1 + ".jpg";
	ran2 = Math.floor(Math.random() * 6) + 1;
	document.getElementById("myimage2").src = "image/" + ran2 + ".jpg";
	ran3 = Math.floor(Math.random() * 6) + 1;
	document.getElementById("myimage3").src = "image/" + ran3 + ".jpg";
}
var myRun;
function start(){
	myRun = setInterval(starts,50);
}
function stop(){
		var money = parseFloat(document.getElementById("m").innerHTML);	
		var a = parseFloat(document.getElementById("kla").innerHTML);
		var b = parseFloat(document.getElementById("klouk").innerHTML);
		var c = parseFloat(document.getElementById("chicken").innerHTML);
		var d = parseFloat(document.getElementById("lobster").innerHTML);
		var e = parseFloat(document.getElementById("crab").innerHTML);
		var f = parseFloat(document.getElementById("fish").innerHTML);		
        clearInterval(myRun);
		
		if(ran1 == "1")
			money = money + a; 		
		if(ran2 == "1")
			money = money + a;
		if(ran3 =="1")
			money = money + a;
		if(ran1 == "2")
			money = money + b;
		if(ran2 == "2")
			money = money + b;
		if(ran3 == "2")
			money = money + b;
		if(ran1 == "3")
			money = money + c;
		if(ran2 == "3")
			money = money + c;
		if(ran3 == "3")
			money = money + c;
		if(ran1 == "4")
			money = money + d;
		if(ran2 == "4")
			money = money + d;
		if(ran3 == "4")
			money = money + d;
		if(ran1 == "5")
			money = money + e;
		if(ran2 == "5")
			money = money + e;
		if(ran3 == "5")
			money = money + e;
		if(ran1 == "6")
			money = money + f;
		if(ran2 == "6")
			money = money + f;
		if(ran3 == "6")
			money = money + f;
		document.getElementById("m").innerHTML = money;	
		document.getElementById("kla").innerHTML = 0;
		document.getElementById("klouk").innerHTML = 0;
		document.getElementById("chicken").innerHTML = 0;
		document.getElementById("lobster").innerHTML = 0;
		document.getElementById("crab").innerHTML = 0;
		document.getElementById("fish").innerHTML = 0;
		
		
}
