$(document).ready(function () {
    $("nav.menu > ul > li > a").click(function (event) {
        event.preventDefault()

        $.each($("nav.menu > ul > li > a"), function(i, v){ 
            $(this).removeClass("active")
        })
        $(this).addClass("active")

        var hash = this.hash

        $("html").animate({
            scrollTop: $(hash).offset().top
        }, 1000, function(){
            window.location.hash = hash
        })
    });


});
