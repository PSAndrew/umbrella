$("#findMyweather").click(function(event){
	event.preventDefault();

	$(".alert").hide();

	if($("#city").val()!=""){

		console.log($("#city").val());

		$.get('php/scraper.php?city='+$("#city").val(), function(data){
			console.log($("#city"));

			if(data==""){
				$("#error").html('<button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button>').fadeIn();
			}else{
				$("#success").html('<button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button><strong>The forecast is: </strong>'+data).fadeIn();
			}
		});

	}else{
		$("#error").html('<button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button>'+'Could not find weather data for that city. Please try again.').fadeIn();
	}
});
