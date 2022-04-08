import { createApp } from 'vue'
import App from './App.vue'
import '@/assets/style/style.scss'
import axios from 'axios'
import VueAxios from 'vue-axios'

const app = createApp(App).use(VueAxios, axios)
app.mount('#app');