$(document).ready(function(){
$("#submit").click(function(){
let sizes=$("#size").val();
console.log(sizes)
let pizzaS=$("#size option:selected").text();
console.log(pizzaS)
let crusts=$("#crust").val();
console.log(crusts)
let pizzaC=$("#crust option:selected").text();
let toppings=$("#topping").val();
console.log(toppings)
let pizzaT=$("#topping option:selected").text();
let Total= parseInt(toppings)+ parseInt(crusts) +parseInt(sizes);
console.log(Total);
$(".sz").append(" "+ pizzaS + " "+" " + "   "+ "   "+ " "+" KSH "+ " " + "   "+ "   "+  sizes );
$(".cr").append(" "+ pizzaC + " "+" " + "   "+ "   "+ " "+' KSH '+ " " + "   "+ "   " + "   "+   crusts );
$(".tp").append(" "+ pizzaT + " "+" " + "   "+ "   "+" " +" KSH " + " " + "   "+ "   "+ "   "+  toppings);
$("#totals").append("KSH" +" "+Total);




event.preventDefault();
	});


});