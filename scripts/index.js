$(document).ready(function(){

	$('input[type="tel"]').on('keydown', function(evt){
		$('#numberLengthAlert').css('display', 'none');
		$('#otpLengthAlert').css('display', 'none');
		if(evt.which==13){
			evt.preventDefault();
			if($(this).attr('id')=="numberInput"){
				$('#go').click();
			}
			else{
				$('#submit').click();
			}
		}
		else if ((evt.which<48 && !(evt.which==8 || evt.which==37 || evt.which==39 || evt.which==46)) || (evt.which>57 && evt.which<96) || evt.which>105)
		{
			evt.preventDefault();
		}
	});

	var tel = $('#numberInput').val().substring(6,10);

	function validate(id){
		if((id=='#numberInput' && $(id).val().length==10) || (id=='#otpInput' && $(id).val().length==4)) return true;
		return false;
	}

	function login(){
		$('#go').prop('disabled', true);
		$.ajax({
			type: 'POST',
			url: "",
			data: {
				country_code : $("#country_code").val(),
				number : $('#numberInput').val()
			},
			success: function(data){
				if(data==true){
					$('#inputLabel').css('display', 'none');
					$('#telephoneDiv').css('display', 'none');
					$('#otpAlert').css('display', 'block');
					$('#changeNumber').html('OTP is sent to ******'+tel+'. Not your number? <a href="">Change it!</a>');
					$('#otpDiv').css('display', 'block');
					$('#otpButtons').css('display', 'block');
				}
			}
		});
	};

	$('#submit').click(function(){
		if(validate('#otpInput')){

		}
		else{
			$('#otpLengthAlert').css('display', 'block');
		}
	});

	$('#resend').click(function(){

	});

	$('#go').click(function(){
		if(validate('#numberInput')){
			$('#go').prop('disabled', true);
			$('#inputLabel').css('display', 'none');
			$('#telephoneDiv').css('display', 'none');
			$('#otpAlert').css('display', 'block');
			$('#changeNumber').html('OTP is sent to ******'+tel+'. Not your number? <a href="">Change it!</a>');
			$('#otpDiv').css('display', 'block');
			$('#otpButtons').css('display', 'block');
		}
		else{
			$('#numberLengthAlert').css('display', 'block');
		}
	});

});
