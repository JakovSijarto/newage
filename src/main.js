import { createApp } from "vue"
import './style.css'
import App from './components/App.vue'
import { MotionPlugin } from '@vueuse/motion'
import Router from './router'


createApp(App).use(Router).use(MotionPlugin).mount('#app')
