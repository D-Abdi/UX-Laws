import { createApp } from 'vue'
import { MotionPlugin } from '@vueuse/motion'
import VueScrollTo from "vue-scrollto"
import './style.css'
import App from './App.vue'

createApp(App).use(VueScrollTo).use(MotionPlugin).mount('#app')
