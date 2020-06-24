// Show Navigation Panel

$('.fa-bars').click(function() {
    $('header').show();
});


// Hide navigation panel

$('.fa-times').click(function() {
    $('header').hide();

});

// hide panel when small screen user click on the link 

$('.nav-link').click(function() {
    if (screen.width <= 768) {
        $('header').hide();
    }

});