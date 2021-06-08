window.Toast = Swal.mixin({
    toast: true,
    position: 'bottom-end',
    showConfirmButton: false,
    timer: 3000,
    timerProgressBar: true,
    didOpen: (toast) => {
        toast.addEventListener('mouseenter', Swal.stopTimer)
        toast.addEventListener('mouseleave', Swal.resumeTimer)
    }
});

jQuery(document).ready(function($) {
    Livewire.on('LivewireAlert', (icon, title, description = '') => {
        if (['success', 'error', 'warning', 'info', 'question'].indexOf(icon) < 0) {
            icon = 'info';
        };

        if (! title) {
            return;
        }

        Toast.fire({
            icon: icon,
            title: title,
            text: description
        });
    });
});
