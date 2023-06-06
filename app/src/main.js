import { createApp } from "vue"
import App from "./App.vue"
import router from "./router"
import "./styles/global.css"

/**
 * create app instance
 */
const app = createApp(App)

/**
 * setup router
 */
app.use(router)

/**
 * mount app
 */
app.mount("#app")
