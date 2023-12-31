(function($) {
    $.fn.highlightMenu = function(options) {
        var defaults = $.extend({
            "bgColor": "#32CD32",
            "color": "#C80000",
            "hoverBgColor": "#cccccc",
            "hoverColor": "#000000"
        }, options);
        return this.each(function() {
            var items = $("li a");
            var o = defaults;
            items.css("font-family", "arial, helvetica, sans-serif")
                .css("font-weight", "bold")
                .css("text-decoration", "none")
                .css("background-color", o.bgColor)
                .css("color", o.color);
            items.mouseover(function() {
                $(this).css("background-color", o.hoverBgColor)
                    .css("color", o.hoverColor);
            });
            items.mouseout(function() {
                $(this).css("background-color", o.bgColor)
                    .css("color", o.color);
            });
        });
    }
})(jQuery);