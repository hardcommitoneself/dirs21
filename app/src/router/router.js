import AppLayout from "@/layouts/AppLayout.vue"

const routes = [
  {
    path: "/",
    name: "Home",
    component: () => import("@/views/Home.vue"),
  },
  {
    path: "/dishes",
    name: "Dishes List",
    component: () => import("@/views/Dishes/List.vue"),
    meta: {
      layout: AppLayout,
    },
  },
  {
    path: "/dishes/create",
    name: "Create Dish",
    component: () => import("@/views/Dishes/Create.vue"),
    meta: {
      layout: AppLayout,
    },
  },
  {
    path: "/dishes/:id/edit",
    name: "Edit Dish",
    component: () => import("@/views/Dishes/Edit.vue"),
    meta: {
      layout: AppLayout,
    },
  },
  {
    path: "/:catchAll(.*)",
    name: "Not Found",
    component: () => import("@/views/404.vue"),
    meta: {
      layout: AppLayout,
    },
  },
]

export default routes
