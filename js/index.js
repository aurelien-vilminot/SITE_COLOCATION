(function () {
    'use strict';
    $(() => {
        displayAllPictures();
    })
}) ();

function displayAllPictures() {
    $('#morePicturesEtage1')
        .on('click', () => {
            addBackButton();
            getPictutres(1);
        })

    $('#morePicturesEtage2')
        .on('click', () => {
            addBackButton();
            $('main')
                .append(
                    $('<iframe width="1280" height="720" src="https://www.youtube.com/embed/Jf1__bkn0ow?autoplay=1&loop=1&playlist=Jf1__bkn0ow" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen/>'),
                )
            getPictutres(2);
        })
}

function addBackButton() {
    $('main')
        .empty()
        .append(
            $('<a class="details"/>')
                .css({
                    'margin-top': '2vw'
                })
                .on('click', ()=> {
                    window.location.href = '/';
                })
                .append(
                    $('<img src="../files/img/arrow_left.png" alt="Flèche droite"/>'),
                    $('<p/>').html('Retour à l\'accueil')
                )
        );
}

function getPictutres(etage) {
    $.ajax({
        url: '../php/getAllPictures.php',
        method: 'get',
        data: {etage: etage}
    }).done((data) => {
        let scanIMG = data.scanIMG;
        $('main')
            .append(
                $('<div class="allPictures"/>')
            )
        for (let picture in scanIMG) {
            $('.allPictures')
                .append(
                    $('<img src="../files/img/PhotosAppart/etage' + etage + '/' + scanIMG[picture] + '" alt="Photo appartement"/>')
                )
        }
    }).fail(() => customFail());
}