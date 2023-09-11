import { createApp } from 'vue'
import App from './App.vue'

import ArcoVue from '@arco-design/web-vue'
import '@arco-design/web-vue/dist/arco.css'

import './style.css'

import components from './install'

const app = createApp(App)

await components(app)

app.use(ArcoVue).mount('#app')
