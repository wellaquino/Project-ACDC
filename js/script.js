const $hulk = $('#hulk');

const toggleHulk = () => {
    $hulk.toggleClass('is-active', $(window).scrollTop() > 200);
};

$hulk.on('click', function () {
    $('html, body').animate({ scrollTop: $(document).height() }, 'slow');
});

$(window).on('scroll', toggleHulk);
