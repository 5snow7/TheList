class move{
	
constructor(xst,yst,xspst,yspst){
this.x=xst;this.y=yst;this.xsp=xspst;
this.ysp=yspst;
}	
	
update(){
this.x=this.x+this.xsp;
this.y=this.y+this.ysp;
}	
	
chbdd(){
if(this.x<0||this.x>width){this.xsp=-1*this.xsp;}
if(this.y<0||this.y>height){this.ysp=-1*this.ysp;}
}	

chbdd1(){
if(this.x<0||this.x>windowWidth){this.xsp=-1*this.xsp;}
if(this.y<0||this.y>windowHeight){this.ysp=-1*this.ysp;}
}

display(){
ellipse(this.x,this.y,30,30);	
}
}