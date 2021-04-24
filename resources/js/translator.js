if (typeof _ !== "function") {
    throw "Please, load lodash first";
}

/**
 * It's just a fake translater to allow
 * implement something someday...
 */
function translate(string) {
    return string;
}

export default {
    __: function(string) {
        return translate(string);
    },
    getLocale: function() {
        return 'pt-BR';
    }
}
