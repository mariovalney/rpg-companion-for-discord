jQuery(document).ready(function($) {
    $('body').on('click', '#add-bot-to-guild', function(event) {
        event.preventDefault();

        const href = $(this).attr('data-href');
        if (! href) {
            return;
        }

        window.open(href, 'rpg_companion_addbot');

        $(this).after('<p class="mt-2"><a href="#" onclick="window.location.reload()">' + __('Recarregue a página') + '</a> após adicionar o bot.</p>');
    });
});
