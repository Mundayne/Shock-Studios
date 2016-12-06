$( document ).ready(function() {
	$('.error').hide();
	$('.modal').hide();
	$('.button').click(function() {
		$('.error').hide();
			var email = $('input#email').val();
				if(email == "") {
					$("label#email_error").show();
       				 $("input#email").focus();
        			return false;
				}
		$.ajax({
			type: 'POST',
			url: 'bin/subscribed.php',
			data: email,
			success: function() {
				$('.modal').show();

				document.getElementsByClassName("close")[0].onclick = function() {
					$('.modal').hide();
				}

				window.onclick = function(event) {
					if (event.target == document.getElementById('thank_modal')) {
   						$('.modal').hide();
					}
				}
			}
		});
	});
});