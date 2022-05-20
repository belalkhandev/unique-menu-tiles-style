(function ($) {
    "use-strict"

    jQuery(document).ready(function(){
        $(document).on('click', '.menu-bar', function () {
            $('.menu-tiles').toggleClass('open-tiles');
        });
    })
    
}(jQuery))