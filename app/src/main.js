import { createApp } from "vue"
import { createPinia } from "pinia"
import { plugin, defaultConfig } from "@formkit/vue"
import App from "./App.vue"
import router from "./router"
import "./styles/global.css"
import "@formkit/themes/genesis"

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
 * setup formkit
 */
app.use(plugin, defaultConfig)

/**
 * mount app
 */
app.mount("#app")
