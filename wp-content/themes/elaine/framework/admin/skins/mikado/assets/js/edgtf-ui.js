(function($){

    "use strict";

	window.edgtfAdmin = {};
	edgtfAdmin.framework = {};


    $(document).ready(function() {
        //plugins init goes here


        if ($('.edgtf-page-form').length > 0) {
            edgtfFixHeaderAndTitle();
            initTopAnchorHolderSize();
            edgtfScrollToAnchorSelect();
            edgtfChangedInput();
            backButtonShowHide();
            backToTop();
        }
    });

    function edgtfFixHeaderAndTitle () {
        var pageHeader 				= $('.edgtf-page-header');
        var pageHeaderHeight		= pageHeader.height();
        var adminBarHeight			= $('#wpadminbar').height();
        var pageHeaderTopPosition 	= pageHeader.offset().top - parseInt(adminBarHeight);
        var pageTitle				= $('.edgtf-page-title-holder');
        var pageTitleTopPosition	= pageHeaderHeight + adminBarHeight - parseInt(pageTitle.css('marginTop'));
        var tabsNavWrapper			= $('.edgtf-tabs-navigation-wrapper');
        var tabsNavWrapperTop		= pageHeaderHeight;
        var tabsContentWrapper	    = $('.edgtf_ajax_form');
        var tabsContentWrapperTop	= pageHeaderHeight + pageTitle.outerHeight();

        $(window).on('scroll load', function() {
            if($(window).scrollTop() >= pageHeaderTopPosition) {
                pageHeader.addClass('edgtf-header-fixed');
                pageTitle.addClass('edgtf-page-title-fixed').css('top', pageTitleTopPosition);
                tabsNavWrapper.css('marginTop', tabsNavWrapperTop);
                tabsContentWrapper.css('marginTop', tabsContentWrapperTop);
            } else {
                pageHeader.removeClass('edgtf-header-fixed');
                pageTitle.removeClass('edgtf-page-title-fixed').css('top', 0);
                tabsNavWrapper.css('marginTop', 0);
                tabsContentWrapper.css('marginTop', 0);
            }
        });
    }

    function initTopAnchorHolderSize() {
        function initTopSize() {
            $('.edgtf-top-section-holder-inner').css({
                'width' : $('.edgtf-top-section-holder').width()
            });
            $('.edgtf-page-title-holder').css({
                'width' : $('.edgtf-page-section-title:visible').outerWidth()- 2*parseInt($('.edgtf-page-title-holder').css('marginLeft'))
            });
        };
        initTopSize();

        $(window).on('resize', function() {
            initTopSize();
        });
    }

    function edgtfScrollToAnchorSelect() {
        var selectAnchor = $('#edgtf-select-anchor');
        selectAnchor.on('change', function() {
            var selectAnchor = $('option:selected', selectAnchor);

            if(typeof selectAnchor.data('anchor') !== 'undefined') {
                edgtfScrollToPanel(selectAnchor.data('anchor'));
            }
        });
    }

    function edgtfScrollToPanel(panel) {
        var pageHeader 				= $('.edgtf-page-header');
        var pageHeaderHeight		= pageHeader.height();
        var adminBarHeight			= $('#wpadminbar').height();
        var pageTitle				= $('.edgtf-page-title-holder');
        var pageTitleHeight			= pageTitle.outerHeight();

        var panelTopPosition = $(panel).offset().top - adminBarHeight - pageHeaderHeight - pageTitleHeight;

        $('html, body').animate({
            scrollTop: panelTopPosition
        }, 1000);

        return false;
    }
    
    function edgtfChangedInput () {
        $('.edgtf-tabs-content form.edgtf_ajax_form:not(.edgtf-import-page-holder):not(.edgtf-backup-options-page-holder)').on('change keyup keydown', 'input:not([type="submit"]), textarea, select', function (e) {
            $('.edgtf-input-change').addClass('yes');
        });
        $('.edgtf-tabs-content form.edgtf_ajax_form:not(.edgtf-import-page-holder):not(.edgtf-backup-options-page-holder) .field.switch label:not(.selected)').on('click', function() {
            $('.edgtf-input-change').addClass('yes');
        });
        $(window).on('beforeunload', function () {
            if ($('.edgtf-input-change.yes').length) {
                return 'You haven\'t saved your changes.';
            }
        });
        $('.edgtf-tabs-content form.edgtf_ajax_form:not(.edgtf-import-page-holder):not(.edgtf-backup-options-page-holder) #anchornav input').on('click', function() {
	        var yesInputChange = $('.edgtf-input-change.yes');
	        if (yesInputChange.length) {
		        yesInputChange.removeClass('yes');
	        }
	        var saveChanges = $('.edgtf-changes-saved');
	        if (saveChanges.length) {
		        saveChanges.addClass('yes');
		        setTimeout(function(){saveChanges.removeClass('yes');}, 3000);
	        }
        });
    }

    function totop_button(a) {
        "use strict";

        var b = $("#back_to_top");
        b.removeClass("off on");
        if (a === "on") { b.addClass("on"); } else { b.addClass("off"); }
    }

    function backButtonShowHide(){

        $(window).scroll(function () {
            var b = $(this).scrollTop();
            var c = $(this).height();
            var d;
            if (b > 0) { d = b + c / 2; } else { d = 1; }
            if (d < 1e3) { totop_button("off"); } else { totop_button("on"); }
        });
    }

    function backToTop(){

        $(document).on('click','#back_to_top',function(){
            $('html, body').animate({
                scrollTop: $('html').offset().top}, 1000);
            return false;
        });
    }
	
})(jQuery);