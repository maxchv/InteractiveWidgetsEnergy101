$('div').styleListener({

    // the styles that you want to monitor for changes
    styles: ['display', 'visibility'],

    // function to be called when a monitored style changes 
    changed: function(style, newValue, oldValue, element) {
        var i = $(element).parent().find("> div > h4 > a > i");
        
        if (style === 'display' && newValue === 'none') {
            if (i.hasClass("fa-hand-o-down")) {
                i.removeClass("fa-hand-o-down");
                i.addClass("fa-hand-o-right");
            }
        } else {
            if (i.hasClass("fa-hand-o-right")) {
                i.removeClass("fa-hand-o-right");
                i.addClass("fa-hand-o-down");
            } 
        }
    }
});