import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { registerSW } from 'virtual:pwa-register'

import App from './App.vue'
import router from './router'
import './assets/index.css'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(registerSW())

app.mount('#app')
