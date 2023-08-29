const { fabric } = require("./fabric");

var canvas = new fabric.canvas('mycanvas');

ball_y=0;
ball_X=0;
hole_y=400
hole_x=800


block_image_width = 5;
block_image_height = 5;

function load_img(){
fabric.Image.fromURL("golf-h.png", function(img) {
	hole_obj = img;
	hole_obj.scaleToWidth(50);
	hole_obj.scaleToHeight(50);
	hole_obj.set({
		top:hole_y
		left:ball_X
	});
	canvas.add(hole_obj);
	});
	newImage();
}

function new_image()
{
	fabric.image.fromURL("ball.png", function(img) {
	ball_obj = img;
	ball_obj.scaleToWidth(50);
	ball_obj.scaleToHeight(50);
	ball_obj.set({
	top:ball_y,
	left:ball_X
	});
	canvas.add(ball_obj);
	});
}

window.addEventListener("keydown", myKeyDown);

function myKeyDown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
	
	if((ball_x==hole_x)&&(ball_y==hole_y))
		canvas.remove(ball_obj);
	else{
		if(keyPressed == '38')
		{
			up();
			console.log("up");
		}
		if(keyPressed == '40')
		{
			down();
			console.log("down");
		}
		if(keyPressed == '37')
		{
			left();
			console.log("left");
		}
		if(keyPressed == '39')
		{
			right();
			console.log("right");
		}
	}
	
	function up()
	{
		if(ball_y <=450)
		{
			{
				ball_y = ball_y + block_image_height;
				console.log("altura da image do bloco t = " + block_image_height);
				console.log("quando a tecla direcional cima é pressionada, x = " + ball_x +" , y = "+ball_y);
				canvas.remove(ball_obj);
				new_image();
			}
		}
	}

	function down()
	if(ball_y <=450)
{
	{
		{
			ball_y = ball_y + block_image_height;
			console.log("altura da image do bloco t = " + block_image_height);
			console.log("quando a tecla direcional baixo é pressionada, x = " + ball_x +" , y = "+ball_y);
			canvas.remove(ball_obj);
			new_image();
		}
	}
}
	function left()
	{
		if(ball_X >5)
		{
			{
				ball_y = ball_y + block_image_height;
				console.log("altura da image do bloco t = " + block_image_height);
				console.log("quando a tecla direcional esquerda é pressionada, x = " + ball_x +" , y = "+ball_y);
				canvas.remove(ball_obj);
				new_image();
			}
		}
	}

	function right()
	{
		if(ball_X <=1050)
		{
			{
				ball_y = ball_y + block_image_height;
				console.log("altura da image do bloco t = " + block_image_height);
				console.log("quando a tecla direcional direita é pressionada, x = " + ball_x +" , y = "+ball_y);
				canvas.remove(ball_obj);
				new_image();
			}
		}
	}
	
}

// feito por: victor e sophia