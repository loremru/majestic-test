import { createApp } from 'vue'
import App from './App.vue'
import MUI from 'majestic-ui'

import router from './router/index'

import 'virtual:windi.css'
// import "./main.scss"

// import "tailwindcss/dist/tailwind.min.css"

createApp(App).use(MUI).use(router).mount('#app')
