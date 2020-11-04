(function($) {
    'use strict';

    $(document).ready(function() {
        edgtfRestaurantDatePicker();
    });

    $(document).on( "edgtAjaxPageLoad",function(){
        edgtfRestaurantDatePicker();
    });

    function edgtfRestaurantDatePicker() {
        var datepicker = $('.edgtf-ot-date');

        if(datepicker.length) {
            datepicker.each(function() {
                $(this).datepicker({
                    prevText: '<span class="arrow_carrot-left"></span>',
                    nextText: '<span class="arrow_carrot-right"></span>'
                });
            });
        }
    };
})(jQuery)