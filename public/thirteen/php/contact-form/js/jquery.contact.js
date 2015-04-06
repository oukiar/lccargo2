/*global jQuery, document*/
jQuery(document).ready(function () {

    'use strict';

    jQuery('#contactform').submit(function () {

        var action, values;
		action = jQuery(this).attr('action');
		values = jQuery(this).serialize();

        jQuery("#contact-form-message").slideUp(550, function () {

			jQuery('#contact-form-message').hide();

            jQuery.post(action, values, function (data) {
				jQuery('#contact-form-message').html(data);
				jQuery('#contact-form-message').slideDown('fast');

                if (data.match('success') !== null) {

                    jQuery('#contactname').val('');
                    jQuery('#contactemail').val('');
                    jQuery('#contactsubject').val('');
                    jQuery('#contactmessage').val('');
                }
			});

		});

		return false;

	});

    jQuery('form#contactform input').focus(function () {
        jQuery('form#contactform #contact-form-message').slideUp('550');
    });

    jQuery('form#contactform textarea').focus(function () {
        jQuery('form#contactform #contact-form-message').slideUp('550');
    });

});