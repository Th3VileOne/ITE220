$(function(){
	var app = {
		init: function() {
			app.init_effect();
			app.init_event();
		},

		init_effect: function() {
			$("#head_tagline").height(200);
			$("#head_tagline>h1").hide().fadeIn(700);
			$("#head_tagline>p:first").hide().delay(700).fadeIn(700);
			$("#head_tagline>p:last").hide();
			$("#head_tagline>a").hide().delay(1400).fadeIn(700);
			$(".error").hide();
	
			
		},

//init event start

		init_event: function() {
			$("#head_tagline>a:first").on("click",function(){
				
				$("#head_tagline>p:last").fadeIn(700);
					$("#head_tagline").height(320);
				});
				//function end
				
				//----------------------------------------------
				$("#head_tagline>a:last").on("click",function()
					{
						$("#head_tagline>p:last").hide();
						$("#head_tagline").height(200);
					
					});
					//function end
					
					
					$("#form-submit").on("click",function(){
					var phone = $("#form-number").val();
						if(!$.isNumeric(phone)){
							$(".error:first").show();
							}
							else{
								$(".error:first").hide();
								}				
						}
					);
					$(".image-flip").flip(
					{axis:'y',
					trigger:'hover'
						}
					)
		}
		
//init event end

				

	};
	app.init();
});
