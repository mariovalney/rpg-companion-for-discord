import 'bootstrap';

// Lodash
window._ = require('lodash');

// Axios
window.axios = require('axios');
window.axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';

// Icons
window.feather = require('feather-icons');
window.feather.replace();
