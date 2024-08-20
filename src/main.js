import { createApp } from "vue"
import './style.css'
import App from './components/App.vue'
import { MotionPlugin } from '@vueuse/motion'
import VueScrollTo from 'vue-scrollto'


createApp(App).use(MotionPlugin).use(VueScrollTo).mount('#app')
