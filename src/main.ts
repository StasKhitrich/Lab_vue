import { createApp } from 'vue';
import App from './App.vue';
import router from '@/router/router'
import './assets/main-styles.scss'

createApp(App).use(router).mount('#app');
