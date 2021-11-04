$(document).ready(function(){
$("#submit").click(function(){
let sizes=$("#size").val();
console.log(sizes)
let crusts=$("#crust").val();
console.log(crusts)
let toppings=$("#topping").val();
console.log(toppings)
let Total= parseInt(toppings)+ parseInt(crusts) +parseInt(sizes);
console.log(Total);
$("#totals").append(Total);



event.preventDefault();
	});


});