
/*********  Form functions   *************/
function isNum(s) {
	return (!isNaN(s));
}
function isChiffres(s) {
	var regEx = new RegExp(/^([0-9]+)$/);
	return (regEx.test(s));
}
function isAlpha(s, mandatory) {
	var regEx;
	if (mandatory) {
		regEx = new RegExp(/^([a-zA-Z]+)$/);
	} else {
		regEx = new RegExp(/^([a-zA-ZáàâäãåçéèêëíìîïñóòôöõúùûüýÿæœÁÀÂÄÃÅÇÉÈÊËÍÌÎÏÑÓÒÔÖÕÚÙÛÜÝŸÆŒ._ -]*)$/);
	}
	return (regEx.test(s));
}
function isAlphaNum(s) {
	var regEx = new RegExp(/^([a-zA-Z0-9]+)$/);

	return (regEx.test(s));
}

function isDate(s) {
	var regEx = new RegExp(/^([/(\d+)(-|\/)(\d+)(?:-|\/)(?:(\d+)\s+(\d+):(\d+)(?::(\d+))?(?:\.(\d+))?)?/]+)$/);

	return (regEx.test(s));
}







/************************************************************                READY              ***************************************************************************************************/

$(document).ready(function () {

$('#error').hide();

$('#iTitle').show('slide', {direction: 'right'}, 2000);

$('#fname').keyup(function () {
    if (!isAlpha($('#fname').val())) {
		$(this).css('border','3px solid red');
		$('#error').show();
	}
	else if (isAlpha($('#fname').val())) {
		$(this).css ('border','3px solid green');
		$('#error').hide();
		
	}
	else {
		$(this).remove();
	}
});


$('#ftype').keyup(function () {
    if (!isAlpha($('#ftype').val())) {
		$(this).css('border','3px solid red');
		$('#error').show();
	}
	else if (isAlpha($('#fname').val())) {
		$(this).css ('border','3px solid green');
		$('#error').hide();
		
	}
	else {
		$(this).remove();
	}
});


$('#fdate').keyup(function () {
		$(this).css ('border','3px solid green');
		$('#error').hide();
});



$('#fnumberExtra').keyup(function () {
    if (!isChiffres($('#fnumberExtra').val())) {
		$(this).css('border','3px solid red');
		$('#error').show();
	}
	else if (isChiffres($('#fnumberExtra').val())) {
		$(this).css ('border','3px solid green');
		$('#error').hide();
	
		
	}
	else {
		$(this).remove();
	}
});


$('#fnumberDay').keyup(function () {
    if (!isChiffres($('#fnumberDay').val())) {
		$(this).css('border','3px solid red');
		$('#error').show();

	}
	else if (isChiffres($('#fnumberDay').val())) {
		$(this).css ('border','3px solid green');
		$('#error').hide();
	}
});

$('#frole').keyup(function () {
    if (!isAlpha($('#frole').val())) {
		$(this).css('border','3px solid red');
		$('#error').show();
		
	}
	else if (isAlpha($('#fname').val())) {
		$(this).css ('border','3px solid green');
		$('#error').hide();
	}
	else {
		$(this).remove();
	}
});

$("#btnSend").click(function(){
	if (
	!isAlpha($('#frole').val()) || 
	!isChiffres($('#fnumberDay').val()) || 
	!isChiffres($('#fnumberExtra').val()) ||  
	!isAlpha($('#ftype').val()) ||
	!isAlpha($('#fname').val())
    ) {
		alert('Form will not be sent because exits error(s)')
		return false;
	}
	else {
		return true;
	}
})
});