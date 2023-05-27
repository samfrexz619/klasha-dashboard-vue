import { createApp } from 'vue'
import router from './router'
import { vueIcons, vueComp } from './icon'
import './style.css'
import App from './App.vue'

vueIcons()

const app = createApp(App)
app.component('icon', vueComp)
app.use(router)
app.mount('#app')
// createApp(App).mount('#app')
