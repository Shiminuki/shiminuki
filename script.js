var context, controller, rectangle, loop; //contxt for drawing/canvas, controller for control logic and keypresses, square is square dimensions and position, loop is game loop//



context = document.querySelector("canvas").getContext("2d");

context.canvas.height = 300; //variable.element.height//
context.canvas.width = 800;


rectangle = {

	height:32,
	jumping:true, //true when in the air
	width:32,
	x:50, //center of the canvas
	x_velocity:0,
	y:180,
	y_velocity:0,
};


controller = {

	left:false,
	right:false,
	up:false,
	keyListener:function(event) {

		var key_state = (event.type == "keydown")?true:false;

		switch(event.keyCode) {

			case 37:// left
			controller.left = key_state; //key state variable is equal to whatever key is pressed
			break;
			case 38:// up
			controller.up = key_state;
			break;
			case 39:// right
			controller.right = key_state;
			break;
		}


	}

};

var xa = 250
var xb = 350
var xc = 510
var xd = 500
var xe = 1700
var xf = 2100
var xg = -2000
var xh = 3115
var xi = 3510
var xj = 2400
var xk = 2400
var xl = 2650
var xm = 2470
var xn = 2400
var xo = 2400
var xp = -4300
var xq = -4600
var xr = -4700
var xs = -4900
var xt = -7300
var xu = 6800
var xv = 7050
var xw = 13800
var xx = 14150
var xy = 21150
var xz = -15600
var xaa = 12350
var xab = 1

var ya = 0
var yb = 300
var yc = 500
var yd = 650
var ye = 800
var yf = 1900
var yg = 2030
var yh = 2190
var yi = 2340
var yj = 2400
var yk = 2460
var yl = 2450
var ym = 2620
var yn = 2850
var yo = 3050
var yp = 3250
var yq = 3250
var yr = -4355
var ys = 1600
var yt = 1750
var yu = 1900
var yv = 1600
var yw = 1750
var yx = 1900
var yy = 18500
var yz = 18850
var yaa = 19200
var yab = 19550
var yac = 19900
var yad = 20250
var yae = 6165
var yaf = 6400
var yag = 6400
var yah = 6400
var yai = 6450
var yaj = 6425
var yak = 6475
var yal = 6475
var yam = 6475
var yan = 6525
var yao = 6500

var za = 6800




