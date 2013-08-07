
$(document).ready(function() {
	setLanguage('en');

	$('#language').on('change', function() {
    	lang = $('#language').val();
        setLanguage(lang);
    });
});

function setLanguage(lang){
	jQuery.i18n.properties({
    	name:'Messages', 
    	path:'bundle/', 
    	mode:'both',
    	language:lang, 
    	callback: function(){
    		$('#label_h2').text($.i18n.prop('msg_init'));
    		$('#label_p1').text($.i18n.prop('msg_hello'));
    		$('#label_p2').text($.i18n.prop('msg_welcome'));
    	}
	});

}

