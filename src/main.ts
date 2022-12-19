import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// import './assets/bootstrap-5.0.2/dist/css/bootstrap.min.css'
// import './assets/bootstrap-5.0.2/dist/js/bootstrap.bundle.min.js'

createApp(App).use(store).use(router).mount('#app')
