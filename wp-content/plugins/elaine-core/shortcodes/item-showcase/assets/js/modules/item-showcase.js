(function($) {
	'use strict';
	
	var itemShowcase = {};
	edgtf.modules.itemShowcase = itemShowcase;
	
	itemShowcase.edgtfInitItemShowcase = edgtfInitItemShowcase;
	
	
	itemShowcase.edgtfOnDocumentReady = edgtfOnDocumentReady;
	
	$(document).ready(edgtfOnDocumentReady);
	
	/*
	 All functions to be called on $(document).ready() should be in this function
	 */
	function edgtfOnDocumentReady() {
		edgtfInitItemShowcase();
	}
	
	/**
	 * Init item showcase shortcode
	 */
	function edgtfInitItemShowcase() {
		var itemShowcase = $('.edgtf-item-showcase-holder');
		
		if (itemShowcase.length) {
			itemShowcase.each(function(){
				var thisItemShowcase = $(this),
					leftItems = thisItemShowcase.find('.edgtf-is-left'),
					rightItems = thisItemShowcase.find('.edgtf-is-right'),
					itemImage = thisItemShowcase.find('.edgtf-is-image');
				
				//logic
				leftItems.wrapAll( "<div class='edgtf-is-item-holder edgtf-is-left-holder' />");
				rightItems.wrapAll( "<div class='edgtf-is-item-holder edgtf-is-right-holder' />");
				thisItemShowcase.animate({opacity:1},200);
				
				setTimeout(function(){
					thisItemShowcase.appear(function(){
						itemImage.addClass('edgtf-appeared');
						thisItemShowcase.on('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend',
							function(e) {
								if(edgtf.windowWidth > 1200) {
									itemAppear('.edgtf-is-left-holder .edgtf-is-item');
									itemAppear('.edgtf-is-right-holder .edgtf-is-item');
								} else {
									itemAppear('.edgtf-is-item');
								}
							});
					},{accX: 0, accY: edgtfGlobalVars.vars.edgtfElementAppearAmount});
				},100);
				
				//appear animation trigger
				function itemAppear(itemCSSClass) {
					thisItemShowcase.find(itemCSSClass).each(function(i){
						var thisListItem = $(this);
						setTimeout(function(){
							thisListItem.addClass('edgtf-appeared');
						}, i*150);
					});
				}
			});
		}
	}
	
})(jQuery);