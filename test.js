$(document).ready(function() {
    $('.lazyload').each(function() {
        //* set the img src from data-src
        $(this).attr('src', $(this).attr('data-src'));
    });
});