let can,patternGmove;
let snmove,tttmove,firemove,threemove,waterRmove;
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
waterRmove.update();waterRmove.chbdd1();
waterR.position(waterRmove.x,waterRmove.y);	
patternGmove.update();patternGmove.chbdd1();
patternG.position(patternGmove.x,patternGmove.y);	

}