let can;
let snmove,tttmove,firemove;
function setup(){
	start();
	can=createCanvas(300,300);
	can.position(window.innerWidth/2,window.innerHeight/2);
    background(0,250,0);	
snmove=new move(200,300,-4,3);
tttmove=new move(100,200,2,3);
firemove=new move(400,200,-3,-5);
threemove=new move(100,500,4,-3);
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
}