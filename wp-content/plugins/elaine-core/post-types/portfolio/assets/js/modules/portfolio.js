(function($) {
    'use strict';

    var portfolio = {};
    edgtf.modules.portfolio = portfolio;
	
    portfolio.edgtfOnWindowLoad = edgtfOnWindowLoad;
	
    $(window).load(edgtfOnWindowLoad);
	
	/*
	 All functions to be called on $(window).load() should be in this function
	 */
	function edgtfOnWindowLoad() {
		edgtfPortfolioSingleFollow().init();
	}
	
	var edgtfPortfolioSingleFollow = function () {
		var info = $('.edgtf-follow-portfolio-info .edgtf-portfolio-single-holder .edgtf-ps-info-sticky-holder');
		
		if (info.length) {
			var infoHolder = info.parent(),
				infoHolderOffset = infoHolder.offset().top,
				infoHolderHeight = infoHolder.height(),
				mediaHolder = $('.edgtf-ps-image-holder'),
				mediaHolderHeight = mediaHolder.height(),
				header = $('.header-appear, .edgtf-fixed-wrapper'),
				headerHeight = (header.length) ? header.height() : 0,
				constant = 30; //30 to prevent mispositioned
		}
		
		var infoHolderPosition = function () {
			if (info.length && mediaHolderHeight >= infoHolderHeight) {
				if (edgtf.scroll >= infoHolderOffset - headerHeight - edgtfGlobalVars.vars.edgtfAddForAdminBar - constant) {
					var marginTop = edgtf.scroll - infoHolderOffset + edgtfGlobalVars.vars.edgtfAddForAdminBar + headerHeight + constant;
					// if scroll is initially positioned below mediaHolderHeight
					if (marginTop + infoHolderHeight > mediaHolderHeight) {
						marginTop = mediaHolderHeight - infoHolderHeight + constant;
					}
					info.stop().animate({
						marginTop: marginTop
					});
				}
			}
		};
		
		var recalculateInfoHolderPosition = function () {
			if (info.length && mediaHolderHeight >= infoHolderHeight) {
				//Calculate header height if header appears
				if (edgtf.scroll > 0 && header.length) {
					headerHeight = header.height();
				}
				
				var headerMixin = headerHeight + edgtfGlobalVars.vars.edgtfAddForAdminBar + constant;
				if (edgtf.scroll >= infoHolderOffset - headerMixin) {
					if (edgtf.scroll + infoHolderHeight + headerMixin + 2 * constant < infoHolderOffset + mediaHolderHeight) {
						info.stop().animate({
							marginTop: (edgtf.scroll - infoHolderOffset + headerMixin + 2 * constant)
						});
						//Reset header height
						headerHeight = 0;
					} else {
						info.stop().animate({
							marginTop: mediaHolderHeight - infoHolderHeight
						});
					}
				} else {
					info.stop().animate({
						marginTop: 0
					});
				}
			}
		};
		
		return {
			init: function () {
				infoHolderPosition();
				$(window).scroll(function () {
					recalculateInfoHolderPosition();
				});
			}
		};
	};

})(jQuery);