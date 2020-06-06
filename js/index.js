(function () {
    'use strict';
    $(() => {
        displayAllPictures();
    })
}) ();

function displayAllPictures() {
    $('#morePictures')
        .on('click', () => {
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
            $.ajax({
                url: '../php/getAllPictures.php',
                method: 'get'
            }).done((data) => {
                let scanIMG = data.scanIMG;
                $('main')
                    .append(
                        $('<div class="allPictures"/>')
                    )
                for (let picture in scanIMG) {
                    $('.allPictures')
                        .append(
                            $('<img src="../files/img/PhotosAppart/etage2/' + scanIMG[picture] + '" alt="Photo appartement"/>')
                        )
                }
            }).fail(() => customFail());
        })
}