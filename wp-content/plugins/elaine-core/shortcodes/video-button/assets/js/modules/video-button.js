(function($) {
	'use strict';
	
	var videoButton = {};
	edgtf.modules.videoButton = videoButton;
	
	videoButton.edgtfInitVideoButtons = edgtfInitVideoButtons;
	
	videoButton.edgtfOnDocumentReady = edgtfOnDocumentReady;
	
	$(document).ready(edgtfOnDocumentReady);
	
	/*
	 All functions to be called on $(document).ready() should be in this function
	 */
	function edgtfOnDocumentReady() {
		edgtfInitVideoButtons();
	}
	
	function edgtfInitVideoButtons() {
		var videoButton = $('.edgtf-video-button-holder');
		
		if (videoButton.length) {
			videoButton.each(function() {
				var thisVideoButton = $(this);

				thisVideoButton.appear(function(){
					thisVideoButton.addClass('edgtf-video-button-appeared');
				},{accX: 0, accY: edgtfGlobalVars.vars.edgtfElementAppearAmount});
			});
		}
	}
	
})(jQuery);