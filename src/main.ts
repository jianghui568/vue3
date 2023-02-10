import { createApp } from 'vue'
import App from './App.vue'
import ElementPlugs from 'element-plus'
import 'element-plus/theme-chalk/index.css'
import './style.css'
import appRouter from './router/index'
import i18n from './locale'
import piniaStore from './store'


const app = createApp(App)
app.use(piniaStore)
app.use(ElementPlugs)
app.use(appRouter)
app.use(i18n);

appRouter.isReady().then(() => {
    app.mount('#app')
});

