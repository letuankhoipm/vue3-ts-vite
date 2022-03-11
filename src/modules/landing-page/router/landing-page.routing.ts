import { RouteRecordRaw } from "vue-router";

const HomePage = () => import("../views/home/home.vue");

const landingPageRoutes: Array<RouteRecordRaw> = [
  {
    path: "",
    redirect: "/landing-page/home",
  },
  {
    path: "home",
    name: "HOME_PAGE",
    component: HomePage,
  },
];

export default landingPageRoutes;
