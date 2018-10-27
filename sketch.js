let can;
let snmove,tttmove;
function setup(){
	start();
	can=createCanvas(300,300);
	can.position(window.innerWidth/2,window.innerHeight/2);
    background(0,250,0);	
snmove=new move(200,300,-4,3);
//sn.position(snmove.x,snmove.y);
tttmove=new move(100,200,2,3);
	frameRate(20);
	}

function draw(){
snmove.update();snmove.chbdd1();//snmove.display();
sn.position(snmove.x,snmove.y);	
tttmove.update();tttmove.chbdd1();//snmove.display();
ttt.position(tttmove.x,tttmove.y);	

}