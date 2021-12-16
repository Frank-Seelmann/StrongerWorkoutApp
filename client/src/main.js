import { createApp } from 'vue';
import App from './App.vue';
import router from './router';

import '@fortawesome/fontawesome-free/css/all.css';
import 'bulma';
import 'animate.css';

import { Notification, Config, Autocomplete } from '@oruga-ui/oruga-next'
import '@oruga-ui/oruga-next/dist/oruga-full.css'

createApp(App)
    .use(router)
    .use(Notification)
    .use(Autocomplete)
    .use(Config, {
        iconPack: 'fas'
    })
    .mount('#app')
