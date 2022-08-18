import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import DetailTour from "../views/DetailTour.vue";
const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/find-tour",
    name: "findTour",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/FindTour.vue"),
  },
  {
    path: "/detail-tour/:id",
    name: "detailTour",
    component: DetailTour,
    props(route) {
      const props = {
        ...route.params,
      };
      props.id += props.id;
      return props;
    },
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