loop = function() {

	var goodplats = []
	var badplats = []
	var winplats = []
	


	if (controller.up && rectangle.jumping == false) {

		rectangle.y_velocity -= 20;
		rectangle.jumping = true;
	}

	if (controller.left) {

		rectangle.x -= 5;
	}

		if (controller.right) {

		rectangle.x += 5;
	}

	rectangle.y_velocity += 1.2;//gravity
	
	rectangle.y += rectangle.y_velocity;//add velocity to rectangle's current position
	
	rectangle.y_velocity *= 0.9;//friction

//if rectangle is falling below the floor line
if (rectangle.y > 310) {

	document.location.reload();
	clearInterval(interval);//chrome reload
}


//if rectangle is going off the left of the screen
if (rectangle.x < 0) {
	rectangle.x = 0;

} else if (rectangle.x > 768) {//if rectangle goes past right boundary

	rectangle.x = 768

}


context.clearRect(0, 0, context.canvas.width, context.canvas.height); //prevents painting the background the rectangle color
context.beginPath();  //rectangle starts here
context.rect(rectangle.x, rectangle.y, rectangle.width, rectangle.height);
context.fillStyle = "#ff0000";
//context.strokeStyle = "rgba(0,0, 255, 0.5)";
//context.stroke();
context.fill();
context.closePath(); //rectangle ends here

//border
context.beginPath();
context.rect(0, 299, 1000, 1); //bottom
context.rect(0, 1, 1000, 1); // top
context.rect(0, 1, 1, 400); //left
context.rect(799, 1, 1, 400); //right
context.fillStyle = "#171414"; //rectangle platform here
context.fill();
context.closePath();

function goodplat(x, y, width, height) { //platform parameters

this.x = x;
this.y = y;
this.width = width;
this.height = height;

context.beginPath();
context.rect(this.x, this.y, this.width, this.height);
context.fillStyle = "#FEFEFE";
context.fill();
context.closePath();

goodplats.push(this);
}

function badplat(x, y, width, height) { //platform parameters

this.x = x;
this.y = y;
this.width = width;
this.height = height;

context.beginPath();
context.rect(this.x, this.y, this.width, this.height);
context.fillStyle = "#3452eb";
context.fill();
context.closePath();

badplats.push(this);
}

function winplat(x, y, width, height) { //platform parameters

this.x = x;
this.y = y;
this.width = width;
this.height = height;

context.beginPath();
context.rect(this.x, this.y, this.width, this.height);
context.fillStyle = "#268500";
context.fill();
context.closePath();

winplats.push(this);
}

function makeBadPlats(){ //Hold platforms in an array???

plat1000 = new badplat(xa -=1, 250 ,30 ,10);
plat1001 = new badplat(xb -=1, 180 ,30 ,10);
//plat1002 = new badplat(xc -=1, 170 ,30 , 10);
plat1003 = new badplat(xd -=1, 210 , 40 , 70);
plat1004 = new badplat(xe -=5, 10 , 20 , 170);
plat1005 = new badplat(xf -=5, 200 , 20 , 20);
plat1006 = new badplat(xg +=5, 10 , 20 , 200);
plat1007 = new badplat(xh -=5, 190 , 6 , 100);
plat1008 = new badplat(xi -=5, 10 , 6 , 90);
plat1009 = new badplat(xj -=3, 80 , 6 , 140);
plat1010 = new badplat(xk -=3, 10 , 250 , 5);
plat1011 = new badplat(xl -=3, 10 , 5 , 190);
plat1012 = new badplat(xm -=3, 150 , 180 , 5);
plat1013 = new badplat(xn -=3, 78 , 190 , 5);
plat1014 = new badplat(xo -=3, 215 , 190 , 5);
plat1015 = new badplat(xp +=5, 90 , 12 , 200);
plat1016 = new badplat(xq +=5, 0 , 12 , 180);
plat1017 = new badplat(xr +=5, 180 , 12 , 180);
plat1018 = new badplat(xs +=5, 0 , 12 , 160);
plat1019 = new badplat(xt +=5, 180 , 2300 , 80);
plat1020 = new badplat(xu -=5, 130 , 20 , 20);
plat1021 = new badplat(xv -=5, 130 , 20 , 20);
plat1022 = new badplat(xw -=10, 130 , 20 , 20);
plat1023 = new badplat(xx -=10, 130 , 20 , 20);
plat1024 = new badplat(xy -=15, 130 , 20 , 20);
plat1025 = new badplat(xz +=11, 130 , 20 , 20);
plat1026 = new badplat(xaa -=8, 80 , 400 , 80);


}

makeBadPlats()

function makeGoodPlats(){ //Hold platforms in an array???

plat1 = new goodplat(ya -=3, 280, 1000, 1)
plat2 = new goodplat(yb -=1, 210 , 40 , 1);
plat3 = new goodplat(yc -=1, 180 , 40 , 1);
plat4 = new goodplat(yd -=1, 210 , 40 , 1);
plat5 = new goodplat(ye -=1, 230 , 40 , 1);
plat6 = new goodplat(yf -=3, 250 , 40 , 1);
plat7 = new goodplat(yg -=3, 200 , 40 , 1);
plat8 = new goodplat(yh -=3, 110 , 40 , 1);
plat9 = new goodplat(yi -=3, 140 , 40 , 1);
plat10 = new goodplat(yj -=3, 60 , 190 , 1);
plat11 = new goodplat(yk -=3, 120 , 175 , 1);
plat12 = new goodplat(yl -=3, 190 , 140 , 1);
plat13 = new goodplat(ym -=3, 250 , 80 , 1);
plat14 = new goodplat(yn -=3, 200 , 5 , 1);
plat15 = new goodplat(yo -=3, 200 , 5 , 1);
plat16 = new goodplat(yp -=3, 200 , 5 , 1);
plat17 = new goodplat(yq -=3, 110 , 5 , 1);
plat18 = new goodplat(yr +=5, 110 , 60 , 1);
plat19 = new goodplat(ys -=1, 230 , 60 , 1);
plat20 = new goodplat(yt -=1, 230 , 60 , 1);
plat21 = new goodplat(yu -=1, 230 , 60 , 1);
plat22 = new goodplat(yv -=1, 160 , 60 , 1);
plat23 = new goodplat(yw -=1, 160 , 60 , 1);
plat24 = new goodplat(yx -=1, 160 , 60 , 1);
plat25 = new goodplat(yy -=11, 140 , 15 , 1);
plat26 = new goodplat(yz -=11, 140 , 15 , 1);
plat27 = new goodplat(yaa -=11, 140 , 15 , 1);
plat28 = new goodplat(yab -=11, 140 , 15 , 1);
plat29 = new goodplat(yac -=11, 140 , 15 , 1);
plat30 = new goodplat(yad -=11, 140 , 15 , 1);
plat31 = new goodplat(yae -=3, 170 , 600 , 1);
plat32 = new goodplat(yaf -=3, 195 , 50 , 1); //thx starts here
plat33 = new goodplat(yag -=3, 195 , 1 , 80);
plat34 = new goodplat(yah -=3, 275 , 50 , 1);
plat35 = new goodplat(yai -=3, 236 , 1 , 40);
plat36 = new goodplat(yaj -=3, 236 , 25 , 1);
plat37 = new goodplat(yak -=3, 195 , 50 , 1); //thx starts here
plat38 = new goodplat(yal -=3, 195 , 1 , 80);
plat39 = new goodplat(yam -=3, 275 , 50 , 1);
plat40 = new goodplat(yan -=3, 236 , 1 , 40);
plat41 = new goodplat(yao -=3, 236 , 25 , 1);

}

makeGoodPlats()

function makeWinPlats(){ //Hold platforms in an array???

platwin = new winplat(za -=3, 0, 10, 400);



}

makeWinPlats()





function goodCollision(){ //loop through ALL platforms and compare EVERY SINGLE platform's position with the rectangle's
	for (var p = 0; p < goodplats.length; p ++){
	var	plts = goodplats[p]


	if (rectangle.x + rectangle.width > plts.x && rectangle.x < plts.x + plts.width && rectangle.y 
	> plts.y - rectangle.height && rectangle.y < plts.y + plts.height) {	
			var rectTouching = true
		if (rectTouching == true) {
			rectangle.y_velocity = -1.2	
			rectangle.jumping = false
		}
	}
}

}

function badCollision(){ //loop through ALL platforms and compare EVERY SINGLE platform's position with the rectangle's
	for (var p = 0; p < badplats.length; p ++){
	var	plts = badplats[p]

	if (rectangle.x + rectangle.width > plts.x && rectangle.x < plts.x + plts.width && rectangle.y > plts.y - rectangle.height && rectangle.y < plts.y + plts.height) {	
			document.location.reload();
	clearInterval(interval);//chrome reload
		}
}
}

function winCollision(){ //loop through ALL platforms and compare EVERY SINGLE platform's position with the rectangle's
	for (var p = 0; p < winplats.length; p ++){
	var	plts = winplats[p]

	if (rectangle.x + rectangle.width > plts.x && rectangle.x < plts.x + plts.width && rectangle.y > plts.y - rectangle.height && rectangle.y < plts.y + plts.height) {	
			alert("You're winner !")
			document.location.reload();
	clearInterval(interval);//chrome reload
		}
}
}

goodCollision()
badCollision()
winCollision()


window.requestAnimationFrame(loop); //keeps calling loop subsequent times

};



window.addEventListener("keydown", controller.keyListener); //when key is pressed down
window.addEventListener("keyup", controller.keyListener); //when key isn't pressed
window.requestAnimationFrame(loop); //Calls loop the first time


