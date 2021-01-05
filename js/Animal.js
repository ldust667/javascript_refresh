var Animal = function(type, weight, color, fur, length){
 //Properties
 this.type = type;
 this.weight = weight;
 this.color = color;
 this.fur = fur;
 this.length = length;
 this.soundItMakes = "bahhhh";

 //Methods
 Animal.prototype.makeSound=function ()
 {
 alert(this.soundItMakes);
 },

 Animal.prototype.breathe=function()
 {
 alert(this.type + " is breathing.");
 }
}
