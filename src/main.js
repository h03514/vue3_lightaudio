import { createApp } from 'vue';
import App from './App.vue';
import router from './router';

import "@fortawesome/vue-fontawesome";
// import "@/assets/scss/bootstrap.min.css";
import "@/assets/scss/reset.scss";
import "@/assets/scss/main.scss";
// import "@/assets/js/bootstrap.bundle.min";


createApp(App).use(router).mount('#app');
// import { createApp } from 'vue'
// import App from './App.vue'
// import store from './store'
// import axios from 'axios'
// import VueAxios from 'vue-axios'


// const app = createApp(App).use(store)
// app.use(VueAxios, axios)
// app.provide('axios', app.config.globalProperties.axios) // provide 'axios'
// app.mount('#app')