var Player = function(name, speed){
 //Properties
 this.name = name;
 this.livesLeft = 3;
 this.score = 0;
 this.speed = speed;
 this.gridLocationX = 0;
 this.gridLocationY = 0;

 //Methods
//Die function checks for number of lifes and respawns if player falls off edge
//the rest represent movement plan is to prompt for speed then prompt in a loop for input and check
 Player.prototype.die=function ()
 {
 if(this.livesLeft=0)
	{	
	 alert("You have died and are out of hp.");
	 // not sure if I can break loop here but would from input loop -  break;
		}
else{

this.livesLeft=-1;
alert("You have died. You have " + this.livesLeft + " remaining!");

}
 //else if(this.gridLocationX<0 || this.gridLocationY<0){
//	alert("You have fallen.. respawning.")
//	this.gridLocationX=0;
//	this.gridLocationY=0;
//	this.livesLeft=this.livesLeft-1; 
	//	}
 },

 Player.prototype.moveLeft=function()
  {
   if(this.gridLocationX > 0+this.speed) 
        { this.GridLocationX =- this.speed };

  },
 
 Player.prototype.moveRight=function()
  {
  if(this.gridLocationX <= 9-this.speed) 
        { this.GridLocationX =+ this.speed };

  },
 
 Player.prototype.moveUp=function()
  {
  if(this.gridLocationY >= 0+this.speed) 
	{ this.GridLocationY =- this.speed };
  },
 
 Player.prototype.moveDown=function()
  {
  if(this.gridLocationY <= 9-this.speed) 
        { this.GridLocationY =+ this.speed };

  },

}
