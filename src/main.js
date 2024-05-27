import { createApp } from 'vue'
import './scss/reset.scss';
import App from './App.vue'
import router from './router';
import BaseDialog from './ui/BaseDialog.vue';
import BaseButton from './ui/BaseButton.vue';

const app = createApp(App);

app.use(router);
app.component('BaseDialog', BaseDialog);
app.component('BaseButton', BaseButton)
app.mount('#app');
