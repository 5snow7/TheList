let par,sn,rad,ttt;

function start(){
par=createP("the options are");
par.position(100,50);par.class("parbdd");par.id("main");
sn=select("#snow");sn.class("bdd");	
rad=createRadio("the Choices are:");rad.id("radio");
rad.option("Finding Snow",1);
rad.option("Tic Tac Toe",2);
rad.position(300,30);rad.changed(chgingPages);
ttt=select("#ttt");ttt.class("bdd");ttt.position(400,50);
}

function chgingPages(){
	if(rad.value()=='1'){sn.position(350,50);}
	if(rad.value()=='2'){ttt.position(350,70);
	can.text("trying new things",40,40);}
	}