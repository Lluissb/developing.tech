$('#submenu-shown').on('mouseenter', () => {
    $('.submenu').toggle()
})

$('.menu-open').on('click', () => {
    $('.nav-menu').show()
})

$('.menu-close').on('click', () => {
    $('.nav-menu').hide()
})