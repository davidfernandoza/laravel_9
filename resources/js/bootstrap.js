import _ from 'lodash'
import * as bootstrap from 'bootstrap'
import axios from 'axios'
import swal from 'sweetalert2'
import moment from 'moment'

window._ = _
window.axios = axios
window.bootstrap = bootstrap
window.swal = swal
window.moment = moment

window.axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest'
window.csrf_token = document.head.querySelector('meta[name="csrf-token"]').getAttribute('content')
if (window.csrf_token) window.axios.defaults.headers.common['X-CSRF-TOKEN'] = window.csrf_token
else console.error('CSRF token not found: https://laravel.com/docs/csrf#csrf-x-csrf-token')

/**
 * Echo exposes an expressive API for subscribing to channels and listening
 * for events that are broadcast by Laravel. Echo and event broadcasting
 * allows your team to easily build robust real-time web applications.
 */

// import Echo from 'laravel-echo';

// import Pusher from 'pusher-js';
// window.Pusher = Pusher;

// window.Echo = new Echo({
//     broadcaster: 'pusher',
//     key: import.meta.env.VITE_PUSHER_APP_KEY,
//     wsHost: import.meta.env.VITE_PUSHER_HOST ?? `ws-${import.meta.env.VITE_PUSHER_APP_CLUSTER}.pusher.com`,
//     wsPort: import.meta.env.VITE_PUSHER_PORT ?? 80,
//     wssPort: import.meta.env.VITE_PUSHER_PORT ?? 443,
//     forceTLS: (import.meta.env.VITE_PUSHER_SCHEME ?? 'https') === 'https',
//     enabledTransports: ['ws', 'wss'],
// });
