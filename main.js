(function($) {

    $(document).ready(function() {

        var paragraphs = $('.grid.grid-12');
        var anav = $(".nav a[href^='http']");
        var inputno = $('input:radio:not(:checked),input:checkbox:not(:checked)');
        var ptext =$(' #text p:first');
        var nopagin = $('.pagination-item');

        ptext.hl();

    });

})(jQuery);
