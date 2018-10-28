
let img;
let rad;
let cr,cg,cb;
function stuff(){
	img=createImg('cowpic2.jpg');
	image(img,0,0,500,500);
	img.class('picbdd');
	rad = createRadio();rad.class("radbdd");
	rad.position(790,15);
  rad.option('red', 1);rad.option('green', 2);rad.option('blue', 3);
	rad.changed(chgColor);
cr=color(250,0,0);cg=color(0,250,0);cb=color(0,0,250);	
}

function chgColor(){
switch(rad.value()){
case '1':ellColor=cr;break;
case '2':ellColor=cg;break;
case '3':ellColor=cb;break;
}	
}