(function($) {
	'use strict';
	
	var singleImage = {};
	edgtf.modules.singleImage = singleImage;
	
	singleImage.edgtfInitSingleImages = edgtfInitSingleImages;
	
	singleImage.edgtfOnDocumentReady = edgtfOnDocumentReady;
	
	$(document).ready(edgtfOnDocumentReady);
	
	/*
	 All functions to be called on $(document).ready() should be in this function
	 */
	function edgtfOnDocumentReady() {
		edgtfInitSingleImages();
	}
	
	function edgtfInitSingleImages() {
		var singleImage = $('.edgtf-single-image-holder');
		
		if (singleImage.length) {
			singleImage.each(function() {
				var thisSingleImage = $(this);

				thisSingleImage.appear(function(){
					thisSingleImage.addClass('edgtf-single-image-appeared');
				},{accX: 0, accY: edgtfGlobalVars.vars.edgtfElementAppearAmount});
			});
		}
	}
	
})(jQuery);