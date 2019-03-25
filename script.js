    $('.nav-button').click(function() {
        $('.nav-button').toggleClass('change');
    });
    
    function addClass(el) {
        menu.removeClass('nav-active border-link-active');
        $(el).addClass('nav-active border-link-active');
    };

    var menu = $('.nav-item a');
    var sectionPositions = $('section').map(function(){
        return $(this).position().top;
    });
    var sections = $('section');
    $(document).on('scroll', function () {
        var scroll = $(document).scrollTop();

        var currentElement;
        $(sectionPositions).each(function (i) {
            if (scroll > this - 150) currentElement = menu[i];
        });
        currentElement && addClass(currentElement);
    });
    menu.on('click', function () {
        addClass(this);
    });
    addClass();