function slowScroll(where) {
    let location = $(where).offset().top;
    $('html, body').animate({
        scrollTop: location }, 1000);
}

function customFail() {
    $('main')
        .empty()
        .html('Une erreur est survenue lors du chargement des photos')
        .hide()
        .fadeIn()
}