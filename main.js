//console.log($("#test").text)
var vitamins = [{vitamin:"A", available: ["Passion fruit","Guava","Nectarine","Apricot","Papaya","Watermelon","Grapefruit","Mango","Spinach","Carrot"]},
				{vitamin:"B", available: ["Sunflower Seeds","Yogurt", "Salmon", "Leafy Greens", "Brocoli", "Eggs", "Milk", "Beef and Checken Meats","Banana","avocados"]},
				{vitamin:"C", available: ["Orange","Lemon","Brocoli","Green Pepper","Tomatoes", "Cabbage","Spinach", "peas","Strawberries","Grapefruit"]}]



var arrA = vitamins[0].available

 $("#vitA").click(function() {
 	$( ".list" ).empty();
	jQuery.each( arrA, function( i, val ) { 
   $( ".list" ).append( "<li>"+val+"</li>" ); 
});
})

var arrB = vitamins[1].available

 $("#vitB").click(function() {
 	$( ".list2" ).empty();
	 jQuery.each( arrB, function( i, val ) {
	$( ".list2" ).append( "<li>"+val+"</li>" );
});
})
