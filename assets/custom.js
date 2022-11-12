// SIDENAV
$(document).ready(function () {
    localStorage.getItem('mode') === 'dark' ? document.querySelector('body').classList.add('dark') : document.querySelector('body').classList.remove('dark');
    $('.sidenav').sidenav();

    if (localStorage.getItem('mode') === 'dark') {
        $(this).find('i').text('brightness_high');
    } else if (localStorage.getItem('mode') === 'light') {
        $(this).find('i').text('brightness_4');
    }

    $('.dark-toggle').on('click', function () {
        if (localStorage.getItem('mode') === 'dark') {
            $(this).find('i').text('brightness_high');
        } else if (localStorage.getItem('mode') === 'light') {
            $(this).find('i').text('brightness_4');
        }
    });
});