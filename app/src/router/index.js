import { createWebHistory, createRouter } from "vue-router"
import routes from "./router"

const router = createRouter({
  routes,
  history: createWebHistory(),
})

export default router
