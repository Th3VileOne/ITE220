// Alvin Boworn
$(function(){	//OUTTER FUNCTION

selectedUnit = "";

$("a.city").hide();

$(".button1").on("click", function(){ //celsius buttton
	var reqUnit = $(".button1").html().toLowerCase();
		//alert(reqUnit);
		selectedUnit = '&units=metric';
		$("a.city").fadeIn(1600);
		
	});	
	
$(".button2").on("click", function(){//fahrenheit button
	var reqUnit2 = $(".button2").html().toLowerCase();
		//alert(reqUnit2);
		selectedUnit = '&units=imperial';
		$("a.city").fadeIn(1600);
	});
	
	$("a.city").on("click", function(e){ //remember to choose class, much easier this way
		e.preventDefault();
		// NOT NEEDED --> alert("hello user");
		var city = this.text.toLowerCase();	
			$.ajax({
				type: 'GET',
				url: 'http://api.openweathermap.org/data/2.5/weather?q=' + city + selectedUnit + '&appid=2de143494c0b295cca9337e1e96b00e0',
				beforeSend: function(){ 								//first in the process
				
					} ,
				error: function(){										//will run if there has been an error with the request (wont run if no error is produced)
					
					},	
				
				success: function(data){ 								//second in the proccess; loads this function after the eeverything is finished
					console.log(data.name);
					$("#container").html(data.name + ": " + data.main.temp);
					},
				complete: function(){									//last in the process; will run regardless of success or not
					
					}											
				}); //end of ajax
	
	
		
});
		
		
		}); //OUTTER FUNCTION
