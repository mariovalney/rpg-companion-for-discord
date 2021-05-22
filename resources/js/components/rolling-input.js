jQuery(document).ready(function($) {
    $('body').on('click', '.rolling-result', function(event) {
        event.preventDefault();

        const keyboard = $(this).parents('.rolling-input-wrapper').find('.rolling-keyboard');
        const opened = keyboard.hasClass('show');

        const htmlClass = opened ? 'hide' : 'show';
        const eventName = opened ? 'hidden.bs.collapse' : 'shown.bs.collapse';

        keyboard.collapse(htmlClass);
        Livewire.emit('keyboardShow', opened);
    });
});
