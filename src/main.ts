import { createApp } from 'vue';
import App from './App.vue';
import router from '@/router/router'
import './assets/main-styles.scss'

const app = createApp(App).use(router);

const errors: any[] = [];
app.config.errorHandler = function (err, vm, info) {
  errors.push(err);
  console.log('APP ERROR:\n', err, '\n', vm, '\n', info, '\n');
};

const warnings: any[] = [];
app.config.warnHandler = function (msg, vm, trace) {
  warnings.push(msg);
  console.log('APP ERROR:\n', msg, '\n', vm, '\n', trace, '\n');
};

app.mount('#app');
