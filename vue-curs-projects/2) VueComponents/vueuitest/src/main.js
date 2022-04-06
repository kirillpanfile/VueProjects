import {
    createApp,
    defineAsyncComponent
} from 'vue'
import App from './App.vue'
import TheHeader from './TheHeader.vue'

import './assets/tailwind.css'


const app = createApp(App)
app.component('the-header', TheHeader) //global
app.component('async-comp', defineAsyncComponent(() => {
    return import('./AppAsync')
}))
app.mount('#app')