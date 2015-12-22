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
					
					// check form for invalid phone number vvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv
					$("#form-submit").on("click",function(){
					var phone = $("#form-number").val();
						if(!$.isNumeric(phone)){
							$(".error:first").show();
							}
							else{
								$(".error:first").hide();
								}	
						// checck form for invalid phone number	^^^^^^^^^^^^^^^^^^^^^^^^^^^^
						var msg = $("#form-message").val();
			//using indexOf to not equal [-1] in order to find whether String exists in form or not
							if(msg.indexOf("bad words") != -1){
								$(".error:last").show();
							}	else{
								$(".error:last").hide();
								}
					
						
						}
					);
					
					
					
					//flip function
					$(".image-flip").flip(
					{axis:'y',
					trigger:'hover'
						}
					)
					//flip function
					
					//image slider function ---------------------------------------------------------------------------------
					
					 jQuery(document).ready(function ($) {
            
            var jssor_1_SlideshowTransitions = [
              {$Duration:1200,$Opacity:2}
            ];
            
            var jssor_1_options = {
              $AutoPlay: true,
              $SlideshowOptions: {
                $Class: $JssorSlideshowRunner$,
                $Transitions: jssor_1_SlideshowTransitions,
                $TransitionsOrder: 1
              },
              $ArrowNavigatorOptions: {
                $Class: $JssorArrowNavigator$
              },
              $BulletNavigatorOptions: {
                $Class: $JssorBulletNavigator$
              }
            };
            
            var jssor_1_slider = new $JssorSlider$("jssor_1", jssor_1_options);
            
            //responsive code begin
            //you can remove responsive code if you don't want the slider scales while window resizing
            function ScaleSlider() {
                var refSize = jssor_1_slider.$Elmt.parentNode.clientWidth;
                if (refSize) {
                    refSize = Math.min(refSize, 600);
                    jssor_1_slider.$ScaleWidth(refSize);
                }
                else {
                    window.setTimeout(ScaleSlider, 30);
                }
            }
           		 ScaleSlider();
           				 $(window).bind("load", ScaleSlider);
           				 $(window).bind("resize", ScaleSlider);
          				  $(window).bind("orientationchange", ScaleSlider);
          				  //responsive code end
       				 });
   					//image slider function-----------------------------------------------
		}
		
//init event end

				

	};
	app.init();
	
});
