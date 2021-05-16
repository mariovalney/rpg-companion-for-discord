import 'bootstrap';
import '@fortawesome/fontawesome-free/js/all.js';
import 'jquery-mask-plugin';

// jQuery
window.jQuery = require('jquery');

// Lodash
window._ = require('lodash');

// SweetAlert2
window.Swal = require('sweetalert2/src/sweetalert2').default;

// Axios
window.axios = require('axios');
window.axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';

// Translator
window.Translator = require('./translator').default;
window.__ = Translator.__;

// Masks
require('./masks');

require('./components/alerts');
require('./components/confirm');
require('./components/guilds');
require('./components/rollings');
