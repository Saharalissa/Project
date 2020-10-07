//console.log($("#test").text)
//Declare an array of object variable to hold all data for each item
var vitamins = [{vitamin:"A", available: ["Passion fruit","Guava","Nectarine","Apricot","Papaya","Watermelon","Grapefruit","Mango","Spinach","Carrot"], goodFor: "skin, vision, immune system"},
				{vitamin:"B", available: ["Sunflower Seeds","Yogurt", "Salmon", "Leafy Greens", "Broccoli", "Eggs", "Milk", "Checken Meat","Banana","Avocados"], goodFor: "Control hormones, Avoid Anemia"},
				{vitamin:"C", available: ["Orange","Lemon","Brocoli","Green Pepper","Tomatoes", "Cabbage","Spinach", "peas","Strawberries","Grapefruit"], goodFor: "Improving brain activity, Improving the absorption of Iron"},
				{vitamin:"D", available: ["Green vegetables","Yogurt","Red meat","Liver","Eggs","Milk", "Orange","Sardines", "Tuna fish","Salmon"], goodFor: "Bones, Theeth and muscles"},
				{vitamin:"E", available: ["Sunflower Seeds","Almonds","Hazelnut Oil","Peanuts","Avocado ", "Red Sweet Pepper","Mango", "Kiwifruit","Blackberries","Olives"], goodFor: "Mental health"},
				{vitamin:"Folic Acid", available: ["Eggs","Asparagus","Broccoli","liver","Mango ", "Soybeans","Lentils", "Spinach","Avocados", "peas"], goodFor: "Healthy cell growth "},
				{vitamin:"Iron", available: ["Beans","Lentils", "Spinach", "Peanut", "Eggs", "Beef meat", "Tuna", "Checken Meat","Apricot","Mushrooms"], goodFor: "Energy, Blood strength"}
				]

var dosage = [{gender: "male", A: "200 mg", B:"50", C:"190", D:"44", E:"20", folicAcid:"10", iron:"70"},
			  {gender: "female", A: "190 mg", B:"70", C:"170", D:"20", E:"20", folicAcid:"10", iron:"65"},
			  {gender: "child", A: "80 mg", B:"20", C:"50", D:"7", E:"5", folicAcid:"2", iron:"40"}
			  ]

function add() {
	var ma=document.getElementById("male");
	var fe=document.getElementById("female");
	var ch=document.getElementById("child");
	
	if (ma.checked===false && fe.checked===false && ch.checked===false) {
		alert("PLEASE SELECT GENDER")
 	} else if(ma.checked) {
     document.getElementById("result").innerHTML= "A:"+dosage[0].A+" , "+"B:"+dosage[0].B+" , "+"C:"+dosage[0].C+" , "+"D:"+dosage[0].D+" , "+"E:"+dosage[0].E+" , "+"folic Acid: "+dosage[0].folicAcid+" , "+"Iron:"+dosage[0].iron
 	} else if(fe.checked) {
 	document.getElementById("result").innerHTML= "A:"+dosage[1].A+" , "+"B:"+dosage[1].B+" , "+"C:"+dosage[1].C+" , "+"D:"+dosage[1].D+" , "+"E:"+dosage[1].E+" , "+"folic Acid: "+dosage[1].folicAcid+" , "+"Iron:"+dosage[1].iron
 	} else if(ch.checked) {
 	document.getElementById("result").innerHTML= "A:"+dosage[2].A+" , "+"B:"+dosage[2].B+" , "+"C:"+dosage[2].C+" , "+"D:"+dosage[2].D+" , "+"E:"+dosage[2].E+" , "+"folic Acid: "+dosage[2].folicAcid+" , "+"Iron:"+dosage[2].iron
    }
}

//Vitamin A button
var arrA = vitamins[0].available

$("#vitA").click(function() {
 	$( ".list" ).empty();
	jQuery.each( arrA, function( i, val ) { 
   $( ".list" ).append( "<li>"+val+"</li>" ); 
});
	$(".list").toggle()
})



//Vitamin B button
var arrB = vitamins[1].available

 $("#vitB").click(function() {
 	$( ".list2" ).empty();
	 jQuery.each( arrB, function( i, val ) {
	$( ".list2" ).append( "<li>"+val+"</li>" );
});
	$(".list2").toggle()
})

//Vitamin C button
 var arrC = vitamins[2].available

 $("#vitC").click(function() {
 	$( ".list3" ).empty();
	 jQuery.each( arrC, function( i, val ) {
	$( ".list3" ).append( "<li>"+val+"</li>" );
});
	$(".list3").toggle()
})

//Vitamin D button
 var arrD = vitamins[3].available

 $("#vitD").click(function() {
 	$( ".list4" ).empty();
	 jQuery.each( arrD, function( i, val ) {
	$( ".list4" ).append( "<li>"+val+"</li>" );
});
	$(".list4").toggle()
})

//Vitamin E button
 var arrE = vitamins[4].available

 $("#vitE").click(function() {
 	$( ".list5" ).empty();
	 jQuery.each( arrE, function( i, val ) {
	$( ".list5" ).append( "<li>"+val+"</li>" );
});
	$(".list5").toggle()
})

//Folic acid button
var arrFolic = vitamins[5].available

 $("#folic").click(function() {
 	$( ".list6" ).empty();
	 jQuery.each( arrFolic, function( i, val ) {
	$( ".list6" ).append( "<li>"+val+"</li>" );
});
	$(".list6").toggle()
})

//Iron button
var arrIron = vitamins[6].available

 $("#iron").click(function() {
 	$( ".list7" ).empty();
	 jQuery.each( arrIron, function( i, val ) {
	$( ".list7" ).append( "<li>"+val+"</li>" );
});
	$(".list7").toggle()
})

//Search feature through the table in Search.html
 $("#myInput").on("keyup", function() {
    var value = $(this).val().toLowerCase();
    $("#myTable tr").filter(function() {
      $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
    });
  });



