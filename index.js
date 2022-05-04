$('#proyecto1').on('click', () => {
    $('#texto1').toggle();
});

$('#proyecto2').on('click', () => {
    $('#texto2').toggle();
});

$('#proyecto3').on('click', () => {
    $('#texto3').toggle();
});

$('.material-symbols-outlined').on('click', () =>{
    $('.menu-nav').toggle();
});

$('.nav__link').on('click', () => {
        $('.menu-nav').hide();
});