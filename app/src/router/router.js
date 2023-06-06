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
  },
  {
    path: "/dishes/:id",
    name: "Dish Detail",
    component: () => import("@/views/Dishes/Detail.vue"),
  },
  {
    path: "/dishes/create",
    name: "Create Dish",
    component: () => import("@/views/Dishes/Create.vue"),
  },
  {
    path: "/dishes/:id/edit",
    name: "Edit Dish",
    component: () => import("@/views/Dishes/Edit.vue"),
  },
  {
    path: "/:catchAll(.*)",
    name: "Not Found",
    component: () => import("@/views/404.vue"),
  },
]

export default routes
