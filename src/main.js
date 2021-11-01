import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './assets/styles.css'
const clickOutside = require('./directives');

createApp(App).directive('click-outside', clickOutside).use(router).mount('#app')

