(function ($) {
    "use strict";

    var searchCoversHeader = {};
    edgtf.modules.searchCoversHeader = searchCoversHeader;

    searchCoversHeader.edgtfOnDocumentReady = edgtfOnDocumentReady;

    $(document).ready(edgtfOnDocumentReady);

    /* 
        All functions to be called on $(document).ready() should be in this function
    */
    function edgtfOnDocumentReady() {
        edgtfSearchCoversHeader();
    }

    /**
     * Init Search Types
     */
    function edgtfSearchCoversHeader() {
        if (edgtf.body.hasClass('edgtf-search-covers-header')) {

            var searchOpener = $('a.edgtf-search-opener');

            if (searchOpener.length > 0) {
                searchOpener.each(function () {
                    var thisOpener = $(this);
                    thisOpener.on('click', function (e) {
                        e.preventDefault();

                        var thisSearchOpener = $(this),
                            searchFormHeight,
                            searchFormHeaderHolder = $('.edgtf-page-header'),
                            searchFormTopHeaderHolder = $('.edgtf-top-bar'),
                            searchFormFixedHeaderHolder = searchFormHeaderHolder.find('.edgtf-fixed-wrapper.fixed'),
                            searchFormMobileHeaderHolder = $('.edgtf-mobile-header'),
                            searchForm = $('.edgtf-search-cover'),
                            searchFormIsInTopHeader = !!thisSearchOpener.parents('.edgtf-top-bar').length,
                            searchFormIsInFixedHeader = !!thisSearchOpener.parents('.edgtf-fixed-wrapper.fixed').length,
                            searchFormIsInStickyHeader = !!thisSearchOpener.parents('.edgtf-sticky-header').length,
                            searchFormIsInMobileHeader = !!thisSearchOpener.parents('.edgtf-mobile-header').length;

                        searchForm.removeClass('edgtf-is-active');

                        //Find search form position in header and height
                        if (searchFormIsInTopHeader) {
                            searchFormHeight = searchFormTopHeaderHolder.outerHeight();
                            searchFormHeaderHolder.children('.edgtf-search-cover').addClass('edgtf-is-active edgtf-opener-in-top-header');
                            
                        } else if (searchFormIsInFixedHeader) {
                            searchFormHeight = searchFormFixedHeaderHolder.outerHeight();
                            searchFormHeaderHolder.children('.edgtf-search-cover').addClass('edgtf-is-active');

                        } else if (searchFormIsInStickyHeader) {
                            searchFormHeight = searchFormHeaderHolder.find('.edgtf-sticky-header').outerHeight();
                            searchFormHeaderHolder.children('.edgtf-search-cover').addClass('edgtf-is-active');

                        } else if (searchFormIsInMobileHeader) {
                            if (searchFormMobileHeaderHolder.hasClass('mobile-header-appear')) {
                                searchFormHeight = searchFormMobileHeaderHolder.children('.edgtf-mobile-header-inner').outerHeight();
                            } else {
                                searchFormHeight = searchFormMobileHeaderHolder.outerHeight();
                            }

                            searchFormMobileHeaderHolder.find('.edgtf-search-cover').addClass('edgtf-is-active');

                        } else {
                            searchFormHeight = searchFormHeaderHolder.outerHeight();
                            searchFormHeaderHolder.children('.edgtf-search-cover').addClass('edgtf-is-active');
                        }

                        if (searchForm.hasClass('edgtf-is-active')) {
                            searchForm.height(searchFormHeight).stop(true).fadeIn(600).find('input[type="text"]').focus();
                        }

                        searchForm.find('.edgtf-search-close').on('click', function (e) {
                            e.preventDefault();
                            searchForm.stop(true).fadeOut(450, function () {
                                if (searchForm.hasClass('edgtf-opener-in-top-header')) {
                                    searchForm.removeClass('edgtf-opener-in-top-header');
                                }
                            });

                            searchForm.removeClass('edgtf-is-active');
                        });

                        searchForm.blur(function () {
                            searchForm.stop(true).fadeOut(450, function () {
                                if (searchForm.hasClass('edgtf-opener-in-top-header')) {
                                    searchForm.removeClass('edgtf-opener-in-top-header');
                                }
                            });

                            searchForm.removeClass('edgtf-is-active');
                        });

                        $(window).scroll(function () {
                            searchForm.stop(true).fadeOut(450, function () {
                                if (searchForm.hasClass('edgtf-opener-in-top-header')) {
                                    searchForm.removeClass('edgtf-opener-in-top-header');
                                }
                            });

                            searchForm.removeClass('edgtf-is-active');
                        });
                    });
                });
            }
        }
    }

})(jQuery);
