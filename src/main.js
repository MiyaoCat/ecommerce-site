import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { VueFire, VueFireAuth } from 'vuefire'

import App from './App.vue'
import router from './router'

import './css/site-minified.css'


import { firebaseApp } from './router/firebase.js';

const app = createApp(App)

app.use(createPinia())
app.use(router)
app
  .use(VueFire, {
    firebaseApp,
    modules: [VueFireAuth()],
  });

app.mount('#app')
