import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import axios from 'axios';
import VueAxios from 'vue-axios';
import mitt from 'mitt';

// createApp(App).use(router).use(VueAxios, axios).mount('#app');
const emitter = mitt();
const app = createApp(App).use(router).use(VueAxios, axios);

app.config.globalProperties.emitter = emitter;
app.mount('#app');