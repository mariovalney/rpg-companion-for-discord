jQuery(document).ready(function($) {
    // Nineth Digit behavior
    var ninethDigitMask = function( val, e, field, options ) {
        return ( val.replace( /\D/g, '' ).length == 12 ) ? '+55 (00) 0000-00009' : '+55 (00) 00000-0009';
    }

    // Multiple Documents Behaviour
    var multipleDocumentsMask = function( val, e, field, options ) {
        return ( val.replace( /\D/g, '' ).length > 11 ) ? '00.000.000/0000-00' : '000.000.000-00999';
    }

    // Masks
    $('.mask-cc-number').mask( '0000 0000 0000 0000' );
    $('.mask-cvv').mask( '0000' );
    $('.mask-expiration').mask( '00/0000' );

    $('.mask-date').mask( '00/00/0000' );
    $('.mask-time').mask( '00:00:00' );
    $('.mask-date_time').mask( '00/00/0000 00:00:00' );
    $('.mask-mixed').mask( 'AAA 000-S0S' );
    $('.mask-cep').mask( '00000-000' );
    $('.mask-cpf').mask( '000.000.000-00', { reverse: true } );
    $('.mask-cnpj').mask( '00.000.000/0000-00', { reverse: true } );
    $('.mask-money').mask( '000.000.000.000.000,00', { reverse: true } );
    $('.mask-money2').mask( 'R$ #.##0,00', { reverse: true } );

    $('.mask-document').mask( multipleDocumentsMask, { onKeyPress: function(v, e, f, o) { f.mask( multipleDocumentsMask.apply( {}, arguments ), 0 ); } } );
    $('.mask-phone').mask( ninethDigitMask, { onKeyPress: function(v, e, f, o) { f.mask( ninethDigitMask.apply( {}, arguments ), 0 ); } } );

    $('.mask-number').on('keyup change input blur', function(event) {
        var value = this.value.replace(/[^0-9\.]/g, ''),
            min = parseInt($(this).attr('min')),
            max = parseInt($(this).attr('max'));

        if (min && ! isNaN(min) && value < min) {
            value = min;
        }

        if (max && ! isNaN(max) && value > max) {
            value = max;
        }

        this.value = value;
    });

    // Masks from vendor
    $('#calc_shipping_postcode').mask( '00000-000' );
    $('#billing_postcode').mask( '00000-000' );
    $('#shipping_postcode').mask( '00000-000' );
});
