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
$(".sz").append(pizzaS);
$(".cr").append(pizzaC);
$(".tp").append(pizzaT);
$(".totals").append(Total);




event.preventDefault();
	});


});