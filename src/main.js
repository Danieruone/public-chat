import { createApp } from 'vue';
import App from './App.vue';

// router
import { router } from './router';

// store
import { store } from './store';

const app = createApp(App);
app.use(store);
app.use(router);
app.mount('#app');
