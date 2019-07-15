$(document).ready(function () {
    $("nav.menu > ul > li > a").click(function (event) {
        event.preventDefault()

        $.each($("nav.menu > ul > li > a"), function (i, v) {
            $(this).removeClass("active")
        })
        $(this).addClass("active")

        var hash = this.hash

        $("html").animate({
            scrollTop: $(hash).offset().top
        }, 1000, function () {
            window.location.hash = hash
        })
    });

    $("#triggerOpen").click(function () {
        $("#myNav").css("width", "100%");
        $("body").css("overflow", "hidden");
    });

    $("#triggerClose").click(function () {
        $("#myNav").css("width", "0%");
        $("body").css("overflow", "visible");
    });

    $("#myNav .overlay-content a").click(function (event) {
        event.preventDefault()

        $("#myNav").css("width", "0%");
        $("body").css("overflow", "visible");

        $.each($("#myNav .overlay-content a"), function (i, v) {
            $(this).removeClass("active")
        })
        $(this).addClass("active")

        var hash = this.hash

        $("html").animate({
            scrollTop: $(hash).offset().top
        }, 2000, function () {
            window.location.hash = hash
        })
    });

    $("nav.menu > ul > li > a").click(function (event) {
        event.preventDefault()

        $("#myNav").css("width", "0%");
        $("body").css("overflow", "visible");
    });

    // $("@media (max-width: 991px)").onload(function () {
    //     $("body").removeClass("nav.menu");
    // });

});
