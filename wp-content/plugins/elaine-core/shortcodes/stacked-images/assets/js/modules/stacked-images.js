(function($) {
	'use strict';
	
	var stackedImages = {};
	edgtf.modules.stackedImages = stackedImages;

	stackedImages.edgtfInitItemShowcase = edgtfInitStackedImages;


	stackedImages.edgtfOnDocumentReady = edgtfOnDocumentReady;
	
	$(document).ready(edgtfOnDocumentReady);
	
	/*
	 All functions to be called on $(document).ready() should be in this function
	 */
	function edgtfOnDocumentReady() {
		edgtfInitStackedImages();
	}
	
	/**
	 * Init item showcase shortcode
	 */
	function edgtfInitStackedImages() {
		var stackedImages = $('.edgtf-stacked-images-holder');

		if (stackedImages.length) {
			stackedImages.each(function(){
				var thisStackedImages = $(this),
					itemImage = thisStackedImages.find('.edgtf-si-images');

				//logic
				thisStackedImages.animate({opacity:1},200);

				setTimeout(function(){
					thisStackedImages.appear(function(){
						itemImage.addClass('edgtf-appeared');
					},{accX: 0, accY: edgtfGlobalVars.vars.edgtfElementAppearAmount});
				},100);
			});
		}
	}
	
})(jQuery);