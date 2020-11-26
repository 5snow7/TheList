let can,patternGmove,pongGamemove;
let snmove,tttmove,firemove,threemove,waterRmove;
let ellColor,lindelmove,duomove,mandelmove,linearmove;
function setup(){
	start();stuff();
	can=createCanvas(350,300);
	can.position(700,180);can.class("inpbdd");
    background(150,250,100);	
snmove=new move(200,300,-4,3);
tttmove=new move(100,200,2,3);
firemove=new move(400,200,-3,-5);
threemove=new move(100,500,4,-3);
waterRmove=new move(300,300,-3,-4);
patternGmove=new move(200,300,3,-4);
pongGamemove=new move(50,300,-2,3);
lindelmove=new move(200,100,5,3);
duomove=new move(300,100,-3,2);
mandelmove=new move(200,200,4,3);
linearmove=new move(300,400,5,3);	
	ellColor=color(200,200,0);
	frameRate(20);
	}

function draw(){
snmove.update();snmove.chbdd1();
sn.position(snmove.x,snmove.y);	
tttmove.update();tttmove.chbdd1();
ttt.position(tttmove.x,tttmove.y);	
firemove.update();firemove.chbdd1();
firew.position(firemove.x,firemove.y);	
threemove.update();threemove.chbdd1();
threedm.position(threemove.x,threemove.y);
waterR.position(waterRmove.x,waterRmove.y);	
patternGmove.update();patternGmove.chbdd1();
patternG.position(patternGmove.x,patternGmove.y);
pongGamemove.update();pongGamemove.chbdd1();
pongGame.position(pongGamemove.x,pongGamemove.y);	
lindelmove.update();lindelmove.chbdd1();
lindel.position(lindelmove.x,lindelmove.y);	
duomove.update();duomove.chbdd1();
duo.position(duomove.x,duomove.y);	
mandelmove.update();mandelmove.chbdd1();
mandelR.position(mandelmove.x,mandelmove.y);	
mandelmove.update();mandelmove.chbdd1();
linearmove.update();linearmove.chbdd1();
LinearF.position(linearmove.x,linearmove.y);	
	

fill(ellColor);ellipse(40,40,20,50);
}
//why doesnt duo move?
