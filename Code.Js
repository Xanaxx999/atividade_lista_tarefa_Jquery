$(document).ready(function () {
    $('form').on('submit', function (event) {
        event.preventDefault();

        const nomeTarefa = $('input').val().trim();

        if (nomeTarefa !== '') {
            const novaTarefa = $('<li></li>').text(nomeTarefa);

            novaTarefa.on('click', function () {
                $(this).toggleClass('riscado');
            });

            $('ul').append(novaTarefa);
            $('input').val('');
        }
    });
});
