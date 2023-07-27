import Vue from "vue";
import VueRouter from "vue-router";

const routes = [
  {
    path: "/",
    component: () => import("@/views/WebView.vue"),
    children: [
      {
        path: "",
        component: () => import("@/components/web/HelloWorld.vue"),
      },
      {
        path: "fundamentos",
        component: () => import("@/components/web/FundamentosComponent.vue"),
      },
      {
        path: "calendar",
        component: () => import("@/components/web/CalendarComponent.vue"),
      },
      {
        path: "tailwindtest",
        component: () => import("@/components/web/TailwindTest.vue"),
      },
    ],
  },
];

Vue.use(VueRouter);

const router = new VueRouter({
  routes,
});

export default router;
