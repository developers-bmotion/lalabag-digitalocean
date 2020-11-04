(function($) {

    "use strict";

	window.edgtfAdmin = {};
	edgtfAdmin.framework = {};

    $(document).ready(function () {
        //plugins init goes here

        if ($('.edgtf-page-form').length > 0) {
            edgtfScrollToAnchorSelect();
            edgtfInitSearchFloat();
            edgtfChangedInput();
        }
    });

    function edgtfScrollToAnchorSelect() {
        var selectAnchor = $('#edgtf-select-anchor');
        selectAnchor.on('change', function () {

            var selectAnchor = $('option:selected', '#edgtf-select-anchor');
            if (typeof selectAnchor.data('anchor') !== 'undefined') {
                edgtfScrollToPanel(selectAnchor.data('anchor'));
            }
        });
    }

    function edgtfScrollToPanel(panel) {
        var adminBarHeight = $('#wpadminbar').height();
        var panelTopPosition = $(panel).offset().top - adminBarHeight;

        $('html, body').animate({
            scrollTop: panelTopPosition
        }, 1000);

        return false;
    }

    function checkBottomPaddingOfFormWrapDiv() {
        //check bottom padding of form wrap div, since bottom holder is changing its height because of the info messages
        setTimeout(function () {
            $('.edgtf-page-form').css('padding-bottom', $('.form-button-section').height());
        }, 350);
    }

    function edgtfInitSearchFloat() {
        var $wrapForm = $('.edgtf-page-form'),
            $controls = $('.form-button-section');

        function initControlsSize() {
            $('#anchornav').css({
                "width": $wrapForm.width()
            });
            checkBottomPaddingOfFormWrapDiv();
        };

        function initControlsFlow() {
            var wrapBottom = $wrapForm.offset().top + $wrapForm.outerHeight(),
                viewportBottom = $(window).scrollTop() + $(window).height();

            if (viewportBottom <= wrapBottom) {
                $controls.addClass('flow');
            }
            else {
                $controls.removeClass('flow');
            }
            ;
        };

        initControlsSize();
        initControlsFlow();

        $(window).on("scroll", function () {
            initControlsFlow();
        });

        $(window).on("resize", function () {
            initControlsSize();
        });
    }


    function edgtfChangedInput() {
        $('.edgtf-tabs-content').on('change keyup keydown', 'input:not([type="submit"]), textarea, select:not(#edgtf-select-anchor)', function (e) {
            $('.edgtf-input-change').addClass('yes');
            checkBottomPaddingOfFormWrapDiv();
        });

        $('.field.switch label:not(.selected)').on('click', function () {
            $('.edgtf-input-change').addClass('yes');
            checkBottomPaddingOfFormWrapDiv();
        });

        $(window).on('beforeunload', function () {
            if ($('.edgtf-input-change.yes').length) {
                return 'You haven\'t saved your changes.';
            }
        });
	
	    $('#anchornav input').on('click', function () {
		    var yesInputChange = $('.edgtf-input-change.yes');
		    if (yesInputChange.length) {
			    yesInputChange.removeClass('yes');
		    }
		    var saveChanges = $('.edgtf-changes-saved');
		    checkBottomPaddingOfFormWrapDiv();
		    if (saveChanges.length) {
			    saveChanges.addClass('yes');
			    setTimeout(function () {
				    saveChanges.removeClass('yes');
				    checkBottomPaddingOfFormWrapDiv();
			    }, 3000);
		    }
	    });
    }

})(jQuery);
