let x = document.getElementById('first');

function image1(callback) {
    setTimeout(() => {
        document.getElementById("anid").src = "img/zombie4.png";
        document.getElementById("name1").innerHTML = "Anid";
        callback();
    }, 2000);

}

function image2(callback) {
    setTimeout(() => {
        document.getElementById("nitin").src = "img/zombie3.png";
        document.getElementById("name2").innerHTML = "Nitin";
        callback();
    }, 2000);

}

function image3(callback) {
    setTimeout(() => {
        document.getElementById("deb").src = "img/zombie2.png";
        document.getElementById("name3").innerHTML = "Deb";
        callback();
    }, 2000);

}

function image4() {
    setTimeout(() => {
        document.getElementById("nitu").src = "img/zombie1.png";
        document.getElementById("name4").innerHTML = "Nitu";
    }, 2000);

}
image1(() => {
    image2(() => {
        image3(() => {
            image4();
        });
    });
});


// Text Character by Character

message = document.getElementById("fly").innerHTML; // $ = taking a new line
distance = 150; // pixel(s)
speed = 20; // milliseconds

var txt="",
	num=0,
	num4=0,
	flyofle="",
	flyofwi="",
	flyofto="",
	fly=document.getElementById("fly");


function stfly() {
	for(i=0;i != message.length;i++) {
		if(message.charAt(i) != "$")
			txt += "<span style='position:relative;visibility:hidden;' id='n"+i+"'>"+message.charAt(i)+"<\/span>";
		else
			txt += "<br>";
	}
	fly.innerHTML = txt;
	txt = "";
	flyofle = fly.offsetLeft;
	flyofwi = fly.offsetWidth;
	flyofto = fly.offsetTop;
	fly2b();
}

function fly2b() {
	if(num4 != message.length) {
		if(message.charAt(num4) != "$") {
			var then = document.getElementById("n" + num4);
			then.style.left = flyofle - then.offsetLeft + flyofwi / 2;
			then.style.top = flyofto - then.offsetTop + distance;
			fly3(then.id, parseInt(then.style.left), parseInt(then.style.left) / 5, parseInt(then.style.top), parseInt(then.style.top) / 5);
		}
		num4++;
		setTimeout("fly2b()", speed);
	}
}

function fly3(target,lef2,num2,top2,num3) {
	if((Math.floor(top2) != 0 && Math.floor(top2) != -1) || (Math.floor(lef2) != 0 && Math.floor(lef2) != -1)) {
		if(lef2 >= 0)
			lef2 -= num2;
		else
			lef2 += num2 * -1;
		if(Math.floor(lef2) != -1) {
			document.getElementById(target).style.visibility = "visible";
			document.getElementById(target).style.left = Math.floor(lef2);
		} else {
			document.getElementById(target).style.visibility = "visible";
			document.getElementById(target).style.left = Math.floor(lef2 + 1);
		}
		if(lef2 >= 0)
			top2 -= num3
		else
			top2 += num3 * -1;
		if(Math.floor(top2) != -1)
			document.getElementById(target).style.top = Math.floor(top2);
		else
			document.getElementById(target).style.top = Math.floor(top2 + 1);
		setTimeout("fly3('"+target+"',"+lef2+","+num2+","+top2+","+num3+")",25)
	}
}

stfly()
