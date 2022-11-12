// SIDENAV
$(document).ready(function () {
    localStorage.getItem('mode') === 'dark' ? document.querySelector('body').classList.add('dark') : document.querySelector('body').classList.remove('dark');
    $('.sidenav').sidenav();

    $('.dark-toggle').on('click', function () {
        if ($(this).find('i').text() == 'brightness_4') {
            $(this).find('i').text('brightness_high');
        } else {
            $(this).find('i').text('brightness_4');
        }
    });
});