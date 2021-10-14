import { createApp } from 'vue';
import App from './App.vue';
import router from './router';

import '@fortawesome/fontawesome-free';
import 'bulma';

createApp(App).use(router).mount('#app')
