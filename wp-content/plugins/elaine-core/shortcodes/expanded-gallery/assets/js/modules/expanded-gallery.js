(function($) {
	'use strict';
	
	var expandedGallery = {};
	edgtf.modules.expandedGallery = expandedGallery;

	expandedGallery.edgtfInitExpandedGallery = edgtfInitExpandedGallery;


	expandedGallery.edgtfOnDocumentReady = edgtfOnDocumentReady;
	
	$(document).ready(edgtfOnDocumentReady);
	
	/*
	 All functions to be called on $(document).ready() should be in this function
	 */
	function edgtfOnDocumentReady() {
		edgtfInitExpandedGallery();
	}

	/*
	 **	Init Expanded Gallery shortcode
	 */
	function edgtfInitExpandedGallery(){
		var holder = $('.edgtf-expanded-gallery');

		if(holder.length){
			holder.each(function() {
				var thisHolder = $(this),
					thisHolderImages = thisHolder.find('.edgtf-eg-image');

				thisHolder.find('.edgtf-eg-image:nth-child('+Math.ceil(thisHolderImages.length / 2)+')').addClass('edgtf-eg-middle-item');

				thisHolder.appear(function() {
					thisHolder.find('.edgtf-eg-middle-item').addClass('edgtf-eg-show');

					setTimeout(function(){
						thisHolder.find('.edgtf-eg-middle-item').prev().addClass('edgtf-eg-show');
						thisHolder.find('.edgtf-eg-middle-item').next().addClass('edgtf-eg-show');
					},250);

					if (thisHolder.hasClass('edgtf-eg-five')) {
						setTimeout(function(){
							thisHolder.find('.edgtf-eg-middle-item').prev().prev().addClass('edgtf-eg-show');
							thisHolder.find('.edgtf-eg-middle-item').next().next().addClass('edgtf-eg-show');
						},500);
					}
				}, {accX: 0, accY: edgtfGlobalVars.vars.edgtfElementAppearAmount});
			});
		}
	}
	
})(jQuery);