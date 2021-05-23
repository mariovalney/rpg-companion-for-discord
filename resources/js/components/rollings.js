const { toHTML } = require('discord-markdown');

jQuery(document).ready(function($) {
    window.DiscordMarkdown = {
        options: {
            "embed": true,
            "discordOnly": true
        },
        run: () => {
            $('.discord-markdown').not('.parsed').each(function(index, el) {
                const content = $(el).text();
                $(el).html(toHTML(content), window.DiscordMarkdown.options);
                $(el).addClass('parsed');
            });
        }
    }

    window.DiscordMarkdown.run();

    Livewire.on('RunDiscordMarkdown', () => {
        window.DiscordMarkdown.run();
        $.fn.matchHeight._update();
    });
});
