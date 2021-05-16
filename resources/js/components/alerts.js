jQuery(document).ready(function($) {
    Livewire.on('LivewireAlertShown', () => {
        $('html, body').animate({ scrollTop: 0 },500);
    });
});
