import { createApp } from 'vue'
//import './style.css'
//import router from './router'
import App from '../src/pinia和vueX/pinia.vue'
import ArcoVue from '@arco-design/web-vue';
import pinia from "./pinia和vueX/stores"
import '@vue/ui/dist/vue-ui.css'
import '@arco-design/web-vue/dist/arco.css';

createApp(App).use(pinia).use(ArcoVue).mount('#app')

