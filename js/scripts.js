$(document).ready(function(){

	$("#submit").click(function(){

	let sizes=$("#size").val();
	console.log(sizes)
	let crusts=$("#crust").val();
	console.log(crusts)
	let toppings=$("#topping").val();
	console.log(toppings)	;
	let Total=parseInt(sizes)+parseInt(crusts)+parseInt(toppings)
	console.log(Total);
	let sizez=$("#size option:selected").text();
	console.log(sizez)
	let crustz=$("#crust option:selected ").text();
	console.log(crustz)
	let toppingz=$("#topping option:selected ").text();
	console.log(toppingz)	
	let pizzas=[sizes,crusts,toppings,Total]
	let pizzaz=[sizez,crustz,toppingz]
	console.log(pizzas)
	
	$(".Order1").show();
	$(".sz1").append(sizes)
	$(".cr1").append(crusts)
	$(".tp1").append(toppings)
	$("#sz11").append(" "+ sizez +"Pizza" + ":")
	$("#cr11").append(" "+ crustz + "Crust" +":")
	$("#tp11").append(" "+ toppingz +"Toppings" +":")
	$("#totals").append(Total)
	event.preventDefault();	

})
			
	
});



