$(document).ready(function(){

	
	
	$("#message-form").on("submit", function(x){


		x.preventDefault();
		$("#message-feedback").html("&nbsp;");

		var theSubBtn = $(this).children().find($("button"));
		theSubBtn.html("Subscribing...").prop("disabled", "disabled");
		
		var theMail = $(this).children().find($("input")).val();
		console.log(theMail);


		$.post("http://localhost/prodigy/includes/subscribe_me.php", {

			"the_email" : theMail
		},
		 function(theData){
			if(theData == "successful"){

				$("#message-feedback").html("message Successful, Thanks!");
				theSubBtn.html("Subscribe").prop("disabled", false);
			}
			else{

				$("#message-feedback").html("message Failed, Try Again");
				theSubBtn.html("Subscribe").prop("disabled", false);
			}
			

		}).fail(function() {
				
				$("#message-feedback").html("Connection Error, Try Again");
				theSubBtn.html("Subscribe").prop("disabled", false);
		});
	})




	

});