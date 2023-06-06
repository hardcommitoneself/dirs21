import { createApp } from "vue"
import { createPinia } from "pinia"
import App from "./App.vue"
import router from "./router"
import "./styles/global.css"

/**
 * create pinia instance
 */
const pinia = createPinia()

/**
 * create app instance
 */
const app = createApp(App)

/**
 * setup router
 */
app.use(router)

/**
 * setup pinia
 */
app.use(pinia)

/**
 * mount app
 */
app.mount("#app")
