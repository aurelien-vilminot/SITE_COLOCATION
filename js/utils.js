function slowScroll(where) {
    let location = $(where).offset().top;
    $('html, body').animate({
        scrollTop: location }, 1000);
}