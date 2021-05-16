import 'bootstrap';
import '@fortawesome/fontawesome-free/js/all.js';
import 'jquery-mask-plugin';

// jQuery
window.jQuery = require('jquery');

// Lodash
window._ = require('lodash');

// Axios
window.axios = require('axios');
window.axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';

// Translator
window.Translator = require('./translator').default;
window.__ = Translator.__;

// Masks
require('./masks');

require('./components/alerts');
require('./components/guilds');
require('./components/rollings');
