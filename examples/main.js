import { createApp } from 'vue'
import App from './App.vue'
import installElementPlus from './plugins/element'
import noVue3Cron from '../packages/index.js'
const app = createApp(App)
app.use(noVue3Cron)
installElementPlus(app)
app.mount('#app')