import { createApp } from 'vue'
import Maska from 'maska'
import App from './App.vue'
import store from './store/store'
import router from './router'
import '../public/styles.scss'

const app = createApp(App);
app.use(router);
app.use(store);
app.use(Maska);

app.config.errorHandler = function (err, vm, info) {
  console.log(`Catched Error: ${(err as any).toString()}\nInfo: ${info}`);
  store.dispatch('saveErrors', err);
}
app.config.warnHandler = function (msg, vm, trace) {
  console.log(`Warn: ${msg}\nTrace: ${trace}`);
  store.dispatch('saveWarns', msg);
}

app.mount('#app');
