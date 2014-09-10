/* Drop down navigation */

jQuery(document).ready(function() {
    $("#topNavTrigger").click(function() {
        $("#topNav").fadeIn("fast", function() {
            $('#topNav').addClass("topNavDropped");
            $("body").click(function() {
                $(".topNavDropped").fadeOut("fast");
                $('#topNav').removeClass("topNavDropped");
             });
        });
    });
})
