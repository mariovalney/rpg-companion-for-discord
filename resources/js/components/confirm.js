jQuery(document).ready(function($) {
    function confirmAction(callback, title = null, message = null) {
        if (! title) {
            title = __('Você tem certeza?');
        }

        if (! message) {
            message = __('Essa ação não pode ser desfeita.');
        }

        Swal.fire({
            title: title,
            text: message,
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: __('Sim'),
            cancelButtonText: __('Cancelar'),
            focusCancel: true
        }).then(result => {
            if (! result || ! result.isConfirmed) {
                return;
            }

            callback(result);
        });
    }

    window.ConfirmAction = confirmAction;

    /**
     * Confirmation for links
     */
    $('body').on('click', '[data-confirm]', function(event) {
        event.preventDefault();
        event.stopImmediatePropagation();

        const title = $(this).attr('data-confirm');
        const message = $(this).attr('data-confirm-message');
        const href = $(this).attr('data-href');

        confirmAction(() => {
            window.location.href = href;
        }, title, message);
    });

    /**
     * Confirmation for forms
     */
    $('body').on('click', '[data-confirm-submit]', function(event) {
        event.preventDefault();

        const title = $(this).attr('data-confirm-submit');
        const form = this.form;

        confirmAction(() => {
            form.submit();
        }, title);

        return false;
    });
});
